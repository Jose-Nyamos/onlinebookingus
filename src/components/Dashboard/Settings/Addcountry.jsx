import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';



const Addcountry = () => {

    const [short_name, setShort_name] = useState('');
    const [name, setName] = useState('');
    const [iso3, setIso3] = useState('');
    const [number_code, setNumber_code] = useState('');
    const [phone_code, setPhone_code] = useState('');
    const history  = useHistory() 


 

  
   const saveCountry = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3003/country',{
            short_name: short_name,
            name: name,
            iso3: iso3,
            number_code: number_code,
            phone_code: phone_code
        }
          
      );
      history.push("/country")

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
                                <div class="card-title mb-3">Add Country Form</div>

                            <form onSubmit={saveCountry} > 
                            <div class="row p-4">
     
                            <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Short Name</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="short_name" value={short_name} onChange={(e) => setShort_name(e.target.value)} type="text"/>
                                        </div>
                                        <div className="col-md-1"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Long Name</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="name" value = {name} onChange = {(e) => setName(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Iso3</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="iso3" value ={iso3} onChange = {(e) => setIso3(e.target.value)}type="text"   />
                                        </div>
                                        <div className="col-md-1"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Num code</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="number_code" value = { number_code} onChange = {(e) => setNumber_code(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Phone code</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="phone_code" value = {phone_code}  onChange = {(e) => setPhone_code(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>                              
                                                      
                              <div class="col-md-12">
                                <button class="btn btn-grey">Reset</button>
                                <button  onClick ={saveCountry} class="btn btn-primary float-right">Submit</button>
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

export default Addcountry;
