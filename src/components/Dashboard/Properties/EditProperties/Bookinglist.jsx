import React, { useState, useEffect } from 'react';
import { Link, useHistory,useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';

import {Helmet} from 'react-helmet'


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import { DateRangePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';



const Bookinglist = () => {

  let {id}=useParams()

    const [proId, setproId] = useState("");
    const [booking_type, setBooking_type] = useState("");
    const [minimum_stay, setMinimum_stay] = useState("");
    const [minimum_stay_seasonal, setMinimumStaySeasonal] = useState("");
    const [cancellation, setCancellation] = useState("");

    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const [isLoading,setLoading]=useState(false);

const history = useHistory();


useEffect(()=>{

  axios.get(`https://onlinebookingus-app-test.herokuapp.com/property/byId/${id}`).then((response) => {
        setBooking_type(response.data.booking_type);
        setMinimum_stay(response.data.minimum_stay)
        setMinimumStaySeasonal(response.data.minimum_stay_seasonal)
        setCancellation(response.data.cancellation)
        setStartDate(response.data.startDate)
        setEndDate(response.data.endDate)
     

    });

},[]);


const data = {
  booking_type: booking_type,
  minimum_stay:minimum_stay,
  minimum_stay_seasonal: minimum_stay_seasonal,
  cancellation : cancellation
 
}



const handleDatesChange = ({ startDate, endDate }) => {
setStartDate(startDate);
setEndDate(endDate);
};






const UpdateBookingDetails = () => {
setLoading(true);

axios.put(`https://onlinebookingus-app-test.herokuapp.com/property/updatepropbooking/${id}`, data).then((response) => {


    console.log("BOOKING UPDATES MANAGED"+response.data)


    setTimeout(() => {
      setLoading(false);
      toast.info('Information Added successfully');
      // navigate.push('/add-property');
  }, 3000);

});
}




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

            <form method="post" action="http://localhost:8000/admin/listing/105/booking" class="signup-form login-form" accept-charset="UTF-8">
              <div class="row">
                  <div class="col-md-12">
                  <h3>Choose how your guests book</h3>
                  <p class="text-muted">Get ready for guests by choosing your booking style.</p>
                  </div>
                  <div class="col-md-8 ">
                  <div class="col-md-12 ">
                    <label class="label-large">Booking Type  <span style={{color: 'red !important'}}>*</span></label>
                    <select name="booking_type" id="select-booking_type" 
                    onChange={(event) => {
                      setBooking_type(event.target.value);
                    }}
                    class="form-control">
                        <option value={booking_type} selected={booking_type}>{booking_type}</option>
                        <option value="request" selected="">Review each request</option>
                        <option value="instant">Guests book instantly</option>
                    </select>
                    </div>
                  </div>
              
        

                <div class="col-md-8">
                  <div class="col-md-12 ">
                    <label class="label-large "> Minimum Stay</label>
                    <input class="form-control" id="minimum_stay" type="number" name="minimum_stay"
                    onChange={(event) => {
                      setMinimum_stay(event.target.value);
                    }}
                    
                    value={minimum_stay} required="" />
                  </div>
                </div>
            
               <br /><br /><br />
                <div class="col-md-8">
                  <div class="col-md-12 ">
                  <div id="flipmt-2 mt-2">
                      <div className="card-header bg-gray-400">
                      <label class="label-large text"><h4>Seasonal Requirements</h4></label>

                      <input class=" form-control" name="minimum_stay_seasonal"

              onChange={(event) => {
                setMinimumStaySeasonal(event.target.value);
              }}

              value={minimum_stay_seasonal}

              type="number" placeholder="minimum_stay_seasonal" />

                      </div>
                      </div>                
                  </div>
                </div>
        
              <br />
              <div class="row container">
                  <div class="col-md-12">
                      <div class="box-group" id="accordion">
                        {/* <!-- we are adding the .panel class so bootstrap.js collapse plugin detects it --> */}
                        <label> Cancellation Policy  <span style={{color: 'red !important'}}>*</span></label>
                        <br/>
                                                    
                             
                                <input type="radio" name="policy_id" value="1" id="policy_id1" /> 
                                <label for="policy_id1"> Flexible </label>
                                
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne1" aria-expanded="false" class="collapsed">
                                    View Detail
                                 </a><br />
                            
                              <div id="collapseOne1" class="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
                                
                                  Full refund 1 day prior to arrival
                                
                              </div>
                            
                                                    
                             
                                <input type="radio" name="policy_id" value="2" id="policy_id2" /> 
                                <label for="policy_id2" > Moderate </label>
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne2" aria-expanded="false" class="collapsed">
                                    View Detail
                                 </a><br />
                              
                              <div id="collapseOne2" class="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
                                
                                  Full refund 5 days prior to arrival
                                
                              </div>
                            
                                                    
                             
                                <input type="radio" name="policy_id" value="3" id="policy_id3" /> <label for="policy_id3"> Flexible or Non-refundable </label>
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne3" aria-expanded="false" class="collapsed">
                                    View Detail
                                 </a><br />
                              
                              <div id="collapseOne3" class="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
                                
                                  In addition to  Flexible,offer a non-refundable option-guests pay 10% less, but yoy keep your payout no matter when they cancel
                                
                              </div>
                            
                                                    
                             
                                <input type="radio" name="policy_id" value="4" id="policy_id4" /> <label for="policy_id4"> Moderate or Non-refundable </label>
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne4" aria-expanded="false" class="collapsed">
                                    View Detail
                                 </a><br />
                              
                              <div id="collapseOne4" class="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
                                
                                  In additional to Moderate, offer a non-refundable option-guests pay 10% less, but keep your payout no matter when they cancel
                                
                              </div>
                            
                                                    
                             
                                <input type="radio" name="policy_id" value="5" id="policy_id5" /> 
                                <label for="policy_id5" > Strict </label>
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne5" aria-expanded="false" class="collapsed">
                                    View Detail
                                 </a><br />
                              
                              <div id="collapseOne5" class="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
                                
                                  Full refund for cancellation made within 48 hours of  booking , if the check-in date is at least 14 days away . 50% refund for cancellation made at least  days before check-in. No refund for cancellation made with in 7 days of check-in
                                
                              </div>
                            
                                                    
                             
                                <input type="radio" name="policy_id" value="6" id="policy_id6" /> <label for="policy_id6"> Strict or Non-refundable </label>
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne6" aria-expanded="false" class="collapsed">
                                    View Detail
                                 </a><br />
                              
                              <div id="collapseOne6" class="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
                                
                                  In addition to Strict, offer a non refundable option guest pay 10% less, but you keep your payout no matter when they cancel
                                
                              </div>
                           
                      </div>
                  </div>
                  
                  
              </div>
              <div style={{clear:'both'}}></div>
              <br />
              <div class="row">
                <div class="col-md-2  l-pad-none text-left">
                  <a data-prevent-default="" href="/pricing" class="btn btn-large btn-primary">Back</a>
                </div>
                <div className="col-8"></div>
                <div class="col-md-2 float-right">
                {!isLoading && <button type="submit" onClick={UpdateBookingDetails} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>

              }
              {isLoading &&
                <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
              }
                </div>
              </div>
             
              
          
      </div>
      </form>

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

export default Bookinglist
