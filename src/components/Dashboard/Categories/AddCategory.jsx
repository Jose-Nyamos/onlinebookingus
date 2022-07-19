import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import React, { useState } from "react";


function AddCategory() {
  const [category_name, setCategory_name] = useState('');



  const history = useHistory();

  const saveCategory = async (e) => {
      e.preventDefault();
      await axios.post('http://localhost:3003/category',{
          category_name: category_name,
               
      });
      history.push("/category");
  }

  return <div>

<div class='text-left'>


    <div class='app-admin-wrap layout-sidebar-large'>
    <Topbar />
        <Sidebar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
						<section class='content-header'>
							<div class="row">
								<div class="col-4">
									<h3>
										Category
										<small>Control panel</small>
									</h3>

								</div>
								<div class="col-5"></div>

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
        <section class="content">
      <div class="row">
        {/* <!-- right column --> */}
        <div class="col-md-12 mb-6">
          {/* <!-- Horizontal Form --> */}
          <div class="box box-info">
            <div class="box-header with-border">
              <h4 class="box-title">Add Category </h4>
            </div>
            </div>
            {/* <!-- /.box-header -->
            <!-- form start --> */}
                            <form onSubmit={ saveCategory }>
                            <div class="box-body">
                                                                
                                    <div class="form-group name">
                                        <label for="inputEmail3" class="col-sm-3 control-label">Name <span style={{color: 'red'}}>*</span></label>
                                        <div class="col-sm-6">
                                        <input type="text" name="title" className="input" class="form-control "  value={category_name} placeholder="Category Name" onChange = { (e) => setCategory_name(e.target.value) }/>
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
                                {/* <option value="Inactive">Inactive</option> */}
                             </select>
                                 <span class="text-danger"></span>
                        </div>
                        <div class="col-sm-3">
                            <small></small>
                        </div>
                        </div>                      
                     </div>
                <div class="box-footer">
                <button type="reset" class="btn btn-default">Reset</button>
                <button onClick={AddCategory}type="submit" class="btn btn-info pull-right">Submit</button>
              </div>
            </form>

        </div>
      </div>
    </section>

  </div>
  </div>
  </div>
  </div>
  </div>
  ;
}

export default AddCategory;

