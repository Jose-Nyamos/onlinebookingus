import React, { useCallback,useState,useEffect,useContext } from 'react';
import Content from '../../assets/wp-content/uploads/2018/08/11-1-1-1-1800x790.jpg';
import Content_1 from '../../assets/wp-content/uploads/2018/08/10-1-1-1-1920x790.jpg';
import Content_2 from '../../assets/wp-content/uploads/2018/08/9-1-1-1-1920x790.jpg';
import Default from '../../assets/wp-content/themes/wprentals/img/defaultimage.jpg';
import Demo from '../../assets/wp-content/uploads/2020/07/profile3-1-2.jpg';
import Restaurant from '../../assets/wp-content/uploads/2015/04/restaurant-1-1-1170x921.jpeg';
import Dolphine from '../../assets/wp-content/uploads/2015/04/dolphin-1-1-1170x921.jpeg';
import Diving from '../../assets/wp-content/uploads/2015/04/diving-1-1-1170x921.jpeg';
import Owner from '../../assets/wp-content/uploads/2018/08/11-1-1-1-60x60.jpg';
import Thumb from '../../assets/wp-content/uploads/2018/08/6-1-1-1-60x60.jpg';
import Itemprop from '../../assets/wp-content/uploads/2018/08/3-1-1-400x314.jpg'
import { Link, withRouter, useHistory} from 'react-router-dom';
import Header from '../Home/Header/Header'
import Mobile from '../Home/Header/Mobile'
import Navbar from '../Home/Header/Navbar'
import SignIn from './SignIn';
import SignUp from './SignUp';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { logoutClearSession, loginPost, verifyLogin } from '../Utility/ReigstrationLoginFunction'




import styled from "styled-components";


import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import {GuestBookingContextProvider} from '../Properties/Context/GuestBookingContext';
import SearchHome from '../SearchHome/SearchHome';
import Login from './Login';
import Home from './Home';



const StyledDatePickerWrapper = styled.div`
  & .DateRangePicker,
  .DateRangePickerInput {
    .DateInput {
      width: 100%;
      height: 40px;
    

      .DateInput_input {
        font-size: 1rem;
        border-bottom: 0;
        padding: 12px 16px 14px;
      }
    }

    .DateRangePickerInput__withBorder {
      border-radius: 4px;
      overflow: hidden;

      :hover,
      .DateInput_input__focused {
        border: 1px solid red;
      }

      .CalendarDay__selected {
        background: blue;
        border: blueviolet;
      }
    }

    .DateRangePicker_picker.DateRangePicker_picker {
      top: 43px;
      left: 2px;
      /* top: 43px !important;
      left: 2px !important; */
    }
  }`


class Userhomepage extends React.Component {

  pushtoCurrentURL() {
    const currentURL = this.props.location.pathname + this.props.location.search
    this.props.history.push(currentURL)
  }

  Logout(event) {
    logoutClearSession()
    event.preventDefault()
    localStorage.removeItem('accesstoken')
    if (window.location.pathname === '/UserProfile' || window.location.pathname === '/Reservations')
      this.props.history.push('/')
    else
      this.pushtoCurrentURL()
  }

  Home(event) {
    event.preventDefault()

    this.props.history.push(`/`)
  }

