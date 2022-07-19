import React, { useState, useEffect } from 'react';
import { Link, useHistory,useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';

import {Helmet} from 'react-helmet'

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Photos = () => {

    let {id}=useParams()

const history = useHistory();

useEffect(()=>{

    axios.get(`https://onlinebookingus-app-test.herokuapp.com/property/byId/${id}`).then((response) => {
        //setpropertyList(response.data);
        // setBedrooms(response.data.bedrooms)
        // setName(response.data.name)
        // setPrivate_name(response.data.private_name)
        // setUrlName(response.data.url_name)
        // // setBathrooms(response.data.bathrooms)
        // // setBeds(response.data.beds)
  
  
        // setProperty_id(response.data.id)
  
        // console.log("the property id is"+property_id)
  
      });
  
  },[]);



  return (
    <div>
    <Helmet>
    <link rel="stylesheet" href="/dist-assets/css/themes/lite-purple.min.css" />
    <link rel="stylesheet" href="/dist-assets/css/plugins/perfect-scrollbar.min.css" />

    </Helmet>
    <div class='app-admin-wrap layout-sidebar-large'>
        <Topbar />
        <Sidebar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
            <div class="row">
								<div class="col-4">
									<h3>
                                 List Your Spacing	
									<small>List your space</small>
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
                            <div className="row">
                            <div class="col-md-4 mb-4">
                            <div class="card text-left">
                                <div class="card-body">
                                    <h4 class="card-title mb-2">PROPERTY SETTINGS</h4>
                                    <div class="list-group">
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/basicdetails/${id}`)} type="button">Basic</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/description/${id}`)} type="button">Description</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/location/${id}`)} type="button">Location</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/amenitylist/${id}`)} type="button">Amenities</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/photos/${id}`)} type="button">Photos</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/pricing/${id}`)} type="button">Pricing</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/bookinglist/${id}`)} type="button">Booking</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/calender/${id}`)} type="button">Calendar</button>
                    

                                    </div>
                                </div>
                            </div>
                           
                        </div>
            <div className="col-md-8">
            <div class="card p-4">        
                 <div className="card p-4">
                 <form id="img_form" enctype="multipart/form-data" method="post" action="http://localhost:8000/admin/listing/105/photos" class="signup-form login-form" accept-charset="UTF-8" novalidate="novalidate">
                    <div class="col-md-12">


                    <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">

                    <div class="col-md-6">
                    <img itemprop="image" src={"http://localhost:3001/uploads/"+id+"/img-1644608188077.jpg"}  class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />

                        
                    </div>

                    <div class="col-md-6">
                    <img itemprop="image" src={"http://localhost:3001/uploads/"+id+"/img-1644608188088.jpg"}  class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />

                        
                    </div>
                  

                    </div>
                </div>
                </div>

                    </div>
                    <br />
                    <br />
                </form>

                 </div>
        

                    <div class="row p-4">
                        <div class="col-md-2 col-sm-6 col-xs-6 l-pad-none text-left">
                            <Link data-prevent-default="" to="/amenitylist" class="btn btn-large btn-primary">Back</Link>
                        </div>
                         <div className="col-8"></div>
                        <div class="col-md-2 float-right">
                        <Link  onClick ={() => history.push(`/pricing/${id}`)} class="btn btn-large btn-primary next-section-button">
                        Next 
                        </Link>
                        </div>
                    
                    </div>
                    </div>

                                </div>

                            </div>
                   

        

              
    
              </div>
             </div>
        </div>
        <Helmet>
        <script src="/dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
        <script src="/dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
        <script src="/dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
        <script src="/dist-assets/js/scripts/script.min.js"></script>
        <script src="/dist-assets/js/scripts/sidebar.large.script.min.js"></script>
        <script src="/dist-assets/js/scripts/sidebar.script.min.js"></script>
        <script src="/dist-assets/js/plugins/echarts.min.js"></script>
        <script src="/dist-assets/js/scripts/echart.options.min.js"></script>
        <script src="/dist-assets/js/scripts/dashboard.v1.script.min.js"></script>
      </Helmet>
    </div>
  )
}

export default Photos
