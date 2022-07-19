import React, { useCallback,useState,useEffect,useContext } from "react";
import Default from '../../assets/wp-content/themes/wprentals/img/default_user.png';
import Thumb from '../../assets/wp-content/uploads/2018/08/8-1-1-1-60x60.jpg';
import Header from '../Home/Header/Header';
import Mobile from '../Home/Header/Mobile';
import Navbar from '../Home/Header/Navbar';
import { Link } from 'react-router-dom';
import Victoria from '../../assets/wp-content/uploads/2018/08/3-1-1-400x314.jpg';
import Rental from '../../assets/wp-content/uploads/2018/08/6-1-1-1-805x453.jpg';
import Original from '../../assets/wp-content/uploads/2018/08/6-1-1-1-805x453.jpg';
import Listing from '../../assets/wp-content/uploads/2018/08/6-1-1-1-143x83.jpg';
import Transport from '../../assets/wp-content/themes/wprentals/css/css-images/poi/transport_icon.png';
import Supermarket from '../../assets/wp-content/themes/wprentals/css/css-images/poi/supermarkets_icon.png'
import  School  from '../../assets/wp-content/themes/wprentals/css/css-images/poi/schools_icon.png';
import  Restaurant  from '../../assets/wp-content/themes/wprentals/css/css-images/poi/restaurant_icon.png';
import Pharma from '../../assets/wp-content/themes/wprentals/css/css-images/poi/pharma_icon.png' ;
import Hospital from '../../assets/wp-content/themes/wprentals/css/css-images/poi/hospitals_icon.png';
import Condo from '../../assets/wp-content/uploads/2018/08/8-1-1-1-400x314.jpg'


import { GuestBookingContext } from "../Properties/Context/GuestBookingContext";


import { DateRangePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


import '../Home/react_dates_overrides.css';


import { useHistory,useParams } from "react-router-dom";

import moment from "moment";
import SignIn from "../Home/SignIn";
import SignUp from "../Home/SignUp";


import Modal from 'react-bootstrap/Modal';
import LogIn from "./Area/LogIn";
import Register from "./Area/Register";

import Axios from "axios";
import Booking from "../Dashboard/AvailabilityCalendar/Booking";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



export default function Bedroom() {

  let { id } = useParams();

  const booking = useContext(GuestBookingContext);

    const [startDate, setStartDate] = useState(moment(booking.startDate));
    const [endDate, setEndDate] = useState(moment(booking.endDate));
    const [focusedInput, setFocusedInput] = useState(null);

    const[bookingdetails,setBookingDetails]=useState([])


    const[propertyImages,setPropertyImages]=useState([])


    



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const navigate = useHistory();



    useEffect(()=>{


      Axios.get(`https://onlinebookingus-app-test.herokuapp.com/property/byId/${id}`).then((response) => {

              booking.setPropertyName(response.data.name);
              booking.setProperty_id(response.data.id);
              booking.setMinimumStay(response.data.minimum_stay)
              console.log("BOOKING UPDATES MANAGED"+response.data)

              setPropertyImages(response.data.Images)

              console.log("THESE ARE THE IMAGES "+JSON.stringify(response.data.Images));

              // console.log("THE NEW ADDRESS IS "+address.slice(0, 4));

              localStorage.setItem('propertyName',JSON.stringify(response.data.name))

              localStorage.setItem('PropertyId',response.data.id)


         
        });

        Axios.get(`https://onlinebookingus-app-test.herokuapp.com/propertyprices/byPropertyId/${id}`).then((response) => {

          booking.SetProperty_price(response.data.price)
          booking.setCleaningFee(response.data.cleaning_fee)
          booking.setSecurityFee(response.data.security_fee)
          console.log("PROPERTY PRICE"+response.data)

          // console.log("THE NEW ADDRESS IS "+address.slice(0, 4));

     
    });

  
  },[]);



    const handleDatesChange = ({ startDate, endDate }) => {
      
       setStartDate(startDate);
       setEndDate(endDate);

      //  booking.SetProperty_price(142);

     

      // var date_diff=moment.duration(endDate.diff(startDate)).asDays();

        const startD = moment(startDate);
        const timeEnd = moment(endDate);

        const diff = timeEnd.diff(startD);
        const diffDuration = moment.duration(diff);

        var no_of_nights=diffDuration.days();

        if(no_of_nights<booking.minimum_stay){
         
          //toast.warning("Error! The minimum stay period id"+booking.minimum_stay);
          toast.warn("Warning!The minimum stay period should be more than "+booking.minimum_stay, {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          //window.location.reload(false);
          setStartDate(moment(booking.startDate))
          setEndDate(moment(booking.endDate))
        }

        booking.setNights(no_of_nights);


        // booking.setBase_price(booking.cleaning_fee+booking.security_fee+booking.property_price)

        // console.log("THE TOTAL COST IS "+Booking.base_price);
   

      console.log("DIFF IN DATES IS "+diffDuration.days());

      let pname=localStorage.getItem('propertyName')
      pname=JSON.parse(pname)

    
      console.log("THIS IS THE PROPERTY NAME FROM LOCAL STORAGE"+pname)

      let totalcost=(no_of_nights)*(booking.property_price);


      localStorage.setItem('Base_price',JSON.stringify(totalcost))

      booking.setBase_price(totalcost)

      localStorage.setItem('startDate',JSON.stringify(startD))
      localStorage.setItem('endDate',JSON.stringify(timeEnd))

      localStorage.setItem('TotalNights',no_of_nights)

      let prop_id=localStorage.getItem('PropertyId')
      prop_id=JSON.parse(prop_id)


      booking.setBookingData({
        propertyName:pname,
        property_id:prop_id,
        guests:2,
        startDate:startD,
        endDate:timeEnd,
        nights:no_of_nights,
        property_price:booking.property_price,
        base_price:totalcost,
      })
  
    
      localStorage.setItem('bookingdata',JSON.stringify(booking.bookingdata));


      console.log("THIS IS THE PROPERTY ID FROM LOCAL STORAGE IS"+prop_id)

      console.log("THE BOOKING DATA IS "+JSON.stringify(booking.bookingdata))

     
     };

     const handleGuestChange=(event) => {
      booking.setGuests(event.target.value);

      console.log("THIS IS WHAT HAPPENS "+booking.guests);

      let totalcost=(booking.nights)*(booking.property_price);


      localStorage.setItem('Base_price',JSON.stringify(totalcost))

      booking.setBase_price(totalcost)


      localStorage.setItem('startDate',JSON.stringify(startDate))
      localStorage.setItem('endDate',JSON.stringify(endDate))
     }




     const requestToBook=()=>{

      navigate.push('/login');

     }
    return (
        <div>
            <body class="estate_property-template-default single single-estate_property postid-129 wpb-js-composer js-comp-ver-6.5.0 vc_responsive elementor-default elementor-kit-19">
            <div className="mobilewrapper">
        <div className="snap-drawers">
          {/* <!-- Left Sidebar--> */}
          <div className="snap-drawer snap-drawer-left">
            <div className="mobilemenu-close">
              <i className="fas fa-times"></i>
            </div>
            <ul id="menu-primary-menu" className="mobilex-menu">
              <li id="menu-item-1854" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1854">
                <Link to="/">Home</Link>
                <ul className="sub-menu">
                  <li id="menu-item-18622" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18622">
                    <Link to="/splash">Splash Page</Link>
                  </li>
               
                </ul>
              </li>
              <li id="menu-item-1846" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1846">
                <Link to="#">Properties</Link>
                <ul className="sub-menu">
                  <li id="menu-item-1861" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1861">
                    <Link to="#">List &#8211; Standard</Link>
                  </li>
                  <li id="menu-item-1849" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1849">
                    <Link to="property">Property Page</Link>
                    <ul className="sub-menu">
                      <li id="menu-item-1848" className="menu-item menu-item-type-post_type menu-item-object-estate_property menu-item-1848">
                        <Link to="/sunny_dorm">Sidebar Left</Link>
                      </li>
                      <li id="menu-item-1850" className="menu-item menu-item-type-post_type menu-item-object-estate_property menu-item-1850">
                        <Link to="/downtown">Sidebar Right</Link>
                      </li>
                      <li id="menu-item-1855" className="menu-item menu-item-type-post_type menu-item-object-estate_property menu-item-1855">
                        <Link to="/bedroom">Video In Post</Link>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-1856" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1856">
                    <Link to="#">Search by</Link>
                    <ul className="sub-menu">
                      <li id="menu-item-1858" className="menu-item menu-item-type-taxonomy menu-item-object-property_area menu-item-1858">
                        <Link to="/manhattan">Area</Link>
                      </li>
                      <li id="menu-item-1859" className="menu-item menu-item-type-taxonomy menu-item-object-property_category menu-item-1859">
                        <Link to="/apartment">Category</Link>
                      </li>
                      <li id="menu-item-1860" className="menu-item menu-item-type-taxonomy menu-item-object-property_action_category menu-item-1860">
                        <Link to="/shared">Type</Link>
                      </li>
                      <li id="menu-item-18634" className="menu-item menu-item-type-taxonomy menu-item-object-property_features menu-item-18634">
                        <Link to="/parking">Free Parking on Premises</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="menu-item-1847" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1847">
                <Link to="#">Owners</Link>
                <ul className="sub-menu">
                  <li id="menu-item-1862" className="menu-item menu-item-type-post_type menu-item-object-estate_agent menu-item-1862">
                    <Link to="/amber_demo">Amber Leigh</Link>
                  </li>
                  <li id="menu-item-1863" className="menu-item menu-item-type-post_type menu-item-object-estate_agent menu-item-1863">
                    <Link to="/john_demo">John Doe</Link>
                  </li>
                </ul>
              </li>
              <li id="menu-item-1851" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1851">
                <Link to="#">Blog</Link>
                <ul className="sub-menu">
                  <li id="menu-item-1872" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1872">
                    <Link to="/welcoming">Post &#8211; No Sidebar</Link>
                  </li>
                  <li id="menu-item-1873" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1873">
                    <Link to="/greathost">Post &#8211; Image Slider</Link>
                  </li>
                  <li id="menu-item-1874" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1874">
                    <Link to="/budget">Post &#8211; Sidebar Left</Link>
                  </li>
                </ul>
              </li>
              <li id="menu-item-1853" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1853">
                <Link to="#">Features</Link>
                <ul className="sub-menu">
                  <li id="menu-item-18624" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18624">
                    <Link to="/shortcodes">WP Rentals Shortcodes</Link>
                  </li>
                  <li id="menu-item-18625" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18625">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </li>
              <li id="menu-item-1846" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1846">
                <Link to="/Dashboard">Dashboard</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mobilewrapper-user">
        <div class="snap-drawers">
          {/* <!-- Right Sidebar--> */}
          <div class="snap-drawer snap-drawer-right">
            <div class="mobilemenu-close-user">
              <i class="fas fa-times"></i>
            </div>

            <div class="login_sidebar_mobile">
              <h3 class="widget-title-sidebar" id="login-div-title-mobile">
                Login
              </h3>
              <div class="login_form" id="login-div-mobile">
                <div class="loginalert" id="login_message_area_wd_mobile"></div>
                <input type="text" class="form-control" name="log" id="login_user_wd_mobile" placeholder="Username" />
                <input type="password" class="form-control" name="pwd" id="login_pwd_wd_mobile" placeholder="Password" />
                <input type="hidden" name="loginpop" id="loginpop_mobile" value="0" />
                <input type="hidden" id="security-login-mobile" name="security-login-mobile" value="047063c315-1638969714" />
                <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-login-but-wd-mobile">
                  Login
                </button>
                <div class="login-links">
                  <Link to="#" id="widget_register_mobile">
                    Need an account? Register here!
                  </Link>
                  <Link to="#" id="forgot_pass_widget_mobile">
                    Forgot Password?
                  </Link>
                </div>
                <div class="wpestate_social_login" id="facebooklogin_mb" data-social="facebook">
                  <i class="fab fa-facebook-f"></i> Login with Facebook
                </div>
                <input type="hidden" class="wpestate_social_login_nonce" value="428ebbade6" />
              </div>

              <h3 class="widget-title-sidebar" id="register-div-title-mobile">
                Register
              </h3>
              <div class="login_form" id="register-div-mobile">
                <div class="loginalert" id="register_message_area_wd_mobile"></div>
                <input type="text" name="user_login_register" id="user_login_register_wd_mobile" class="form-control" placeholder="Username" />
                <input type="text" name="user_email_register" id="user_email_register_wd_mobile" class="form-control" placeholder="Email" />
                <div class="acc_radio">
                  <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                  <div class="radiolabel" for="acctype0">
                    I only want to book
                  </div>
                  <br />
                  <input type="radio" name="acc_type" id="acctype1" value="0" required />
                  <div class="radiolabel" for="acctype1">
                    I want to rent my property
                  </div>
                </div>
                <input type="checkbox" name="terms" id="user_terms_register_wd_mobile" />
                <label id="user_terms_register_wd_label_mobile" for="user_terms_register_wd_mobile">
                  I agree with
                  <Link to="./../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">
                    terms &amp; conditions
                  </Link>
                </label>
                <input type="hidden" id="security-register-mobile" name="security-register-mobile" value="75fa241f7f-1638969714" />
                <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-submit-register_wd_mobile">
                  Register
                </button>
                <div class="login-links">
                  <Link to="#" id="widget_login_sw_mobile">
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>

            <div id="mobile_forgot_wrapper">
              <h3 class="widget-title-sidebar" id="forgot-div-title_mobile">
                Reset Password
              </h3>
              <div class="login_form" id="forgot-pass-div_mobile">
                <div class="loginalert" id="forgot_pass_area_shortcode_wd_mobile"></div>
                <div class="loginrow">
                  <input type="text" class="form-control" name="forgot_email" id="forgot_email_mobile" placeholder="Enter Your Email Address" size="20" />
                </div>
                <input type="hidden" id="security-login-forgot_wd_mobile" name="security-login-forgot_wd_mobile" value="33233a3efc" />
                <input type="hidden" name="_wp_http_referer" value="/homepage-elementor/" />
                <input type="hidden" id="postid" value="0" />
                <button class="wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-forgot-but_mobile" name="forgot">
                  Reset Password
                </button>
                <div class="login-links shortlog">
                  <Link to="#" id="return_login_shortcode_mobile">
                    Return to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  

<div class="website-wrapper is_header_type1 is_search_type1 topbar_show_mobile_no" id="all_wrapper">
    <div class="container main_wrapper wide">
        <div class="master_header master_ wide master_header_wide_no hover_type_5">
                <div class="mobile_header">
                        <div class="mobile-trigger"><i class="fas fa-bars"></i></div>
                        <div class="mobile-logo">
                                <Link to="./../index.html"> <img src="https://demo1.wprentals.org/wp-content/uploads/2019/09/demo1_transparent.png" class="img-responsive retina_ready" alt="logo" /> </Link>
                        </div>
                        <div class="mobile-trigger-user"><i class="fas fa-user-circle"></i></div>
                </div>

                <div class="header_wrapper header_type1 header_align_left header_wide_no">
                        <div class="header_wrapper_inside">
                                <div class="logo">
                                    <Link to="./../index.html">
                                            <img src="https://demo1.wprentals.org/wp-content/uploads/2019/09/demo1.png" class="img-responsive retina_ready" alt="logo" />
                                    </Link>
                                </div>

                                <div class="user_menu" id="user_menu_u">
                                    <div class="signuplink" id="topbarlogin">Login</div>
                                    <div class="signuplink" id="topbarregister">Sign Up</div>
                                    <Link to="/add_new_listing" id="submit_action">Submit Property</Link>
                                </div>

            <nav id="access">
              <ul id="menu-primary-menu-1" class="menu">
                <li id="menu-item-1854" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="/">
                    Home
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-18622" class="menu-item menu-item-type-post_type menu-item-object-page">
                      <Link class="menu-item-link" to="/splash">
                        Splash Page
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1846" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="#">
                    Properties
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-1861" class="menu-item menu-item-type-custom menu-item-object-custom">
                      <Link class="menu-item-link" to="#">
                        List &#8211; Standard
                      </Link>
                    </li>
                    <li id="menu-item-1849" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                      <Link class="menu-item-link" to="#">
                        Property Page
                      </Link>
                      <ul class="sub-menu">
                        <li id="menu-item-1848" class="menu-item menu-item-type-post_type menu-item-object-estate_property">
                          <Link class="menu-item-link" to="/sunny_dorm">
                            Sidebar Left
                          </Link>
                        </li>
                        <li id="menu-item-1850" class="menu-item menu-item-type-post_type menu-item-object-estate_property">
                          <Link class="menu-item-link" to="/downtown">
                            Sidebar Right
                          </Link>
                        </li>
                        <li id="menu-item-1855" class="menu-item menu-item-type-post_type menu-item-object-estate_property">
                          <Link class="menu-item-link" to="/bedroom">
                            Video In Post
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-1856" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                      <Link class="menu-item-link" to="#">
                        Search by
                      </Link>
                      <ul class="sub-menu">
                        <li id="menu-item-1858" class="menu-item menu-item-type-taxonomy menu-item-object-property_area">
                          <Link class="menu-item-link" to="/manhattan">
                            Area
                          </Link>
                        </li>
                        <li id="menu-item-1859" class="menu-item menu-item-type-taxonomy menu-item-object-property_category">
                          <Link class="menu-item-link" to="/apartment">
                            Category
                          </Link>
                        </li>
                        <li id="menu-item-1860" class="menu-item menu-item-type-taxonomy menu-item-object-property_action_category">
                          <Link class="menu-item-link" to="/shared">
                            Type
                          </Link>
                        </li>
                        <li id="menu-item-18634" class="menu-item menu-item-type-taxonomy menu-item-object-property_features">
                          <Link class="menu-item-link" to="/parking">
                            Free Parking on Premises
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1847" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="#">
                    Owners
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-1862" class="menu-item menu-item-type-post_type menu-item-object-estate_agent">
                      <Link class="menu-item-link" to="/amber_demo">
                        Amber Leigh
                      </Link>
                    </li>
                    <li id="menu-item-1863" class="menu-item menu-item-type-post_type menu-item-object-estate_agent">
                      <Link class="menu-item-link" to="/john_demo">
                        John Doe
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1851" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="#">
                    Blog
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-1872" class="menu-item menu-item-type-post_type menu-item-object-post">
                      <Link class="menu-item-link" to="/welcoming">
                        Post &#8211; No Sidebar
                      </Link>
                    </li>
                    <li id="menu-item-1873" class="menu-item menu-item-type-post_type menu-item-object-post">
                      <Link class="menu-item-link" to="/greathost">
                        Post &#8211; Image Slider
                      </Link>
                    </li>
                    <li id="menu-item-1874" class="menu-item menu-item-type-post_type menu-item-object-post">
                      <Link class="menu-item-link" to="/budget">
                        Post &#8211; Sidebar Left
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1853" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="#">
                    Features
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-18624" class="menu-item menu-item-type-post_type menu-item-object-page">
                      <Link class="menu-item-link" to="/shortcodes">
                        WP Rentals Shortcodes
                      </Link>
                    </li>
                    <li id="menu-item-18625" class="menu-item menu-item-type-post_type menu-item-object-page">
                      <Link class="menu-item-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1854" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </nav>
            {/* <!-- #access --> */}
    </div>
</div>
</div>

                        <div class="property_menu_wrapper_hidden prop_menu_search_stick_no">
                                   <div class="property_menu_wrapper_insider">
                                          <Link class="property_menu_item" to="#listing_description">Description</Link>
                                          <Link class="property_menu_item" to="#listing_price">Price</Link>
                                          <Link class="property_menu_item" to="#listing_details">Details</Link>
                                          <Link class="property_menu_item" to="#listing_ammenities">Amenities</Link>
                                          <Link class="property_menu_item" to="#listing_calendar">Availability</Link>

                                          <Link class="property_menu_item" to="#listing_reviews">Reviews</Link>
                                          <Link class="property_menu_item" to="#listing_owner">Owner</Link>
                                          <Link class="property_menu_item" to="#google_map_on_list">Map</Link>
                                   </div>
                            </div>
                            <div itemscope itemtype="http://schema.org/RentAction" class="content_wrapper listing_wrapper row">
          <div itemscope itemtype="http://schema.org/RentAction" class="row content-fixed-listing listing_type_1">
            <div class="col-md-8">
              <span class="entry-title listing_loader_title">Your search results</span>
              <div class="loader-inner ball-pulse" id="internal-loader">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
              </div>

              <div id="listing_ajax_container"></div>

              <div class="single-content listing-content">
                <div class="booking_form_mobile"></div>

                <h1 itemprop="name" class="entry-title entry-prop">{booking.propertyName}</h1>

                <div class="property_ratings"></div>

                <div class="listing_main_image_location" itemprop="location" itemscope itemtype="http://schema.org/Place">
                  , <a href="./../../area/manhattan/index.html" rel="tag">{booking.paddress}</a>
                  <div class="schema_div_noshow" itemprop="name">, , {booking.propertyName}</div>
                </div>

                <div class="panel-wrapper imagebody_wrapper">
                  <div class="panel-body imagebody imagebody_new property_pictures_wrapper">
                    <div class="property_status_wrapper"></div>
                    <div id="carousel-listing" class="carousel slide post-carusel carouselvertical" data-ride="carousel" data-interval="false">
                      {/* <!-- Wrapper for slides --> */}
                      <div class="carousel-inner">
                      {propertyImages.map((value, key) => {
                        return (
                        <div class="item active">
                        <div class="item" data-fancybox="website_rental_gallery" data-src={"https://onlinebookingus-app-test.herokuapp.com/uploads/"+value.id+"/"+value.photo} title="" data-caption="" rel="data-fancybox-thumb">
                        <img src={"https://onlinebookingus-app-test.herokuapp.com/uploads/"+value.id+"/"+value.photo} data-original={Original} alt="" class="img-responsive" />
                      </div>
                        </div>
                        )
                      })}
                        {propertyImages.map((value, key) => {
                          return (
                        <div class="item" data-fancybox="website_rental_gallery" data-src={"https://onlinebookingus-app-test.herokuapp.com/uploads/"+value.id+"/"+value.photo} title="" data-caption="" rel="data-fancybox-thumb">
                          <img src={"https://onlinebookingus-app-test.herokuapp.com/uploads/"+value.id+"/"+value.photo} data-original={Original} alt="" class="img-responsive" />
                        </div>
                        )
                      })}

                        <a class="left vertical carousel-control" href="#carousel-listing" data-slide="prev">
                          <i class="icon-left-open-big"></i>
                        </a>

                        <a class="right vertical carousel-control" href="#carousel-listing" data-slide="next">
                          <i class="icon-right-open-big"></i>
                         
                        </a>
                      </div>

                      <div class="carousel-indicators-wrapper">
                        <ol id="carousel-indicators-vertical">
                        {propertyImages.map((value, key) => {
                          return (

                            
                            <li data-target="#carousel-listing" data-slide-to="1" class="">
                           
                            <div class="img_listings_overlay img_listings_overlay_last"></div>
                            <img itemprop="image" src={"https://onlinebookingus-app-test.herokuapp.com/uploads/"+value.id+"/"+value.photo} alt="slider" />
                           
                          </li>


                          )
                        })}
                         
                        </ol>
                      </div>
                    </div>

                   
                  </div>
                </div>

                <div class="category_wrapper">
                  <div class="category_details_wrapper">
                    <div class="actions_icon category_details_wrapper_icon"><a href="./../../action/private-room/index.html" rel="tag">Private room</a> <span class="property_header_separator">|</span></div>
                    <div class="schema_div_noshow" itemprop="actionStatus">Private room</div>
                    <div class="types_icon category_details_wrapper_icon"><a href="./../../listings/condos/index.html" rel="tag">Condos</a><span class="property_header_separator">|</span></div>
                    <div class="schema_div_noshow" itemprop="additionalType">Condos</div>
                    <div class="no_link_details category_details_wrapper_icon guest_header_icon">7 Guests</div>
                    <span class="property_header_separator">|</span><span class="no_link_details category_details_wrapper_icon bedrooms_header_icon">2 Bedrooms</span><span class="property_header_separator">|</span>
                  </div>
                  <a href="#listing_calendar" class="check_avalability">Check Availability</a>
                </div>

                <div class="listing_description_wrapper panel-wrapper">
                  <div id="listing_description">
                    <h4 class="panel-title-description">Listing Description</h4>
                    <div class="panel-body" id="listing_description_content" itemprop="description">
                      <p>
                        Located in the heart of Greenwich Village, This building is wonderfully situated on a quiet tree–lined street between West 4th Street and Bleecker Street, Close to all West Village eateries, shops and clubs, this building is
                        just a short walk from Soho, Tribeca, Little Italy and Chinatown. The subway is only one block away.
                      </p>
                      <p>*The Place*</p>
                      <p>
                        Bedroom one: Large Quite.<br />
                        -Queen Size bed with lots of extra pillows and down comforters.<br />
                        -bedside drawer w/lamp
                      </p>
                      <p>
                        Bedroom 2:<br />
                        -Queen size bed<br />
                        -bedside drawer w/lamp
                      </p>
                    </div>
                  </div>

                  <div id="view_more_desc">View more</div>
                </div>

                <div class="panel-wrapper" id="listing_price">
                  <a class="panel-title" data-toggle="collapse" data-parent="#accordion_prop_addr" href="#collapseOne"> <span class="panel-title-arrow"></span>Price Info</a>
                  <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="panel-body panel-body-border" itemprop="priceSpecification">
                      <div class="listing_detail list_detail_prop_price_per_night col-md-6"><span class="item_head">Price per night:</span> $ 120</div>
                      <div class="listing_detail list_detail_prop_price_per_night_7d col-md-6"><span class="item_head">Price per night (7d+):</span> € 125</div>
                      <div class="listing_detail list_detail_prop_price_per_night_30d col-md-6"><span class="item_head">Price per night (30d+):</span> € 100</div>
                      <div class="listing_detail list_detail_prop_price_cleaning_fee col-md-6"><span class="item_head">Cleaning Fee:</span> € 100 Single Fee</div>
                      <div class="listing_detail list_detail_prop_price_tax_fee col-md-6"><span class="item_head">City Tax Fee:</span> € 50 Single Fee</div>
                    </div>
                  </div>
                </div>

                <div class="panel-wrapper">
                  {/* <!-- property address   --> */}
                  <a class="panel-title" data-toggle="collapse" data-parent="#accordion_prop_addr" href="#collapseTwo"> <span class="panel-title-arrow"></span>Address </a>

                  <div id="collapseTwo" class="panel-collapse collapse in">
                    <div class="panel-body panel-body-border">
                      <div class="listing_detail list_detail_prop_address col-md-6"><span class="item_head">Address:</span> Exact location information is provided after a booking is confirmed.</div>
                      <div class="listing_detail list_detail_prop_area col-md-6"><span class="item_head">Area:</span> <a href="./../../area/manhattan/index.html" rel="tag">Manhattan</a></div>
                      <div class="listing_detail list_detail_prop_county col-md-6"><span class="item_head">County:</span> New York County</div>
                      <div class="listing_detail list_detail_prop_state col-md-6"><span class="item_head">State:</span> NY</div>
                      <div class="listing_detail list_detail_prop_zip col-md-6"><span class="item_head">Zip:</span> 10007</div>
                      <div class="listing_detail list_detail_prop_contry col-md-6"><span class="item_head">Country:</span> United States</div>
                    </div>
                  </div>
                </div>

                {/* <!-- property details   --> */}
                <div class="panel-wrapper">
                  <a class="panel-title" id="listing_details" data-toggle="collapse" data-parent="#accordion_prop_addr" href="#collapseTree"><span class="panel-title-arrow"></span>Details</a>
                  <div id="collapseTree" class="panel-collapse collapse in">
                    <div class="panel-body panel-body-border">
                      <div class="listing_detail list_detail_prop_id col-md-6"><span class="item_head">Property ID: </span> 129</div>
                      <div class="listing_detail list_detail_prop_size col-md-6"><span class="item_head">Property Size:</span> 1,000 m<sup>2</sup></div>
                      <div class="listing_detail list_detail_prop_rooms col-md-6"><span class="item_head">Rooms:</span> 2</div>
                      <div class="listing_detail list_detail_prop_bedrooms col-md-6"><span class="item_head">Bedrooms:</span> 2</div>
                      <div class="listing_detail list_detail_prop_bathrooms col-md-6"><span class="item_head">Bathrooms:</span> 2</div>
                      <div class="listing_detail list_detail_prop_late_check-in col-md-6"><span class="item_head">Late Check-in:</span> Before 11 PM</div>
                      <div class="listing_detail list_detail_prop_optional_services col-md-6"><span class="item_head">Optional Services:</span> kitchen fully equipped.</div>
                      <div class="listing_detail list_detail_prop_outdoor_facilities col-md-6"><span class="item_head">Outdoor Facilities:</span> restaurants and bars.</div>
                      <div class="listing_detail list_detail_prop_extra_people col-md-6"><span class="item_head">Extra People:</span> 1 extra bed for $40/night</div>
                      <div class="listing_detail list_detail_prop_cancellation col-md-6"><span class="item_head">Cancellation:</span> free of charge</div>
                    </div>
                  </div>
                </div>
                <div class="panel-wrapper features_wrapper">
                  <a class="panel-title" id="listing_ammenities" data-toggle="collapse" data-parent="#accordion_prop_addr" href="#collapseFour"><span class="panel-title-arrow"></span>Features</a>
                  <div id="collapseFour" class="panel-collapse collapse in">
                    <div class="panel-body panel-body-border">
                      <div class="listing_detail col-md-12 feature_block_others">
                        <div class="feature_chapter_name col-md-12">Other Features</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Air Conditioner</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Bar / Restaurant</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Doorman</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Dryer</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Elevator in Building</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Essentials</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Family/Kid Friendly</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Fax</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Free Parking on Premises</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Gym</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Heating</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Hot Tub</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Indoor Fireplace</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Internet</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Kitchen</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Non Smoking</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Pets Allowed</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Phone (booth/lines)</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Pool</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Projector(s)</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Scanner / Printer</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Smoking Allowed</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Suitable for Events</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>TV</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Washer</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Wheelchair Accessible</div>
                        <div class="listing_detail not_present col-md-6"><i class="fas fa-times"></i>Wireless Internet</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- property termd   --> */}
                <div class="panel-wrapper">
                  <a class="panel-title" data-toggle="collapse" data-parent="#accordion_prop_terns" href="#collapseTerms"> <span class="panel-title-arrow"></span>Terms and Conditions </a>

                  <div id="collapseTerms" class="panel-collapse collapse in">
                    <div class="panel-body panel-body-border">
                      <div class="listing_detail col-md-6 smoking_allowed"><i class="fas fa-check checkon"></i>Smoking Allowed</div>
                      <div class="listing_detail col-md-6 pets_allowed"><i class="fas fa-check checkon"></i>Pets Allowed</div>
                    </div>
                  </div>
                </div>

                <div class="property_page_container">
                  <h3 class="panel-title" id="listing_calendar">Availability</h3>
                  <div class="all-front-calendars">
                    <div id="calendar-next"><i class="fas fa-chevron-right"></i></div>
                    <div id="calendar-prev"><i class="fas fa-chevron-left"></i></div>
                    <div class="separator"></div>
                    <div class="booking-calendar-wrapper" data-mno="1">
                      <div class="month-title">December 2021</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="2" class="pad">&nbsp;</td>
                            <td class="calendar-free has_past" data-curent-date="1638316800">1</td>
                            <td class="calendar-free has_past" data-curent-date="1638403200">2</td>
                            <td class="calendar-free has_past" data-curent-date="1638489600">3</td>
                            <td class="calendar-free has_past" data-curent-date="1638576000">4</td>
                            <td class="calendar-free has_past" data-curent-date="1638662400">5</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_past" data-curent-date="1638748800">6</td>
                            <td class="calendar-free has_past" data-curent-date="1638835200">7</td>
                            <td class="calendar-today has_future" data-curent-date="1638921600">8</td>
                            <td class="calendar-free has_future" data-curent-date="1639008000">9</td>
                            <td class="calendar-free has_future" data-curent-date="1639094400">10</td>
                            <td class="calendar-free has_future" data-curent-date="1639180800">11</td>
                            <td class="calendar-free has_future" data-curent-date="1639267200">12</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1639353600">13</td>
                            <td class="calendar-free has_future" data-curent-date="1639440000">14</td>
                            <td class="calendar-free has_future" data-curent-date="1639526400">15</td>
                            <td class="calendar-free has_future" data-curent-date="1639612800">16</td>
                            <td class="calendar-free has_future" data-curent-date="1639699200">17</td>
                            <td class="calendar-free has_future" data-curent-date="1639785600">18</td>
                            <td class="calendar-free has_future" data-curent-date="1639872000">19</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1639958400">20</td>
                            <td class="calendar-free has_future" data-curent-date="1640044800">21</td>
                            <td class="calendar-free has_future" data-curent-date="1640131200">22</td>
                            <td class="calendar-free has_future" data-curent-date="1640217600">23</td>
                            <td class="calendar-free has_future" data-curent-date="1640304000">24</td>
                            <td class="calendar-free has_future" data-curent-date="1640390400">25</td>
                            <td class="calendar-free has_future" data-curent-date="1640476800">26</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1640563200">27</td>
                            <td class="calendar-free has_future" data-curent-date="1640649600">28</td>
                            <td class="calendar-free has_future" data-curent-date="1640736000">29</td>
                            <td class="calendar-free has_future" data-curent-date="1640822400">30</td>
                            <td class="calendar-free has_future" data-curent-date="1640908800">31</td>
                            <td class="pad" colspan="2">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="2">
                      <div class="month-title">January 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="5" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1640995200">1</td>
                            <td class="calendar-free has_future" data-curent-date="1641081600">2</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1641168000">3</td>
                            <td class="calendar-free has_future" data-curent-date="1641254400">4</td>
                            <td class="calendar-free has_future" data-curent-date="1641340800">5</td>
                            <td class="calendar-free has_future" data-curent-date="1641427200">6</td>
                            <td class="calendar-free has_future" data-curent-date="1641513600">7</td>
                            <td class="calendar-free has_future" data-curent-date="1641600000">8</td>
                            <td class="calendar-free has_future" data-curent-date="1641686400">9</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1641772800">10</td>
                            <td class="calendar-free has_future" data-curent-date="1641859200">11</td>
                            <td class="calendar-free has_future" data-curent-date="1641945600">12</td>
                            <td class="calendar-free has_future" data-curent-date="1642032000">13</td>
                            <td class="calendar-free has_future" data-curent-date="1642118400">14</td>
                            <td class="calendar-free has_future" data-curent-date="1642204800">15</td>
                            <td class="calendar-free has_future" data-curent-date="1642291200">16</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1642377600">17</td>
                            <td class="calendar-free has_future" data-curent-date="1642464000">18</td>
                            <td class="calendar-free has_future" data-curent-date="1642550400">19</td>
                            <td class="calendar-free has_future" data-curent-date="1642636800">20</td>
                            <td class="calendar-free has_future" data-curent-date="1642723200">21</td>
                            <td class="calendar-free has_future" data-curent-date="1642809600">22</td>
                            <td class="calendar-free has_future" data-curent-date="1642896000">23</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1642982400">24</td>
                            <td class="calendar-free has_future" data-curent-date="1643068800">25</td>
                            <td class="calendar-free has_future" data-curent-date="1643155200">26</td>
                            <td class="calendar-free has_future" data-curent-date="1643241600">27</td>
                            <td class="calendar-free has_future" data-curent-date="1643328000">28</td>
                            <td class="calendar-free has_future" data-curent-date="1643414400">29</td>
                            <td class="calendar-free has_future" data-curent-date="1643500800">30</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1643587200">31</td>
                            <td class="pad" colspan="6">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="3" style={{display: 'none'}}>
                      <div class="month-title">February 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="1" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1643673600">1</td>
                            <td class="calendar-free has_future" data-curent-date="1643760000">2</td>
                            <td class="calendar-free has_future" data-curent-date="1643846400">3</td>
                            <td class="calendar-free has_future" data-curent-date="1643932800">4</td>
                            <td class="calendar-free has_future" data-curent-date="1644019200">5</td>
                            <td class="calendar-free has_future" data-curent-date="1644105600">6</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1644192000">7</td>
                            <td class="calendar-free has_future" data-curent-date="1644278400">8</td>
                            <td class="calendar-free has_future" data-curent-date="1644364800">9</td>
                            <td class="calendar-free has_future" data-curent-date="1644451200">10</td>
                            <td class="calendar-free has_future" data-curent-date="1644537600">11</td>
                            <td class="calendar-free has_future" data-curent-date="1644624000">12</td>
                            <td class="calendar-free has_future" data-curent-date="1644710400">13</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1644796800">14</td>
                            <td class="calendar-free has_future" data-curent-date="1644883200">15</td>
                            <td class="calendar-free has_future" data-curent-date="1644969600">16</td>
                            <td class="calendar-free has_future" data-curent-date="1645056000">17</td>
                            <td class="calendar-free has_future" data-curent-date="1645142400">18</td>
                            <td class="calendar-free has_future" data-curent-date="1645228800">19</td>
                            <td class="calendar-free has_future" data-curent-date="1645315200">20</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1645401600">21</td>
                            <td class="calendar-free has_future" data-curent-date="1645488000">22</td>
                            <td class="calendar-free has_future" data-curent-date="1645574400">23</td>
                            <td class="calendar-free has_future" data-curent-date="1645660800">24</td>
                            <td class="calendar-free has_future" data-curent-date="1645747200">25</td>
                            <td class="calendar-free has_future" data-curent-date="1645833600">26</td>
                            <td class="calendar-free has_future" data-curent-date="1645920000">27</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1646006400">28</td>
                            <td class="pad" colspan="6">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="4" style={{display: 'none'}}>
                      <div class="month-title">March 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="1" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1646092800">1</td>
                            <td class="calendar-free has_future" data-curent-date="1646179200">2</td>
                            <td class="calendar-free has_future" data-curent-date="1646265600">3</td>
                            <td class="calendar-free has_future" data-curent-date="1646352000">4</td>
                            <td class="calendar-free has_future" data-curent-date="1646438400">5</td>
                            <td class="calendar-free has_future" data-curent-date="1646524800">6</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1646611200">7</td>
                            <td class="calendar-free has_future" data-curent-date="1646697600">8</td>
                            <td class="calendar-free has_future" data-curent-date="1646784000">9</td>
                            <td class="calendar-free has_future" data-curent-date="1646870400">10</td>
                            <td class="calendar-free has_future" data-curent-date="1646956800">11</td>
                            <td class="calendar-free has_future" data-curent-date="1647043200">12</td>
                            <td class="calendar-free has_future" data-curent-date="1647129600">13</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1647216000">14</td>
                            <td class="calendar-free has_future" data-curent-date="1647302400">15</td>
                            <td class="calendar-free has_future" data-curent-date="1647388800">16</td>
                            <td class="calendar-free has_future" data-curent-date="1647475200">17</td>
                            <td class="calendar-free has_future" data-curent-date="1647561600">18</td>
                            <td class="calendar-free has_future" data-curent-date="1647648000">19</td>
                            <td class="calendar-free has_future" data-curent-date="1647734400">20</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1647820800">21</td>
                            <td class="calendar-free has_future" data-curent-date="1647907200">22</td>
                            <td class="calendar-free has_future" data-curent-date="1647993600">23</td>
                            <td class="calendar-free has_future" data-curent-date="1648080000">24</td>
                            <td class="calendar-free has_future" data-curent-date="1648166400">25</td>
                            <td class="calendar-free has_future" data-curent-date="1648252800">26</td>
                            <td class="calendar-free has_future" data-curent-date="1648339200">27</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1648425600">28</td>
                            <td class="calendar-free has_future" data-curent-date="1648512000">29</td>
                            <td class="calendar-free has_future" data-curent-date="1648598400">30</td>
                            <td class="calendar-free has_future" data-curent-date="1648684800">31</td>
                            <td class="pad" colspan="3">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="5" style={{display: 'none'}}>
                      <div class="month-title">April 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="4" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1648771200">1</td>
                            <td class="calendar-free has_future" data-curent-date="1648857600">2</td>
                            <td class="calendar-free has_future" data-curent-date="1648944000">3</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1649030400">4</td>
                            <td class="calendar-free has_future" data-curent-date="1649116800">5</td>
                            <td class="calendar-free has_future" data-curent-date="1649203200">6</td>
                            <td class="calendar-free has_future" data-curent-date="1649289600">7</td>
                            <td class="calendar-free has_future" data-curent-date="1649376000">8</td>
                            <td class="calendar-free has_future" data-curent-date="1649462400">9</td>
                            <td class="calendar-free has_future" data-curent-date="1649548800">10</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1649635200">11</td>
                            <td class="calendar-free has_future" data-curent-date="1649721600">12</td>
                            <td class="calendar-free has_future" data-curent-date="1649808000">13</td>
                            <td class="calendar-free has_future" data-curent-date="1649894400">14</td>
                            <td class="calendar-free has_future" data-curent-date="1649980800">15</td>
                            <td class="calendar-free has_future" data-curent-date="1650067200">16</td>
                            <td class="calendar-free has_future" data-curent-date="1650153600">17</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1650240000">18</td>
                            <td class="calendar-free has_future" data-curent-date="1650326400">19</td>
                            <td class="calendar-free has_future" data-curent-date="1650412800">20</td>
                            <td class="calendar-free has_future" data-curent-date="1650499200">21</td>
                            <td class="calendar-free has_future" data-curent-date="1650585600">22</td>
                            <td class="calendar-free has_future" data-curent-date="1650672000">23</td>
                            <td class="calendar-free has_future" data-curent-date="1650758400">24</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1650844800">25</td>
                            <td class="calendar-free has_future" data-curent-date="1650931200">26</td>
                            <td class="calendar-free has_future" data-curent-date="1651017600">27</td>
                            <td class="calendar-free has_future" data-curent-date="1651104000">28</td>
                            <td class="calendar-free has_future" data-curent-date="1651190400">29</td>
                            <td class="calendar-free has_future" data-curent-date="1651276800">30</td>
                            <td class="pad" colspan="1">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="6" style={{display: 'none'}}>
                      <div class="month-title">May 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="6" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1651363200">1</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1651449600">2</td>
                            <td class="calendar-free has_future" data-curent-date="1651536000">3</td>
                            <td class="calendar-free has_future" data-curent-date="1651622400">4</td>
                            <td class="calendar-free has_future" data-curent-date="1651708800">5</td>
                            <td class="calendar-free has_future" data-curent-date="1651795200">6</td>
                            <td class="calendar-free has_future" data-curent-date="1651881600">7</td>
                            <td class="calendar-free has_future" data-curent-date="1651968000">8</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1652054400">9</td>
                            <td class="calendar-free has_future" data-curent-date="1652140800">10</td>
                            <td class="calendar-free has_future" data-curent-date="1652227200">11</td>
                            <td class="calendar-free has_future" data-curent-date="1652313600">12</td>
                            <td class="calendar-free has_future" data-curent-date="1652400000">13</td>
                            <td class="calendar-free has_future" data-curent-date="1652486400">14</td>
                            <td class="calendar-free has_future" data-curent-date="1652572800">15</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1652659200">16</td>
                            <td class="calendar-free has_future" data-curent-date="1652745600">17</td>
                            <td class="calendar-free has_future" data-curent-date="1652832000">18</td>
                            <td class="calendar-free has_future" data-curent-date="1652918400">19</td>
                            <td class="calendar-free has_future" data-curent-date="1653004800">20</td>
                            <td class="calendar-free has_future" data-curent-date="1653091200">21</td>
                            <td class="calendar-free has_future" data-curent-date="1653177600">22</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1653264000">23</td>
                            <td class="calendar-free has_future" data-curent-date="1653350400">24</td>
                            <td class="calendar-free has_future" data-curent-date="1653436800">25</td>
                            <td class="calendar-free has_future" data-curent-date="1653523200">26</td>
                            <td class="calendar-free has_future" data-curent-date="1653609600">27</td>
                            <td class="calendar-free has_future" data-curent-date="1653696000">28</td>
                            <td class="calendar-free has_future" data-curent-date="1653782400">29</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1653868800">30</td>
                            <td class="calendar-free has_future" data-curent-date="1653955200">31</td>
                            <td class="pad" colspan="5">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="7" style={{display: 'none'}}>
                      <div class="month-title">June 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="2" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1654041600">1</td>
                            <td class="calendar-free has_future" data-curent-date="1654128000">2</td>
                            <td class="calendar-free has_future" data-curent-date="1654214400">3</td>
                            <td class="calendar-free has_future" data-curent-date="1654300800">4</td>
                            <td class="calendar-free has_future" data-curent-date="1654387200">5</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1654473600">6</td>
                            <td class="calendar-free has_future" data-curent-date="1654560000">7</td>
                            <td class="calendar-free has_future" data-curent-date="1654646400">8</td>
                            <td class="calendar-free has_future" data-curent-date="1654732800">9</td>
                            <td class="calendar-free has_future" data-curent-date="1654819200">10</td>
                            <td class="calendar-free has_future" data-curent-date="1654905600">11</td>
                            <td class="calendar-free has_future" data-curent-date="1654992000">12</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1655078400">13</td>
                            <td class="calendar-free has_future" data-curent-date="1655164800">14</td>
                            <td class="calendar-free has_future" data-curent-date="1655251200">15</td>
                            <td class="calendar-free has_future" data-curent-date="1655337600">16</td>
                            <td class="calendar-free has_future" data-curent-date="1655424000">17</td>
                            <td class="calendar-free has_future" data-curent-date="1655510400">18</td>
                            <td class="calendar-free has_future" data-curent-date="1655596800">19</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1655683200">20</td>
                            <td class="calendar-free has_future" data-curent-date="1655769600">21</td>
                            <td class="calendar-free has_future" data-curent-date="1655856000">22</td>
                            <td class="calendar-free has_future" data-curent-date="1655942400">23</td>
                            <td class="calendar-free has_future" data-curent-date="1656028800">24</td>
                            <td class="calendar-free has_future" data-curent-date="1656115200">25</td>
                            <td class="calendar-free has_future" data-curent-date="1656201600">26</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1656288000">27</td>
                            <td class="calendar-free has_future" data-curent-date="1656374400">28</td>
                            <td class="calendar-free has_future" data-curent-date="1656460800">29</td>
                            <td class="calendar-free has_future" data-curent-date="1656547200">30</td>
                            <td class="pad" colspan="3">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="8" style={{display: 'none'}}>
                      <div class="month-title">July 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="4" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1656633600">1</td>
                            <td class="calendar-free has_future" data-curent-date="1656720000">2</td>
                            <td class="calendar-free has_future" data-curent-date="1656806400">3</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1656892800">4</td>
                            <td class="calendar-free has_future" data-curent-date="1656979200">5</td>
                            <td class="calendar-free has_future" data-curent-date="1657065600">6</td>
                            <td class="calendar-free has_future" data-curent-date="1657152000">7</td>
                            <td class="calendar-free has_future" data-curent-date="1657238400">8</td>
                            <td class="calendar-free has_future" data-curent-date="1657324800">9</td>
                            <td class="calendar-free has_future" data-curent-date="1657411200">10</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1657497600">11</td>
                            <td class="calendar-free has_future" data-curent-date="1657584000">12</td>
                            <td class="calendar-free has_future" data-curent-date="1657670400">13</td>
                            <td class="calendar-free has_future" data-curent-date="1657756800">14</td>
                            <td class="calendar-free has_future" data-curent-date="1657843200">15</td>
                            <td class="calendar-free has_future" data-curent-date="1657929600">16</td>
                            <td class="calendar-free has_future" data-curent-date="1658016000">17</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1658102400">18</td>
                            <td class="calendar-free has_future" data-curent-date="1658188800">19</td>
                            <td class="calendar-free has_future" data-curent-date="1658275200">20</td>
                            <td class="calendar-free has_future" data-curent-date="1658361600">21</td>
                            <td class="calendar-free has_future" data-curent-date="1658448000">22</td>
                            <td class="calendar-free has_future" data-curent-date="1658534400">23</td>
                            <td class="calendar-free has_future" data-curent-date="1658620800">24</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1658707200">25</td>
                            <td class="calendar-free has_future" data-curent-date="1658793600">26</td>
                            <td class="calendar-free has_future" data-curent-date="1658880000">27</td>
                            <td class="calendar-free has_future" data-curent-date="1658966400">28</td>
                            <td class="calendar-free has_future" data-curent-date="1659052800">29</td>
                            <td class="calendar-free has_future" data-curent-date="1659139200">30</td>
                            <td class="calendar-free has_future" data-curent-date="1659225600">31</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="9" style={{display: 'none'}}>
                      <div class="month-title">August 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1659312000">1</td>
                            <td class="calendar-free has_future" data-curent-date="1659398400">2</td>
                            <td class="calendar-free has_future" data-curent-date="1659484800">3</td>
                            <td class="calendar-free has_future" data-curent-date="1659571200">4</td>
                            <td class="calendar-free has_future" data-curent-date="1659657600">5</td>
                            <td class="calendar-free has_future" data-curent-date="1659744000">6</td>
                            <td class="calendar-free has_future" data-curent-date="1659830400">7</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1659916800">8</td>
                            <td class="calendar-free has_future" data-curent-date="1660003200">9</td>
                            <td class="calendar-free has_future" data-curent-date="1660089600">10</td>
                            <td class="calendar-free has_future" data-curent-date="1660176000">11</td>
                            <td class="calendar-free has_future" data-curent-date="1660262400">12</td>
                            <td class="calendar-free has_future" data-curent-date="1660348800">13</td>
                            <td class="calendar-free has_future" data-curent-date="1660435200">14</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1660521600">15</td>
                            <td class="calendar-free has_future" data-curent-date="1660608000">16</td>
                            <td class="calendar-free has_future" data-curent-date="1660694400">17</td>
                            <td class="calendar-free has_future" data-curent-date="1660780800">18</td>
                            <td class="calendar-free has_future" data-curent-date="1660867200">19</td>
                            <td class="calendar-free has_future" data-curent-date="1660953600">20</td>
                            <td class="calendar-free has_future" data-curent-date="1661040000">21</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1661126400">22</td>
                            <td class="calendar-free has_future" data-curent-date="1661212800">23</td>
                            <td class="calendar-free has_future" data-curent-date="1661299200">24</td>
                            <td class="calendar-free has_future" data-curent-date="1661385600">25</td>
                            <td class="calendar-free has_future" data-curent-date="1661472000">26</td>
                            <td class="calendar-free has_future" data-curent-date="1661558400">27</td>
                            <td class="calendar-free has_future" data-curent-date="1661644800">28</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1661731200">29</td>
                            <td class="calendar-free has_future" data-curent-date="1661817600">30</td>
                            <td class="calendar-free has_future" data-curent-date="1661904000">31</td>
                            <td class="pad" colspan="4">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="10" style={{display: 'none'}}>
                      <div class="month-title">September 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="3" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1661990400">1</td>
                            <td class="calendar-free has_future" data-curent-date="1662076800">2</td>
                            <td class="calendar-free has_future" data-curent-date="1662163200">3</td>
                            <td class="calendar-free has_future" data-curent-date="1662249600">4</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1662336000">5</td>
                            <td class="calendar-free has_future" data-curent-date="1662422400">6</td>
                            <td class="calendar-free has_future" data-curent-date="1662508800">7</td>
                            <td class="calendar-free has_future" data-curent-date="1662595200">8</td>
                            <td class="calendar-free has_future" data-curent-date="1662681600">9</td>
                            <td class="calendar-free has_future" data-curent-date="1662768000">10</td>
                            <td class="calendar-free has_future" data-curent-date="1662854400">11</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1662940800">12</td>
                            <td class="calendar-free has_future" data-curent-date="1663027200">13</td>
                            <td class="calendar-free has_future" data-curent-date="1663113600">14</td>
                            <td class="calendar-free has_future" data-curent-date="1663200000">15</td>
                            <td class="calendar-free has_future" data-curent-date="1663286400">16</td>
                            <td class="calendar-free has_future" data-curent-date="1663372800">17</td>
                            <td class="calendar-free has_future" data-curent-date="1663459200">18</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1663545600">19</td>
                            <td class="calendar-free has_future" data-curent-date="1663632000">20</td>
                            <td class="calendar-free has_future" data-curent-date="1663718400">21</td>
                            <td class="calendar-free has_future" data-curent-date="1663804800">22</td>
                            <td class="calendar-free has_future" data-curent-date="1663891200">23</td>
                            <td class="calendar-free has_future" data-curent-date="1663977600">24</td>
                            <td class="calendar-free has_future" data-curent-date="1664064000">25</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1664150400">26</td>
                            <td class="calendar-free has_future" data-curent-date="1664236800">27</td>
                            <td class="calendar-free has_future" data-curent-date="1664323200">28</td>
                            <td class="calendar-free has_future" data-curent-date="1664409600">29</td>
                            <td class="calendar-free has_future" data-curent-date="1664496000">30</td>
                            <td class="pad" colspan="2">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="11" style={{display: 'none'}}>
                      <div class="month-title">October 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="5" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1664582400">1</td>
                            <td class="calendar-free has_future" data-curent-date="1664668800">2</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1664755200">3</td>
                            <td class="calendar-free has_future" data-curent-date="1664841600">4</td>
                            <td class="calendar-free has_future" data-curent-date="1664928000">5</td>
                            <td class="calendar-free has_future" data-curent-date="1665014400">6</td>
                            <td class="calendar-free has_future" data-curent-date="1665100800">7</td>
                            <td class="calendar-free has_future" data-curent-date="1665187200">8</td>
                            <td class="calendar-free has_future" data-curent-date="1665273600">9</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1665360000">10</td>
                            <td class="calendar-free has_future" data-curent-date="1665446400">11</td>
                            <td class="calendar-free has_future" data-curent-date="1665532800">12</td>
                            <td class="calendar-free has_future" data-curent-date="1665619200">13</td>
                            <td class="calendar-free has_future" data-curent-date="1665705600">14</td>
                            <td class="calendar-free has_future" data-curent-date="1665792000">15</td>
                            <td class="calendar-free has_future" data-curent-date="1665878400">16</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1665964800">17</td>
                            <td class="calendar-free has_future" data-curent-date="1666051200">18</td>
                            <td class="calendar-free has_future" data-curent-date="1666137600">19</td>
                            <td class="calendar-free has_future" data-curent-date="1666224000">20</td>
                            <td class="calendar-free has_future" data-curent-date="1666310400">21</td>
                            <td class="calendar-free has_future" data-curent-date="1666396800">22</td>
                            <td class="calendar-free has_future" data-curent-date="1666483200">23</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1666569600">24</td>
                            <td class="calendar-free has_future" data-curent-date="1666656000">25</td>
                            <td class="calendar-free has_future" data-curent-date="1666742400">26</td>
                            <td class="calendar-free has_future" data-curent-date="1666828800">27</td>
                            <td class="calendar-free has_future" data-curent-date="1666915200">28</td>
                            <td class="calendar-free has_future" data-curent-date="1667001600">29</td>
                            <td class="calendar-free has_future" data-curent-date="1667088000">30</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1667174400">31</td>
                            <td class="pad" colspan="6">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="12" style={{display: 'none'}}>
                      <div class="month-title">November 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="1" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1667260800">1</td>
                            <td class="calendar-free has_future" data-curent-date="1667347200">2</td>
                            <td class="calendar-free has_future" data-curent-date="1667433600">3</td>
                            <td class="calendar-free has_future" data-curent-date="1667520000">4</td>
                            <td class="calendar-free has_future" data-curent-date="1667606400">5</td>
                            <td class="calendar-free has_future" data-curent-date="1667692800">6</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1667779200">7</td>
                            <td class="calendar-free has_future" data-curent-date="1667865600">8</td>
                            <td class="calendar-free has_future" data-curent-date="1667952000">9</td>
                            <td class="calendar-free has_future" data-curent-date="1668038400">10</td>
                            <td class="calendar-free has_future" data-curent-date="1668124800">11</td>
                            <td class="calendar-free has_future" data-curent-date="1668211200">12</td>
                            <td class="calendar-free has_future" data-curent-date="1668297600">13</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1668384000">14</td>
                            <td class="calendar-free has_future" data-curent-date="1668470400">15</td>
                            <td class="calendar-free has_future" data-curent-date="1668556800">16</td>
                            <td class="calendar-free has_future" data-curent-date="1668643200">17</td>
                            <td class="calendar-free has_future" data-curent-date="1668729600">18</td>
                            <td class="calendar-free has_future" data-curent-date="1668816000">19</td>
                            <td class="calendar-free has_future" data-curent-date="1668902400">20</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1668988800">21</td>
                            <td class="calendar-free has_future" data-curent-date="1669075200">22</td>
                            <td class="calendar-free has_future" data-curent-date="1669161600">23</td>
                            <td class="calendar-free has_future" data-curent-date="1669248000">24</td>
                            <td class="calendar-free has_future" data-curent-date="1669334400">25</td>
                            <td class="calendar-free has_future" data-curent-date="1669420800">26</td>
                            <td class="calendar-free has_future" data-curent-date="1669507200">27</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1669593600">28</td>
                            <td class="calendar-free has_future" data-curent-date="1669680000">29</td>
                            <td class="calendar-free has_future" data-curent-date="1669766400">30</td>
                            <td class="pad" colspan="4">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="13" style={{display: 'none'}}>
                      <div class="month-title">December 2022</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="3" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1669852800">1</td>
                            <td class="calendar-free has_future" data-curent-date="1669939200">2</td>
                            <td class="calendar-free has_future" data-curent-date="1670025600">3</td>
                            <td class="calendar-free has_future" data-curent-date="1670112000">4</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1670198400">5</td>
                            <td class="calendar-free has_future" data-curent-date="1670284800">6</td>
                            <td class="calendar-free has_future" data-curent-date="1670371200">7</td>
                            <td class="calendar-free has_future" data-curent-date="1670457600">8</td>
                            <td class="calendar-free has_future" data-curent-date="1670544000">9</td>
                            <td class="calendar-free has_future" data-curent-date="1670630400">10</td>
                            <td class="calendar-free has_future" data-curent-date="1670716800">11</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1670803200">12</td>
                            <td class="calendar-free has_future" data-curent-date="1670889600">13</td>
                            <td class="calendar-free has_future" data-curent-date="1670976000">14</td>
                            <td class="calendar-free has_future" data-curent-date="1671062400">15</td>
                            <td class="calendar-free has_future" data-curent-date="1671148800">16</td>
                            <td class="calendar-free has_future" data-curent-date="1671235200">17</td>
                            <td class="calendar-free has_future" data-curent-date="1671321600">18</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1671408000">19</td>
                            <td class="calendar-free has_future" data-curent-date="1671494400">20</td>
                            <td class="calendar-free has_future" data-curent-date="1671580800">21</td>
                            <td class="calendar-free has_future" data-curent-date="1671667200">22</td>
                            <td class="calendar-free has_future" data-curent-date="1671753600">23</td>
                            <td class="calendar-free has_future" data-curent-date="1671840000">24</td>
                            <td class="calendar-free has_future" data-curent-date="1671926400">25</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1672012800">26</td>
                            <td class="calendar-free has_future" data-curent-date="1672099200">27</td>
                            <td class="calendar-free has_future" data-curent-date="1672185600">28</td>
                            <td class="calendar-free has_future" data-curent-date="1672272000">29</td>
                            <td class="calendar-free has_future" data-curent-date="1672358400">30</td>
                            <td class="calendar-free has_future" data-curent-date="1672444800">31</td>
                            <td class="pad" colspan="1">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="14" style={{display: 'none'}}>
                      <div class="month-title">January 2023</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="6" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1672531200">1</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1672617600">2</td>
                            <td class="calendar-free has_future" data-curent-date="1672704000">3</td>
                            <td class="calendar-free has_future" data-curent-date="1672790400">4</td>
                            <td class="calendar-free has_future" data-curent-date="1672876800">5</td>
                            <td class="calendar-free has_future" data-curent-date="1672963200">6</td>
                            <td class="calendar-free has_future" data-curent-date="1673049600">7</td>
                            <td class="calendar-free has_future" data-curent-date="1673136000">8</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1673222400">9</td>
                            <td class="calendar-free has_future" data-curent-date="1673308800">10</td>
                            <td class="calendar-free has_future" data-curent-date="1673395200">11</td>
                            <td class="calendar-free has_future" data-curent-date="1673481600">12</td>
                            <td class="calendar-free has_future" data-curent-date="1673568000">13</td>
                            <td class="calendar-free has_future" data-curent-date="1673654400">14</td>
                            <td class="calendar-free has_future" data-curent-date="1673740800">15</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1673827200">16</td>
                            <td class="calendar-free has_future" data-curent-date="1673913600">17</td>
                            <td class="calendar-free has_future" data-curent-date="1674000000">18</td>
                            <td class="calendar-free has_future" data-curent-date="1674086400">19</td>
                            <td class="calendar-free has_future" data-curent-date="1674172800">20</td>
                            <td class="calendar-free has_future" data-curent-date="1674259200">21</td>
                            <td class="calendar-free has_future" data-curent-date="1674345600">22</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1674432000">23</td>
                            <td class="calendar-free has_future" data-curent-date="1674518400">24</td>
                            <td class="calendar-free has_future" data-curent-date="1674604800">25</td>
                            <td class="calendar-free has_future" data-curent-date="1674691200">26</td>
                            <td class="calendar-free has_future" data-curent-date="1674777600">27</td>
                            <td class="calendar-free has_future" data-curent-date="1674864000">28</td>
                            <td class="calendar-free has_future" data-curent-date="1674950400">29</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1675036800">30</td>
                            <td class="calendar-free has_future" data-curent-date="1675123200">31</td>
                            <td class="pad" colspan="5">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="booking-calendar-wrapper" data-mno="15" style={{display: 'none'}}>
                      <div class="month-title">February 2023</div>
                      <table class="wp-calendar booking-calendar">
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">M</th>
                            <th scope="col" title="Tuesday">T</th>
                            <th scope="col" title="Wednesday">W</th>
                            <th scope="col" title="Thursday">T</th>
                            <th scope="col" title="Friday">F</th>
                            <th scope="col" title="Saturday">S</th>
                            <th scope="col" title="Sunday">S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="2" class="pad">&nbsp;</td>
                            <td class="calendar-free has_future" data-curent-date="1675209600">1</td>
                            <td class="calendar-free has_future" data-curent-date="1675296000">2</td>
                            <td class="calendar-free has_future" data-curent-date="1675382400">3</td>
                            <td class="calendar-free has_future" data-curent-date="1675468800">4</td>
                            <td class="calendar-free has_future" data-curent-date="1675555200">5</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1675641600">6</td>
                            <td class="calendar-free has_future" data-curent-date="1675728000">7</td>
                            <td class="calendar-free has_future" data-curent-date="1675814400">8</td>
                            <td class="calendar-free has_future" data-curent-date="1675900800">9</td>
                            <td class="calendar-free has_future" data-curent-date="1675987200">10</td>
                            <td class="calendar-free has_future" data-curent-date="1676073600">11</td>
                            <td class="calendar-free has_future" data-curent-date="1676160000">12</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1676246400">13</td>
                            <td class="calendar-free has_future" data-curent-date="1676332800">14</td>
                            <td class="calendar-free has_future" data-curent-date="1676419200">15</td>
                            <td class="calendar-free has_future" data-curent-date="1676505600">16</td>
                            <td class="calendar-free has_future" data-curent-date="1676592000">17</td>
                            <td class="calendar-free has_future" data-curent-date="1676678400">18</td>
                            <td class="calendar-free has_future" data-curent-date="1676764800">19</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1676851200">20</td>
                            <td class="calendar-free has_future" data-curent-date="1676937600">21</td>
                            <td class="calendar-free has_future" data-curent-date="1677024000">22</td>
                            <td class="calendar-free has_future" data-curent-date="1677110400">23</td>
                            <td class="calendar-free has_future" data-curent-date="1677196800">24</td>
                            <td class="calendar-free has_future" data-curent-date="1677283200">25</td>
                            <td class="calendar-free has_future" data-curent-date="1677369600">26</td>
                          </tr>
                          <tr>
                            <td class="calendar-free has_future" data-curent-date="1677456000">27</td>
                            <td class="calendar-free has_future" data-curent-date="1677542400">28</td>
                            <td class="pad" colspan="5">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="calendar-legend">
                      <div class="calendar-legend-past"></div>
                      <span> past</span>
                      <div class="calendar-legend-today"></div>
                      <span> today</span>
                      <div class="calendar-legend-reserved"></div>
                      <span> booked</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single content --> */}

              <div class="property_page_container google_map_type1">
                <h3 class="panel-title" id="on_the_map">On the Map</h3>
                <div class="google_map_on_list_wrapper">
                  <div id="gmapzoomplus"></div>
                  <div id="gmapzoomminus"></div>

                  <div id="gmapstreet"></div>
                  <div class="google_map_poi_marker">
                    <div class="google_poi" id="transport"><img src={Transport} class="dashboad-tooltip" data-placement="right" data-original-title="Transport" /></div>
                    <div class="google_poi" id="supermarkets"><img src={Supermarket} class="dashboad-tooltip" data-placement="right" data-original-title="Supermarkets" /></div>
                    <div class="google_poi" id="schools"><img src={School} class="dashboad-tooltip" data-placement="right" data-original-title="Schools" /></div>
                    <div class="google_poi" id="restaurant"><img src={Restaurant} class="dashboad-tooltip" data-placement="right" data-original-title="Restaurants" /></div>
                    <div class="google_poi" id="pharma"><img src={Pharma} class="dashboad-tooltip" data-placement="right" data-original-title="Pharmacies" /></div>
                    <div class="google_poi" id="hospitals"><img src={Hospital} class="dashboad-tooltip" data-placement="right" data-original-title="Hospitals" /></div>
                  </div>
                  <div id="google_map_on_list" data-cur_lat="40.7099546663" data-cur_long="" data-post_id="129"></div>
                </div>
              </div>

              <div class="similar_listings_wrapper">
                <div class="similar_listings">
                  <h3 class="agent_listings_title_similar">Similar Listings</h3>
                  <div class="similar_listings_wrapper_flex">
                    <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-6 property_unit_v1 property_flex" data-org="4" data-listid="133">
                      <div class="property_listing" data-link="./properties/terrace-condo-penn-station/">
                        <div class="listing-unit-img-wrapper">
                          <a href="./../terrace-condo-penn-station/index.html"><img itemprop="image" src={Condo} class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                          <div class="price_unit_wrapper"></div>
                          <div class="price_unit">€ 200<span class="pernight"> /night</span></div>
                        </div>

                        <div class="property_status_wrapper"></div>
                        <div class="title-container">
                          <div class="price_unit">€ 200<span class="pernight"> /night</span></div>

                          <div class="property-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>

                          <a href="./../terrace-condo-penn-station/index.html" class="owner_thumb">
                              <img src={Thumb} alt="" />
                          </a>

                          <div class="category_name">
                            <a itemprop="url" href="./../terrace-condo-penn-station/index.html" class="listing_title_unit">
                              <span itemprop="name"> Nice Terrace Condo Penn Station </span>
                            </a>
                            <div class="category_tagline map_icon"><a href="./../../area/manhattan/index.html" rel="tag">Manhattan</a>,</div>

                            <div class="category_tagline actions_icon"><a href="./../../listings/condos/index.html" rel="tag">Condos</a> / <a href="./../../action/private-room/index.html" rel="tag">Private room</a></div>
                          </div>

                          <div class="property_unit_action">
                            <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="133"><i class="fas fa-heart"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end 8col container--> */}

            <div class="clearfix visible-xs"></div>
            <div class="col-md-4 widget-area-sidebar listingsidebar2 listing_type_1" id="primary">
              <div itemprop="price" class="listing_main_image_price">$ {booking.property_price}<span class="pernight_label"> per night</span></div>

              <div class="booking_form_request is_shortcode0 col-md-4" id="booking_form_request">
                <div id="booking_form_request_mess"></div>
                <div id="booking_form_mobile_close">&times;</div>
                
                <h4>Minimum Stay {booking.minimum_stay} days</h4>
                <h3>Book Now</h3>

                <div class="has_calendar calendar_icon" style={{marginBottom:"10px",width:"500px"}}>
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

               {/*<div class="has_calendar calendar_icon">
                  <input type="text" id="end_date" placeholder="Check-Out" class="form-control calendar_icon" size="40" name="end_date" value="" />
    </div>*/}

                <div class="has_calendar guest_icon">
                
                    
                    <select id="no_of_guests" class="form-control" name="no_of_guests" 
                    onChange={handleGuestChange}
                     >
                    <option value='1'>1 guest </option>
                    <option value='2'>2 guest</option>
                    <option value='4'>4 guest</option>
                    <option value='3'>3 guest </option>
                    <option value='5'>5 guest</option>
                    <option value='6'>6 guest</option>
                    <option value='7'>7 guests</option>
        
                    </select>
                  
                  
                </div>

          

                <p class="full_form" id="add_costs_here"></p>
                <input type="hidden" id="listing_edit" name="listing_edit" value="129" />

                


                <div class="js-subtotal-container booking-subtotal panel-padding-fit">
                 {/* <div id="loader" class="display-off" style={{minHeight:"200px",width:"100%",textAlign:"center",opacity:"0.9",paddingTop: "110px"}}>
                      <img src="{{ asset('front/img/green-loader.gif') }}"/>
  </div>*/}
                  <table class="table table-bordered price_table table-responsive" id="booking_table">
                      <tbody style={{width:'100%'}}>
                        <tr>
                          <td>
                             <span  id="rooms_price_amount_1" value="">{booking.property_price}</span> x <span  id="total_night_count" value="">{booking.nights}</span> single Night
                          </td>
                          <td><span  id="total_night_price" value="">{(booking.property_price)*(booking.nights)}</span> <span id="custom_price" class="fa fa-info-circle" style={{color:"#0DB37C"}} data-html="true" data-toggle="tooltip" data-placement="top" title=""></span></td> 
                        </tr>
                        <tr>
                          <td>
                          Service fee
                          </td>
                          <td>$<span  id="service_fee" value="">{booking.servicefee}</span></td>
                        </tr>
                        <tr class = "additional_price"> 
                          <td>
                         Additional Guests
                          </td>
                          <td>$ <span  id="additional_guest" value="">5</span></td>
                        </tr>
                        <tr class = "security_price"> 
                          <td>
                          Security Fee
                          </td>
                          <td> $<span  id="security_fee" value={booking.security_fee}>{booking.security_fee}</span></td>
                        </tr>
                        <tr class = "cleaning_price"> 
                          <td>
                          Cleaning Fee
                          </td>
                          <td>$<span  id="cleaning_fee" value={booking.cleaning_fee}>{booking.cleaning_fee}</span></td>
                        </tr>
  
                        <tr>
                          <td>total</td>
                          <td>$<span  id="total"   value={((booking.property_price)*(booking.nights))+(booking.cleaning_fee)}>{((booking.property_price)*(booking.nights))}</span></td>
                        </tr>
                      </tbody>
                   </table>
                   <ToastContainer />
              </div>


              <div class="submit_booking_front_wrapper">

              <button type="button"  class="wpb_btn-info wpb_btn-small wpestate_vc_button  vc_button" id="submit_booking_front" data-toggle="modal" data-target="#exampleModal">
              Request To Book
          </button>
              
            {/* <button type="submit" onClick={requestToBook} class="wpb_btn-info wpb_btn-small wpestate_vc_button  vc_button" id="submit_booking_front">Request To Book</button>*/}
              <input type="hidden" id="security-register-booking_front" name="security-register-booking_front" value="2f7cb0aee5"/><input type="hidden" name="_wp_http_referer" value="/properties/sunny-dorm-in-west-town/"/>
                
              
            
            
              </div>



              

                <div class="third-form-wrapper">
                  <div class="col-md-6 reservation_buttons">
                    <div id="add_favorites" class="icon-fav-off" data-postid="129">Add to Favorites</div>
                  </div>

                  <div class="col-md-6 reservation_buttons">
                    <div id="contact_host" class="col-md-6" data-postid="">Contact Owner</div>
                  </div>
                </div>

                <div class="prop_social">
                  <span class="prop_social_share">Share</span>
                  <a href="http://www.facebook.com/sharer.php?u=./properties/2-bedrooms-condo/&amp;t=2+Bedrooms+Video" target="_blank" class="share_facebook"><i class="fab fa-facebook-f"></i></a>
                  <a href="http://twitter.com/home?status=2+Bedrooms+Video+.%2Fproperties%2F2-bedrooms-condo%2F" class="share_tweet" target="_blank"><i class="fab fa-twitter"></i></a>
                  <a href="mailto:email@email.com?subject=2+Bedrooms+Video&amp;body=.%2Fproperties%2F2-bedrooms-condo%2F" class="share_email" target="_blank"><i class="far fa-envelope"></i></a>
                  <a href="http://pinterest.com/pin/create/button/?url=./properties/2-bedrooms-condo/&amp;media=./wp-content/uploads/2018/08/6-1-1-1-1920x790.jpg&amp;description=2+Bedrooms+Video" target="_blank" class="share_pinterest">
                    <i class="fab fa-pinterest-p fa-2"></i>
                  </a>
                </div>
              </div>

              <div class="owner_area_wrapper_sidebar" id="listing_owner">
                <div class="agentpic-wrapper">
                  <div class="owner_listing_image">
                       <img src={Default} alt="" />
                  </div>
                  <h3 itemprop="agent">2-bedrooms-condo</h3>
                </div>

                <div class="agentpic-wrapper">
                  <div id="contact_me_long" class="" data-postid="129">Contact Owner</div>
                </div>
              </div>

              {/* <!-- begin sidebar --> */}

              <ul class="xoxo listingsidebar">
                <li id="block-2" class="widget-container widget_block widget_search">
                  <form role="search" method="get" action="./" class="wp-block-search__button-outside wp-block-search__text-button wp-block-search">
                    <label for="wp-block-search__input-1" class="wp-block-search__label">Search</label>
                    <div class="wp-block-search__inside-wrapper">
                      <input type="search" id="wp-block-search__input-1" class="wp-block-search__input" name="s" value="" placeholder="" required /><button type="submit" class="wp-block-search__button">Search</button>
                    </div>
                  </form>
                </li>
                <li id="block-3" class="widget-container widget_block">
                  <div class="wp-block-group">
                    <div class="wp-block-group__inner-container">
                      <h2>Recent Posts</h2>
                      <ul class="wp-block-latest-posts__list wp-block-latest-posts">
                        <li><a href="./../../2021/12/08/hello-world/index.html">Hello world!</a></li>
                        <li><a href="./../../2015/04/21/what-guests-want-to-know/index.html">What Guests Want to Know</a></li>
                        <li><a href="./../../2015/04/21/how-to-be-a-great-host/index.html">How to be a Great Host for Renters</a></li>
                        <li><a href="./../../2015/04/21/offering-a-welcoming-space/index.html">Offering a Full Welcoming Space</a></li>
                        <li><a href="./../../2015/04/20/best-beaches-for-an-autumn-vacation/index.html">Best Beaches For An Autumn Vacation</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li id="block-4" class="widget-container widget_block">
                  <div class="wp-block-group">
                    <div class="wp-block-group__inner-container">
                      <h2>Recent Comments</h2>
                      <ol class="wp-block-latest-comments">
                        <li class="wp-block-latest-comments__comment">
                          <article>
                            <footer class="wp-block-latest-comments__comment-meta">
                              <a class="wp-block-latest-comments__comment-author" href="https://wordpress.org/">A WordPress Commenter</a> on
                              <a class="wp-block-latest-comments__comment-link" href="./../../2021/12/08/hello-world/index.html#comment-1">Hello world!</a>
                            </footer>
                          </article>
                        </li>
                        <li class="wp-block-latest-comments__comment">
                          <article>
                            <footer class="wp-block-latest-comments__comment-meta">
                              <span class="wp-block-latest-comments__comment-author">user</span> on <a class="wp-block-latest-comments__comment-link" href="./../terrace-condo-penn-station/index.html#comment-10">Nice Terrace Condo Penn Station</a>
                            </footer>
                          </article>
                        </li>
                        <li class="wp-block-latest-comments__comment">
                          <article>
                            <footer class="wp-block-latest-comments__comment-meta">
                              <span class="wp-block-latest-comments__comment-author">user</span> on <a class="wp-block-latest-comments__comment-link" href="./../terrace-condo-penn-station/index.html#comment-9">Nice Terrace Condo Penn Station</a>
                            </footer>
                          </article>
                        </li>
                        <li class="wp-block-latest-comments__comment">
                          <article>
                            <footer class="wp-block-latest-comments__comment-meta">
                              <span class="wp-block-latest-comments__comment-author">user</span> on <a class="wp-block-latest-comments__comment-link" href="./../terrace-condo-penn-station/index.html#comment-8">Nice Terrace Condo Penn Station</a>
                            </footer>
                          </article>
                        </li>
                        <li class="wp-block-latest-comments__comment">
                          <article>
                            <footer class="wp-block-latest-comments__comment-meta">
                              <span class="wp-block-latest-comments__comment-author">demo</span> on
                              <a class="wp-block-latest-comments__comment-link" href="./../summerlin-cabin-perfect-holiday/index.html#comment-7">Summerlin Cabin &#8211; Perfect Holiday</a>
                            </footer>
                          </article>
                        </li>
                      </ol>
                    </div>
                  </div>
                </li>
                <li id="search-1" class="widget-container widget_search">
                  <form method="get" id="searchform" action="./">
                    <input type="hidden" id="wpestate_search_form_nonce" name="wpestate_search_form_nonce" value="5971cb409b" /><input type="hidden" name="_wp_http_referer" value="/properties/2-bedrooms-condo/" />
                    <input type="text" class="form-control" name="s" id="s" placeholder="Search" />
                    <button class="search_form_but"><i class="fas fa-search"></i></button>
                  </form>
                </li>
                <li id="recent-posts-2" class="widget-container widget_recent_entries">
                  <h3 class="widget-title-sidebar">Recent Posts</h3>
                  <ul>
                    <li>
                      <a href="./../../2021/12/08/hello-world/index.html">Hello world!</a>
                    </li>
                    <li>
                      <a href="./../../2015/04/21/what-guests-want-to-know/index.html">What Guests Want to Know</a>
                    </li>
                    <li>
                      <a href="./../../2015/04/21/how-to-be-a-great-host/index.html">How to be a Great Host for Renters</a>
                    </li>
                    <li>
                      <a href="./../../2015/04/21/offering-a-welcoming-space/index.html">Offering a Full Welcoming Space</a>
                    </li>
                    <li>
                      <a href="./../../2015/04/20/best-beaches-for-an-autumn-vacation/index.html">Best Beaches For An Autumn Vacation</a>
                    </li>
                  </ul>
                </li>
                <li id="recent-comments-2" class="widget-container widget_recent_comments">
                  <h3 class="widget-title-sidebar">Recent Comments</h3>
                  <ul id="recentcomments">
                    <li class="recentcomments">
                      <span class="comment-author-link"><a href="https://wordpress.org/" rel="external nofollow ugc" class="url">A WordPress Commenter</a></span> on <a href="./../../2021/12/08/hello-world/index.html#comment-1">Hello world!</a>
                    </li>
                    <li class="recentcomments"><span class="comment-author-link">user</span> on <a href="./../terrace-condo-penn-station/index.html#comment-10">Nice Terrace Condo Penn Station</a></li>
                    <li class="recentcomments"><span class="comment-author-link">user</span> on <a href="./../terrace-condo-penn-station/index.html#comment-9">Nice Terrace Condo Penn Station</a></li>
                    <li class="recentcomments"><span class="comment-author-link">user</span> on <a href="./../terrace-condo-penn-station/index.html#comment-8">Nice Terrace Condo Penn Station</a></li>
                    <li class="recentcomments"><span class="comment-author-link">demo</span> on <a href="./../summerlin-cabin-perfect-holiday/index.html#comment-7">Summerlin Cabin &#8211; Perfect Holiday</a></li>
                  </ul>
                </li>
                <li id="archives-1" class="widget-container widget_archive">
                  <h3 class="widget-title-sidebar">Archives</h3>
                  <ul>
                    <li><a href="./../../2021/12/index.html">December 2021</a></li>
                    <li><a href="./../../2015/04/index.html">April 2015</a></li>
                  </ul>
                </li>
                <li id="categories-2" class="widget-container widget_categories">
                  <h3 class="widget-title-sidebar">Categories</h3>
                  <ul>
                    <li class="cat-item cat-item-13">
                      <a href="./../../category/holiday-ideas/index.html">Holiday Ideas</a>
                    </li>
                    <li class="cat-item cat-item-14">
                      <a href="./../../category/hospitality/index.html">Hospitality</a>
                    </li>
                    <li class="cat-item cat-item-1">
                      <a href="./../../category/uncategorized/index.html">Uncategorized</a>
                    </li>
                  </ul>
                </li>
                <li id="meta-1" class="widget-container widget_meta">
                  <h3 class="widget-title-sidebar">Meta</h3>
                  <ul>
                    <li><a href="./../../wp-login.php">Log in</a></li>
                    <li><a href="./../../feed/index.html">Entries feed</a></li>
                    <li><a href="./../../comments/feed/index.html">Comments feed</a></li>

                    <li><a href="https://wordpress.org/">WordPress.org</a></li>
                  </ul>
                </li>
                <li id="wpestate_advanced_search_widget-1" class="widget-container advanced_search_sidebar">
                  <h3 class="widget-title-sidebar">Advanced Search</h3>
                  <div class="adv-search-2 adv_lower_class adv_extended_class 129 advanced_search_form_wrapper" data-postid="129">
                    <form role="search" method="get" action="./advanced-search/">
                      <div class="col-md-12 Where_do_you_want_to_go_? map_icon">
                        <input type="hidden" class="stype" id="stype" name="stype" value="tax" /><input
                          type="text"
                          id="search_locationsidebar_autointernal"
                          class="form-control"
                          name="search_location"
                          placeholder="Where do you want to go ?"
                          value=""
                        />
                        <input type="hidden" id="advanced_citysidebar" class="form-control" name="advanced_city" data-value="" value="" />
                        <input type="hidden" id="advanced_areasidebar" class="form-control" name="advanced_area" data-value="" value="" />
                        <input type="hidden" id="advanced_countrysidebar" class="form-control" name="advanced_country" data-value="" value="" />
                        <input type="hidden" id="property_admin_areasidebar" name="property_admin_area" value="" />
    
                      </div>
                      <div class="col-md-12 Check-In calendar_icon"><input type="text" id="check_in_widget" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                      <div class="col-md-12 Check-Out calendar_icon"><input type="text" id="check_out_widget" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                      <div class="col-md-12 Guests guest_no_drop">
                        <div class="dropdown custom_icon_class form-control">
                          <div data-toggle="dropdown" id="guest_no_toogle" class="filter_menu_trigger" data-value="">
                            Guests
                            <span class="caret caret_filter"></span>
                          </div>
                          <input type="hidden" name="guest_no" id="guest_no" value="" />
                          <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="guest_no_toogle">
                            <li role="presentation" data-value="all">Guests</li>
                            <li data-value="1" value="1">1</li>
                            <li data-value="2" value="2">2</li>
                            <li data-value="3" value="3">3</li>
                            <li data-value="4" value="4">4</li>
                            <li data-value="5" value="5">5</li>
                            <li data-value="6" value="6">6</li>
                            <li data-value="7" value="7">7</li>
                            <li data-value="8" value="8">8</li>
                            <li data-value="9" value="9">9</li>
                            <li data-value="10" value="10">10</li>
                            <li data-value="11" value="11">11</li>
                            <li data-value="12" value="12">12</li>
                            <li data-value="13" value="13">13</li>
                            <li data-value="14" value="14">14</li>
                            <li data-value="15" value="15">15</li>
                          </ul>
                        </div>
                      </div>
                      <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" value="061de97250" /><input type="hidden" name="_wp_http_referer" value="/properties/2-bedrooms-condo/" />
                      <div class="col-md-12"><input name="submit" type="submit" class="advanced_search_submit_button" value="Search" /></div>
                    </form>
                  </div>
   
                </li>
                <li id="wpestate_login_widget-1" class="widget-container loginwd_sidebar">
                  <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/properties/2-bedrooms-condo/" />
                  <div class="login_sidebar">
                    <h3 class="widget-title-sidebar" id="login-div-title">Login</h3>
                    <div class="login_form" id="login-div">
                      <div class="loginalert" id="login_message_area_wd"></div>

                      <input type="text" class="form-control" name="log" id="login_user_wd" placeholder="Username" />
                      <input type="password" class="form-control" name="pwd" id="login_pwd_wd" placeholder="Password" />
                      <input type="hidden" name="loginpop" id="loginpop_wd" value="0" />

                      <input type="hidden" id="security-login-wd" name="security-login-wd" value="24810e3f20-1638969718" />
                      <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-login-but-wd">Login</button>

                      <div class="navigation_links">
                        <a href="#" id="widget_register_sw">Don&#039;t have an account?</a> |
                        <a href="#" id="forgot_pass_widget">Forgot Password?</a>
                      </div>

                      <div class="login-links">
                        <div class="wpestate_social_login" id="facebooklogin_wd" data-social="facebook"><i class="fab fa-facebook-f"></i> Login with Facebook</div>
                        <input type="hidden" class="wpestate_social_login_nonce" value="428ebbade6" />
                      </div>
                    </div>

                    <h3 class="widget-title-sidebar" id="register-div-title">Register</h3>
                    <div class="login_form" id="register-div">
                      <div class="loginalert" id="register_message_area_wd"></div>
                      <input type="text" name="user_login_register" id="user_login_register_wd" class="form-control" placeholder="Username" />
                      <input type="text" name="user_email_register" id="user_email_register_wd" class="form-control" placeholder="Email" />
                      <div class="acc_radio">
                        <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                        <div class="radiolabel" for="acctype0">I only want to book</div>
                        <br />
                        <input type="radio" name="acc_type" id="acctype1" value="0" required />
                        <div class="radiolabel" for="acctype1">I want to rent my property</div>
                      </div>
                      <input type="checkbox" name="terms" id="user_terms_register_wd" /><label id="user_terms_register_wd_label" for="user_terms_register_wd"
                        >I agree with <a href="./../../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">terms &amp; conditions</a> </label
                      ><input type="hidden" id="security-register-wd" name="security-register-wd" value="d6ba4ef938-1638969718" /><button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-submit-register_wd">
                        Register
                      </button>
                      <div class="login-links">
                        <a href="#" id="widget_login_sw">Back to Login</a>
                      </div>
                    </div>
                  </div>
                  <h3 class="widget-title-sidebar" id="forgot-div-title_shortcode">Reset Password</h3>
                  <div class="login_form" id="forgot-pass-div_shortcode">
                    <div class="loginalert" id="forgot_pass_area_shortcode_wd"></div>
                    <div class="loginrow">
                      <input type="text" class="form-control" name="forgot_email" id="forgot_email_shortcode" placeholder="Enter Your Email Address" size="20" />
                    </div>
                    <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/properties/2-bedrooms-condo/" />
                    <input type="hidden" id="postid" value="0" />
                    <button class="wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-forgot-but_shortcode" name="forgot">Reset Password</button>
                    <div class="login-links shortlog">
                      <a href="#" id="return_login_shortcode">Return to Login</a>
                    </div>
                  </div>
                </li>
                <li id="wpestate_footer_latest_widget-1" class="widget-container latest_listings">
                  <h3 class="widget-title-sidebar">Latest Listing</h3>

                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="137">
                    <div class="property_listing" data-link="./properties/huge-sunny-villa-east-side/">
                      <div class="listing-unit-img-wrapper">
                        <a href="./../huge-sunny-villa-east-side/index.html"><img itemprop="image" src="./../../wp-content/uploads/2018/08/9-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                        <div class="price_unit_wrapper"></div>
                      </div>

                      <div class="title-container">
                        <div class="category_name">
                          <a itemprop="url" href="./../huge-sunny-villa-east-side/index.html" class="listing_title_unit">
                            <span itemprop="name"> Huge Sunny Villa &#8211; East Side </span>
                          </a>
                        </div>

                        <div class="category_tagline"><a href="./../../area/east-side/index.html" rel="tag">East Side</a>,</div>

                        <div class="price_unit">€ 500<span class="pernight"> /night</span></div>
                      </div>
                    </div>
                  </div>

                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="119">
                    <div class="property_listing" data-link="./properties/beautiful-cabin-simple-price/">
                      <div class="listing-unit-img-wrapper">
                        <a href="./../beautiful-cabin-simple-price/index.html"><img itemprop="image" src="./../../wp-content/uploads/2018/08/4-1-1-1-scaled-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                        <div class="price_unit_wrapper"></div>
                      </div>

                      <div class="title-container">
                        <div class="category_name">
                          <a itemprop="url" href="./../beautiful-cabin-simple-price/index.html" class="listing_title_unit">
                            <span itemprop="name"> Beautiful Cabin, Simple Price </span>
                          </a>
                        </div>

                        <div class="category_tagline"><a href="./../../area/brightwood/index.html" rel="tag">Brightwood</a>, <a href="./../../city/philadelphia/index.html" rel="tag">Philadelphia</a></div>

                        <div class="price_unit">€ 64<span class="pernight"> /night</span></div>
                      </div>
                    </div>
                  </div>

                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="115">
                    <div class="property_listing" data-link="./properties/victorian-bed-breakfast/">
                      <div class="listing-unit-img-wrapper">
                        <a href="./../victorian-bed-breakfast/index.html"><img itemprop="image" src="./../../wp-content/uploads/2018/08/3-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                        <div class="price_unit_wrapper"></div>
                      </div>

                      <div class="title-container">
                        <div class="category_name">
                          <a itemprop="url" href="./../victorian-bed-breakfast/index.html" class="listing_title_unit">
                            <span itemprop="name"> Victorian Bed &#038; Breakfast </span>
                          </a>
                        </div>

                        <div class="category_tagline"><a href="./../../area/mattapan/index.html" rel="tag">Mattapan</a>, <a href="./../../city/boston/index.html" rel="tag">Boston</a></div>

                        <div class="price_unit">€ 65<span class="pernight"> /night</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="latest_listings"></div>
                </li>
              </ul>
              {/* <!-- end sidebar --> */}
            </div>
          </div>
        </div>
        {/* <!-- end content_wrapper started in header or full_width_row from prop list --> */}

        <footer id="colophon" class="footer_back_repeat">
          <div id="footer-widget-area" class="row">
            <div id="first" class="widget-area col-md-4">
              <ul class="xoxo">
                <li id="text-2" class="widget-container widget_text">
                  <h3 class="widget-title-footer">ABOUT WP RENTALS</h3>
                  <div class="textwidget">
                    <p>WP RENTALS is committed to delivering a high level of expertise, customer service, and attention to detail to the market of accommodation booking .</p>
                    <p>We built the most featured WordPress theme for such a project. Test and convince yourself.</p>
                  </div>
                </li>
                <li id="wpestate_multiple_currency_widget-1" class="widget-container multiple_currency_widget">
                  <h3 class="widget-title-footer">Change Your Currency</h3>
                  <div class="dropdown form-control">
                    <div data-toggle="dropdown" id="sidebar_currency_list" class="sidebar_filter_menu">€ <span class="caret"></span></div>

                    <input type="hidden" name="filter_curr[]" value="" />
                    <ul id="list_sidebar_curr" class="dropdown-menu filter_menu list_sidebar_currency" role="menu" aria-labelledby="sidebar_currency_list">
                      <li role="presentation" data-curpos="before" data-coef="1" data-value="€" data-symbol="€" data-symbol2="€" data-pos="-1">€</li>
                      <li role="presentation" data-curpos="before" data-coef="0.765" data-value="$" data-symbol="$" data-symbol2="USD" data-pos="0">$</li>
                      <li role="presentation" data-curpos="after" data-coef="1.587" data-value="£" data-symbol="£" data-symbol2="GBP" data-pos="1">£</li>
                    </ul>
                  </div>
                  <input type="hidden" id="wprentals_change_currency" value="d33f6ebf0a" />
                </li>
              </ul>
            </div>
            {/* <!-- #first .widget-area --> */}

            <div id="second" class="widget-area col-md-4">
              <ul class="xoxo">
                <li id="wpestate_contact_widget-1" class="widget-container contact_sidebar">
                  <h3 class="widget-title-footer">Contact</h3>
                  <div class="contact_sidebar_wrap">
                    <p class="widget_contact_addr"><i class="fas fa-home"></i>3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755 Commercial OR 97302</p>
                    <p class="widget_contact_phone"><i class="fas fa-phone"></i><a href="tel:%28305%29+555-4446">(305) 555-4446</a></p>
                    <p class="widget_contact_email"><i class="far fa-envelope"></i><a href="mailto:email@yourdomain.com">email@yourdomain.com</a></p>
                    <p class="widget_contact_url"><i class="fas fa-desktop"></i><a href="http://demo1.wprentals.org/">WP Rentals</a></p>
                  </div>
                </li>
                <li id="wpestate_social_widget-1" class="widget-container social_sidebar">
                  <h3 class="widget-title-footer">Social Links:</h3>
                  <div class="social_sidebar_internal">
                    <a href="#" target="_blank"><i class="fas fa-rss fa-fw"></i></a><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a><a href="#" target="_blank"><i class="fab fa-twitter fa-fw"></i></a
                    ><a href="#" target="_blank"><i class="fab fa-dribbble fa-fw"></i></a><a href="#" target="_blank"><i class="fab fa-google-plus-g fa-fw"></i></a><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- #second .widget-area --> */}

            <div id="third" class="widget-area col-md-4">
              <ul class="xoxo">
                <li id="wpestate_footer_latest_widget-2" class="widget-container latest_listings">
                  <h3 class="widget-title-footer">Latest Listings</h3>

                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="137">
                    <div class="property_listing" data-link="./properties/huge-sunny-villa-east-side/">
                      <div class="listing-unit-img-wrapper">
                        <a href="./../huge-sunny-villa-east-side/index.html"><img itemprop="image" src="./../../wp-content/uploads/2018/08/9-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                        <div class="price_unit_wrapper"></div>
                      </div>

                      <div class="title-container">
                        <div class="category_name">
                          <a itemprop="url" href="./../huge-sunny-villa-east-side/index.html" class="listing_title_unit">
                            <span itemprop="name"> Huge Sunny Villa &#8211; East Side </span>
                          </a>
                        </div>

                        <div class="category_tagline"><a href="./../../area/east-side/index.html" rel="tag">East Side</a>,</div>

                        <div class="price_unit">€ 500<span class="pernight"> /night</span></div>
                      </div>
                    </div>
                  </div>

                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="119">
                    <div class="property_listing" data-link="./properties/beautiful-cabin-simple-price/">
                      <div class="listing-unit-img-wrapper">
                        <a href="./../beautiful-cabin-simple-price/index.html"><img itemprop="image" src="./../../wp-content/uploads/2018/08/4-1-1-1-scaled-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                        <div class="price_unit_wrapper"></div>
                      </div>

                      <div class="title-container">
                        <div class="category_name">
                          <a itemprop="url" href="./../beautiful-cabin-simple-price/index.html" class="listing_title_unit">
                            <span itemprop="name"> Beautiful Cabin, Simple Price </span>
                          </a>
                        </div>

                        <div class="category_tagline"><a href="./../../area/brightwood/index.html" rel="tag">Brightwood</a>, <a href="./../../city/philadelphia/index.html" rel="tag">Philadelphia</a></div>

                        <div class="price_unit">€ 64<span class="pernight"> /night</span></div>
                      </div>
                    </div>
                  </div>

                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="115">
                    <div class="property_listing" data-link="./properties/victorian-bed-breakfast/">
                      <div class="listing-unit-img-wrapper">
                        <a href="./../victorian-bed-breakfast/index.html"><img itemprop="image" src={Victoria} class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                        <div class="price_unit_wrapper"></div>
                      </div>

                      <div class="title-container">
                        <div class="category_name">
                          <a itemprop="url" href="./../victorian-bed-breakfast/index.html" class="listing_title_unit">
                            <span itemprop="name"> Victorian Bed &#038; Breakfast </span>
                          </a>
                        </div>

                        <div class="category_tagline"><a href="./../../area/mattapan/index.html" rel="tag">Mattapan</a>, <a href="./../../city/boston/index.html" rel="tag">Boston</a></div>

                        <div class="price_unit">€ 65<span class="pernight"> /night</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="latest_listings"></div>
                </li>
              </ul>
            </div>
            {/* <!-- #third .widget-area --> */}
          </div>
          {/* <!-- #footer-widget-area --> */}

          <div class="sub_footer">
            <div class="sub_footer_content">
              <span class="copyright"> Copyright 2019 | WP Estate. All Rights Reserved. </span>

              <div class="subfooter_menu"></div>
            </div>
          </div>
        </footer>
        {/* <!-- #colophon --> */}

        <a href="#" class="backtop"><i class="fas fa-chevron-up"></i></a>
        <div id="book_per_hour_wrapper">
          <div class="book_per_hour_back"></div>
          <div id="book_per_hour">
            <div id="book_per_hour_close">x</div>
            <div id="book_per_hour_calendar"></div>
            <div id="book_per_hour_footer_toolbar">
              <button id="per_hour_cancel" class="wpb_btn-info wpb_btn-small wpestate_vc_button vc_button">Cancel</button>
              <button id="per_hour_ok" class="wpb_btn-info wpb_btn-small wpestate_vc_button vc_button">Ok</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end class container --> */}

      <div class="social_share_wrapper social_share_half_map_on_right">
        <a class="social_share share_facebook_side" href="https://www.facebook.com/wpestate" target="_blank"><i class="fab fa-facebook-f"></i></a>

        <a class="social_share share_twiter_side" href="https://twitter.com/WPESTATE" target="_blank"><i class="fab fa-twitter"></i></a>

        <a class="social_share share_linkedin_side" href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>

        <a class="social_share share_pinterest_side" href="#" target="_blank"><i class="fab fa-pinterest-p"></i></a>

        <a class="social_share share_instagram_side" href="#" target="_blank"><i class="fab fa-instagram"></i></a>

        <a class="social_share share_youtube_side" href="#" target="_blank"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
    {/* <!-- end website wrapper -->

    <!-- Modal --> */}
    <div class="modal fade" id="instant_booking_modal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h2 class="modal-title_big">Confirm your booking</h2>
            <h4 class="modal-title" id="myModalLabel">Review the dates and confirm your booking</h4>
          </div>

          <div class="modal-body"></div>
        </div>
        {/* <!-- /.modal-content --> */}
      </div>
      {/* <!-- /.modal-dialog --> */}
    </div>
    {/* <!-- /.modal -->

    <!-- Modal --> */}
    <div class="modal fade" id="contact_owner_modal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h2 class="modal-title_big">Contact the owner</h2>
            <h4 class="modal-title" id="myModalLabel">Please complete the form below to contact owner.</h4>
          </div>

          <div class="modal-body">
            <div id="booking_form_request_mess_modal"></div>
            <div class="">
              <input type="text" id="contact_u_name" size="40" name="contact_u_name" class="form-control" placeholder="Your Name" value="" />
            </div>
            <div class="">
              <input type="text" id="contact_u_email" size="40" name="contact_u_email" class="form-control" placeholder="Your Email" value="" />
            </div>
            <div class="has_calendar calendar_icon first_calendar">
              <input type="text" id="booking_from_date" size="40" name="booking_from_date" class="form-control" placeholder="Check-In" value="" />
            </div>

            <div class="has_calendar calendar_icon">
              <input type="text" id="booking_to_date" size="40" name="booking_to_date" class="form-control" placeholder="Check-Out" value="" />
            </div>

            <div class="">
              <select id="booking_guest_no" name="booking_guest_no" class="cd-select form-control booking_guest_no_select">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
                <option value="9">9 Guests</option>
                <option value="10">10 Guests</option>
                <option value="11">11 Guests</option>
                <option value="12">12 Guests</option>
                <option value="13">13 Guests</option>
                <option value="14">14 Guests</option>
                <option value="15">15 Guests</option>
              </select>
            </div>

            <input type="hidden" id="property_id" name="property_id" value="129" />
            <input name="prop_id" type="hidden" id="agent_property_id" value="129" />
            <input name="agent_id" type="hidden" id="agent_id" value="0" />

            <div class="">
              <textarea id="booking_mes_mess" name="booking_mes_mess" cols="50" rows="6" placeholder="Your message" class="form-control"></textarea>
            </div>
            <div class="gpr_wrapper">
              <input type="checkbox" id="wpestate_agree_gdpr" class="wpestate_agree_gdpr" name="wpestate_agree_gdpr" />
              <label for="wpestate_agree_gdpr">I consent to the <a target="_blank" href="./../../gdpr-terms-conditions/index.html">GDPR Terms</a></label>
            </div>
            <button type="submit" id="submit_mess_front" class="wpb_button submit_mess_front_class wpb_btn-info wpb_regularsize wpestate_vc_button vc_button">Send Message</button
            ><input type="hidden" id="wprentals_submit_mess_front_nonce" value="c1aacdeea2" />
          </div>
          {/* <!-- /.modal-body --> */}
        </div>
        {/* <!-- /.modal-content --> */}
      </div>
      {/* <!-- /.modal-dialog --> */}
    </div>
    {/* <!-- /.modal -->
    <!-- Modal --> */}
    <div class="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h2 class="modal-title_big">
              Log in or Sign up to continue
              <h4 class="modal-title" id="myModalLabel">Please fill in the log in or register forms</h4>
            </h2>
          </div>

          <div class="modal-body">
            <div id="ajax_login_div" class="">
              <div class="login_form" id="login-div">
                <div class="loginalert" id="login_message_area"></div>

                <SignIn/>

              </div>
              {/* <!-- end login div--> */}
              <div class="login-links">
                <div class="wpestate_social_login" id="facebooklogin" data-social="facebook"><i class="fab fa-facebook-f"></i> Login with Facebook</div>
                <input type="hidden" class="wpestate_social_login_nonce" value="428ebbade6" />
              </div>
              {/* <!-- end login links--> */}
            </div>
            {/* <!-- /.ajax_login_div --> */}

            <div id="ajax_register_div" class="">
              <div class="login_form shortcode-login">
                <div class="loginalert" id="register_message_area"></div>


                <SignUp/>

              </div>
              <div id="reveal_login"><a href="#">Already a member? Sign in!</a></div>
              <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/properties/2-bedrooms-condo/" />
            </div>

            <div class="login_form" id="forgot-pass-div_mod">
              <div class="loginalert" id="forgot_pass_area_shortcode"></div>
              <div class="loginrow">
                <input type="text" class="form-control forgot_email_mod" name="forgot_email" id="forgot_email_mod" placeholder="Enter Your Email Address" size="20" />
              </div>
              <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/properties/2-bedrooms-condo/" />
              <input type="hidden" id="postid" value="0" />
              <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-forgot-but_mod" name="forgot">Reset Password</button>

              <a href="#" id="return_login_mod">Return to Login</a>
            </div>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>
      {/* <!-- /.modal --> */}
    </div>


  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h2 class="modal-title_big">
      Log in or Sign up to continue
      <h4 class="modal-title" id="myModalLabel">Please fill in the log in or register forms</h4>
    </h2>
  </div>
      <div class="modal-body">
      <div id="ajax_login_div" class="">
      <div class="login_form" id="login-div">
      <div class="loginalert" id="login_message_area"></div>
        
        <LogIn/>

      </div>

        
      </div>

   
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h2 class="modal-title_big">
      Log in or Sign up to continue
      <h4 class="modal-title" id="myModalLabel">Please fill in the log in or register forms</h4>
    </h2>
  </div>
      <div class="modal-body">
      <div id="ajax_register_div" class="">
              <div class="login_form shortcode-login">
                <div class="loginalert" id="register_message_area"></div>


             <Register/>

              </div>
              <div id="reveal_login"><a href="#">Already a member? Sign in!</a></div>
              <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/properties/2-bedrooms-condo/" />
            </div>

   
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
    {/* <!-- /.login model --> */}
    <input type="hidden" id="wprentals_ajax_filtering" value="c7f2599346" /> <input type="hidden" id="wpestate_ajax_log_reg" value="36cd982787" />
  
  </body>

  <div class="mobile_booking_wrapper">
    <div class="mobile_booking_wrapper_flex">
      <div class="property_ratings"></div>

      <div itemprop="price" class="listing_main_image_price">€ 150<span class="pernight_label"> per night</span></div>
    </div>

    <button class="wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="mobile_booking_triger">Make a reservation</button>
  </div>
  <input type="hidden" id="wprentals_add_booking" value="69bea19788" />

        </div>
    )
}
