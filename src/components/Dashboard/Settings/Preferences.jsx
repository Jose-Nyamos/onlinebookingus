import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';
// import TimezoneSelect from 'react-timezone-select'



const Preferences = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({})


    const history  = useHistory()

  
  
  return <div class='text-left'>

  
  

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>       
        <div class='main-content'>
       
          <div class="row mb-4">
           <Manage />

            <div class="col-md-9">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="card-title mb-3">Prefences Settings Form</div>
                            <form>
                            <div class="row p-4">
     

                                

              

                                        <div className="col-md-1"></div>
                                      <div className="col-md-3">
                                      <label for="email"><b>Row Per Page </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                        <select class="form-control form-control-rounded">
                                              <option value="Common Amenities">25</option>
                                            </select>                                   
                                                </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                        <div className="col-md-3">
                                        <label for="charge_value"><b>Date Separator:</b></label>
                                        </div>
                                        <div class="col-md-7 form-group mb-3">
                                            <select class="form-control form-control-rounded">
                                              <option value="0">/</option>
                                              <option value="1">-</option>
                                              <option value="2">.</option>


                                            </select>
                                        </div>
                                       <div className="col-md-1"></div>  

                                       <div className="col-md-1"></div>
                                        <div className="col-md-3">
                                        <label for="charge_value"><b>Date Format:</b></label>
                                        </div>
                                        <div class="col-md-7 form-group mb-3">
                                          <select name="date_format" class="form-control form-control-rounded">
                                              <option value="0">yyyymmdd 2019 12 31</option>
                                              <option value="1" selected="">ddmmyyyy 31 12 2019</option>
                                              <option value="2">mmddyyyy 12 31 2019</option>
                                              <option value="3">ddMyyyy &nbsp;&nbsp;&nbsp;31 Dec 2019</option>
                                              <option value="4">yyyyMdd &nbsp;&nbsp;&nbsp;2019 Dec 31</option>
                                          </select>
                                        </div>
                                       <div className="col-md-1"></div>

                                       <div className="col-md-1"></div>
                                        <div className="col-md-3">
                                        <label for="charge_value"><b>Timezone</b></label>
                                        </div>
                                        <div class="col-md-7 form-group mb-3">
                                        {/* <TimezoneSelect
                                          value={selectedTimezone}
                                          onChange={setSelectedTimezone}
                                          class="form-control form-control-rounded"
                                        /> */}

     
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
        {/* <!--/.col (right) --> */}
      </div>
          
          </div>
       </div>
       </div>
       
    
</div>
  ;
}

export default Preferences;
