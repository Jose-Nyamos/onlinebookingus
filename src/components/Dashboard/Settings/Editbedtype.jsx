import React , {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import Manage from './Manage';


const Editbedtype = () => {

    const [name, setName] = useState('');
  
    const history  = useHistory() 
    const {id} = useParams("id");


 

  
   const EditBedtype = async (e) => {
        // e.preventDefault();
        await axios.put(`http://localhost:3003/bedtype/${id}`,{
            name: name,
      
                    }
                    
                );
                history.push("/bedtype")

            }

            useEffect(() => {
                getBedtypeById(id);
            }, []);

            const getBedtypeById = async (id) => {
                const response = await axios.get(`http://localhost:3003/bedtype/${id}`);
                setName(response.data.name);
            


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
                                <div class="card-title mb-3">Add Bed Type Form</div>
                            <form onSubmit={EditBedtype}>
                            <div class="row p-4">
     
                                    <div className="col-md-1"></div>
                                      <div className="col-md-3">
                                      <label for="charge_name"><b>Name</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="name" value={name} onChange= {(e) => setName(e.target.value)} type="text"   />
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

export default Editbedtype;
