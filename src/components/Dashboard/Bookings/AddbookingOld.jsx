import React, { useCallback,useState,useEffect,useContext } from 'react'
// import "react-datepicker/dist/react-datepicker.css";
// import '../../../../../assets/wp-content/themes/wprentals/css/fontawesome/css/font-awesome.min.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { enGB } from 'date-fns/locale'

import Axios from "axios";
import { Link } from "react-router-dom";
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import AddCustomerForm from '../Customers/AddCustomerForm';
import { useHistory } from "react-router-dom";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
//import LocationDetails from './LocationDetails';


import { DateRangePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';




const Addbooking = () => {
    const [value, setValue] = useState(null);
 
    const [usersList, setUsersList] = useState([]);
    const [properties, setProperties] = useState([]);


    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);


    const [propertyList, setpropertyList] = useState([]);



   const [PropertyId, setPropertyId] = useState(40);
  const [UserId, setUserId] = useState("");
  const [user_id, setUser_id] = useState("");
  const [guest, setGuest] = useState(2);

  const [per_night, setPer_night] = useState("");

  const [total, setTotal] = useState(570);

  const [total_night, setTotal_night] = useState(4);

  const [host_id, setHost_id] = useState(12);


  const [userObject, setUserObject] = useState({});

  const [priceObject, setPriceObject] = useState([]);


  
  const [first_name, setfirst_name] = useState("");


  const [email, setEmail] = useState("");

  const [phone_no, setPhone_no] = useState("");




  const [address, setAddress] = React.useState("");

      
 const [isLoading,setLoading]=useState(false);
    
    
    

    const history = useHistory();




    const handleDatesChange = ({ startDate, endDate }) => {
      setStartDate(startDate);
      setEndDate(endDate);
    };



  
    useEffect(()=>{

      Axios.get("http://localhost:3001/property/allproperties").then((response) => {
          setpropertyList(response.data);
        });

        Axios.get("http://localhost:3001/users/customers").then((response) => {
                   setUsersList(response.data);
                  // setUsers(response.data);
                 });

  },[]);



  const handleUserChange=(event) => {
    setUser_id(event.target.value);

    Axios.get(`http://localhost:3001/users/getuser/${user_id}`).then((response) => {
     // setUserObject(response.data);

      console.log("THIS IS WHAT HAPPENS "+JSON.stringify(response.data));
      setUserObject(JSON.stringify(response.data));


      var my_user_object = JSON.parse(userObject);

      setfirst_name(my_user_object.first_name);

      setEmail(my_user_object.email);

      setPhone_no(my_user_object.phone_no);


   

      
     

    //  console.log("F NAME "+per_night);


    });

    
   };



   const getOptions=(event)=>{


    setPropertyId(event.target.value);

    const res=Axios.get(`http://localhost:3001/propertyprices/byPropertyId/${PropertyId}`)
     // setUserObject(response.data);

     const data = res.data


     const options = data.map(d => ({
        "value" : d.id,
        "label" : d.price
  
      }))

      setPriceObject({selectOptions: options})



      console.log("Property price "+JSON.stringify(response.data));
      setPriceObject(response.data);

    
     console.log("PRICE "+priceObject);



   }


   const handlePropertyChange=(event) => {

    // this.setState({ value: event.target.value });
    setPropertyId(event.target.value);

    Axios.get(`http://localhost:3001/propertyprices/byPropertyId/${PropertyId}`).then((response) => {
     // setUserObject(response.data);

      console.log("Property price "+JSON.stringify(response.data));
      setPriceObject(response.data);

    
     console.log("PRICE "+priceObject);


    });

    
   };


  
   
    const add_customer = () => {
        history.push('/addbookings');
      };

      const saveBookingDetails = () => {
            
        setLoading(true);
        Axios.post("http://localhost:3001/booking", {
          host_id: host_id,
          user_id: user_id,
          PropertyId:PropertyId,
          start_date:startDate,
          end_date: endDate,
          guest: guest,
          total_night: total_night,
          total: total,
        }).then((response) => {

          console.log("PROPERTY DATA IS ",response);

          console.log("PROPERTY ID is ",response.data.id);

        



          setTimeout(() => {
            setLoading(false);
            toast.info('Information Added successfully');
            // navigate.push('/add-property');
           // navigate.push(`/mdb-stepper/${response.data.id}`);
        }, 4000);
        
        });
      }




return (
<div>

<div class="main-content-wrap sidenav-open d-flex flex-column">
            {/* <!-- ============ Body content start ============= --> */}
            <div class="main-content">
              
                <section class="content-header">
                    <h3>
                        Bookings
                        <small>Add Manual Booking</small>
                    </h3>
                    <ol class="breadcrumb">
                    <li><a href="http://localhost:8000/admin/dashboard"><i class="fa fa-dashboard"></i> Home</a></li>
                    </ol>  
                    </section>

                    <div class="box-body">
          
              <div class="col-md-12">
                <div class="row">
                      <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="col-md-4 col-sm-6 col-xs-12">
                                <label>Property </label>
                                <select class="form-control select2" name="property_id" 

                                onChange={handlePropertyChange}
                                
                                
                                id="property_id" tabindex="-1" aria-hidden="true">
                                    <option value="">Please select one</option>
                                    {propertyList.map((value, key) => {
                                      return (
                                    <option value={value.id}>{value.name} {value.id}</option>

                                    
                                    );
                                  })}
                                            
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12 input-mb">
                                   
                                    <label>From - To</label>
                            
                                    
                                    <DateRangePicker
                                    class="form-control"
                                    startDate={startDate}
                                    startDateId="tata-start-date"
                                    endDate={endDate}
                                    endDateId="tata-end-date"
                                    onDatesChange={handleDatesChange}
                                    focusedInput={focusedInput}
                                    onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                                  />
                                
                                    </div>
                                  
                                    <div class="col-md-2 col-sm-6 col-xs-12">
                                        <label>Guest</label>
                                        <select id="admin-search-guests"


                                        onChange={(event) => {
                                          setGuest(event.target.value);
                                      }}
                                        
                                        
                                        name="no_of_guest" class="form-control black-select propertySearchParam">
                                   <option value="1">1 Guest</option>
                                    <option value="2"> 2 Guests </option>
                                    <option value="3"> 3 Guests </option>
                                    <option value="4"> 4 Guests </option>
                                    <option value="5"> 5 Guests </option>
                                    <option value="6"> 6 Guests </option>
                                    <option value="7"> 7 Guests </option>
                                    <option value="8"> 8 Guests </option>
                                    <option value="9"> 9 Guests </option>
                                    <option value="10"> 10 Guests </option>
                                    <option value="11"> 11 Guests </option>
                                    <option value="12"> 12 Guests </option>
                                    <option value="13"> 13 Guests </option>
                                    <option value="14"> 14 Guests </option>
                                    <option value="15"> 15 Guests </option>
                                    <option value="16"> 16+ Guests </option>
                                </select>
                              </div>
                      </div>

                      <div class="col-md-12 col-sm-12 col-xs-12">
                          <div class="col-md-3 col-sm-4 col-xs-12">
                                <label>Customer<span style={{color: 'red !important' }}>*</span></label>
                                <select id="booking_customer_id" name="booking_customer_id" 
                                
                                onChange={handleUserChange}
                                
                                
                                class="form-control select2 select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                                      <option value=""> Select Customer</option>
                                      {usersList.map((value, key) => {
                                        return (
                                      <option value={key} selected="'selected'">{value.first_name}</option>
                                      
                                      );
                                    })}
                                         </select>
                                     
                          </div>
                          <div className="col-md-1 form-group mt-2">
                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                            {(popupState) => (
                                                <div>
                                                {/* <Button variant="contained" {...bindTrigger(popupState)}>
                                                    Open Popover
                                                </Button> */}
                                                
                                                <button class="btn btn-info btn-icon mt-3"  variant="contained" {...bindTrigger(popupState)} data-toggle="modal"  type="button"><span class="ul-btn__icon"><PersonAddIcon /></span></button>
                                              
                                                <Popover
                                                    {...bindPopover(popupState)}
                                                    anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left',
                                                    }}
                                                    transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                    }}
                                                >
                                                    <AddCustomerForm />
                                                       
                                                   
                                                    
                                                </Popover>
                                                </div>
                                            )}
                                            </PopupState>
                                            </div>                          {/* <!-- <div class="col-sm-2 col-md-1">
                             <label>&nbsp;</label>
                          </div> --> */}

                          <div class="col-md-2 col-sm-3 col-xs-12">
                                <label>First Name<span style={{color: 'red !important'}}>*</span></label>
                                <input type="text" value={first_name} class="form-control" name="booking_first_name"

                                
                                
                                id="booking_first_name" readonly="true" />
                                <span id="booking_first_name-error" class="text-danger"></span>
                          </div>
                          <div class="col-md-2 col-sm-3 col-xs-12">
                                <label>Last Name<span style={{color: 'red !important'}}>*</span></label>
                                <input type="text" class="form-control" name="booking_last_name" id="booking_last_name" value="Host" readonly="true" />
                                <span id="booking_last_name-error" class="text-danger"></span>

                          </div>
                          <div class="col-md-4 col-sm-3 col-xs-12">
                                <label>Email<span style={{color: 'red !important'}}>*</span></label>
                                <input type="email" class="form-control"  name="booking_email" id="booking_email"  value={email} readonly="true" />
                                <span id="booking_email-error" class="text-danger"></span>
                          </div>

                           <div class="col-md-4 col-sm-3 col-xs-12">
                           <label>Phone<span style={{color: 'red !important'}}>*</span></label>

                                            <PhoneInput
                                            international
                                            defaultCountry="US"
                                            placeholder="Enter phone number"
                                            value={phone_no}
                                            onChange={setValue}/>
                                        </div> 

                          <div class="col-md-4 col-sm-3 col-xs-12">
                            <label>Payment Country</label>
                            <select name="payment_country" id="country-select" data-saving="basics1" class="form-control mb20 select2 select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AO">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            
                                                            
                                                         
                                                          </select>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            
                                        </div>  
                {/* <!-- end of row--> */}
                <div class="row">
            {/* <!-- ============ Body content start ============= --> */}
            <div class="col-md-12 ">
              <div className="container_fluid">

            

                       

                                {/* { customers.map((customers, key) => ( */}
                               
                                 

                               

                                
                                        {/* <select class="form-select"  onChange={(event) => {
                                            setBedrooms(event.target.value);
                                        }} aria-label="Default select example">
                                        
                                            <option selected>Open this select menu</option>
                                            {amenities.map((d,key) => {
                                                return (
                                            <option value={d.title}>{d.title}</option>
                                            
                                            );
                                        })}
                                        </select> */}

                                        {/* <Link><PersonAddAltIcon /></Link> */}
                                       
                                      
                                            
                                    

                                       

                                       
                                       {/* <div class="col-md-3 form-group mb-3">
                                            <label for="picker1">Customers</label>
                                            <select class="form-control form-control-rounded">
                                            {users.map((value, key) => {
                                            return (
                                                <option value={value.first_name}>{value.first_name} {value.last_name}</option>
                                                );
                                            })}
                                            </select>
                                        </div> */}
                                       
                        

                                     

                                    

                                        {/* <div class="col-md-8 form-group mt-2 p-3">
                                          <DateRangePicker
                                            startDate={startDate}
                                            endDate={endDate}
                                            onStartDateChange={setStartDate}
                                            onEndDateChange={setEndDate}
                                            minimumDate={new Date()}
                                            minimumLength={1}
                                            format='dd MMM yyyy'
                                            locale={enGB}
                                            >
                                            {({ startDateInputProps, endDateInputProps, focus }) => (
                                                <div className='date-range'>
                                                <input
                                                    className={'input' + (focus === START_DATE ? ' -focused' : '')}
                                                    {...startDateInputProps}
                                                    placeholder='Start date'
                                                />
                                                <span className='date-range_arrow' />
                                                <input
                                                    className={'input' + (focus === END_DATE ? ' -focused' : '')}
                                                    {...endDateInputProps}
                                                    placeholder='End date'
                                                />
                                                </div>
                                            )}
                                            </DateRangePicker>
                                            </div> */}

                                            <div className="col-md-12">
                                            <div class="box-body">
                                                    {/* <div id="loader" class="display-off" style={{minHeight:200, width:100, textAlign:'center', opacity:0.9, paddingTop: 110}}>
                                                        <img src="http://localhost:8000/front/img/green-loader.gif" />
                                                    </div> */}
                                                    <div id="booking-banner" class="banner-bar" style={{display: 'block'}}>
                                                            <div class="banner-bar-bg">
                                                                <div class="col-lg-12" style={{backgroundColor: '#000', opacity: 0.45 ,color: '#fff', minHeight: 42
                                                            }}>
                                                                <div class="white_color pull-left h4">$ <span id="rooms_price_amount" value="">{per_night}</span></div>
                                                                <div class="white_color pull-right h6">
                                                                    <div id="per_night" class="per-night">
                                                                    Per Night
                                                                    </div>
                                                                    <div id="per_month" class="per-month display-off">
                                                                    Per Month
                                                                    <i id="price-info-tooltip" class="icon icon-question hide" data-behavior="tooltip"></i>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    
                                                    <div class="clearfix"></div>
                                                    <div id="booking-price" class="panel panel-default" style={{display: 'block'}}>
                                                            <div class="margin-top10">
                                                       
                                                                <input type="hidden" id="property_id" name="property_id" value="14" />
                                                                <input type="hidden" id="price_tooltip" value="" />
                                                                <input type="hidden" id="checkin" name="checkin" value="24/01/2022" />
                                                                <input type="hidden" id="checkout" name="checkout" value="25/01/2022" />
                                                                <input type="hidden" id="guests" name="number_of_guests" value="1" />
                                                                <input type="hidden" name="booking_type" id="booking_type" value="instant" />
                                                                <input type="hidden" name="default_country" id="default_country" class="form-control" value="us" />
                                                                <input type="hidden" name="carrier_code" id="carrier_code" class="form-control" value="1" /> 
                                                                <input type="hidden" name="formatted_phone" id="formatted_phone" class="form-control" value="+13473227069" />
                                                                <input type="hidden" name="customers_id" id="customers_id" value="1" />
                                                                <input type="hidden" name="firsts_name" id="firsts_name" value="corporate Home US" />
                                                                <input type="hidden" name="lasts_name" id="lasts_name" value="Host" />
                                                                <input type="hidden" name="emails" id="emails" value="corporatehomeus@gmail.com"/>
                                                                <input type="hidden" name="country" id="country" value="US" />
                                                                <div id="book_it">
                                                                <div class="js-subtotal-container booking-subtotal panel-padding-fit" style={{padding: 12}}>
                                                                    <div class="table table-bordered price_table" id="booking_table" style={{display: 'block'}}>
                                                        
                                                                            <div class="form-group row">
                                                                                <label class="control-label col-sm-4" for="email">$<span id="rooms_price_amount_1" value="">0</span> x <span id="total_night_count" value="">1</span>&nbsp;night</label>
                                                                                <div class="col-sm-8">
                                                                                            <div class="input-group">
                                                                                            <span class="input-group-addon">$</span>
                                                                                            <input id="total_night_price" type="text" class="form-control qty"

                                                                                            onChange={(event) => {
                                                                                              setTotal_night(event.target.value);
                                                                                          }}
                                                                                            
                                                                                            
                                                                                            name="total_night_price" value="0" />
                                                                                            </div>
                                                                                        <span id="custom_price" class="fa fa-info-circle" style={{color: 'rgb(13, 179, 124)', display: 'none'}} data-html="true" data-toggle="tooltip" data-placement="top" title=""></span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group row">
                                                                                <label class="control-label col-sm-4" for="email">Service fee</label>
                                                                                <div class="col-sm-8">
                                                                                    <div class="input-group">
                                                                                        <span class="input-group-addon">$</span>
                                                                                        <input id="service_fee" type="text" class="form-control qty" name="service_fee" value="0" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                            
                                                                            <div class="form-group row additional_price" style={{display: 'none'}}>
                                                                                <label class="control-label col-sm-4" for="email">Additional Guest Fee</label>
                                                                                <div class="col-sm-8">
                                                                                    <div class="input-group">
                                                                                        <span class="input-group-addon">$</span>
                                                                                        <input id="additional_guest" type="text" class="form-control qty" name="additional_guest" value="0" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                
                                                                            <div class="form-group row security_fee">
                                                                                <label class="control-label col-sm-4" for="email">Security Fee</label>
                                                                                <div class="col-sm-8">
                                                                                    <div class="input-group">
                                                                                        <span class="input-group-addon">$</span>
                                                                                        <input id="security_fee" type="text" class="form-control qty" name="security_fee" value="0" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                        
                                                                            <div class="form-group row cleaning_price" style={{display: 'none'}}>
                                                                                <label class="control-label col-sm-4" for="email">Cleaning Fee</label>
                                                                                <div class="col-sm-8">
                                                                                    <div class="input-group">
                                                                                        <span class="input-group-addon">$</span>
                                                                                        <input id="cleaning_fee" type="text" class="form-control qty" name="cleaning_fee" value="0" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group row">
                                                                                <label class="control-label col-sm-4" for="email">Total</label>
                                                                                <div class="col-sm-8">
                                                                                    <div class="input-group">
                                                                                        <span class="input-group-addon">$</span>
                                                                                        <input id="total" type="text" class="form-control total" onChange={(event) => {
                                                                                          setTotal(event.target.value);
                                                                                      }} name="total" value="0" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                <div id="book_it_disabled" class="text-center" style={{display:'none'}}>
                                                                    <p id="book_it_disabled_message" class="icon-rausch">
                                                                    Dates Not Available
                                                                    </p>
                                                                </div>
                                                                <div class="book_btn col-md-12 mb20">


                                                                {!isLoading &&  <button type="submit" id="bookingConfirm" onClick={saveBookingDetails} class="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                                                Book Now
                                                               </button>

              } 
              {isLoading &&
                 <button type="submit" id="bookingConfirm" class="col-md-12 col-sm-12 col-xs-12 btn btn-success" disabled> <i class="fas fa-spinner fa-spin"></i>Saving Infor</button>
              }



                                                                   
                                                                </div> 
                                                                <p class="col-md-12 text-center">You’ll be able to review before paying.</p>
                                                                </div>
                                                                <input id="hosting_id" name="hosting_id" type="hidden" value="14" />
                                                            
                                                            </div>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                    </div>
                                                    </div>
                                 
                                 
                         
                    </div>
                    </div>
            {/* <!-- Footer Start --> */}
            <div class=" col-md-12 flex-grow-1"></div>
            <footer class="main-footer">
                <div class="pull-right hidden-xs">
                    <b>Version</b> 1.0.0
                </div>
                <strong>Copyright © 2016-2022 <a href="#">Corporate Home US</a>.</strong> All rights
                reserved.
                </footer>
    
            {/* <!-- fotter end --> */}
        </div>
                {/* <!-- end of row--> */}
                {/* <!-- end of main-content --> */}
                </div>
                {/* <!-- Footer Start --> */}
            <div class="flex-grow-1"></div>
      
            {/* <!-- fotter end --> */}
        </div>
  </div>

);
}
export default Addbooking;