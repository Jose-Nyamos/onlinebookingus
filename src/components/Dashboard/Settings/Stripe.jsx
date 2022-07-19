import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';


const Stripe = () => {

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
                             <div class="ul-widget__head-toolbar">
                                <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line ul-widget-nav-tabs-line" role="tablist">
                                    <li class="nav-item"><Link class="nav-link active" data-toggle="tab" to="/paymentmethods" role="tab">Paypal</Link></li>
                                    <li class="nav-item"><Link class="nav-link" data-toggle="tab" to="/stripe" role="tab">Stripe</Link></li>
                                </ul>
                            </div>                              
                             <form>
                              <div class="row p-4">

                                      <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Stripe Secret Key</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="title" type=" number"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Stripe Publishable Key</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="title" type=" number"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Stripe Status</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                        <select class="form-control form-control-rounded">
                                              <option value="Active">Active</option>
                                              <option value="Inactive">Inactive</option>
                                            </select>                                         </div>
                                        <div className="col-md-1"></div>
                                                      
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

export default Stripe;
