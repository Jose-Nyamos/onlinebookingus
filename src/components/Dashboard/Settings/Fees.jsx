import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';


const Fees = () => {

    const history  = useHistory()

  
  
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
                                <div class="card-title mb-3">Fees Settings Form</div>
                            <form>
                            <div class="row p-4">
     
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Guest Service Charge (%)</b></label>
                                       </div>
                                        <div class="col-md-4 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="name" type="text"   />
                                        </div>
                                        <div className="col-md-4">
                                        service charge of guest for booking
                                            </div> 

                                                      
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

export default Fees;
