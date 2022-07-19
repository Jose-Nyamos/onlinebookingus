import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
// import "./styles.css";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Addstatic = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("Start writing");
  const config = {
    readonly: false,
    height: 400
  };

  const handleUpdate = (event) => {
    const editorContent = event.target.value;
    setContent(editorContent);
  };
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('Active');
  const [position, setPosition] = useState('');



  const history = useHistory();

  const [isLoading,setLoading]=useState(false);

  let data={

    name: name,
    url: url,
    status: status,
    position: position

  }

 


  const savePage = () => {
    setLoading(true);
  
    axios.post("http://localhost:3001/pages", data).then((response) => {
  
  
          console.log("MASSAGE ADDED"+response.data)
  
  
  
          setTimeout(() => {
            setLoading(false);
            toast.info('Information Added successfully');
            // navigate.push('/add-property');
        }, 3000);
     
    });
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
										Pages
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
              <h4 class="box-title">Page Add Form</h4>
            </div>
            </div>
            {/* <!-- /.box-header -->
            <!-- form start --> */}
                            
                            <div class="box-body">
                                                                
                                    <div class="form-group name">
                                      
                                    <label for="inputEmail3" class="col-sm-4 control-label">Name <span style={{color: 'red'}}>*</span></label>
                                    <div class="col-sm-8">
                                    <input type="text" name="title" className="input" class="form-control "   placeholder="Name" onChange={ (e) => setName(e.target.value) }/>
                                    <span class="text-danger"></span>
                                </div>
                                
                                </div>       
                                   <div class="form-group url">
                                    <label for="inputEmail3" class="col-sm-4 control-label">Url <span style={{color: 'red'}}>*</span></label>
                                    <div class="col-sm-8">
                                    <input type="text" name="url" class="form-control "   value={ url } onChange={ (e) => setUrl(e.target.value) } placeholder="Url" />
                                    <span class="text-danger"></span>
                                </div>


                                 
                                </div>       
                                   <div class="form-group url">
                                    <label for="inputEmail3" class="col-sm-4 control-label">Content<span style={{color: 'red'}}>*</span></label>
                                    <div class="col-sm-8">
                                    <textarea cols={10} rows={10} class="multisteps-form__textarea form-control" onChange={(event) => {
                                      setContent(event.target.value);
                                    }} placeholder="Summary">
                  
                  
                                    </textarea>
                                    <span class="text-danger"></span>
                                </div>



                                
                              
                                </div>                        
                            
                                  <div class="form-group position">
                                    <label for="inputEmail3" class="col-sm-4 control-label">Position</label>
                                    <div class="col-sm-8">
                                        <select class="form-control validate_field" id="position" name="position">
                                          <option value={position} onChange={ (e) => setPosition(e.target.value) }>First Column</option>
                                          <option value={position} onChange={ (e) => setPosition(e.target.value) }>Second Column</option>
                                      </select>
                                    <span class="text-danger"></span>
                                </div>
                                
                                </div>         
                             <div class="form-group status">
                                <label for="inputEmail3" class="col-sm-4 control-label">Status</label>
                                <div class="col-sm-8">
                                    <select class="form-control validate_field" id="status" onChange={ (e) => setStatus(e.target.value) } name="status">
                                <option value="Active" >Active</option>
                                <option value="Inactive">Inactive</option>
                             </select>
                                 <span class="text-danger"></span>
                        </div>
                       
                        </div>                      
                     </div>
                     <ToastContainer />
                   {/* <!-- /.box-body --> */}
                <div class="box-footer">
                <button type="reset" class="btn btn-default">Reset</button>
               
                {!isLoading && <button type="submit" onClick={savePage} class="btn btn-info pull-right" title="Save" >Submit</button>

              }
              {isLoading &&
                <button type="submit" class="btn btn-info pull-right" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
              }
                
              </div>
              {/* <!-- /.box-footer --> */}
          
          {/* <!-- /.box --> */}

          {/* <!-- /.box --> */}
        </div>
        {/* <!--/.col (right) --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>

  </div>
  </div>
  </div>
  </div>
  </div>
  ;
}

export default Addstatic;
