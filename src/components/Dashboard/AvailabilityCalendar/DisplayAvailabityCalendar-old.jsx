
import React, { useCallback,useState,useEffect,useContext } from "react";
// import {Link} from 'react-router-dom';
import Sidebar from './../Sidebar';
import Topbar from './../Topbar';

import { Helmet } from 'react-helmet';

import Calender from './Calender';
import bookingData from './data/bookings';
import roomData from './data/rooms';
import BookingHelper from '../../../../helpers/BookingHelper';
import PropertiesData from './data/rooms_api';

import { PropertiesDataContext } from "../../../../helpers/PropertiesDataContext";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Axios from "axios";



function DisplayAvailabityCalendar() {

  const my_property = useContext(PropertiesDataContext);
  

  
  const [startDate, setStartDate] = useState(new Date());


  const [endDate, setEndDate] = useState(new Date());

  const [bookingdata, setbookingdata] = useState([]);


let rooms = roomData;




useEffect(()=>{

  Axios.get("http://localhost:3001/booking/bookings").then((response) => {
    setbookingdata(response.data);

       console.log("THE BOOKING DATA IS"+bookingdata);
    });

},[]);

let bookings = bookingData;




  bookings = bookings.map((book, index) => {

    let today = new Date();
    today.setDate(today.getDate() + 2 * index  + Math.floor(Math.random() * 10) % 2 + 1);
    book.start_date = BookingHelper.formatDate(today);
    today.setDate(today.getDate() + Math.floor(Math.random() * 10) % 5 + 1);
    book.end_date = BookingHelper.formatDate(today);
    return book;
  });

  let viewStartDate = BookingHelper.formatDate(new Date());

  console.log('aa', bookings);
 
  console.log('ROOMS DATA NEW', rooms);


  
let dataCallback = (data) => {
  console.log('Exported Booking Data :: ', data);
   
}

 

    return (
        <div>
          <div class="text-left">
          <Helmet>
            <link rel="stylesheet" href="dist-assets/css/plugins/perfect-scrollbar.min.css" />
            <link rel="stylesheet" href="dist-assets/css/themes/lite-purple.min.css" />
  
  
  
        
          
            <link rel="stylesheet" href="dist-assets/css/plugins/smart.wizard/smart_wizard.min.css" />
            <link rel="stylesheet" href="dist-assets/css/plugins/smart.wizard/smart_wizard_theme_arrows.min.css" />
            <link rel="stylesheet" href="dist-assets/css/plugins/smart.wizard/smart_wizard_theme_circles.min.css" />
            <link rel="stylesheet" href="dist-assets/css/plugins/smart.wizard/smart_wizard_theme_dots.min.css" />
  
  
  
  
  
  
            <link rel="stylesheet" href="dist-assets/js/scripts/script.min.js" />
  
  
  
  
  
  
  
  
            {/* <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900" rel="stylesheet" /> */}
          <script type="text/javascript" src="dist-assets/js/plugins/jquery-3.3.1.min.js" />
            <script type="text/javascript" src="dist-assets/js/plugins/bootstrap.bundle.min.js" />
            <script type="text/javascript" src="dist-assets/js/scripts/script.min.js" />
            <script type="text/javascript" src="dist-assets/js/scripts/sidebar.large.script.min.js" />
            <script type="text/javascript" src="dist-assets/js/scripts/dashboard.v2.script.min.js" />
            <script type="text/javascript" src="dist-assets/js/plugins/datatables.min.js" />
            <script type="text/javascript" src="dist-assets/js/scripts/sidebar.large.script.min.js" />
            <script type="text/javascript" src="dist-assets/js/plugins/echarts.min.js" />
            <script type="text/javascript" src="dist-assets/js/scripts/echart.options.min.js" />
            <script type="text/javascript" src="dist-assets/js/plugins/datatables.min.js" />
          
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/perfect-scrollbar/1.5.3/perfect-scrollbar.min.js" />
         
            <script src="dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
  
  
          
        
          <script type="text/javascript" src="dist-assets/js/plugins/jquery.smartWizard.min.js"></script>
          <script type="text/javascript" src="dist-assets/js/scripts/smart.wizard.script.min.js"></script>
         
         
         
            </Helmet>
        
          <div class="app-admin-wrap layout-sidebar-large">
            <Topbar />
            <Sidebar />

            <div class="main-content-wrap sidenav-open d-flex flex-column">


            <div class="row mb-8">
                        <div class="col-md-12 mb-3">
                            <div class="card text-left">

                            

                                <div class="card-body">
                                <div class="row">
                                <div class="col-md-12">
                                  <div class="box">
                                    <div class="box-body">
                                   
                                                <div class="col-md-3 col-sm-12 col-xs-12">
                                                  <label>Starting Date</label>
                                                  <div class="input-group date mg-check-in">
                                                    <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                                    <div className="col-md-3 ">

                                                    <DatePicker   selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="yyyy-MM-dd" />
                                                  
                                            </div>
                                                  </div>
                                                </div>
                                                <div class="col-md-3 col-sm-12 col-xs-12">
                                                  <label>Ending Date</label>
                                                  <div class="input-group date mg-check-in">
                                                    <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                                    <div className="col-md-3 ">
                                                    <DatePicker selected={endDate}  onChange={(date) => setEndDate(date)} 
                                      dateFormat="yyyy-MM-dd"  />
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-12 col-xs-12">
                                                  <label>Number of days to display</label>
                                                  <input class="form-control" name="number_of_days"  id="number_of_days" placeholder="Number of days to display"  type="number" min="1"/>
                                                </div>
                                                <div class="col-md-3 col-sm-12 col-xs-12" style={{marginTop: "5px"}}>
                                                  <br/>
                                                  <button type="submit" name="btn" style={{width: "100%"}} class="btn btn-primary btn-flat">Display the selected number of days</button>
                                                </div>
                                      
                                    </div>
                                  </div>
                                </div>
                              </div>

                                </div>
                      </div>
                      </div>
            </div>
   
           

            <div class="row mb-8">
                        <div class="col-md-12 mb-3">
                            <div class="card text-left">

                            

                                <div class="card-body">

                <Calender rooms={rooms} bookings={bookings} bookingDataCallback={dataCallback} viewStartDate={viewStartDate} ></Calender>

               




           </div>
           </div>
           </div>
           </div>
           </div>
           
          </div>
         
        </div>
              
          </div>
      )
}

export default DisplayAvailabityCalendar;
