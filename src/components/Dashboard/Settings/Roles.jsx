import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';


const Roles = () => {

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
													<h4 class='box-title '>Role Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addrole'>
														Add Role
													</Link>
												</div>
												</div>
								     	</div>
										 <br />
                                <div class="table-responsive">
									
								<table class="display table table-striped table-bordered" id="dtBasicExample"  width="100%">
                                        <thead>
                                            <tr>
                                                
                                                <th scope="col">Name</th>
                                                <th scope="col">Display Name</th>

                                                <th scope="col">Description</th>

                                             
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr >
                                                <td></td>
                                                <td></td>
                                                <td></td>
												
                                                <td>
                                                  <Link to="#">
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button  class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
                                                </td>
                                            </tr>
                                        
                    
                                        </tbody>
                                    </table>
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

export default Roles;
