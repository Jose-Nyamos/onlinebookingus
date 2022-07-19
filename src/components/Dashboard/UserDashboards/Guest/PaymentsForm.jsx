import React, { useCallback,useState,useEffect,useContext } from "react";

//import './utils/css/style.css';

import { GuestBookingContext } from "../../../Properties/Context/GuestBookingContext";

import { useHistory } from "react-router-dom";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import currencies from "../../Properties/utils/commonCurrency.json";


import { AuthContext } from '../../../../helpers/AuthContext'

import axios from "axios";

export default function PaymentsForm() {

    const [isLoading,setLoading]=useState(false);

    const booking = useContext(GuestBookingContext);

    const [paymentmethod, setPaymentMethod] = useState('');

    const [currency_code, setCurrencyCode] = useState("USD");

    const [currencyFrom, setCurrencyFrom] = useState("USD");



    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focusedInput, setFocusedInput] = useState(null);


    const [propertyList, setpropertyList] = useState([]);



  // const [property_id, setPropertyId] = useState(0);
  const [UserId, setUserId] = useState("");
  const [user_id, setUser_id] = useState("");
  const [guest, setGuest] = useState(2);

  const [per_night, setPer_night] = useState(167);

  const [total, setTotal] = useState(570);

  const [total_night, setTotal_night] = useState(3);

  const [host_id, setHost_id] = useState(1);


  const [userObject, setUserObject] = useState({});

  const [priceObject, setPriceObject] = useState([]);


  
  const [first_name, setfirst_name] = useState("");


  const [email, setEmail] = useState("");

  const [phone_no, setPhone_no] = useState("");

  const [guest_name, SetGuest_name] = useState("");


  const [servicefee, setServiceFee] = useState(25);




  const [address, setAddress] = React.useState("");

  const [cleaningFee, setCleaningFee] = React.useState(10);

    //const {authState} = useContext(AuthContext);

   // const [paymentmethod, setPaymentMethod] = useState("");

   let pname=localStorage.getItem('propertyName')
   pname=JSON.parse(pname)

   let pbprice=localStorage.getItem('Base_price')
   pbprice=JSON.parse(pbprice)

   let prop_id=localStorage.getItem('PropertyId')
   prop_id=JSON.parse(prop_id)

    let start_d=localStorage.getItem('startDate')
    start_d=JSON.parse(start_d)

   let end_d=localStorage.getItem('endDate')
   end_d=JSON.parse(end_d)


   

   const s_d = new Date(start_d);

   const e_d = new Date(end_d);


    let total_nts=localStorage.getItem('TotalNights')
    total_nts=JSON.parse(total_nts)

   

   booking.setPropertyName(pname)

  

    booking.setProperty_id(prop_id)
    booking.setStartDate(start_d)
    booking.setEndDate(end_d)
    booking.setNights(total_nts)

 


    booking.setBase_price(pbprice)

   const total_cost = Number(pbprice)




  

    const navigate = useHistory();


    const [authState, setAuthState] = useState({
        username:"",
        first_name:"",
        phone_no:"",
        email:"",
        role:"",
        id:0,
        status:false,
      });



      let my_cart=localStorage.getItem('bookingdata')
      my_cart=JSON.parse(my_cart)

      console.log("THE BOOKING DATA CART IS "+my_cart)

      console.log("THE CART STRINGFIED",JSON.stringify(my_cart))

      console.log("THE CONTEXT BOOKING DATA IS "+booking.bookingdata)



    useEffect(()=>{
        axios.get('https://onlinebookingus-app-test.herokuapp.com/users/auth',{headers:{
          accessToken:localStorage.getItem("accessToken"),
        }}).then((response)=>{
    
        if(response.data.error){
          setAuthState({...authState,status:false});
        }
        else{
          setAuthState({
            username:response.data.username,
            first_name:response.data.first_name,
            phone_no:response.data.phone_no,
            email:response.data.email,
            role:response.data.role,
            id:response.data.id,
            status:true,
    
          });

        
    
          console.log("USER DETAILS IN PAYMENT FORM",authState);
        }
          
        })
       
     },[]);
     booking.setFirst_name(authState.first_name)
     booking.setLast_name(authState.first_name)
     booking.setPhoneno(authState.phone_no)
     booking.setUser_id(authState.id)



    const CheckOut = () => {
            
        setLoading(true);


    //setPropertyId(prop_id)
    setStartDate(start_d)
    setEndDate(end_d)
    setTotal_night(total_nts)
    setTotal(total_cost)


        axios.post("https://onlinebookingus-app-test.herokuapp.com/booking", {
          host_id: host_id,
          user_id:booking.user_id,
          UserId:booking.user_id,
          guest_name:first_name,
          PropertyId:booking.property_id,
          start_date:s_d,
          end_date: e_d,
          guest: guest,
          per_night:per_night,
          service_charge:servicefee,
          cleaning_charge:cleaningFee,

          total_night: total_night,
          total: booking.base_price,
        }).then((response) => {

          console.log("THE BOOKING DATA IS ",response);

          console.log("THE BOOKING ID IS ",response.data.id);


          localStorage.setItem('BookingId',response.data.id)

        

          setTimeout(() => {
            setLoading(false);
            toast.info('Information Saved');
            // navigate.push('/add-property');
            if(paymentmethod=='paypal'){
                console.log("PAYMENT METHOD "+paymentmethod)
                navigate.push("/paypal");
               
            }
            else{
                console.log("PAYMENT METHOD "+paymentmethod);
                navigate.push("/stripe");
            }

          
        }, 4000);
        });


        


    };


    const handleSelectFrom = (event) => {
        const { value } = event.target;
        setCurrencyFrom(value);
        setCurrencyCode(value);
      };

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

  <div class="row mb-4">

  <div class="col-md-8">
      <div class="card text-left">
          <div class="card-body">
              <div class="row">
                  <div class="col-6">

                  <div class="woocommerce-billing-fields">

                  <h3>Billing details</h3>

                  <div class="woocommerce-billing-fields__field-wrapper">


                  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First name</label>
      <input type="text" class="form-control"  value={booking.user_id} id="inputEmail4" placeholder="First Name"/>
      <input type="text" class="form-control"  value={booking.first_name} id="inputEmail4" placeholder="First Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" class="form-control"  value={booking.last_name} id="inputPassword4" placeholder="Last name"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Phone</label>
    <input type="text" class="form-control" value={booking.phoneno} id="inputAddress" placeholder="1234 Main St"/>
  </div>

  <div class="form-group">
    <label for="inputAddress">Email Address</label>
    <input type="email" class="form-control" value={authState.email} id="inputAddress" placeholder="1234 Main St"/>
  </div>

  </div>
  </div>

                  
                      
                  </div>
                  <div class="col-6">

                  <div class="woocommerce-additional-fields">

                  <h3>Additional information</h3>

                  <div class="woocommerce-additional-fields__field-wrapper">
                  <div class="form-group">
                  <label for="exampleFormControlTextarea1">Order notes (optional)</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5">Notes About Your Order</textarea>
                </div>

                          
                  </div>

              </div>

                  


                      
                  </div>
              </div>

              <div class="row">
              <div class="col-12">
              <h3 id="order_review_heading">Your order</h3>

              <div id="order_review" class="woocommerce-checkout-review-order">
              <table class="table table-bordered">
                  <thead>
                      <tr>
                          <th class="product-name">Product</th>
                          <th class="product-total">Subtotal</th>
                      </tr>
                  </thead>
                  <tbody>

                  <tr class="cart_item">
                  <td class="product-name">
                     <strong> </strong> { booking.propertyName}  <span style={{color: "#555;"}}>&nbsp; </span> </td>
                  <td class="product-total">
                      <span class="woocommerce-Price-currencySymbol">  </span><span class="woocommerce-Price-amount amount"> </span>
                  </td>
              </tr>




                  </tbody>
                  <tfoot>

                  <tr class="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td><span class="woocommerce-Price-currencySymbol">$ <span class="woocommerce-Price-amount amount">{booking.base_price} </span></span>
                                        </td>
                                    </tr>

                                    <tr class="order-total">
                                        <th>Total</th>
                                        <td><strong><span class="woocommerce-Price-currencySymbol">$ <span class="woocommerce-Price-amount amount">{booking.base_price} </span></span></strong> </td>
                                    </tr>



                  </tfoot>


              
             </table>
              </div>
              </div>
              </div>



             



              <div class="row">
              <div class="col-12">

              <div class="form-group ">
      <label for="inputState">Select Country:</label>
      <select class="form-control"  onChange={handleSelectFrom} value={currency_code}>
    {Object.keys(currencies).map((currency, index) => (
      <option value={currency} key={index}>
        {currency} - {currencies[currency].name}
      </option>
    ))}
  </select>
    </div>




              </div>
              
              
              </div>



              <div class="row">
              <div class="col-12">
              <div id="payment" class="woocommerce-checkout-payment">
              <h3 id="payent-heading-title">Choose Payment Method:</h3>

              <ul class="wc_payment_methods payment_methods methods" id="payment-method-select">
           
              <li class="wc_payment_method payment_method_paypal">
              <input id="payment_method_payal" type="radio" class="input-radio" name="payment_method"  value="paypal"  onChange={(event) => {
                setPaymentMethod(event.target.value);
              }}  
             data-order_button_text=""/>

              <label for="payment_method_paypal">  Paypal </label>
          </li>
        

        <li class="wc_payment_method payment_method_stripe">
        <input id="payment_method_stripe" type="radio" class="input-radio" name="payment_method"  value="stripe"

        onChange={(event) => {
            setPaymentMethod(event.target.value);
          }} 
        
         data-order_button_text=""/>

        <label for="payment_method_stripe"> Stripe</label>
       
        </li>

        </ul>
        </div>
        


              </div>
              
              
              </div>


              {!isLoading && <button type="submit" onClick={CheckOut} class="advanced_search_submit_button" value="Search">Continue</button>

            }
            {isLoading &&
              <button type="submit" class="advanced_search_submit_button" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Data....</button>
            }

            







          </div>
      </div>
  </div>
  <div class="col-md-4 mb-4">
      <div class="card text-left">
          <div class="card-body">
              <h4 class="card-title mb-2">{booking.propertyName}  </h4>

              <div class="col-lg-12 col-xl-12 mt-3">
              <div class="card">
              <img class="d-block w-100 rounded rounded"  src="../../dist-assets/images/products/9-1-1-1-143x83.jpg" alt="First slide" />
              <div class="wprentals_sidebar_cart">
              <div class="wprentals_sidebar_cart_unit">
                  <h3 style={{fontSize:"24px, color:#50adbc,text-transform, capitalize"}}></h3>
                  <div class="wpestate_cart_item"><span>Price:</span> <span class="woocommerce-Price-currencySymbol"></span><span class="woocommerce-Price-amount amount"> </span>
                  </div>
                  <div class="wpestate_cart_item"><span>Property Name:</span>{booking.propertyName} </div>
                  <div class="wpestate_cart_item"><span>Property Location:</span> Avon Park, Florida </div>
                  <div class="wpestate_cart_item"><span>Property Type:</span> Apartment </div>
                  <div class="wpestate_cart_item"><span>Period:</span> From {booking.startDate} To {booking.endDate}</div>
                  <div class="wpestate_cart_item"><span>No of guest:</span>{booking.guests}</div>
                  
              </div>
              <h4>Total: <span class="woocommerce-Price-currencySymbol">$ </span><span class="woocommerce-Price-amount amount">{booking.base_price} </span></h4>
          </div>
              </div>
          </div>
             
             
          </div>
      </div>
  </div>

  
  
</div>

        

        
          
        </section>
    </div>
    <div class="flex-grow-1"></div>
    <div class="app-footer">
        <div class="row">
            <div class="col-md-9">
                <p><strong>Gull - Laravel + Bootstrap 4 admin template</strong></p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quis beatae officia saepe perferendis voluptatum minima eveniet voluptates dolorum, temporibus nisi maxime nesciunt totam repudiandae commodi sequi dolor quibusdam
                    <sunt></sunt>
                </p>
            </div>
        </div>
        <div class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
            <a class="btn btn-primary text-white btn-rounded" href="https://themeforest.net/item/gull-bootstrap-laravel-admin-dashboard-template/23101970" target="_blank">Buy Gull HTML</a>
            <span class="flex-grow-1"></span>
            <div class="d-flex align-items-center">
                <img class="logo" src="../../dist-assets/images/logo.png" alt=""/>
                <div>
                    <p class="m-0">&copy; 2018 Gull HTML</p>
                    <p class="m-0">All rights reserved</p>
                </div>
            </div>
        </div>
    </div>

</div>
        
    </div>
)
}

