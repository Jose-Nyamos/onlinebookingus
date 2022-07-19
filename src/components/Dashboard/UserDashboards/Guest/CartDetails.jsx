
import React,{ useState, useEffect,useContext }  from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import GuestTopBar from './GuestTopBar';
import Sidebar from './Sidebar';

import { Widget,addResponseMessage  } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import { GuestBookingContext } from "../../../Properties/Context/GuestBookingContext";

import { useHistory } from "react-router-dom";

function CartDetails(){



    const booking = useContext(GuestBookingContext);


    const [bookingList, setbookingList] = useState([]);

    const [guestCart, setGuestCart] = useState([]);


    
    let my_cart=localStorage.getItem('bookingdata')
    my_cart=JSON.parse(my_cart)

    console.log("THE BOOKING DATA CART IS "+my_cart)

    console.log("THE CART STRINGFIED",JSON.stringify(my_cart))

    console.log("THE CONTEXT BOOKING DATA IS "+booking.bookingdata)

    //setGuestCart(my_cart)
 
	useEffect(()=>{

        
             setGuestCart(my_cart)


       

        addResponseMessage('Hi! Welcome to corporate Home US.This is our live support.In case you have any issue with booking, reach us on +13473227069');

    },[]);


  

     // console.log("MY CART LIST IS "+guestCart)

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
                               My BOOKING CART
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
                                            <h4 class='box-title '>CART DETAILS</h4>
                                        </div>
                                        <div className="col-4"></div>

                                        <div className="col-3">

                                        <div class="float-lg-right ml-4">
                                            <Link class='btn btn-success' to='/'>
                                              ADD NEW
                                            </Link>
                                        </div>
                                        </div>
                                 </div>
                                 <br />
                        <div class="table-responsive">
                            
                        <table class="display table table-striped table-bordered" id="zero_configuration_table"  width="100%">
                                <thead>
                                    <tr>
                                        
                                         <th scope="col">Property Id</th>
                                        <th scope="col">Property Name</th>
                                        <th scope="col">Start_date</th>
                                        <th scope="col">End_date</th>
                                        <th scope="col">Guests</th>
                                        <th scope="col">Per night</th>
                                        <th scope="col">Total_night</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>

                               

                                        <tr>
                                        <td>{guestCart.property_id}</td>
                                        <td>{guestCart.propertyName}</td>
                                       

                                        <td>{guestCart.startDate}</td>
                                        <td>{guestCart.endDate}</td>
                                        <td>{guestCart.guests}</td>
                                        <td>{guestCart.property_price}</td>
                                        <td>{guestCart.nights}</td>
                                        <td>{guestCart.base_price}</td>

                                       
                                       
                                        
                                        
                                        
                                        <td>
                                          <Link to="/payment">
                                          <button class="btn btn-success" type="button"><i class="fas fa-eye"></i></button>
                                          </Link>  
                                          
                                        </td>
                                    </tr>
                              
                                
            
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


export default CartDetails