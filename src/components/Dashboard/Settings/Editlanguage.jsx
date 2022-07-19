import React , {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory , useParams} from 'react-router-dom';
import Manage from './Manage';



const Editlanguage = () => {

    const history  = useHistory()
    const [name, setName] = useState('');
    const [short_name, setShort_name] = useState('');
    // const [status, setStatus] = useState(["Active", "Inactive"]);
  
    const {id} = useParams("id");

    const Editlanguage = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/language/${id}`,{
            name: name,
            short_name: short_name
                 
        });
                history.push("/language");
            }
        
            useEffect(() => {
            getLanguageById(id);
        }, []);
        
        const getLanguageById = async (id) => {
            const response = await axios.get(`http://localhost:3003/language/${id}`);
            setName(response.data.name);
            setShort_name(response.data.short_name);
         

        }

  
  
  return <div class='text-left'>

  
  

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
       

    
          <div class="row mb-4">
          <Manage />

            <div class="col-md-9">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="card-title mb-3">Add Language Form</div>
                            <form onSubmit={Editlanguage}> 
                            <div class="row p-4">
     
                                    <div className="col-md-1"></div>
                                      <div className="col-md-3">
                                      <label for="charge_name"><b>Name</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="name" value = {name} onChange ={(e)  => setName(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-2"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-3">
                                      <label for="charge_name"><b>Short Name</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="short_name" value = {short_name} onChange ={(e)  => setShort_name(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-2"></div> 

                                        <div className="col-md-1"></div>
                                        <div className="col-md-3">
                                        <label for="charge_value"><b>Status</b></label>
                                        </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <select class="form-control form-control-rounded">
                                              <option value="Active">Active</option>
                                              <option value="Inactive">Inactive</option>
                                            </select>
                                        </div>
                                       <div className="col-md-2"></div>

                                                      
                              <div class="col-md-12">
                                <button class="btn btn-grey">Reset</button>
                                <button class="btn btn-primary float-right">Submit</button>
                            </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
          
          </div>
       </div>
       </div>
       
    
</div>
  ;
}

export default Editlanguage;
