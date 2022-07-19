import React, { useCallback,useState,useEffect,useContext } from 'react'

import {useHistory, useParams } from "react-router-dom"

import axios from "axios";


import "./stepperStyles.css";



// import PropertyBasicDetailsStep from './PropertyBasicDetailsStep';
import { BasicDetailsStep } from '../../../Properties/BasicDetails';
import PropertyDescriptionStep from '../../../Properties/PropertyDescriptionStep';
import LocationStep from '../../../Properties/LocationStep';
import AmenitiesStep from '../../../Properties/AmenitiesStep';
import { MultiUploader } from '../../../Properties/Uploader';
import PropertyPricingStep from '../../../Properties/PropertyPricingStep';
import BookingDetailsStep from '../../../Properties/BookingDetailsStep';


import GuestTopBar from '../GuestTopBar'
import Sidebar from '../Sidebar'

import { Helmet } from 'react-helmet';





function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <BasicDetailsStep/>;
      case 1:
        return <PropertyDescriptionStep/>;
  
      case 2:
          return <LocationStep/>;
  
      case 3:
        return <AmenitiesStep/>;
  
    
      case 4:
            return <MultiUploader/>;
    
      case 5:
          return <PropertyPricingStep/>
  
       case 6:
            return <BookingDetailsStep/>;
    
      case 7:
          return <div>Property Calendar</div>;
      default:
        return "No Content";
    }
  }

export default function PropertyStepper() {

    let { id } = useParams();


  const [propertyObject, setPropertyObject] = useState({});



 useEffect(() => {
  axios.get(`http://localhost:3001/property/byId/${id}`).then((response) => {

   console.log('ADDED PROPERTY ID'+id);
   console.log('ADDED PROPERTY ID'+response.data.id);
      setPropertyObject(response.data);
   });
 }, []);



  const [activeStep, setActiveStep] = React.useState(0);

  const steps = ['Basics','Description','Location','Amenities','Photos','Pricing','Booking','Calendar']

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>

    <Helmet>
    <link rel="stylesheet" href="/dist-assets/css/themes/lite-purple.min.css" />
    <link rel="stylesheet" href="/dist-assets/css/plugins/perfect-scrollbar.min.css" />
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'></link>  
   </Helmet>
   <div class='text-left'>



   <div class='app-admin-wrap layout-sidebar-large'>
    <Sidebar/>

      <GuestTopBar/>


      <div class="main-content-wrap sidenav-open d-flex flex-column">

      <div class="border-top mb-5"></div>

      <div className="steps">
        <ul>
          <li className={activeStep === 0 ? "active" : "normal"}>
            <span>1</span>
            <span>{steps[0]}</span>
          </li>
          <li className={activeStep === 1 ? "active" : "normal"}>
            <span>2</span>
            <span>{steps[1]}</span>
          </li>
          <li className={activeStep === 2 ? "active" : "normal"}>
            <span>3</span>
            <span>{steps[2]}</span>
          </li>
          <li className={activeStep === 3 ? "active" : "normal"}>
            <span>4</span>
            <span>{steps[3]}</span>
          </li>
          <li className={activeStep === 4 ? "active" : "normal"}>
            <span>5</span>
            <span>{steps[4]}</span>
          </li>
          <li className={activeStep === 5 ? "active" : "normal"}>
            <span>6</span>
            <span>{steps[5]}</span>
          </li>
          <li className={activeStep === 6 ? "active" : "normal"}>
            <span>7</span>
            <span>{steps[6]}</span>
          </li>

          <li className={activeStep === 7 ? "active" : "normal"}>
            <span>8</span>
            <span>{steps[7]}</span>
          </li>
        
        </ul>
      </div>

      

    


     
     


      <div>

 

      <div class="breadcrumb">
      <div className="stepped">
      {activeStep === 0 ? "" : <span onClick={handleBack}><i class="fa fa-arrow-left" aria-hidden="true"></i>Back</span>}
      <span onClick={handleNext}><i class="fa fa-arrow-right" aria-hidden="true"></i>
        {activeStep === steps.length - 1 ? "Submit" : "Next"}
      </span>
      </div>
      </div>
      <div class="separator-breadcrumb border-top"></div>
      
      
          {activeStep === steps.length ? (
            <div className="stepscompleted">
              <p>All steps completed</p>
              <span onClick={handleReset}>Reset</span>
            </div>
          ) : (
           
            <div className="stepped">
           
              <p>{getStepContent(activeStep)}</p>
              
         
            
              
            
            </div>
          )}
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
