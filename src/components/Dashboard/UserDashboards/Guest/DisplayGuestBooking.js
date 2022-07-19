
import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import GuestTopBar from './GuestTopBar';
import Sidebar from './Sidebar';

import { Widget,addResponseMessage  } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function DisplayGuestBooking() {


    const [bookingList, setbookingList] = useState([]);
 
	useEffect(()=>{

        Axios
        .get("https://onlinebookingus-app-test.herokuapp.com/users/mybookings", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {


            setbookingList(response.data.myBookings)


        });

        addResponseMessage('Hi! Welcome to corporate Home US.This is our live support.In case you have any issue with booking, reach us on +13473227069');

    },[]);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // // Now send the message throught the backend API
        // addResponseMessage(newMessage);
      };
  return (
    <div class='text-left'>


    <div class='app-admin-wrap layout-sidebar-large'>
      <Sidebar/>
        <GuestTopBar/>
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
    
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
                <section class='content-header'>
                    <div class="row">
                        <div class="col-4">
                            <h3>
                                My Bookings
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

            
            <div class="col-md-12 mb-3">
                <div class="card text-left">
                    <div class="card-body">
                    <div class="row">
                                    <div className="col-4 ml-3">
                                            <h4 class='box-title '>All My Booking</h4>
                                        </div>
                                        <div className="col-4"></div>

                                        <div className="col-3">

                                        <div class="float-lg-right ml-4">
                                            <Link class='btn btn-success' to='/'>
                                               New Booking
                                            </Link>
                                        </div>
                                        </div>
                                 </div>
                                 <br />
                        <div class="table-responsive">
                            
                        <table class="display table table-striped table-bordered" id="zero_configuration_table"  width="100%">
                                <thead>
                                    <tr>
                                        
                                        <th scope="col">Booking Id</th>
                                        <th scope="col">Property Name</th>
                                        <th scope="col">start_date</th>
                                        <th scope="col">end_date</th>
                                        <th scope="col">per night</th>
                                        <th scope="col">total_night</th>
                                        <th scope="col">total</th>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                { bookingList.map((booking, index) => (

                                        <tr key={ index}>
                                        <td>{booking.id }</td>
                                        <td>{booking.Property.name }</td>
                                        <td>{ booking.start_date }</td>
                                        <td>{ booking.end_date }</td>
                                        
                                        <td>{ booking.per_night }</td>
                                        <td>{ booking.total_night }</td>
                                        <td>{ booking.total }</td>
                                        
                                        <td>
                                          <Link to={`/guest-review/${booking.id}`}>
                                          <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
                                          </Link>  
                                            <button class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
                                        </td>
                                    </tr>
                                    )) }
                                
            
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

                
           <Widget 

        handleNewUserMessage={handleNewUserMessage}
      
        title="Live customer support"
        subtitle="24/7 customer support"
        
      
        />
            </div>
        </div>
    </div>
</div>
  )
}

export default DisplayGuestBooking