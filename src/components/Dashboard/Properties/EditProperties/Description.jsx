import React, { useState, useEffect } from 'react';
import { Link, useHistory,useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';

import {Helmet} from 'react-helmet'


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Description = () => {

const history = useHistory();

let { id } = useParams();
  
   
const [property_id, setProperty_id] = useState(`${id}`);
const [name, setName] = useState("");
const [private_name, setPrivate_name] = useState("");
const [summary, setSummary] = useState("");

const [url_name, setUrlName] = useState("");

const [isLoading,setLoading]=useState(false);



useEffect(()=>{

  axios.get(`https://onlinebookingus-app-test.herokuapp.com/property/byId/${id}`).then((response) => {
      //setpropertyList(response.data);
      // setBedrooms(response.data.bedrooms)
      setName(response.data.name)
      setPrivate_name(response.data.private_name)
      setUrlName(response.data.url_name)
      // setBathrooms(response.data.bathrooms)
      // setBeds(response.data.beds)


      setProperty_id(response.data.id)

      console.log("the property id is"+property_id)

    });


    axios.get(`https://onlinebookingus-app-test.herokuapp.com/propdescription/byPropertyId/${id}`).then((response) => {

     let prop_sumry= response.data==null ? '' : response.data.summary
     
      setSummary(prop_sumry)
     
    });

},[]);

const data = {
  name: name,
  private_name:private_name,
  url_name:url_name 
}

const data_description = {
  summary:summary,
 
}

const updatePropertyDescription = () => {
  setLoading(true);

  axios.put(`https://onlinebookingus-app-test.herokuapp.com/property/updatepropnames/${id}`, data).then((response) => {


        console.log("UPDATES MANAGED IS "+response)



      
   
  });


  axios.put(`https://onlinebookingus-app-test.herokuapp.com/propdescription/updatedescription/${id}`,data_description).then((response)=>{

    console.log("PROPERTY DESCRIPTION ADDED ",response);

   // navigate("/dashboard");

   setTimeout(() => {
    setLoading(false);
    toast.info('Information Saved successfully');
   
    history.push(`/location/${id}`)
}, 2000);


  
  
   
}).catch((error) => {
    console.warn('Not good man :(');
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
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/calender/${id}`)} type="button">Calendar</button>
                    

                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-md-8">
                        <div class="box-body">



<div class="row">

  <div class="col-md-8 col-sm-12 col-xs-12 mb20">

    <label class="label-large">Listing Name <span style={{color: 'red !important'}}>*</span></label>

    <input type="text" name="name" class="form-control" value={name}
    
    onChange={(event) => {
      setName(event.target.value);
    }}
    placeholder="" maxlength="100" />

    <span class="text-danger"></span>

  </div>

</div>
<div class="row">

  <div class="col-md-8 col-sm-12 col-xs-12 mb20">

    <label class="label-large">Private Name</label>

    <input type="text" name="private_name" class="form-control" value={private_name}
    
    onChange={(event) => {
      setPrivate_name(event.target.value);
    }}
    
    placeholder="" maxlength="100" />

    <span class="text-danger"></span>

  </div>

</div>

<div class="row">

  <div class="col-md-8  col-sm-12 col-xs-12 mb20">

    <label class="label-large">Summary <span style={{color: 'red !important'}}>*</span></label>

    <textarea class="form-control" name="summary" rows="12"
    onChange={(event) => {
      setSummary(event.target.value);
    }}
   value={summary} maxlength="7000">{summary}</textarea>

    <span class="text-danger"></span>

  </div>

</div>

<br />

<div class="row">

  <div class="col-md-6  col-sm-6 col-xs-6 text-left">

      <a data-prevent-default=""  onClick ={() => history.push(`/basicdetails/${id}`)} class="btn btn-large btn-primary">Back</a>

  </div>

  <div class="col-md-6 col-sm-6 col-xs-6 text-right">

  {!isLoading && <button type="submit" onClick={updatePropertyDescription} class="btn btn-primary ml-auto js-btn-next" title="Save" >Next</button>

}
{isLoading &&
  <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
}

  </div>

</div>  

<ToastContainer/>

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

export default Description