  render() {

    const LogoutForm = (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <div className="col-auto pl-0 pr-0">
            <button className="btn btn-primary my-2 my-sm-0" onClick={this.Logout.bind(this)} type="submit">LOGOUT</button>
          </div>
        </form>
      </div>
    )
        
  const homepage = (
    <div>
          
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
                 <Link to="/geathost">Post &#8211; Image Slider</Link>
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


     <div class="master_header master_  wide  google_map_list_header master_header_wide_yes hover_type_5">         
     <div class="mobile_header  is_half_map ">
     <div class="mobile-trigger"><i class="fas fa-bars"></i></div>
     <div class="mobile-logo">
       <a href="/">
       <img src="https://onlinebookingus.com/wp-content/uploads/2019/03/cropped-Color-logo-no-background-2.png" class="img-responsive retina_ready" alt="logo" />  
         </a>
         </div>
             <div class="mobile-trigger-user"><i class="fas fa-user-circle"></i></div>
         </div>


           <div class="header_wrapper   is_half_map  header_type1 header_align_left header_wide_yes">
             <div class="header_wrapper_inside">

               <div class="logo">

                 <a href="/">

                 <img src="https://onlinebookingus.com/wp-content/uploads/2019/03/cropped-Color-logo-no-background-1.png" class="img-responsive retina_ready" alt="logo" />

                 </a>

               </div>

           <div class="user_menu" id="user_menu_u">     
               {LogoutForm}                                   
           </div> 




         
         <nav id="access">
           <ul id="menu-primary-menu-1" class="menu">
             <li id="menu-item-1854" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children no-megamenu">
               <Link class="menu-item-link" to="/">
                 Home
               </Link>
             
             </li>
             <li id="menu-item-1846" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                 <li id="menu-item-1849" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                   <Link class="menu-item-link" to="#">
                     Advanced Search
                   </Link>             
                 </li>            
             </li>
             <li id="menu-item-1847" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
               <Link class="menu-item-link" to="#">
                 Blog List
               </Link>
               <ul class="sub-menu">
                 <li id="menu-item-1862" class="menu-item menu-item-type-post_type menu-item-object-estate_agent">
                   <Link class="menu-item-link" to="/amber_demo">
                     What Guest Want To Know
                   </Link>
                 </li>
                 <li id="menu-item-1863" class="menu-item menu-item-type-post_type menu-item-object-estate_agent">
                   <Link class="menu-item-link" to="/john_demo">
                     How to be a great Renters for Guest
                   </Link>
                 </li>
               </ul>
             </li>
             
             <li id="menu-item-1851" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
               <Link class="menu-item-link" to="#">
                 Favourites Listing
               </Link>           
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


     <div class="header_media with_search_newtype">
       <div class="theme_slider_wrapper_type2 theme_slider_extended" id="estate-carousel_slick">
         <div class="item-slick">
           <div class="slider-content-wrapper">
             <div class="item-version">01</div>
             <div class="slider-content">
               <div class="theme-slider-price">
                 <div class="price-slider-wrapper"><span class="price-slider">€ 23</span>/per night</div>
               </div>

               <div class="slider-title">
                 <h2>
                   <Link to="/properties_westown">West Town 3rd Floor Dorm</Link>
                 </h2>
               </div>

               <div class="listing-desc-slider">
                 <span
                   >Beautiful 3rd floor P/House w/in a short walk/drive to restaurants, stores and public trans. Private room/bath featuring top amenities. HDTV, internet, biz center (in room), washer/dryer, wine fridge, gas fireplace, surround
                   sound, private roof deck. One bus ride away from subway. Wifi, eat in kitchen, cable tshopsv, warm host family, and a small lovable dog. ...
                 </span>
               </div>

               <Link class="theme-slider-view" to="/properties_westown">View more</Link>
             </div>
           </div>

           <div class="slider-content-cover"></div>

           <div class="slider-content-image">
             <img src={Content} alt="" />
           </div>
         </div>
         <div class="item-slick">
           <div class="slider-content-wrapper">
             <div class="item-version">02</div>
             <div class="slider-content">
               <div class="theme-slider-price">
                 <div class="price-slider-wrapper"><span class="price-slider">€ 159</span>/per night</div>
               </div>

               <div class="slider-title">
                 <h2>
                   <Link to="/property_villa">Modern &#038; Spacious Villa</Link>
                 </h2>
               </div>

               <div class="listing-desc-slider">
                 <span
                   >This spacious and modern 1 bedroom with balcony is located on Essex and Stanton in the Lower East Side (close to the Hotel on Rivington) in a brand new building with elevator and a rooftop deck with spectacular city views. The
                   apartment gets tons of light and comes with modern amenities including centralized heat/AC (vital ...
                 </span>
               </div>

               <Link class="theme-slider-view" to="/property_villa">View more</Link>
             </div>
           </div>

           <div class="slider-content-cover"></div>

           <div class="slider-content-image" >
             <img src={Content_1} alt="" />
           </div>
         </div>
         <div class="item-slick">
           <div class="slider-content-wrapper">
             <div class="item-version">03</div>
             <div class="slider-content">
               <div class="theme-slider-price">
                 <div class="price-slider-wrapper"><span class="price-slider">€ 500</span>/per night</div>
               </div>

               <div class="slider-title">
                 <h2>
                   <Link to="/properties_villa">Huge Sunny Villa &#8211; East Side</Link>
                 </h2>
               </div>

               <div class="listing-desc-slider">
                 <span
                   >Enjoy a huge bedroom in a newly renovated 1000 sq feet, 3 bedroom, apartment with all the amenities. It has a fully functional kitchen with cookware and a bathroom with all the essentials and a dryer. The apartment is located
                   right in the middle of all the most convenient, vibrant, and fun neighborhoods in NYC.
                 </span>
               </div>

               <Link class="theme-slider-view" to="/properties_villa">View more</Link>
             </div>
           </div>

           <div class="slider-content-cover"></div>

           <div class="slider-content-image" >
             <img src={Content_2} alt="" />
           </div>
         </div>
       </div>   
      
          <SearchHome/>
          
     </div>

     <div id="adv-search-header-mobile">Advanced Search</div>

     <div class="adv-search-mobile" id="adv-search-mobile">
       <div class="advanced_search_form_wrapper" data-postid="18460">
         <form role="search" method="get" action="./advanced-search/">
           <div class="col-md-12 Where_do_you_want_to_go_? map_icon">
             <input type="hidden" class="stype" id="stype" name="stype" value="tax" /><input type="text" id="search_locationmobile_autointernal" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="" />
             <input type="hidden" id="advanced_citymobile" class="form-control" name="advanced_city" data-value="" value="" />
             <input type="hidden" id="advanced_areamobile" class="form-control" name="advanced_area" data-value="" value="" />
             <input type="hidden" id="advanced_countrymobile" class="form-control" name="advanced_country" data-value="" value="" />
             <input type="hidden" id="property_admin_areamobile" name="property_admin_area" value="" />
   
           </div>
           <div class="col-md-12 Check-In calendar_icon">
             <input type="text" id="check_in_mobile" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="" />
           </div>
           <div class="col-md-12 Check-Out calendar_icon">
             <input type="text" id="check_out_mobile" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="" />
           </div>
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
           <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" value="061de97250" /><input type="hidden" name="_wp_http_referer" value="/homepage-elementor/" />
           <div class="col-md-12">
             <input name="submit" type="submit" class="advanced_search_submit_button" value="Search" />
           </div>
         </form>
       </div>

     </div>


     <div class="content_wrapper row">
       <div id="post" class="row post-18460 page type-page status-publish hentry">
         <div class="col-md-12 breadcrumb_container">
           {/* <ol class="breadcrumb">
             <li><Link to="/">Home</Link></li>
             <li class="active">Homepage Elementor</li>
           </ol> */}
         </div>
         <div class="col-md-12">
           <div class="single-content">
             <div data-elementor-type="wp-post" data-elementor-id="18460" class="elementor elementor-18460" data-elementor-settings="[]">
               <div class="elementor-inner">
                 <div class="elementor-section-wrap">
                   <section
                     class="
                       elementor-section
                       elementor-top-section
                       elementor-element
                       elementor-element-3a46344f
                       elementor-section-stretched
                       elementor-section-height-min-height
                       elementor-section-boxed
                       elementor-section-height-default
                       elementor-section-items-middle
                     "
                     data-id="3a46344f"
                     data-element_type="section"
                     data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                   >
                     <div class="elementor-background-overlay"></div>
                     <div class="elementor-container elementor-column-gap-default">
                       <div class="elementor-row">
                         <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-28fcac3f" data-id="28fcac3f" data-element_type="column">
                           <div class="elementor-column-wrap elementor-element-populated">
                             <div class="elementor-widget-wrap">
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-5cc2d376 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="5cc2d376"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div
                                       class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-65ff20bf elementor-invisible"
                                       data-id="65ff20bf"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-690a414f animated-slow elementor-invisible elementor-widget elementor-widget-heading"
                                             data-id="690a414f"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="heading.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <h2 class="elementor-heading-title elementor-size-default">We have the <br />service you need</h2>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>

                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-486146cc elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="486146cc"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div
                                       class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-50946991 box-effect-hover elementor-invisible"
                                       data-id="50946991"
                                       data-element_type="column"
                                       data-settings='{"background_background":"gradient","animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-3359a45b animated-slow elementor-view-default elementor-invisible elementor-widget elementor-widget-icon"
                                             data-id="3359a45b"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn"}'
                                             data-widget_type="icon.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="elementor-icon-wrapper">
                                                 <div class="elementor-icon elementor-animation-pulse"></div>
                                               </div>
                                             </div>
                                           </div>
                                           <div
                                             class="elementor-element elementor-element-49d4416e elementor-vertical-align-middle elementor-position-left elementor-widget elementor-widget-image-box"
                                             data-id="49d4416e"
                                             data-element_type="widget"
                                             data-widget_type="image-box.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="elementor-image-box-wrapper">
                                                 <div class="elementor-image-box-content">
                                                   <h3 class="elementor-image-box-title">Register for free</h3>
                                                   <p class="elementor-image-box-description">Cum sociis natoque penatibus et magnis dis​</p>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7b352324 box-effect-hover elementor-invisible"
                                       data-id="7b352324"
                                       data-element_type="column"
                                       data-settings='{"background_background":"gradient","animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-23cc37c0 animated-slow elementor-view-default elementor-invisible elementor-widget elementor-widget-icon"
                                             data-id="23cc37c0"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn"}'
                                             data-widget_type="icon.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="elementor-icon-wrapper">
                                                 <div class="elementor-icon elementor-animation-pulse"></div>
                                               </div>
                                             </div>
                                           </div>
                                           <div
                                             class="elementor-element elementor-element-22ac3460 elementor-vertical-align-middle elementor-position-left elementor-widget elementor-widget-image-box"
                                             data-id="22ac3460"
                                             data-element_type="widget"
                                             data-widget_type="image-box.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="elementor-image-box-wrapper">
                                                 <div class="elementor-image-box-content">
                                                   <h3 class="elementor-image-box-title">Add your listing</h3>
                                                   <p class="elementor-image-box-description">Cum sociis natoque penatibus et magnis dis​</p>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-605020ab box-effect-hover elementor-invisible"
                                       data-id="605020ab"
                                       data-element_type="column"
                                       data-settings='{"background_background":"gradient","animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-64eef4ea animated-slow elementor-view-default elementor-invisible elementor-widget elementor-widget-icon"
                                             data-id="64eef4ea"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn"}'
                                             data-widget_type="icon.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="elementor-icon-wrapper">
                                                 <div class="elementor-icon elementor-animation-pulse"></div>
                                               </div>
                                             </div>
                                           </div>
                                           <div
                                             class="elementor-element elementor-element-17ead8e elementor-vertical-align-middle elementor-position-left elementor-widget elementor-widget-image-box"
                                             data-id="17ead8e"
                                             data-element_type="widget"
                                             data-widget_type="image-box.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="elementor-image-box-wrapper">
                                                 <div class="elementor-image-box-content">
                                                   <h3 class="elementor-image-box-title">Upload images</h3>
                                                   <p class="elementor-image-box-description">Cum sociis natoque penatibus et magnis dis​</p>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3de9cd9 box-effect-hover elementor-invisible"
                                       data-id="3de9cd9"
                                       data-element_type="column"
                                       data-settings='{"background_background":"gradient","animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-379dd3ca animated-slow elementor-view-default elementor-invisible elementor-widget elementor-widget-icon"
                                             data-id="379dd3ca"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn"}'
                                             data-widget_type="icon.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="elementor-icon-wrapper">
                                                 <div class="elementor-icon elementor-animation-pulse"></div>
                                               </div>
                                             </div>
                                           </div>
                                           <div
                                             class="elementor-element elementor-element-4b49fb63 elementor-vertical-align-middle elementor-position-left elementor-widget elementor-widget-image-box"
                                             data-id="4b49fb63"
                                             data-element_type="widget"
                                             data-widget_type="image-box.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="elementor-image-box-wrapper">
                                                 <div class="elementor-image-box-content">
                                                   <h3 class="elementor-image-box-title">Get reservations</h3>
                                                   <p class="elementor-image-box-description">Cum sociis natoque penatibus et magnis dis​</p>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                               <div
                                 class="elementor-element elementor-element-1e5148d4 elementor-align-left animated-slow elementor-mobile-align-center elementor-invisible elementor-widget elementor-widget-button"
                                 data-id="1e5148d4"
                                 data-element_type="widget"
                                 data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                 data-widget_type="button.default"
                               >
                                 <div class="elementor-widget-container">
                                   <div class="elementor-button-wrapper">
                                     <Link to="/" class="elementor-button-link elementor-button elementor-size-md" role="button">
                                       <span class="elementor-button-content-wrapper">
                                         <span class="elementor-button-text">Check all services</span>
                                       </span>
                                     </Link>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </section>
                   
                   <section
                     class="elementor-section elementor-top-section elementor-element elementor-element-1fee027 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                     data-id="1fee027"
                     data-element_type="section"
                     data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                   >
                     <div class="elementor-container elementor-column-gap-no">
                       <div class="elementor-row">
                         <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d939306" data-id="d939306" data-element_type="column">
                           <div class="elementor-column-wrap elementor-element-populated">
                             <div class="elementor-widget-wrap">
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-78f088c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="78f088c"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2c5bfd97" data-id="2c5bfd97" data-element_type="column">
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-4d9fa228 animated-slow elementor-invisible elementor-widget elementor-widget-heading"
                                             data-id="4d9fa228"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="heading.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <h2 class="elementor-heading-title elementor-size-default">The hottest <br />locations for travel</h2>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1053c2df" data-id="1053c2df" data-element_type="column">
                                       <div class="elementor-column-wrap">
                                         <div class="elementor-widget-wrap"></div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>

                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-48c82603 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="48c82603"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d189306 elementor-invisible"
                                       data-id="d189306"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-370e8c03 elementor-widget elementor-widget-WpRentals_Featured_Place"
                                             data-id="370e8c03"
                                             data-element_type="widget"
                                             data-widget_type="WpRentals_Featured_Place.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="places_wrapper" data-link="./city/baltimore/">
                                                 <div class="listing-hover-gradient"></div>
                                                 <div class="listing-hover"></div>
                                                 <div class="places1 featuredplace">
                                                   <img src={Default} alt="" />
                                                 </div>
                                                 <div class="category_name">
                                                   <Link class="featured_listing_title" to="/baltimo"></Link>
                                                   <div class="category_tagline"></div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-eae083e elementor-invisible"
                                       data-id="eae083e"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-52ca3c59 elementor-widget elementor-widget-WpRentals_Featured_Place"
                                             data-id="52ca3c59"
                                             data-element_type="widget"
                                             data-widget_type="WpRentals_Featured_Place.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="places_wrapper" data-link="./features/bar-restaurant/">
                                                 <div class="listing-hover-gradient"></div>
                                                 <div class="listing-hover"></div>
                                                 <div class="places1 featuredplace" >
                                                   <img src={Default} alt="" />
                                                 </div>
                                                 <div class="category_name">
                                                   <Link class="featured_listing_title" to="./../features/bar-restaurant/index.html"></Link>
                                                   <div class="category_tagline"></div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-79e30469 elementor-invisible"
                                       data-id="79e30469"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-16860a37 elementor-widget elementor-widget-WpRentals_Featured_Place"
                                             data-id="16860a37"
                                             data-element_type="widget"
                                             data-widget_type="WpRentals_Featured_Place.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="places_wrapper" data-link="./features/doorman/">
                                                 <div class="listing-hover-gradient"></div>
                                                 <div class="listing-hover"></div>
                                                 <div class="places1 featuredplace" >
                                                   <img src={Demo} alt="" />
                                                 </div>
                                                 <div class="category_name">
                                                   <Link class="featured_listing_title" to="./../features/doorman/index.html"></Link>
                                                   <div class="category_tagline"></div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                               
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-25da5b33 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="25da5b33"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div
                                       class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6f7e2044 elementor-invisible"
                                       data-id="6f7e2044"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-77da611 elementor-widget elementor-widget-WpRentals_Featured_Place"
                                             data-id="77da611"
                                             data-element_type="widget"
                                             data-widget_type="WpRentals_Featured_Place.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="places_wrapper" data-link="./features/dryer/">
                                                 <div class="listing-hover-gradient"></div>
                                                 <div class="listing-hover"></div>
                                                 <div class="places1 featuredplace" >
                                                   <img src={Demo} alt="" />
                                                 </div>
                                                 <div class="category_name">
                                                   <Link class="featured_listing_title" to="./../features/dryer/index.html"></Link>
                                                   <div class="category_tagline"></div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cbe8872 elementor-invisible"
                                       data-id="cbe8872"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-76b7eef2 elementor-widget elementor-widget-WpRentals_Featured_Place"
                                             data-id="76b7eef2"
                                             data-element_type="widget"
                                             data-widget_type="WpRentals_Featured_Place.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="places_wrapper" data-link="./features/dryer/">
                                                 <div class="listing-hover-gradient"></div>
                                                 <div class="listing-hover"></div>
                                                 <div class="places1 featuredplace">
                                                   <img src={Demo} alt="" />
                                                 </div>
                                                 <div class="category_name">
                                                   <Link class="featured_listing_title" to="./../features/dryer/index.html"></Link>
                                                   <div class="category_tagline"></div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </section>
                   <section
                     class="elementor-section elementor-top-section elementor-element elementor-element-b8ea07b elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                     data-id="b8ea07b"
                     data-element_type="section"
                     data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                   >
                     <div class="elementor-background-overlay"></div>
                     <div class="elementor-container elementor-column-gap-no">
                       <div class="elementor-row">
                         <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-19e2946e" data-id="19e2946e" data-element_type="column">
                           <div class="elementor-column-wrap elementor-element-populated">
                             <div class="elementor-widget-wrap">
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-24ee2940 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="24ee2940"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-19dd12c9" data-id="19dd12c9" data-element_type="column">
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-3e1984b4 animated-slow elementor-invisible elementor-widget elementor-widget-heading"
                                             data-id="3e1984b4"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="heading.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <h2 class="elementor-heading-title elementor-size-default">
                                                 Latest listings
                                                 <br />published on the site
                                               </h2>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-22e64a1a" data-id="22e64a1a" data-element_type="column">
                                       <div class="elementor-column-wrap">
                                         <div class="elementor-widget-wrap"></div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                               <div
                                 class="elementor-element elementor-element-5b107ff8 elementor-invisible elementor-widget elementor-widget-Wprentals_Recent_Items"
                                 data-id="5b107ff8"
                                 data-element_type="widget"
                                 data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                 data-widget_type="Wprentals_Recent_Items.default"
                               >
                                 <div class="elementor-widget-container">
                                   <div class="bottom-estate_property nobutton">
                                     <div class="items_shortcode_wrapper">
                                       <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="137">
                                         <div class="property_listing" data-link="./properties/huge-sunny-villa-east-side/">
                                           <div class="listing-unit-img-wrapper">
                                             <Link to="./../properties/huge-sunny-villa-east-side/index.html"
                                               >
                                               <img itemprop="image" src="./../wp-content/uploads/2018/08/9-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image"
                                             /></Link>
                                             <div class="price_unit_wrapper"></div>
                                             <div class="price_unit">€ 500<span class="pernight"> /night</span></div>
                                           </div>

                                           <div class="featured_div">featured</div>
                                           <div class="property_status_wrapper"></div>
                                           <div class="title-container">
                                             <div class="price_unit">€ 500<span class="pernight"> /night</span></div>

                                             <div class="rating_placeholder"></div>

                                             <Link to="./../properties/huge-sunny-villa-east-side/index.html" class="owner_thumb" >
                                               <img src={Thumb} alt="" />
                                             </Link>

                                             <div class="category_name">
                                               <Link itemprop="url" to="./../properties/huge-sunny-villa-east-side/index.html" class="listing_title_unit">
                                                 <span itemprop="name"> Huge Sunny Villa – East Side </span>
                                               </Link>
                                               <div class="category_tagline map_icon"><Link to="./../area/east-side/index.html" rel="tag">East Side</Link>,</div>

                                               <div class="category_tagline actions_icon">
                                                 <Link to="./../listings/villa/index.html" rel="tag">Villa</Link>
                                                 /
                                                 <Link to="./../action/entire-home/index.html" rel="tag">Entire home</Link>
                                               </div>
                                             </div>

                                             <div class="property_unit_action">
                                               <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="137"><i class="fas fa-heart"></i></span>
                                             </div>
                                           </div>
                                         </div>
                                       </div>

                                       <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="119">
                                         <div class="property_listing" data-link="./properties/beautiful-cabin-simple-price/">
                                           <div class="listing-unit-img-wrapper">
                                             <Link to="./../properties/beautiful-cabin-simple-price/index.html"
                                               ><img itemprop="image" src={Itemprop} class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image"
                                             /></Link>
                                             <div class="price_unit_wrapper"></div>
                                             <div class="price_unit">€ 64<span class="pernight"> /night</span></div>
                                           </div>

                                           <div class="featured_div">featured</div>
                                           <div class="property_status_wrapper"></div>
                                           <div class="title-container">
                                             <div class="price_unit">€ 64<span class="pernight"> /night</span></div>

                                             <div class="rating_placeholder"></div>

                                             <Link to="./../properties/beautiful-cabin-simple-price/index.html" class="owner_thumb">
                                               <img src={Thumb} alt="" />
                                             </Link>

                                             <div class="category_name">
                                               <Link itemprop="url" to="./../properties/beautiful-cabin-simple-price/index.html" class="listing_title_unit">
                                                 <span itemprop="name"> Beautiful Cabin, Simple Price </span>
                                               </Link>
                                               <div class="category_tagline map_icon">
                                                 <Link to="./../area/brightwood/index.html" rel="tag">Brightwood</Link>,
                                                 <Link to="./../city/philadelphia/index.html" rel="tag">Philadelphia</Link>
                                               </div>

                                               <div class="category_tagline actions_icon">
                                                 <Link to="./../listings/cabin/index.html" rel="tag">Cabin</Link>
                                                 /
                                                 <Link to="./../action/entire-home/index.html" rel="tag">Entire home</Link>
                                               </div>
                                             </div>

                                             <div class="property_unit_action">
                                               <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="119"><i class="fas fa-heart"></i></span>
                                             </div>
                                           </div>
                                         </div>
                                       </div>

                                       <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="115">
                                         <div class="property_listing" data-link="./properties/victorian-bed-breakfast/">
                                           <div class="listing-unit-img-wrapper">
                                             <Link to="./../properties/victorian-bed-breakfast/index.html"
                                               ><img itemprop="image" src={Itemprop} class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image"
                                             /></Link>
                                             <div class="price_unit_wrapper"></div>
                                             <div class="price_unit">€ 65<span class="pernight"> /night</span></div>
                                           </div>

                                           <div class="featured_div">featured</div>
                                           <div class="property_status_wrapper"></div>
                                           <div class="title-container">
                                             <div class="price_unit">€ 65<span class="pernight"> /night</span></div>

                                             <div class="rating_placeholder"></div>

                                             <Link to="./../properties/victorian-bed-breakfast/index.html" class="owner_thumb" >
                                               <img src={Thumb} alt="" />
                                             </Link>

                                             <div class="category_name">
                                               <Link itemprop="url" to="./../properties/victorian-bed-breakfast/index.html" class="listing_title_unit">
                                                 <span itemprop="name"> Victorian Bed &amp; Breakfast </span>
                                               </Link>
                                               <div class="category_tagline map_icon">
                                                 <Link to="./../area/mattapan/index.html" rel="tag">Mattapan</Link>,
                                                 <Link to="./../city/boston/index.html" rel="tag">Boston</Link>
                                               </div>

                                               <div class="category_tagline actions_icon">
                                                 <Link to="./../listings/b-b/index.html" rel="tag">B &amp; B</Link>
                                                 /
                                                 <Link to="./../action/shared-room/index.html" rel="tag">Shared room</Link>
                                               </div>
                                             </div>

                                             <div class="property_unit_action">
                                               <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="115"><i class="fas fa-heart"></i></span>
                                             </div>
                                           </div>
                                         </div>
                                       </div>

                                       <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="107">
                                         <div class="property_listing" data-link="./properties/sunny-2-bedrooms-in-the-haight/">
                                           <div class="listing-unit-img-wrapper">
                                             <Link to="./../properties/sunny-2-bedrooms-in-the-haight/index.html"
                                               ><img itemprop="image" src="./../wp-content/uploads/2018/08/10-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image"
                                             /></Link>
                                             <div class="price_unit_wrapper"></div>
                                             <div class="price_unit">€ 225<span class="pernight"> /night</span></div>
                                           </div>

                                           <div class="featured_div">featured</div>
                                           <div class="property_status_wrapper">
                                             <div class="property_status status_verified">verified</div>
                                           </div>
                                           <div class="title-container">
                                             <div class="price_unit">€ 225<span class="pernight"> /night</span></div>

                                             <div class="property-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>

                                             <Link to="./../properties/sunny-2-bedrooms-in-the-haight/index.html" class="owner_thumb">
                                               <img src={Thumb} alt="" />
                                             </Link>

                                             <div class="category_name">
                                               <Link itemprop="url" to="./../properties/sunny-2-bedrooms-in-the-haight/index.html" class="listing_title_unit">
                                                 <span itemprop="name"> Sunny 2 Bedrooms Video </span>
                                               </Link>
                                               <div class="category_tagline map_icon">
                                                 <Link to="./../area/glover-park/index.html" rel="tag">Glover Park</Link>,
                                                 <Link to="./../city/washington/index.html" rel="tag">Washington</Link>
                                               </div>

                                               <div class="category_tagline actions_icon">
                                                 <Link to="./../listings/house/index.html" rel="tag">House</Link>
                                                 /
                                                 <Link to="./../action/private-room/index.html" rel="tag">Private room</Link>
                                               </div>
                                             </div>

                                             <div class="property_unit_action">
                                               <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="107"><i class="fas fa-heart"></i></span>
                                             </div>
                                           </div>
                                         </div>
                                       </div>

                                       <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="18657">
                                         <div class="property_listing" data-link="./properties/downtown-apartment/">
                                           <div class="listing-unit-img-wrapper">
                                             <Link to="./../properties/downtown-apartment/index.html"
                                               ><img itemprop="image" src="./../wp-content/uploads/2018/08/6-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image"
                                             /></Link>
                                             <div class="price_unit_wrapper"></div>
                                             <div class="price_unit">€ 38<span class="pernight"> /night</span></div>
                                           </div>

                                           <div class="property_status_wrapper"></div>
                                           <div class="title-container">
                                             <div class="price_unit">€ 38<span class="pernight"> /night</span></div>

                                             <div class="property-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>

                                             <Link to="/downtown" class="owner_thumb">
                                               <img src={Thumb} alt="" />
                                             </Link>

                                             <div class="category_name">
                                               <Link itemprop="url" to="/downtown" class="listing_title_unit">
                                                 <span itemprop="name"> Downtown apartment </span>
                                               </Link>
                                               <div class="category_tagline map_icon">
                                                 <Link to="./../area/wesley-heights/index.html" rel="tag">Wesley Heights</Link>,
                                                 <Link to="./../city/washington/index.html" rel="tag">Washington</Link>
                                               </div>

                                               <div class="category_tagline actions_icon">
                                                 <Link to="/apartment" rel="tag">Apartment</Link>
                                                 /
                                                 <Link to="./../action/entire-home/index.html" rel="tag">Entire home</Link>
                                               </div>
                                             </div>

                                             <div class="property_unit_action">
                                               <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="18657"><i class="fas fa-heart"></i></span>
                                             </div>
                                           </div>
                                         </div>
                                       </div>

                                       <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="149">
                                         <div class="property_listing" data-link="./properties/west-town-3rd-floor-dorm/">
                                           <div class="listing-unit-img-wrapper">
                                             <Link to="./../properties/west-town-3rd-floor-dorm/index.html"
                                               ><img itemprop="image" src="./../wp-content/uploads/2018/08/11-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image"
                                             /></Link>
                                             <div class="price_unit_wrapper"></div>
                                             <div class="price_unit">€ 23<span class="pernight"> /night</span></div>
                                           </div>

                                           <div class="property_status_wrapper">
                                             <div class="property_status status_verified">verified</div>
                                           </div>
                                           <div class="title-container">
                                             <div class="price_unit">€ 23<span class="pernight"> /night</span></div>

                                             <div class="rating_placeholder"></div>

                                             <Link to="./../properties/west-town-3rd-floor-dorm/index.html" class="owner_thumb">
                                               <img src={Owner} alt="" />
                                             </Link>

                                             <div class="category_name">
                                               <Link itemprop="url" to="./../properties/west-town-3rd-floor-dorm/index.html" class="listing_title_unit">
                                                 <span itemprop="name"> West Town 3rd Floor Dorm </span>
                                               </Link>
                                               <div class="category_tagline map_icon">
                                                 <Link to="./../area/arlington/index.html" rel="tag">Arlington</Link>,
                                                 <Link to="./../city/baltimore/index.html" rel="tag">Baltimore</Link>
                                               </div>

                                               <div class="category_tagline actions_icon">
                                                 <Link to="./../listings/dorm/index.html" rel="tag">Dorm</Link>
                                                 /
                                                 <Link to="./../action/shared-room/index.html" rel="tag">Shared room</Link>
                                               </div>
                                             </div>

                                             <div class="property_unit_action">
                                               <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="149"><i class="fas fa-heart"></i></span>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </section>
                   <section
                     class="elementor-section elementor-top-section elementor-element elementor-element-2317f716 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                     data-id="2317f716"
                     data-element_type="section"
                     data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                   >
                     <div class="elementor-background-overlay"></div>
                     <div class="elementor-container elementor-column-gap-no">
                       <div class="elementor-row">
                         <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1e989871" data-id="1e989871" data-element_type="column">
                           <div class="elementor-column-wrap elementor-element-populated">
                             <div class="elementor-widget-wrap">
                               <div
                                 class="elementor-element elementor-element-7c9d0376 elementor-invisible elementor-widget elementor-widget-text-editor"
                                 data-id="7c9d0376"
                                 data-element_type="widget"
                                 data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                 data-widget_type="text-editor.default"
                               >
                                 <div class="elementor-widget-container">
                                   <div class="elementor-text-editor elementor-clearfix">
                                     <p>Over 7,000 happy buyers have chosen WpRentals</p>
                                   </div>
                                 </div>
                               </div>
                               <div
                                 class="elementor-element elementor-element-3b7f0f8f elementor-invisible elementor-widget elementor-widget-heading"
                                 data-id="3b7f0f8f"
                                 data-element_type="widget"
                                 data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                 data-widget_type="heading.default"
                               >
                                 <div class="elementor-widget-container">
                                   <h2 class="elementor-heading-title elementor-size-default">
                                     Create your Airbnb like rental site.
                                     <br />Choose the most featured rentals theme.
                                   </h2>
                                 </div>
                               </div>
                               <div
                                 class="elementor-element elementor-element-21224ee7 elementor-align-center elementor-invisible elementor-widget elementor-widget-button"
                                 data-id="21224ee7"
                                 data-element_type="widget"
                                 data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                 data-widget_type="button.default"
                               >
                                 <div class="elementor-widget-container">
                                   <div class="elementor-button-wrapper">
                                     <Link to="#" class="elementor-button-link elementor-button elementor-size-lg" role="button">
                                       <span class="elementor-button-content-wrapper">
                                         <span class="elementor-button-text">GET MORE INFO</span>
                                       </span>
                                     </Link>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </section>
                   <section
                     class="elementor-section elementor-top-section elementor-element elementor-element-556d5478 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                     data-id="556d5478"
                     data-element_type="section"
                     data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                   >
                     <div class="elementor-background-overlay"></div>
                     <div class="elementor-container elementor-column-gap-no">
                       <div class="elementor-row">
                         <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-112fc680" data-id="112fc680" data-element_type="column">
                           <div class="elementor-column-wrap elementor-element-populated">
                             <div class="elementor-widget-wrap">
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-7c1891f3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="7c1891f3"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-40fe2832" data-id="40fe2832" data-element_type="column">
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-67c8ee7b animated-slow elementor-invisible elementor-widget elementor-widget-heading"
                                             data-id="67c8ee7b"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="heading.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <h2 class="elementor-heading-title elementor-size-default">Available listings for<br />all tastes and budgets</h2>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-16c1f0e8" data-id="16c1f0e8" data-element_type="column">
                                       <div class="elementor-column-wrap">
                                         <div class="elementor-widget-wrap"></div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                               <div
                                 class="elementor-element elementor-element-1aea7c2c elementor-invisible elementor-widget elementor-widget-Wprentals_Categories_List"
                                 data-id="1aea7c2c"
                                 data-element_type="widget"
                                 data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                 data-widget_type="Wprentals_Categories_List.default"
                               >
                                 <div class="elementor-widget-container">
                                   <div class="places_wrapper places_wrapper4 places_wrapper_no_shadow" data-link="./action/private-room/" style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                                   <div class="listing-hover-gradient" style={{left: 10, right: 10}}></div>
                                     <div class="listing-hover" style={{left: 10, right: 10}}></div>
                                     <div class="places4" >
                                       <img src={Default} alt="" />
                                     </div>
                                     <div class="category_name">
                                       <Link class="featured_listing_title" to="./../action/private-room/index.html"></Link>
                                       <div class="category_tagline"></div>
                                     </div>
                                   </div>
                                   <div class="places_wrapper places_wrapper4 places_wrapper_no_shadow places_wrapper_no_shadow" data-link="./action/shared-room/" style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                                     <div class="listing-hover-gradient" style={{left: 10, right: 10}}></div>
                                     <div class="listing-hover" style={{left: 10, right: 10}}></div>
                                     <div class="places4" >
                                       <img src={Default} alt="" />
                                     </div>
                                     <div class="category_name">
                                       <Link class="featured_listing_title" to="./../action/shared-room/index.html"></Link>
                                       <div class="category_tagline"></div>
                                     </div>
                                   </div>
                                   <div
                                     class="places_wrapper places_wrapper4 places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow"
                                     data-link="./listings/apartment/"
                                     style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}
                                     >
                                       <div class="listing-hover-gradient" style={{left: 10, right: 10}}></div>
                                       <div class="listing-hover" style={{left: 10, right: 10}}></div>
                                     <div class="places4" >
                                       <img src={Default} alt="" />
                                     </div>
                                     <div class="category_name">
                                       <Link class="featured_listing_title" to="./../listings/apartment/index.html"></Link>
                                       <div class="category_tagline"></div>
                                     </div>
                                   </div>
                                   <div
                                     class="places_wrapper places_wrapper4 places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow"
                                     data-link="./listings/b-b/"
                                     style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}
                                     >
                                       <div class="listing-hover-gradient" style={{left: 10, right: 10}}></div>
                                       <div class="listing-hover" style={{left: 10, right: 10}}></div>
                                     <div class="places4" >
                                       <img src={Default} alt="" />
                                     </div>
                                     <div class="category_name">
                                       <Link class="featured_listing_title" to="./../listings/b-b/index.html"></Link>
                                       <div class="category_tagline"></div>
                                     </div>
                                   </div>
                                   <div
                                     class="places_wrapper places_wrapper4 places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow"
                                     data-link="./listings/cabin/"
                                     style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}
                                     >
                                       <div class="listing-hover-gradient" style={{left: 10, right: 10}}></div>
                                       <div class="listing-hover" style={{left: 10, right: 10}}></div>
                                     <div class="places4" >
                                       <img src={Default} alt="" />
                                     </div>
                                     <div class="category_name">
                                       <Link class="featured_listing_title" to="./../listings/cabin/index.html"></Link>
                                       <div class="category_tagline"></div>
                                     </div>
                                   </div>
                                   <div
                                     class="places_wrapper places_wrapper4 places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow"
                                     data-link="./listings/condos/"
                                     style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}
                                     >
                                       <div class="listing-hover-gradient" style={{left: 10, right: 10}}></div>
                                       <div class="listing-hover" style={{left: 10, right: 10}}></div>
                                     <div class="places4" >
                                       <img src={Default} alt="" />
                                     </div>
                                     <div class="category_name">
                                       <Link class="featured_listing_title" to="./../listings/condos/index.html"></Link>
                                       <div class="category_tagline"></div>
                                     </div>
                                   </div>
                                   <div
                                     class="
                                       places_wrapper places_wrapper4 places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow
                                     "
                                     data-link="./listings/dorm/"
                                     style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}
                                     >
                                       <div class="listing-hover-gradient" style={{left: 10, right: 10}}></div>
                                       <div class="listing-hover" style={{left: 10, right: 10}}></div>
                                     <div class="places4" >
                                       <img src={Default} alt="" />
                                     </div>
                                     <div class="category_name">
                                       <Link class="featured_listing_title" to="./../listings/dorm/index.html"></Link>
                                       <div class="category_tagline"></div>
                                     </div>
                                   </div>
                                   <div
                                     class="
                                       places_wrapper
                                       places_wrapper4
                                       places_wrapper_no_shadow
                                       places_wrapper_no_shadow
                                       places_wrapper_no_shadow
                                       places_wrapper_no_shadow
                                       places_wrapper_no_shadow
                                       places_wrapper_no_shadow
                                       places_wrapper_no_shadow
                                       places_wrapper_no_shadow
                                     "
                                     data-link="./listings/house/"
                                     style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}
                                   >
                                     <div class="listing-hover-gradient" style={{left: 10, right: 10}}></div>
                                     <div class="listing-hover" style={{left: 10, right: 10}}></div>
                                     <div class="places4" >
                                       <img src={Default} alt="" />
                                     </div>
                                     <div class="category_name">
                                       <Link class="featured_listing_title" to="./../listings/house/index.html"></Link>
                                       <div class="category_tagline"></div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </section>
                   <section
                     class="elementor-section elementor-top-section elementor-element elementor-element-1085011e elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                     data-id="1085011e"
                     data-element_type="section"
                     data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                   >
                     <div class="elementor-background-overlay"></div>
                     <div class="elementor-container elementor-column-gap-no">
                       <div class="elementor-row">
                         <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e3d5b55" data-id="6e3d5b55" data-element_type="column">
                           <div class="elementor-column-wrap elementor-element-populated">
                             <div class="elementor-widget-wrap">
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-6d7064b9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="6d7064b9"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7b412e40" data-id="7b412e40" data-element_type="column">
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-7cf63816 animated-slow elementor-invisible elementor-widget elementor-widget-heading"
                                             data-id="7cf63816"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="heading.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <h2 class="elementor-heading-title elementor-size-default">
                                                 Featured owners <br />
                                                 from our community
                                               </h2>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6d98b5e8" data-id="6d98b5e8" data-element_type="column">
                                       <div class="elementor-column-wrap">
                                         <div class="elementor-widget-wrap"></div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-30d9575b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="30d9575b"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b6957ef elementor-invisible"
                                       data-id="b6957ef"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-284f61f7 elementor-widget elementor-widget-Wprentals_Featured_Owner"
                                             data-id="284f61f7"
                                             data-element_type="widget"
                                             data-widget_type="Wprentals_Featured_Owner.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="featured_property featured_agent featured_agent_type2" data-link="./owners/johndemo/">
                                                 <div class="feature_agent_image_unit_wrapper_color">
                                                   <div class="feature_agent_image_unit_wrapper" >
                                                     <img src={Demo} alt="" />
                                                   </div>
                                                 </div>

                                                 <div class="category_name">
                                                   <Link class="featured_listing_title" to="/john_demo"> John Doe </Link>
                                                   <div class="category_tagline">verified owner</div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-511a11a5 elementor-invisible"
                                       data-id="511a11a5"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-7e34d888 elementor-widget elementor-widget-Wprentals_Featured_Owner"
                                             data-id="7e34d888"
                                             data-element_type="widget"
                                             data-widget_type="Wprentals_Featured_Owner.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="featured_property featured_agent featured_agent_type2" data-link="./owners/johndemo/">
                                                 <div class="feature_agent_image_unit_wrapper_color">
                                                   <div class="feature_agent_image_unit_wrapper" >
                                                     <img src={Demo} alt="" />
                                                   </div>
                                                 </div>

                                                 <div class="category_name">
                                                   <Link class="featured_listing_title" to="/john_demo"> John Doe </Link>
                                                   <div class="category_tagline">verified owner</div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1967aee9 elementor-invisible"
                                       data-id="1967aee9"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-510c5611 elementor-widget elementor-widget-Wprentals_Featured_Owner"
                                             data-id="510c5611"
                                             data-element_type="widget"
                                             data-widget_type="Wprentals_Featured_Owner.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="featured_property featured_agent featured_agent_type2" data-link="./owners/johndemo/">
                                                 <div class="feature_agent_image_unit_wrapper_color">
                                                   <div class="feature_agent_image_unit_wrapper" >
                                                     <img src={Default} alt="" />
                                                   </div>
                                                 </div>

                                                 <div class="category_name">
                                                   <Link class="featured_listing_title" to="./../owners/johndemo/index.html"> John Doe </Link>
                                                   <div class="category_tagline">verified superhost</div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </section>
                   <section
                     class="elementor-section elementor-top-section elementor-element elementor-element-21f28341 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                     data-id="21f28341"
                     data-element_type="section"
                     data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                   >
                     <div class="elementor-container elementor-column-gap-no">
                       <div class="elementor-row">
                         <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-486cc00d" data-id="486cc00d" data-element_type="column">
                           <div class="elementor-column-wrap elementor-element-populated">
                             <div class="elementor-widget-wrap">
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-73d1ff9b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="73d1ff9b"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-288bbf85" data-id="288bbf85" data-element_type="column">
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-24b95565 animated-slow elementor-invisible elementor-widget elementor-widget-heading"
                                             data-id="24b95565"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="heading.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <h2 class="elementor-heading-title elementor-size-default">
                                                 The most<br />
                                                 read travel blog
                                               </h2>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4658a87a" data-id="4658a87a" data-element_type="column">
                                       <div class="elementor-column-wrap">
                                         <div class="elementor-widget-wrap"></div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-13b7a1b1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="13b7a1b1"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-96020c8 elementor-invisible"
                                       data-id="96020c8"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-21e41b46 elementor-widget elementor-widget-Wprentals_Featured_Article"
                                             data-id="21e41b46"
                                             data-element_type="widget"
                                             data-widget_type="Wprentals_Featured_Article.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="blog_featured type_2_class">
                                                 <div class="blog_unit places1" data-link="./2015/04/21/what-guests-want-to-know/">
                                                   <div class="listing-hover-gradient"></div>
                                                   <div class="listing-hover"></div>
                                                   <div class="listing-unit-img-wrapper shortcodefull">
                                                     <img src={Diving} alt="" />
                                                   </div>
                                                 </div>
                                                 <div class="blog-title">
                                                   <div class="featured-article-date">Apr 21, 2015</div>
                                                   <Link to="./../2015/04/21/what-guests-want-to-know/index.html" class="blog-title-link">What Guests Want to Know</Link>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ad829f4 elementor-invisible"
                                       data-id="ad829f4"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-6939ad25 elementor-widget elementor-widget-Wprentals_Featured_Article"
                                             data-id="6939ad25"
                                             data-element_type="widget"
                                             data-widget_type="Wprentals_Featured_Article.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="blog_featured type_2_class">
                                                 <div class="blog_unit places1" data-link="./2015/04/21/how-to-be-a-great-host/">
                                                   <div class="listing-hover-gradient"></div>
                                                   <div class="listing-hover"></div>
                                                   <div class="listing-unit-img-wrapper shortcodefull">
                                                     <img src={Dolphine} alt="" />
                                                   </div>
                                                 </div>
                                                 <div class="blog-title">
                                                   <div class="featured-article-date">Apr 21, 2015</div>
                                                   <Link to="./../2015/04/21/how-to-be-a-great-host/index.html" class="blog-title-link">How to be a Great Host for Renters</Link>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1efe0950 elementor-invisible"
                                       data-id="1efe0950"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-5da9106f elementor-widget elementor-widget-Wprentals_Featured_Article"
                                             data-id="5da9106f"
                                             data-element_type="widget"
                                             data-widget_type="Wprentals_Featured_Article.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="blog_featured type_2_class">
                                                 <div class="blog_unit places1" data-link="./2015/04/21/offering-a-welcoming-space/">
                                                   <div class="listing-hover-gradient"></div>
                                                   <div class="listing-hover"></div>
                                                   <div class="listing-unit-img-wrapper shortcodefull">
                                                     <img src={Restaurant} alt="" />
                                                   </div>
                                                 </div>
                                                 <div class="blog-title">
                                                   <div class="featured-article-date">Apr 21, 2015</div>
                                                   <Link to="./../2015/04/21/offering-a-welcoming-space/index.html" class="blog-title-link">Offering a Full Welcoming Space</Link>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </section>
                   <section
                     class="elementor-section elementor-top-section elementor-element elementor-element-2720fd88 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                     data-id="2720fd88"
                     data-element_type="section"
                     data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                   >
                     <div class="elementor-container elementor-column-gap-default">
                       <div class="elementor-row">
                         <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1e98d15f" data-id="1e98d15f" data-element_type="column">
                           <div class="elementor-column-wrap elementor-element-populated">
                             <div class="elementor-widget-wrap">
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-683739a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="683739a"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-367fae86" data-id="367fae86" data-element_type="column">
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-34d8819e animated-slow elementor-invisible elementor-widget elementor-widget-heading"
                                             data-id="34d8819e"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="heading.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <h2 class="elementor-heading-title elementor-size-default">
                                                 What clients say<br />
                                                 about their experience
                                               </h2>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4b17196" data-id="4b17196" data-element_type="column">
                                       <div class="elementor-column-wrap">
                                         <div class="elementor-widget-wrap"></div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-56384bd2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="56384bd2"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-73ac2a21 elementor-invisible"
                                       data-id="73ac2a21"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-71210f57 elementor-invisible elementor-widget elementor-widget-WpRentals_Testimonial"
                                             data-id="71210f57"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="WpRentals_Testimonial.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="testimonial-container testimonial_type_2">
                                                 <div class="testimonial-image">
                                                   <img src="http://demo-install.wpestate.org/wp-content/uploads/2020/07/smile-2.jpg" alt="" />
                                                 </div>
                                                 <div class="testimonial-author-line">
                                                   <span class="testimonial-author">Jay Simon</span>
                                                   <div class="testimonial-clas-line">happy owner</div>
                                                 </div>
                                                 <div class="testimonial-text">WpRentals has increased our booking requests 10 times more than our older website. Thank you for the amazing work!</div>
                                                 <div class="testimmonials_starts"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6ef03ce0 elementor-invisible"
                                       data-id="6ef03ce0"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-4ce18eef elementor-invisible elementor-widget elementor-widget-WpRentals_Testimonial"
                                             data-id="4ce18eef"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="WpRentals_Testimonial.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="testimonial-container testimonial_type_2">
                                                 <div class="testimonial-image" >
                                                   <img src={Demo} alt="" />
                                                 </div>
                                                 <div class="testimonial-author-line">
                                                   <span class="testimonial-author">Tania Smith</span>
                                                   <div class="testimonial-clas-line">happy client</div>
                                                 </div>
                                                 <div class="testimonial-text">With WpRentals I can run my business without worries. Clients can browse our site easily and requests are coming every day.</div>
                                                 <div class="testimmonials_starts"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div
                                       class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-78cab6b4 elementor-invisible"
                                       data-id="78cab6b4"
                                       data-element_type="column"
                                       data-settings='{"animation":"fadeIn","animation_delay":200}'
                                     >
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-69960e96 elementor-invisible elementor-widget elementor-widget-WpRentals_Testimonial"
                                             data-id="69960e96"
                                             data-element_type="widget"
                                             data-settings='{"_animation":"fadeIn","_animation_delay":200}'
                                             data-widget_type="WpRentals_Testimonial.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="testimonial-container testimonial_type_2">
                                                 <div class="testimonial-image">
                                                   <img src={Demo} alt="" />
                                                 </div>
                                                 <div class="testimonial-author-line">
                                                   <span class="testimonial-author">Gina Roscoe</span>
                                                   <div class="testimonial-clas-line">happy client</div>
                                                 </div>
                                                 <div class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                                 <div class="testimmonials_starts"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                               <section
                                 class="elementor-section elementor-inner-section elementor-element elementor-element-3e264cd6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                 data-id="3e264cd6"
                                 data-element_type="section"
                               >
                                 <div class="elementor-container elementor-column-gap-no">
                                   <div class="elementor-row">
                                     <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5092d3c2" data-id="5092d3c2" data-element_type="column">
                                       <div class="elementor-column-wrap elementor-element-populated">
                                         <div class="elementor-widget-wrap">
                                           <div
                                             class="elementor-element elementor-element-19010029 elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel"
                                             data-id="19010029"
                                             data-element_type="widget"
                                             data-settings='{"slides_to_show":"6","slides_to_scroll":"1","navigation":"dots","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","speed":500}'
                                             data-widget_type="image-carousel.default"
                                           >
                                             <div class="elementor-widget-container">
                                               <div class="elementor-image-carousel-wrapper swiper-container" dir="ltr">
                                                 <div class="elementor-image-carousel swiper-wrapper">
                                                   <div class="swiper-slide">
                                                     <figure class="swiper-slide-inner">
                                                       <img class="swiper-slide-image" src="./../wp-content/uploads/2020/07/variety_transparent-5.png" alt="variety_transparent-5.png" />
                                                     </figure>
                                                   </div>
                                                   <div class="swiper-slide">
                                                     <figure class="swiper-slide-inner">
                                                       <img class="swiper-slide-image" alt="Downtown apartment" />
                                                     </figure>
                                                   </div>
                                                   <div class="swiper-slide">
                                                     <figure class="swiper-slide-inner">
                                                       <img class="swiper-slide-image" src="./../wp-content/uploads/2020/07/variety-vector-logo-1.png" alt="variety-vector-logo-1.png" />
                                                     </figure>
                                                   </div>
                                                   <div class="swiper-slide">
                                                     <figure class="swiper-slide-inner">
                                                       <img class="swiper-slide-image" src="./../wp-content/uploads/2020/07/losangeles_times3.png" alt="losangeles_times3.png" />
                                                     </figure>
                                                   </div>
                                                   <div class="swiper-slide">
                                                     <figure class="swiper-slide-inner">
                                                       <img class="swiper-slide-image" src="./../wp-content/uploads/2020/07/blomberg.png" alt="blomberg.png" />
                                                     </figure>
                                                   </div>
                                                   <div class="swiper-slide">
                                                     <figure class="swiper-slide-inner">
                                                       <img class="swiper-slide-image" src="./../wp-content/uploads/2020/07/cnnc.png" alt="cnnc.png" />
                                                     </figure>
                                                   </div>
                                                 </div>
                                                 <div class="swiper-pagination"></div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </section>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </section>
                 </div>
               </div>
             </div>
           </div>

           {/* <!-- #comments start-->
           <!-- end comments --> */}
         </div>

         {/* <!-- begin sidebar --> */}
         <div class="clearfix visible-xs"></div>
         {/* <!-- end sidebar --> */}
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
                 <p class="widget_contact_phone"><i class="fas fa-phone"></i><Link to="tel:%28305%29+555-4446">(305) 555-4446</Link></p>
                 <p class="widget_contact_email"><i class="far fa-envelope"></i><Link to="mailto:email@yourdomain.com">email@yourdomain.com</Link></p>
                 <p class="widget_contact_url"><i class="fas fa-desktop"></i><Link to="http://demo1.wprentals.org/">WP Rentals</Link></p>
               </div>
             </li>
             <li id="wpestate_social_widget-1" class="widget-container social_sidebar">
               <h3 class="widget-title-footer">Social Links:</h3>
               <div class="social_sidebar_internal">
                 <Link to="#" target="_blank"><i class="fas fa-rss fa-fw"></i></Link>
                 <Link to="#" target="_blank"><i class="fab fa-facebook-f"></i></Link>
                 <Link to="#" target="_blank"><i class="fab fa-twitter fa-fw"></i></Link>
                 <Link to="#" target="_blank"><i class="fab fa-dribbble fa-fw"></i></Link>
                 <Link to="#" target="_blank"><i class="fab fa-google-plus-g fa-fw"></i></Link>
                 <Link to="#" target="_blank"><i class="fab fa-linkedin-in"></i></Link>
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
                     <Link to="./../properties/huge-sunny-villa-east-side/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/9-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                     <div class="price_unit_wrapper"></div>
                   </div>

                   <div class="title-container">
                     <div class="category_name">
                       <Link itemprop="url" to="./../properties/huge-sunny-villa-east-side/index.html" class="listing_title_unit">
                         <span itemprop="name"> Huge Sunny Villa &#8211; East Side </span>
                       </Link>
                     </div>

                     <div class="category_tagline"><Link to="./../area/east-side/index.html" rel="tag">East Side</Link>,</div>

                     <div class="price_unit">€ 500<span class="pernight"> /night</span></div>
                   </div>
                 </div>
               </div>

               <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="119">
                 <div class="property_listing" data-link="./properties/beautiful-cabin-simple-price/">
                   <div class="listing-unit-img-wrapper">
                     <Link to="./../properties/beautiful-cabin-simple-price/index.html"
                       ><img itemprop="image" src="./../wp-content/uploads/2018/08/4-1-1-1-scaled-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image"
                     /></Link>
                     <div class="price_unit_wrapper"></div>
                   </div>

                   <div class="title-container">
                     <div class="category_name">
                       <Link itemprop="url" to="./../properties/beautiful-cabin-simple-price/index.html" class="listing_title_unit">
                         <span itemprop="name"> Beautiful Cabin, Simple Price </span>
                       </Link>
                     </div>

                     <div class="category_tagline">
                       <Link to="./../area/brightwood/index.html" rel="tag">Brightwood</Link>,
                       <Link to="./../city/philadelphia/index.html" rel="tag">Philadelphia</Link>
                     </div>

                     <div class="price_unit">€ 64<span class="pernight"> /night</span></div>
                   </div>
                 </div>
               </div>

               <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="115">
                 <div class="property_listing" data-link="./properties/victorian-bed-breakfast/">
                   <div class="listing-unit-img-wrapper">
                     <Link to="./../properties/victorian-bed-breakfast/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/3-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                     <div class="price_unit_wrapper"></div>
                   </div>

                   <div class="title-container">
                     <div class="category_name">
                       <Link itemprop="url" to="./../properties/victorian-bed-breakfast/index.html" class="listing_title_unit">
                         <span itemprop="name"> Victorian Bed &#038; Breakfast </span>
                       </Link>
                     </div>

                     <div class="category_tagline">
                       <Link to="./../area/mattapan/index.html" rel="tag">Mattapan</Link>,
                       <Link to="./../city/boston/index.html" rel="tag">Boston</Link>
                     </div>

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

     <Link to="#" class="backtop"><i class="fas fa-chevron-up"></i></Link>
   </div>
   {/* <!-- end class container --> */}

   <div class="social_share_wrapper social_share_half_map_on_right">
     <Link class="social_share share_facebook_side" to="https://www.facebook.com/wpestate" target="_blank"><i class="fab fa-facebook-f"></i></Link>

     <Link class="social_share share_twiter_side" to="https://twitter.com/WPESTATE" target="_blank"><i class="fab fa-twitter"></i></Link>

     <Link class="social_share share_linkedin_side" to="#" target="_blank"><i class="fab fa-linkedin-in"></i></Link>

     <Link class="social_share share_pinterest_side" to="#" target="_blank"><i class="fab fa-pinterest-p"></i></Link>

     <Link class="social_share share_instagram_side" to="#" target="_blank"><i class="fab fa-instagram"></i></Link>

     <Link class="social_share share_youtube_side" to="#" target="_blank"><i class="fab fa-youtube"></i></Link>
   </div>
 </div>
 {/* <!-- end website wrapper -->

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
        <Login/>

        </div>
        </div>
         {/* <!-- /.ajax_login_div --> */}

         <div id="ajax_register_div" class="">
           <div class="login_form shortcode-login">
            <SignUp/>
           </div>
           <div id="reveal_login">
             <Link to="#">Already a member? Sign in!</Link>
           </div>
           <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/homepage-elementor/" />
         </div>

         <div class="login_form" id="forgot-pass-div_mod">
           <div class="loginalert" id="forgot_pass_area_shortcode"></div>
           <div class="loginrow">
             <input type="text" class="form-control forgot_email_mod" name="forgot_email" id="forgot_email_mod" placeholder="Enter Your Email Address" size="20" />
           </div>
           <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/homepage-elementor/" />
           <input type="hidden" id="postid" value="0" />
           <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-forgot-but_mod" name="forgot">Reset Password</button>

           <Link to="#" id="return_login_mod">Return to Login</Link>
         </div>
       </div>
       {/* <!-- /.modal-content --> */}
     </div>
     {/* <!-- /.modal-dialog --> */}
   </div>
   {/* <!-- /.modal --> */}
 </div>
 {/* <!-- /.login model --> */}
 <input type="hidden" id="wprentals_ajax_filtering" value="c7f2599346" />
 <input type="hidden" id="wpestate_ajax_log_reg" value="36cd982787" />
     </div>
  )


  const Home = (
    <div>
    {this.Home.bind()}
    </div>
  )


 

    return (
      <div>
            {homepage }
      </div>

    )
}
}

export default withRouter(Userhomepage);
