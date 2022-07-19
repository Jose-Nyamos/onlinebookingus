
import React, { useCallback,useState,useEffect,useContext } from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { GuestBookingContext } from "../../Properties/Context/GuestBookingContext";

import moment from "moment";

import { AuthContext } from '../../../helpers/AuthContext'



const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#00ffff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#aab7c4" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
const {authState} = useContext(AuthContext);
const [success, setSuccess ] = useState(false)

const [payment_date,setPayment_date] = useState(moment(new Date()).format("MM/DD/YYYY"));
const stripe = useStripe()
const elements = useElements()

const booking = useContext(GuestBookingContext);


const [isLoading,setLoading]=useState(false);


let pname=localStorage.getItem('propertyName')
pname=JSON.parse(pname)

let pbprice=localStorage.getItem('Base_price')
pbprice=JSON.parse(pbprice)

let prop_id=localStorage.getItem('PropertyId')
 prop_id=JSON.parse(prop_id)

booking.setPropertyName(pname)

booking.setProduct(pname)

booking.setBase_price(pbprice)

const total_cost = Number(booking.base_price);

let bkg_id=localStorage.getItem('BookingId')
pbprice=JSON.parse(bkg_id)

const booking_id=bkg_id

const property_id=prop_id

booking.setUser_id(authState.id)


const handleSubmit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
    })


if(!error) {
    try {
        setLoading(true);
        const {id} = paymentMethod
        const response = await axios.post("https://onlinebookingus-app-test.herokuapp.com/payment", {
            amount: total_cost,
            booking_id:booking_id,
            property_id:property_id,
            UserId:booking.user_id,
            payment_date:payment_date,
            id
        })

        if(response.data.success) {
            console.log("Successful payment")
            setSuccess(true)

            setTimeout(() => {
                setLoading(false);
                toast.info('Payment Done Successfully');
                // navigate.push('/add-property');
                // navigate.push("/stripe");
            }, 2000);
    
        }

    } catch (error) {
        console.log("YOU HAVE A STRIPE EError", error)
    }
} else {
    console.log(error.message)
}
}

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

        <section class="widget-card">

   



        {!success ? 
            <form>
            <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputState">Card Details</label>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-6">
            {!isLoading && <button type="submit" onClick={handleSubmit} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>

        } 
        {isLoading &&
           <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-spinner fa-spin"></i>Saving Infor</button>
        }
            </div>
            </div>
            </form>
            :
            <div class="card text-left">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
               <h2>You just reserved {booking.product} congrats all the best in your stay</h2>
           </div> 
           </div> 
           </div> 
           </div> 
            }




            <ToastContainer />
         </section>
        </div>
        </div>
        </div>
  

)
}
