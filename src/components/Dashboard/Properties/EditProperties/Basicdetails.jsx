import React, { useState, useEffect } from 'react';
import { Link, useHistory,useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';
import {Helmet} from 'react-helmet'



import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Basicdetails = () => {

  let {id}=useParams()


  const [property_id, setProperty_id] = useState(`${id}`);
  const [bedrooms, setBedrooms] = useState("7");
  const [bathrooms, setBathrooms] = useState("6");
  const [beds, setBeds] = useState("");
  const [bed_type, setbed_type] = useState("");
  const [property_type, setProperty_type] = useState("");

  const [accommodates, SetAccommodates] = useState("");

  
   const history = useHistory();
   const [isLoading,setLoading]=useState(false);

   



useEffect(()=>{

  axios.get(`https://onlinebookingus-app-test.herokuapp.com/property/byId/${id}`).then((response) => {

       setBedrooms(response.data.bedrooms)
      setbed_type(response.data.bed_type)
      setProperty_type(response.data.property_type)
       SetAccommodates(response.data.accommodates)
      setBathrooms(response.data.bathrooms)
       setBeds(response.data.beds)


      setProperty_id(response.data.id)

      console.log("the property id is"+property_id)

    });

},[]);

const data = {
  id:property_id,
  bedrooms:String(bedrooms),
  bathrooms:String(bathrooms),
  beds: String(beds),
  bed_type: bed_type,
  property_type:property_type,
  accommodates: String(accommodates),

}


const UpdateBasicDetails = () => {
  setLoading(true);

  axios.put("https://onlinebookingus-app-test.herokuapp.com/property/update/"+id, data).then((response) => {


        console.log("UPDATES MANAGED IS "+response.data)


        setTimeout(() => {
          setLoading(false);
          toast.info('Information Added successfully');
          // navigate.push('/add-property');
          history.push(`/description/${id}`)
      }, 2000);
   
  });
};






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
            <div class="col-md-12">
              <h4>Rooms and Beds</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <label class="label-large">Bedrooms</label>
              <select name="bedrooms" id="basics-select-bedrooms" data-saving="basics1" 
              
              onChange={(event) => {
                 setBedrooms(event.target.value);
               }}
              
              class="form-control">
                    
                    <option value={bedrooms} selected="selected">{bedrooms}</option>
                    <option value="1">1</option>
                    <option value="2">
                    2
                    </option>
                                      <option value="3" selected="">
                    3
                    </option>
                                      <option value="4">
                    4
                    </option>
                                      <option value="5">
                    5
                    </option>
                                      <option value="6">
                    6
                    </option>
                                      <option value="7">
                    7
                    </option>
                                      <option value="8">
                    8
                    </option>
                                      <option value="9">
                    9
                    </option>
                                      <option value="10">
                    10
                    </option>
                   
              </select>
            </div>
            <div class="col-md-4">
              <label class="label-large">Bathrooms</label>
              <select name="bathrooms" id="basics-select-bathrooms" data-saving="basics1" 
              
               onChange={(event) => {
                 setBathrooms(event.target.value);
               }}
              
              
              class="form-control">
              <option value={bathrooms} selected="selected">{bathrooms}</option>
                    <option class="bathrooms" value="0.5" selected="">
                    0.5
                    </option>
                                      <option class="bathrooms" value="1">
                    1
                    </option>
                                      <option class="bathrooms" value="1.5">
                    1.5
                    </option>
                                      <option class="bathrooms" value="2">
                    2
                    </option>
                                      <option class="bathrooms" value="2.5">
                    2.5
                    </option>
                                      <option class="bathrooms" value="3">
                    3
                    </option>
                                      <option class="bathrooms" value="3.5">
                    3.5
                    </option>
                                      <option class="bathrooms" value="4">
                    4
                    </option>
                                      <option class="bathrooms" value="4.5">
                    4.5
                    </option>
                                      <option class="bathrooms" value="5">
                    5
                    </option>
                                      <option class="bathrooms" value="5.5">
                    5.5
                    </option>
                                      <option class="bathrooms" value="6">
                    6
                    </option>
                                      <option class="bathrooms" value="6.5">
                    6.5
                    </option>
                                      <option class="bathrooms" value="7">
                    7
                    </option>
                                      <option class="bathrooms" value="7.5">
                    7.5
                    </option>
                                      <option class="bathrooms" value="8">
                    8+
                    </option>
                                </select>
            </div>
            <div class="col-md-4">
              <label class="label-large">Beds</label>
              <select name="beds" id="basics-select-beds" data-saving="basics1"

               onChange={(event) => {
                 setBeds(event.target.value);
               }}
              
              class="form-control">
            

              <option value={beds} selected="selected">{beds}</option>
                                  <option value="1" selected="">
                  1
                  </option>
                                  <option value="2">
                  2
                  </option>
                                  <option value="3">
                  3
                  </option>
                                  <option value="4">
                  4
                  </option>
                                  <option value="5">
                  5
                  </option>
                                  <option value="6">
                  6
                  </option>
                                  <option value="7">
                  7
                  </option>
                                  <option value="8">
                  8
                  </option>
                                  <option value="9">
                  9
                  </option>
                                  <option value="10">
                  10
                  </option>
                                  <option value="11">
                  11
                  </option>
                                  <option value="12">
                  12
                  </option>
                                  <option value="13">
                  13
                  </option>
                                  <option value="14">
                  14
                  </option>
                                  <option value="15">
                  15
                  </option>
                                  <option value="16">
                  16+
                  </option>
                 
              </select>
            </div>

            <div class="col-md-4">
              <label class="label-large">Bed Type</label>
              <select id="basics-select-bed_type" name="bed_type[]" multiple="" data-saving="basics1"

              onChange={(event) => {
                setbed_type(event.target.value);
              }}
              
              
              class="form-control select2-hidden-accessible" required="" tabindex="-1" aria-hidden="true">
              <option value={bed_type} selected="selected">{bed_type}</option>
                                                              <option value="king">king</option>
                                        
                                                              <option value="Queen">Queen</option>
                                        
                                                                                  
                                                              <option value="Single">Single</option>
                                        
                                                              <option value="Sofa bed">Sofa bed</option>
                                        
                                                              <option value="Sofa">Sofa</option>
                                        
                                                              <option value="Bunk bed">Bunk bed</option>
                                        
                                                              <option value="Air mattress">Air mattress</option>
                                        
                                                              <option value="10">Floor mattress</option>
                                        
                                                              <option value="11">Toddler bed</option>
                                        
                                                              <option value="12">Crib</option>
                                        
                                                              <option value="14">Hammock</option>
                                        
                                </select><span class="select2 select2-container select2-container--default" dir="ltr" style={{width: 158}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline">
                                    <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Select " style={{width: 156}} /></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            </div>
              <div class="col-md-4">
              <label class="label-large">Category</label>
              <select id="basics-select-category_id" name="category_id" data-saving="basics1" class="form-control">
                                      <option value="1" selected="">1 bedrooms 1 bathrooms</option>
                                      <option value="2">22 manhattan</option>
                                      <option value="5">2 bedroom 2 bathroom</option>
                                      <option value="6">3 bedroom 2 bathroom</option>
                                </select>
            </div>


            {/* <!-- <div class="col-md-4">
              <label class="label-large">Minimum Stay	</label>
              <input class="form-control" id="minimum_stay	" type="number" name="minimum_stay"  value="" required/>
            </div> --> */}

          </div>
          <div class="row">
            <div class="col-md-12">
              <h4>Listing</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <label class="label-large">Property Type</label>
              <select id="basics-select-bed_type" name="property_type" data-saving="basics1"
              
              onChange={(event) => {
                setProperty_type(event.target.value);
              }}
              
              
              class="form-control">

              <option value={property_type} selected="selected">{property_type}</option>
              
                                      <option value="Apartment">Apartment</option>
                                      <option value="House">House</option>
                                      <option value="Bed Break Fast">Bed &amp; Break Fast</option>
                                      <option value="Townhouse">Townhouse</option>
                                      <option value="Condominium">Condominium</option>
                                      <option value="Bungalow">Bungalow</option>
                                      <option value="Cabin">Cabin</option>
                                      <option value="Villa">Villa</option>
                                      <option value="Castle">Castle</option>
                                      <option value="11">Dorm</option>
                                      <option value="12">Treehouse</option>
                                      <option value="13">Boat</option>
                                      <option value="14">Plane</option>
                                      <option value="15">Camper/RV</option>
                                      <option value="16">Lgloo</option>
                                      <option value="17">Lighthouse</option>
                                      <option value="19">Tipi</option>
                                      <option value="21" selected="">Island</option>
                                      <option value="22">Chalet</option>
                                      <option value="23">Earth House</option>
                                      <option value="24">Hut</option>
                                      <option value="25">Train</option>
                                      <option value="26">Tent</option>
                                      <option value="27">Other</option>
                                </select>
            </div>
            <div class="col-md-4">
              <label class="label-large">Room Type</label>
              <select id="basics-select-bed_type" name="space_type" data-saving="basics1" class="form-control">
                                      <option value="1">Entire home/apt</option>
                                      <option value="2">Private room</option>
                                      <option value="3" selected="">Shared room</option>
                                </select>
            </div>
            <div class="col-md-4">
              <label class="label-large">Accommodates</label>
              <select name="accommodates" id="basics-select-accommodates"
              
              // onChange={(event) => {
              //   SetAccommodates(event.target.value);
              // }}
              
              
              class="form-control">

              <option value={accommodates} selected="selected">{accommodates}</option>
                                      <option class="accommodates" value="1">
                    1
                    </option>
                                      <option class="accommodates" value="2">
                    2
                    </option>
                                      <option class="accommodates" value="3">
                    3
                    </option>
                                      <option class="accommodates" value="4">
                    4
                    </option>
                                      <option class="accommodates" value="5">
                    5
                    </option>
                                      <option class="accommodates" value="6">
                    6
                    </option>
                                      <option class="accommodates" value="7">
                    7
                    </option>
                                      <option class="accommodates" value="8">
                    8
                    </option>
                                      <option class="accommodates" value="9">
                    9
                    </option>
                                      <option class="accommodates" value="10">
                    10
                    </option>
                                      <option class="accommodates" value="11">
                    11
                    </option>
                                      <option class="accommodates" value="12">
                    12
                    </option>
                                      <option class="accommodates" value="13">
                    13
                    </option>
                                      <option class="accommodates" value="14" selected="">
                    14
                    </option>
                                      <option class="accommodates" value="15">
                    15
                    </option>
                                      <option class="accommodates" value="16">
                    16+
                    </option>
                                </select>
            </div>
          </div>
          <div class="row">
          <br />
            <div class="col-md-12 text-right">
            


              {!isLoading && <button type="submit" onClick={UpdateBasicDetails} class="btn btn-primary ml-auto js-btn-next" title="Save" >Next</button>

            }
            {isLoading &&
              <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
            }


            </div>

            <ToastContainer/>
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

export default Basicdetails
