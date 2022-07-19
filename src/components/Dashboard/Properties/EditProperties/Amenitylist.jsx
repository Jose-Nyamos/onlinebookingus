import React, { useState, useEffect } from 'react';
import { Link, useHistory,useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';



import {Helmet} from 'react-helmet'

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Amenitylist = () => {

  let {id}=useParams()

const history = useHistory();
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
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push("#")} type="button">Calendar</button>
                    

                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-md-8">
                        <div class="box-body">
            <div class="row">
          <div class="col-md-12"> <h4>Common Amenities <span style={{color: 'red !important'}}>*</span></h4></div>
      </div>
      <div class="row">
         
                    <div class="col-md-6 col-sm-12 col-xs-12">
              <ul class="list-unstyled">
                                                          <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="1" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Essentials</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Towels, bed sheets, soap and toilet paper"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="2" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>TV</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="3" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Cable TV</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="4" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Air Conditioning </span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="5" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Heating</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Heating"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="6" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Kitchen</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Kitchen"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="7" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Internet</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Internet"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="8" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Gym</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Gym"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="9" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Elevator in Building</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="10" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Indoor Fireplace</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="11" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Buzzer/Wireless Intercom</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="12" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Doorman</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="13" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Shampoo</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="14" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Wireless Internet</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Wireless Internet"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="15" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Hot Tub</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="16" name="amenities[]" data-saving="1" />  &nbsp;&nbsp;
                      <span>Washer</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Washer"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="17" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Pool</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Pool"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="18" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Dryer</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Dryer"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="19" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Breakfast</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Breakfast"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="20" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Free Parking on Premises</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="21" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Family/Kid Friendly</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Family/Kid Friendly"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="22" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Smoking Allowed</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="23" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Suitable for Events</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Suitable for Events"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="24" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Pets Allowed</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="25" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Pets live on this property</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="26" name="amenities[]" data-saving="1" /> &nbsp;&nbsp;
                      <span>Wheelchair Accessible</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Wheelchair Accessible"></span>
                                          </li>
                                                                                                                                                                                                                                                  </ul>
          </div>
      </div>
            <div class="row">
          <div class="col-md-12"> <h4>Safety Amenities <span style={{color: 'red !important'}}>*</span></h4></div>
      </div>
      <div class="row">
         
                    <div class="col-md-6 col-sm-12 col-xs-12">
              <ul class="list-unstyled">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="27" name="amenities[]" data-saving="2" /> &nbsp;&nbsp;
                      <span>Smoke Detector</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Smoke Detector"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="28" name="amenities[]" data-saving="2" /> &nbsp;&nbsp;
                      <span>Carbon Monoxide Detector</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Carbon Monoxide Detector"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="29" name="amenities[]" data-saving="2" /> &nbsp;&nbsp;
                      <span>First Aid Kit</span>
                      </label>
                      <span>&nbsp;</span>

                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="30" name="amenities[]" data-saving="2" /> &nbsp;&nbsp;
                      <span>Safety Card</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Safety Card"></span>
                                          </li>
                                                                              <li>
                     
                      <label class="label-large label-inline amenity-label">
                      <input type="checkbox" value="31" name="amenities[]" data-saving="2" /> &nbsp;&nbsp;
                      <span>Fire Extinguisher</span>
                      </label>
                      <span>&nbsp;</span>

                                            <span data-toggle="tooltip" class="icon" title="Essentials"></span>
                                          </li>
                                                    </ul>
          </div>
      </div>
            <br />
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 text-left">
            <a data-prevent-default="" href="http://localhost:8000/admin/listing/105/location" class="btn btn-large btn-primary">Back</a>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6 text-right">
          <button type="submit" class="btn btn-large btn-primary next-section-button">
           Next 
          </button>
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

export default Amenitylist
