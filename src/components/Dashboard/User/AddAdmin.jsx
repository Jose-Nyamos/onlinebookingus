import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

const AddAdmin =() => {

  return (
    <div>

			<div class='app-admin-wrap layout-sidebar-large'>
				<Sidebar />
				<Topbar />
				<div class='main-content-wrap sidenav-open d-flex flex-column'>
        <section class='content-header'>
							<div class="row">
								<div class="col-3">
									<h5>
										Add Admin User Form
									</h5>

								</div>
								<div class="col-2">	<small>Add Admin</small></div>
                 <div className="col-md-4"></div>
								<div class="col-2">
									<div class="float-lg-right">
									<ol class='breadcrumb'>
										<li>
											<Link to='/dashboard'>
												<i class='fa fa-dashboard'></i> Home
											</Link>
										</li>
							        </ol>

									</div>
									
								

								</div>

							</div>
							
						
						</section>
			
					{/* <!-- ============ Body content start ============= --> */}
					<div class='main-content'>

          <section class="content">
                            <div class="card m-auto">
                                <div class="card-body">
                                    <div class="card-title mb-2">Admin Add Form</div>
                                    <div className="col-3"></div>
                                    <div className="col-md-12">
                                    <form id="add_admin" method="post" action="http://localhost:8000/admin/add_admin" onsubmit="return contentValidate();" class="form-horizontal " novalidate="novalidate">
                                          <div class="box-body">
                                                  <div class="form-group username">
                                                    <div className="col-sm-2">
                                                    <small></small>

                                                    </div>
                                                      <label for="inputEmail3" class="col-sm-3 control-label">Username <span style={{color: 'red'}}>*</span></label>
                                                      <div class="col-sm-6">
                                                      <input type="text" name="username" class="form-control " id="username" value="" placeholder="Username"/>
                                                      <span class="text-danger"></span>
                                                    </div>
                                                
                                                     </div>     
                                                  <div class="form-group email">
                                                  <label for="inputEmail3" class="col-sm-3 control-label">Email <span style={{color: 'red'}}>*</span></label>
                                                  <div class="col-sm-6">
                                                  <input type="text" name="email" class="form-control " id="email" value="" placeholder="Email"/>
                                                  <span class="text-danger"></span>
                                                </div>
                                                <div class="col-sm-3">
                                                  <small></small>
                                                </div>
                                              </div>                     
                                            <div class="form-group">
                                                <label for="inputEmail3" class="col-sm-3 control-label">Password <span style={{color: 'red'}}>*</span></label>
                                                <div class="col-sm-6">
                                                <input type="password" name="password" class="form-control " id="password" value="" placeholder="Password" />
                                                <span class="text-danger"></span>
                                              </div>
                                              <div class="col-sm-3">
                                                <small></small>
                                              </div>

                                            </div>                            
                                              <div class="form-group role">
                                          <label for="inputEmail3" class="col-sm-3 control-label">Role</label>
                                          <div class="col-sm-6">
                                            <select class="form-control validate_field" id="role" name="role">
                                                  <option value="1">Admin</option>
                                                  <option value="4">acc</option>
                                                  <option value="5">Agent</option>
                                                  <option value="7">Owner</option>
                                                  <option value="8">Cleaning</option>
                                          </select>
                                            <span class="text-danger"></span>
                                          </div>
                                          <div class="col-sm-3">
                                            <small></small>
                                          </div>
                                        </div>     
                                      <div class="form-group status">
                                          <label for="inputEmail3" class="col-sm-3 control-label">Status</label>
                                          <div class="col-sm-6">
                                            <select class="form-control validate_field" id="status" name="status">
                                                            <option value="Active">Active</option>
                                                            <option value="Inactive">Inactive</option>
                                                    </select>
                                            <span class="text-danger"></span>
                                          </div>
                                          <div class="col-sm-3">
                                            <small></small>
                                          </div>
                                        </div>                            
                                          </div>
                                          {/* <!-- /.box-body --> */}
                                          <div class="box-footer">
                                            <button type="reset" class="btn btn-default">Reset</button>
                                            <button type="submit" class="btn btn-info float-right">Submit</button>
                                          </div>
                                        </form>
                                     <div className="col-md-3"></div>
                                    </div>
       
                                      </div>

                                        </div>
                                    </section>
                            </div>
                            </div>
                            
                      </div>
                  </div>
  )
}

export default AddAdmin;