import React from "react";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';


const EditCategory = () => {
    const [category_name, setCategory_name] = useState('');
  //   const [status, setStatus] = useState(["Active", "Inactive"])
    const history = useHistory();
    const {id} = useParams();
  
    const EditCategory = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/category/${id}`,{
            category_name: category_name,
          //   status: status
                 
        });
        history.push("/category");
    }
  
    useEffect(() => {
      getCategoryById();
  }, []);
  
  const getCategoryById = async () => {
      const response = await axios.get(`http://localhost:3003/category/${id}`);
      setCategory_name(response.data.category_name);
      // setStatus(response.data.status);
  }
  
    return <div>
  
  <div class='text-left'>
  <Helmet>
      <link href="./dist-assets/css/themes/lite-purple.min.css" rel="stylesheet" />
      <link href="./dist-assets/css/plugins/perfect-scrollbar.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="./dist-assets/css/plugins/datatables.min.css" />
      <script src="dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
      <script src="dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
      <script src="dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
      <script src="dist-assets/js/scripts/script.min.js"></script>
      <script src="dist-assets/js/scripts/sidebar.large.script.min.js"></script>
      <script src="dist-assets/js/plugins/datatables.min.js"></script>
      <script src="dist-assets/js/scripts/datatables.script.min.js"></script>
      <script src="cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
      <script src="dist-assets/js/plugins/quill.min.js"></script>
      <script src="dist-assets/js/scripts/quill.script.min.js"></script>			
      </Helmet>
  
  
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
                <h4 class="box-title">Edit Category </h4>
              </div>
              </div>
              {/* <!-- /.box-header -->
              <!-- form start --> */}
                              <form onSubmit={ EditCategory }>
                              <div class="box-body">
                                                                  
                                      <div class="form-group name">
                                          <label for="inputEmail3" class="col-sm-3 control-label">Name <span style={{color: 'red'}}>*</span></label>
                                          <div class="col-sm-6">
                                          <input type="text" name="category_name" className="input" class="form-control "  value={category_name} placeholder="Category Name" onChange = { (e) => setCategory_name(e.target.value) }/>
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
                  <div class="box-footer">
                  <button type="reset" class="btn btn-default">Reset</button>
                  <button onClick={EditCategory}type="submit" class="btn btn-info pull-right">Submit</button>
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
  
  export default EditCategory;
  