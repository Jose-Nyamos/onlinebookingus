import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';



const Apicredentials = () => {

    const history  = useHistory()

  
  
  return <div class='text-left'>

  
  

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
       

    
          <div class="row mb-4">
          <div class="col-md-3 mb-4">
                        <div class="card text-left">
                            <div class="card-body">
                                <h4 class="card-title mb-2">MANAGE SETTINGS</h4>
                                <div class="list-group">
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/general")}>General</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/preferences")}>Preferences</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/sms_settings")}>Sms Settings</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/banners")}>Banners</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/starting")}>Starting Cities</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/propertytype")}>Property Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/spacetype")}>Space Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/bedtype")}>Bed Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/currency")}>Currency</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/country")}>Country</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/amenitytype")}>Amenity Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/emailsettings")}>Email Settings</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/fees")}>Fees</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/language")}>Language</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/meta")}>Metas</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/apicredentials")}>Api Credentials</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/paymentmethods")}>Payment Methods</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/sociallinks")}>Social Links</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/privacy")}>Privacy Policy</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/roles")}>Roles and Permissions</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/database")}>Database Backups</button>

                                </div>
                            </div>
                        </div>
                    </div>

            <div class="col-md-9">
                        <div class="card mb-4">
                            <div class="card-body">

                                <div class="card-title mb-3">Api Credentials Form</div>
                               
                             <form>
                              <div class="row p-4">

                                      <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Facebook Client ID </b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="title" type=" number"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Facebook Client Secret</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="title" type=" number"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Google Client ID </b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="title" type=" number"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Google Client Secret </b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="title" type=" number"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Google Map Browser Key </b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="title" type=" number"   />
                                        </div>
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

export default Apicredentials;
