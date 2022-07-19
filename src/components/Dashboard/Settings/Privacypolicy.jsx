import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';


const Privacypolicy = () => {

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
                      
     
					
                        <div class="card text-left">
                            <div class="card-body">
							<div class="row">
											<div className="col-4 ml-3">
													<h4 class='box-title '>Cancellation Policy Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addpolicy'>
														Add Policy
													</Link>
												</div>
										   </div>
								     	</div>
                                   <br />
                            <div class="box-body">
                                    <ol>
                                           <li>
                                            <h4>Flexible</h4>
                                            <p>Full refund 1 day prior to arrival  <span> </span><Link to="/addpolicy" class="btn btn-xs btn-primary"><i class="nav-icon i-Pen-2"></i></Link>&nbsp;
                                            <Link to="http://localhost:8000/admin/settings/delete_privacy_policy/1" class="btn btn-xs btn-danger delete-warning"><i class="nav-icon i-Close-Window"></i></Link></p>
                                            <hr/>
                                        </li>
                                                                                <li>
                                            <h4>Moderate</h4>
                                            <p>Full refund 5 days prior to arrival  <span> </span><Link to="/addpolicy" class="btn btn-xs btn-primary"><i class="nav-icon i-Pen-2"></i></Link>&nbsp;
                                            <Link to="http://localhost:8000/admin/settings/delete_privacy_policy/2" class="btn btn-xs btn-danger delete-warning"><i class="nav-icon i-Close-Window"></i></Link></p>
                                            <hr/>
                                        </li>
                                                                                <li>
                                            <h4>Flexible or Non-refundable</h4>
                                            <p>In addition to  Flexible,offer a non-refundable option-guests pay 10% less, but yoy keep your payout no matter when they cancel  <span> </span><Link to="http://localhost:8000/admin/settings/edit_privacy_policy/3" class="btn btn-xs btn-primary"><i class="nav-icon i-Pen-2"></i></Link>&nbsp;
                                            <Link to="/addpolicy" class="btn btn-xs btn-danger delete-warning"><i class="nav-icon i-Close-Window"></i></Link></p>
                                            <hr />
                                        </li>
                                                                                <li>
                                            <h4>Moderate or Non-refundable</h4>
                                            <p>In additional to Moderate, offer a non-refundable option-guests pay 10% less, but keep your payout no matter when they cancel  <span> </span><Link to="http://localhost:8000/admin/settings/edit_privacy_policy/4" class="btn btn-xs btn-primary"><i class="nav-icon i-Pen-2"></i></Link>&nbsp;
                                            <Link to="/addpolicy" class="btn btn-xs btn-danger delete-warning"><i class="nav-icon i-Close-Window"></i></Link></p>
                                            <hr/>
                                        </li>
                                                                                <li>
                                            <h4>Strict</h4>
                                            <p>Full refund for cancellation made within 48 hours of  booking , if the check-in date is at least 14 days away . 50% refund for cancellation made at least  days before check-in. No refund for cancellation made with in 7 days of check-in  <span> </span><Link to="http://localhost:8000/admin/settings/edit_privacy_policy/5" class="btn btn-xs btn-primary"><i class="nav-icon i-Pen-2"></i></Link>&nbsp;
                                            <Link to="/addpolicy" class="btn btn-xs btn-danger delete-warning"><i class="nav-icon i-Close-Window"></i></Link></p>
                                            <hr/>
                                        </li>
                                                                                <li>
                                            <h4>Strict or Non-refundable</h4>
                                            <p>In addition to Strict, offer a non refundable option guest pay 10% less, but you keep your payout no matter when they cancel  <span> </span><Link to="http://localhost:8000/admin/settings/edit_privacy_policy/6" class="btn btn-xs btn-primary"><i class="nav-icon i-Pen-2"></i></Link>&nbsp;
                                            <Link to="/addpolicy" class="btn btn-xs btn-danger delete-warning"><i class="nav-icon i-Close-Window"></i></Link></p>
                                            <hr/>
                                        </li>
                                                         </ol>
                                    
                                </div>
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

export default Privacypolicy;
