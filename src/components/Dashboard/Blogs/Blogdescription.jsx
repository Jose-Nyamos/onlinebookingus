import React, {useState, useEffect, useRef} from 'react'
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import JoditEditor from "jodit-react";

const Blogdescription =(e)=> {
    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const [images, setImage] = useState('');
    const [blog_content, setBlog_content] = useState('')
    const id  = useParams("id")
    const history = useHistory();
    const config = {
      readonly: false,
      height: 400
    };
    const handleUpdate = (event) => {
        const editorContent = event.target.innerHTML;
        setBlog_content(editorContent);
      };

    const EditBlogs = async (e) => {
        e.preventDefault();
              const formData =  new FormData()
              formData.set('images', images)
              formData.set('title', title)
              formData.set('blog_content', blog_content)
              const res = await axios.put( `http://localhost:3003/blogs/${id}`,  formData)
              console.log(res);
            
              history.push("/bloglist");
    }

    useEffect(() => {
        getBlogById();
    }, []);

    const getBlogById = async () => {
        const response = await axios.get(`http://localhost:3003/blogs/${id}`);
        setTitle(response.data.title);
        setImage(response.data.images);
        setBlog_content(response.data.blog_content);

    }


  return (
    <div>
        <div class='app-admin-wrap layout-sidebar-large'>
				<Sidebar />
				<Topbar />
				<div class='main-content-wrap sidenav-open d-flex flex-column'>
			
					{/* <!-- ============ Body content start ============= --> */}
					<div class='content-wrapper'>
          <section class='content-header'>
          <div class="row">
								<div class="col-4">
									<h5>
										Blog Description
										<small>  Control panel</small>
									</h5>

								</div>
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
							
						
						</section>
            <div class="pad margin no-print">
                  
                      <div class="col-md-12">
                        <div class="alert alert-card alert-success" role="alert"><strong class="text-capitalize">!Note:</strong> 
                        <br />
                        This page has been enhanced for printing. Click the print button at the bottom of the invoice to test.
                            <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        
                    </div>
                    </div>

                    <section class="invoice">
                  
                    <div class="col-lg-12 col-md-4 mb-4">
                            <div class="card">
                                <div class="card-body">
                                <div class="col-md-12">
                                <Link to={`/editblogs/${id}`} >
                                <button class="btn btn-success float-right" type="button"><i class="nav-icon i-Pen-2">Edit</i></button>
                                </Link>
                                </div>
                                 </div>
                                 <div className="card-body">
                                   <div className="col-md-12">
                                   <h4 class="page-header">
                                      <i class="i-Globe"></i> Local History in a Glance
                                      <small class="float-right"> 
                                      Thursday 1st of January 1970 12:00:00 AM</small>
                                    </h4>
                                   </div>
                                 </div>
                                <div class="ul-widget-app__comments">
                                    <div class="ul-widget-app__row-comments">
                                        <div class="ul-widget-app__profile-pic p-6">
                                          
                                          <img class="profile-picture avatar-md mb-2 rounded-circle img-fluid" src={images} alt="alt" /></div>
                                        
                                        <div class="ul-widget-app__comment">
                                            <div class="ul-widget-app__profile-title">
                                                <h6 class="heading">Jhon Wick</h6>
                                                <p class="mb-2">    
                                                  <p>It’s no surprise that location is everything for guests who book an WP Rentals. But what was surprising for us was the conundrum this topic created in our recent post What guests really want. On one hand there’s travelers: they want to know everything about where they’re going right away—it helps them decide where to book and plan their trip. On the other hand there’s hosts, many of whom naturally want to maintain privacy, especially before a booking is confirmed, and others that want to share every last detail right away.</p>

                                                  <p>Is there a way to convey the location details a guest wants without leaving the host feeling over-exposed? We think so. Let this checklist be your guide and everybody wins.</p>

                                                  <p><strong>Tips</strong></p>

                                                  <p>Provide recommendations early to allow guests to plan their trip.</p>

                                                  <p>Filling in your Guidebook on WP Rentals&nbsp;is a great way to compile your recommendations, and it makes it easy to grow and repurpose for future guests.</p>
                                                  </p>
                                                                                              </div>
                                            <div class="ul-widget-app__profile-status"><span class="badge badge-pill badge-primary p-2 m-1">Pending</span><span class="ul-widget-app__icons"><a href="href.html"><i class="i-Approved-Window text-mute"></i></a><a href="href.html"><i class="i-Like text-mute"></i></a><a href="href.html"><i class="i-Heart1 text-mute"></i></a></span><span class="text-mute">May 14, 2019</span></div>
                                        </div>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
      
      
                        <div class="col-lg-12 col-md-4 mb-4">
                          <div className="card">
                            <div className="card-body">
                               <h3> Comments</h3>
                            </div>
                            <div className="card-body">
                            <div class="col-sm-12">
                                  <div class="col-sm-6">
                                      <b>Name : Dharma </b><br/>
                                      Email : dharma@gmail.com <br />
                                        Website : a<br />
                                      <b>Comment : if any problem comes up costumer service is ALWAYS there. Literally the guys are trying their best! My profile has over 160 reviews and all my listings are book 3 months ahead!</b> <br />
                                    </div>
                                    <div class="col-sm-6">
                                        <span class="label label-success"> Published 
                                    </span></div>

                                    </div>
                            </div>

                            <div className="card-body">
                            <div class="col-sm-12">
                                <div class="col-sm-6">
                                    <b>Name : Dharma </b><br/>
                                    Email : dharma@gmail.com <br />
                                      Website : a<br />
                                    <b>Comment : if any problem comes up costumer service is ALWAYS there. Literally the guys are trying their best! My profile has over 160 reviews and all my listings are book 3 months ahead!</b> <br />
                                  </div>
                                  <div class="col-sm-6">
                                      <span class="label label-success"> Published 
                                  </span></div>
                                  </div>
                            </div>

                            <div className="card-body">
                            <div class="col-sm-12">
                                  <div class="col-sm-6">
                                      <b>Name : Dharma </b><br/>
                                      Email : dharmachand2013@gmail.com <br/>
                                        Website : <br />
                                      <b>Comment : Nice article .....</b> <br />
                                    </div>
                                    <div class="col-sm-6">
                                            <span class="label label-success"> Published 
                                    </span></div>
                 
                </div>

                            </div>
                            <div class="col-sm-12 p-3">
                            <Link to="/bloglist" class="btn btn-success float-right"><i class="fa fa-arrow-left"></i> Back
                              </Link>
                            </div>
                          </div>
                            </div>
           
                               
         
                          

                      
                        {/* <!-- /.col --> */}
                      {/* <!-- /.row --> */}

                    
                    </section>

                        </div>
                    </div>
                    </div>
        
        </div>
  )
}

export default Blogdescription
