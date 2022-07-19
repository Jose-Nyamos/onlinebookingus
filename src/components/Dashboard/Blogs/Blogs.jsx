import React, {useState, useEffect, useRef} from 'react'
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import JoditEditor from "jodit-react";

const Blogs =()  =>{
    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const [images, setImage] = useState('');
    const [blog_content, setBlog_content] = useState('')
    const history = useHistory();
    const config = {
      readonly: false,
      height: 400
    };
    const handleUpdate = (event) => {
        const newContent = event.target.innerHTML;
        setBlog_content(newContent);
      };

  

    const saveBlogs = async (e) => {
        e.preventDefault();

          const formData =  new FormData()
              formData.append('images', images)
              formData.append('title', title)
              formData.append('blog_content', blog_content)

                

              const res = await axios.post( "http://localhost:3003/blogs",  formData)
              console.log(res);
            
              history.push("/bloglist");
              };
   
  return (
  
        <div class='app-admin-wrap layout-sidebar-large'>
			    <Topbar />
                <Sidebar />
			
		<div class='main-content-wrap sidenav-open d-flex flex-column'>
               <div class="row">
              <div class="breadcrumb">
              <h3> Blog List</h3>
                </div>
                {/* <p>Control Panel</p> */}

								<div class="col-5"></div>

								<div class="col-2">
									<div class="float-lg-right">
									<ol class='breadcrumb'>
										<li>
											<Link to='/dashboard'>
												<i class='nav-icon i-Home-4'></i> Home
											</Link>
										</li>
							        </ol>

									</div>
									
							
								</div>

							</div>
                  <div class="row">
                  
                      <div class="card mb-4">
                          <div class="card-body">
                              <div className="row">
                              <div class="col-sm-3">
                                  <h3 class="box-title">Add New Blog
                                  </h3>
                                  </div>
                                  <div className="col-md-6"></div>
                                  <div class="col-sm-3 float-right">
                                      <Link to="/bloglist" class="btn btn-primary pull-right"><i class="i-Eye-Scan"></i> View Blogs</Link>
                                  </div> 
                              </div>
                      

                      <small>Please don not refresh page while adding blog. If you refresh page then you loose "Auto Save " property</small>

                        <form onSubmit={ saveBlogs } method="POST" encType='multipart/form-data' >
                          <div class="row p-4">
                          <div className="col-md-2"></div>
                              
                      <div class="col-md-12 form-group mb-3">
                      <label for="charge_name"><b>Blog Title </b></label>
                          <input class="form-control form-control-rounded" id="charge_name" type="text"   name="title"  placeholder="Enter Blog title" value={title} onChange={ (e) =>  setTitle(e.target.value)} required="" />
                      </div>

                      <div class="col-md-12 form-group mb-3">
                      <label for="blog_image">Blog Image <small>(Image Size should be approx 400px*300px )</small></label>
                          
                          <input type="file" class="form-control form-control-rounded" name="images"  onChange={(e) => setImage(e.target.files[0])} placeholder="Upload Blog Image" required="" />
                      </div>

                      <div class="col-md-12 form-group mb-3">
                      <label for="charge_name"><b>Content </b></label>
                      <JoditEditor
                          ref={editor}
                          config={config}

                          value={blog_content}
                          onBlur={handleUpdate}
                          onChange={(newContent) => {}}
                        /> 
                      </div>
                                              
                    

                                                  
                          <div class="col-md-12">
                            <button  class="btn btn-primary">Submit</button>
                          </div>
                            </div>
                      </form>
                                </div>
                              </div>
                  </div>
</div>
    </div>
  )
}

export default Blogs
