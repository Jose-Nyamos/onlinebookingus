import React, { useCallback,useState,useEffect,useContext } from "react";

import { PayPalButton } from "react-paypal-button-v2";

import { GuestBookingContext } from "../../Properties/Context/GuestBookingContext";


export default function PayPalButtonForm() {
    const booking = useContext(GuestBookingContext);
    return (
        <div>
    
    
        <div class="main-content-wrap sidenav-open d-flex flex-column">
       
        <div class="main-content">
            <div class="breadcrumb">
                <h1>Widget Card</h1>
                <ul>
                    <li><a href="#">Widgets</a></li>
                    <li>Widget Card</li>
                </ul>
            </div>
            <div class="separator-breadcrumb border-top"></div>

            <div class="row">
            <div class="col-md-6">
            <div class="card mb-5">
            <div class="card-body">

            <PayPalButton
            shippingPreference="NO_SHIPPING"
            amount={booking.property_price}
            options={{
              clientId:
                "AajoqTRta69Q2OAmnZ1efd6TmwZuo1Ty47VUBRFcCrWisgHiOZN1jOkAHemoSNBoDHJ7TIHoeymLKWGe"
            }}
            onSuccess={(details, data) => {
              console.log("Details---------->", details);
              console.log("Data------------->", data);
            }}
          />



            </div>
            </div>
            </div>
            </div>






    </div>
   </div>
   </div>

    )
}
