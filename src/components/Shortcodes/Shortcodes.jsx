import React from 'react';
import { Helmet } from 'react-helmet';
import Default from '../../assets/wp-content/uploads/2018/08/10-1-1-1-60x60.jpg';
import Sunny from '../../assets/wp-content/uploads/2018/08/10-1-1-1-60x60.jpg';
import Listing from '../../assets/wp-content/uploads/2018/08/10-1-1-1-1170x921.jpg';
import Cabin from '../../assets/wp-content/uploads/2018/08/4-1-1-1-scaled-1-60x60.jpg';
import {Victoria} from '../../assets//wp-content/uploads/2018/08/3-1-1-60x60.jpg';
import West_town from '../../assets/wp-content/uploads/2018/08/11-1-1-1-60x60.jpg';
import Villa from '../../assets/wp-content/uploads/2018/08/10-1-1-1-60x60.jpg';
// import Header from '../../Home/Header/Header';
// import Mobile from '../../Home/Header/Mobile';
// import Navbar from '../../Home/Header/Navbar';
import { Link } from 'react-router-dom';


export default function Shortcodes() {
    return (
        <div>
            <body class="page-template-default page page-id-261 wpb-js-composer js-comp-ver-6.5.0 vc_responsive elementor-default elementor-kit-19">
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
                    <Link to="/short_codes">WP Rentals Shortcodes</Link>
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

                            <div class="header_media with_search_newtype"></div>

                            <div class="content_wrapper row">
                                   <div id="post" class="row post-261 page type-page status-publish hentry">
                                          <div class="col-md-12 breadcrumb_container">
                                                 <ol class="breadcrumb">
                                                        <li><Link to="./../index.html">Home</Link></li>
                                                        <li class="active">WP Rentals Shortcodes</li>
                                                 </ol>
                                          </div>
                                          <div class="col-md-12">
                                                 <div class="single-content">
                                                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1451659452424 wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="wpb_text_column wpb_content_element vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1 style={{textAlign: 'left'}}>Featured Property</h1>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1440769219299 wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-6 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="featured_property">
                                                                                           <div class="listing_wrapper" data-org="12" data-listid="141">
                                                                                                  <div class="property_listing" data-link="./properties/modern-spacious-villa/">
                                                                                                         <div class="listing-unit-img-wrapper_color">
                                                                                                                <div class="listing-hover-gradient"></div>
                                                                                                                <div class="listing-unit-img-wrapper" >
                                                                                                                    {Listing}
                                                                                                                </div>
                                                                                                         </div>

                                                                                                         <div class="property_status_wrapper"></div>
                                                                                                         <div class="category_name">
                                                                                                                <div class="price_unit">€ 159<span class="pernight"> /night</span></div>

                                                                                                                <Link class="featured_listing_title" to="./../properties/modern-spacious-villa/index.html">Modern &amp; Spacious Villa</Link>
                                                                                                                <div class="category_tagline"><Link to="./../area/east-side/index.html" rel="tag">East Side</Link>,</div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div class="wpb_column vc_column_container vc_col-sm-6 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="featured_property">
                                                                                           <div class="listing_wrapper" data-org="12" data-listid="137">
                                                                                                  <div class="property_listing" data-link="./properties/huge-sunny-villa-east-side/">
                                                                                                         <div class="listing-unit-img-wrapper_color">
                                                                                                                <div class="listing-hover-gradient"></div>
                                                                                                                <div class="listing-unit-img-wrapper" >
                                                                                                                    <img src={Listing} alt="" />
                                                                                                                </div>
                                                                                                         </div>

                                                                                                         <div class="featured_div">featured</div>
                                                                                                         <div class="property_status_wrapper"></div>
                                                                                                         <div class="category_name">
                                                                                                                <div class="price_unit">€ 500<span class="pernight"> /night</span></div>

                                                                                                                <Link class="featured_listing_title" to="./../properties/huge-sunny-villa-east-side/index.html">Huge Sunny Villa – East Side</Link>
                                                                                                                <div class="category_tagline"><Link to="./../area/east-side/index.html" rel="tag">East Side</Link>,</div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1440769265549 wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner vc_custom_1429785101719">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="spacer" style={{height: 30}}></div>
                                                                                    <div class="bottom-estate_property nobutton">
                                                                                           <h2 class="shortcode_title">Recent Properties V1</h2>
                                                                                           <div class="items_shortcode_wrapper">
                                                                                                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="137">
                                                                                                         <div class="property_listing" data-link="./properties/huge-sunny-villa-east-side/">
                                                                                                                <div class="listing-unit-img-wrapper">
                                                                                                                       <Link to="./../properties/huge-sunny-villa-east-side/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/9-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                       <div class="price_unit_wrapper"></div>
                                                                                                                       <div class="price_unit">€ 500<span class="pernight"> /night</span></div>
                                                                                                                </div>

                                                                                                                <div class="featured_div">featured</div>
                                                                                                                <div class="property_status_wrapper"></div>
                                                                                                                <div class="title-container">
                                                                                                                       <div class="price_unit">€ 500<span class="pernight"> /night</span></div>

                                                                                                                       <div class="rating_placeholder"></div>

                                                                                                                       <Link to="./../properties/huge-sunny-villa-east-side/index.html" class="owner_thumb" >
                                                                                                                           <img src={Sunny} alt="" />
                                                                                                                       </Link>

                                                                                                                       <div class="category_name">
                                                                                                                              <Link itemprop="url" to="./../properties/huge-sunny-villa-east-side/index.html" class="listing_title_unit">
                                                                                                                                     <span itemprop="name"> Huge Sunny Villa – East Side </span>
                                                                                                                              </Link>
                                                                                                                              <div class="category_tagline map_icon"><Link to="./../area/east-side/index.html" rel="tag">East Side</Link>,</div>

                                                                                                                              <div class="category_tagline actions_icon"><Link to="./../listings/villa/index.html" rel="tag">Villa</Link> / <Link to="./../action/entire-home/index.html" rel="tag">Entire home</Link></div>
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
                                                                                                                       <Link to="./../properties/beautiful-cabin-simple-price/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/4-1-1-1-scaled-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                       <div class="price_unit_wrapper"></div>
                                                                                                                       <div class="price_unit">€ 64<span class="pernight"> /night</span></div>
                                                                                                                </div>

                                                                                                                <div class="featured_div">featured</div>
                                                                                                                <div class="property_status_wrapper"></div>
                                                                                                                <div class="title-container">
                                                                                                                       <div class="price_unit">€ 64<span class="pernight"> /night</span></div>

                                                                                                                       <div class="rating_placeholder"></div>

                                                                                                                       <Link to="./../properties/beautiful-cabin-simple-price/index.html" class="owner_thumb">
                                                                                                                           <img src={Cabin} alt="" />
                                                                                                                       </Link>

                                                                                                                       <div class="category_name">
                                                                                                                              <Link itemprop="url" to="./../properties/beautiful-cabin-simple-price/index.html" class="listing_title_unit">
                                                                                                                                     <span itemprop="name"> Beautiful Cabin, Simple Price </span>
                                                                                                                              </Link>
                                                                                                                              <div class="category_tagline map_icon"><Link to="./../area/brightwood/index.html" rel="tag">Brightwood</Link>, <Link to="./../city/philadelphia/index.html" rel="tag">Philadelphia</Link></div>

                                                                                                                              <div class="category_tagline actions_icon"><Link to="./../listings/cabin/index.html" rel="tag">Cabin</Link> / <Link to="./../action/entire-home/index.html" rel="tag">Entire home</Link></div>
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
                                                                                                                       <Link to="./../properties/victorian-bed-breakfast/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/3-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                       <div class="price_unit_wrapper"></div>
                                                                                                                       <div class="price_unit">€ 65<span class="pernight"> /night</span></div>
                                                                                                                </div>

                                                                                                                <div class="featured_div">featured</div>
                                                                                                                <div class="property_status_wrapper"></div>
                                                                                                                <div class="title-container">
                                                                                                                       <div class="price_unit">€ 65<span class="pernight"> /night</span></div>

                                                                                                                       <div class="rating_placeholder"></div>

                                                                                                                       <Link to="./../properties/victorian-bed-breakfast/index.html" class="owner_thumb" >
                                                                                                                           <img src={Victoria} alt="" />
                                                                                                                       </Link>

                                                                                                                       <div class="category_name">
                                                                                                                              <Link itemprop="url" to="./../properties/victorian-bed-breakfast/index.html" class="listing_title_unit">
                                                                                                                                     <span itemprop="name"> Victorian Bed &amp; Breakfast </span>
                                                                                                                              </Link>
                                                                                                                              <div class="category_tagline map_icon"><Link to="./../area/mattapan/index.html" rel="tag">Mattapan</Link>, <Link to="./../city/boston/index.html" rel="tag">Boston</Link></div>

                                                                                                                              <div class="category_tagline actions_icon"><Link to="./../listings/b-b/index.html" rel="tag">B &amp; B</Link> / <Link to="./../action/shared-room/index.html" rel="tag">Shared room</Link></div>
                                                                                                                       </div>

                                                                                                                       <div class="property_unit_action">
                                                                                                                              <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="115"><i class="fas fa-heart"></i></span>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 30}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        {/* <!-- Row Backgrounds --> */}
                                                        <div class="upb_color" data-bg-override="ex-full" data-bg-color="#ffffff" data-fadeout="" data-fadeout-percentage="30" data-parallax-content="" data-parallax-content-sense="30" data-row-effect-mobile-disable="true" data-img-parallax-mobile-disable="true" data-rtl="false" data-custom-vc-row="" data-vc="6.5.0" data-is_old_vc="" data-theme-support="" data-overlay="false" data-overlay-color="" data-overlay-pattern="" data-overlay-pattern-opacity="" data-overlay-pattern-size=""></div>
                                                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1440769388605 wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="spacer" style={{height: 20}}></div>
                                                                                    <div class="wpb_text_column wpb_content_element vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>Recent Properties V2</h1>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="">
                                                                                           <div class="items_shortcode_wrapper items_shortcode_wrapper_full">
                                                                                                  <div class="places_wrapper places_wrapper3" data-link="./properties/beautiful-cabin-simple-price/">
                                                                                                         <div class="places3 places_listing" data-listid="119">
                                                                                                                <div class="listing-hover-gradient"></div>
                                                                                                                <div class="listing-hover"></div>
                                                                                                                <div class="listing-unit-img-wrapper shortcodefull" >
                                                                                                                    <img src={Listing} alt="" />
                                                                                                                </div>
                                                                                                                <div class="property_status_wrapper"></div>
                                                                                                         </div>
                                                                                                         <div class="category_name">
                                                                                                                <Link class="featured_listing_title" to="./../properties/beautiful-cabin-simple-price/index.html">Beautiful Cabin, Simple Price</Link>
                                                                                                                <div class="category_tagline"><Link to="./../area/brightwood/index.html" rel="tag">Brightwood</Link>, <Link to="./../city/philadelphia/index.html" rel="tag">Philadelphia</Link></div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                                  <div class="places_wrapper places_wrapper3" data-link="./properties/chic-cole-valley-house/">
                                                                                                         <div class="places3 places_listing" data-listid="101">
                                                                                                                <div class="listing-hover-gradient"></div>
                                                                                                                <div class="listing-hover"></div>
                                                                                                                <div class="listing-unit-img-wrapper shortcodefull" >
                                                                                                                    <img src={Listing} alt="" />
                                                                                                                </div>
                                                                                                                <div class="property_status_wrapper"></div>
                                                                                                         </div>
                                                                                                         <div class="category_name">
                                                                                                                <div class="property-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                                                                                                                <Link class="featured_listing_title" to="./../properties/chic-cole-valley-house/index.html">Chic Cole Valley House</Link>
                                                                                                                <div class="category_tagline"><Link to="./../area/glover-park-washington/index.html" rel="tag">Glover Park, Washington</Link>, <Link to="./../city/washington/index.html" rel="tag">Washington</Link></div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                                  <div class="places_wrapper places_wrapper3" data-link="./properties/beautiful-full-bed-breakfast/">
                                                                                                         <div class="places3 places_listing" data-listid="111">
                                                                                                                <div class="listing-hover-gradient"></div>
                                                                                                                <div class="listing-hover"></div>
                                                                                                                <div class="listing-unit-img-wrapper shortcodefull" >
                                                                                                                    <img src={Listing} alt="" />
                                                                                                                </div>
                                                                                                                <div class="property_status_wrapper"></div>
                                                                                                         </div>
                                                                                                         <div class="category_name">
                                                                                                                <Link class="featured_listing_title" to="./../properties/beautiful-full-bed-breakfast/index.html">Beautiful Full Bed and Breakfast</Link>
                                                                                                                <div class="category_tagline"><Link to="./../area/mattapan/index.html" rel="tag">Mattapan</Link>, <Link to="./../city/boston/index.html" rel="tag">Boston</Link></div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 40}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1440769491612 wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner vc_custom_1429785459766">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="spacer" style={{height: 30}}></div>
                                                                                    <div class="bottom-post nobutton">
                                                                                           <h2 class="shortcode_title">Recent Articles V1</h2>
                                                                                           <div class="items_shortcode_wrapper">
                                                                                                  <div class="col-md-4 property_flex">
                                                                                                         <div class="blog_unit_back" data-link="./2021/12/08/hello-world/">
                                                                                                                <div class="listing-unit-img-wrapper">
                                                                                                                       <img src="./../wp-content/themes/wprentals/img/defaultimage.jpg" class="b-lazy img-responsive" alt="Hello world!" />
                                                                                                                       <div class="price_unit_wrapper"></div>
                                                                                                                </div>
                                                                                                                <div class="blog-title">
                                                                                                                       <Link to="./../2021/12/08/hello-world/index.html" class="blog-title-link"> Hello world! </Link>

                                                                                                                       <div class="blog-unit-content">Welcome to WordPress. This is your first post. Edit or delete it, then start writing! ...</div>

                                                                                                                       <div class="category_tagline">
                                                                                                                              <span class="span_widemeta"> Dec 08, 2021</span> ,
                                                                                                                              <span class="span_widemeta span_comments"><i class="far fa-comment"></i> 1</span>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                                  <div class="col-md-4 property_flex">
                                                                                                         <div class="blog_unit_back" data-link="./2015/04/21/what-guests-want-to-know/">
                                                                                                                <div class="listing-unit-img-wrapper">
                                                                                                                       <img src="./../wp-content/uploads/2015/04/diving-1-1-400x242.jpeg" class="b-lazy img-responsive" alt="What Guests Want to Know" />
                                                                                                                       <div class="price_unit_wrapper"></div>
                                                                                                                </div>
                                                                                                                <div class="blog-title">
                                                                                                                       <Link to="./../2015/04/21/what-guests-want-to-know/index.html" class="blog-title-link"> What Guests Want to Know </Link>

                                                                                                                       <div class="blog-unit-content">It’s no surprise that location is everything for guests who book an WP Rentals. But what was surprising for us was the conundrum this topic ...</div>

                                                                                                                       <div class="category_tagline">
                                                                                                                              <span class="span_widemeta"> Apr 21, 2015</span> ,
                                                                                                                              <span class="span_widemeta span_comments"><i class="far fa-comment"></i> 4</span>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                                  <div class="col-md-4 property_flex">
                                                                                                         <div class="blog_unit_back" data-link="./2015/04/21/how-to-be-a-great-host/">
                                                                                                                <div class="listing-unit-img-wrapper">
                                                                                                                       <img src="./../wp-content/uploads/2015/04/dolphin-1-1-400x242.jpeg" class="b-lazy img-responsive" alt="How to be a Great Host for Renters" />
                                                                                                                       <div class="price_unit_wrapper"></div>
                                                                                                                </div>
                                                                                                                <div class="blog-title">
                                                                                                                       <Link to="./../2015/04/21/how-to-be-a-great-host/index.html" class="blog-title-link"> How to be a Great Host for R... </Link>

                                                                                                                       <div class="blog-unit-content">Elle put together some easy steps every host can follow to prevent hosting from becoming more of a chore than a reward. “Some of our ...</div>

                                                                                                                       <div class="category_tagline">
                                                                                                                              <span class="span_widemeta"> Apr 21, 2015</span> ,
                                                                                                                              <span class="span_widemeta span_comments"><i class="far fa-comment"></i> 2</span>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 30}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        {/* <!-- Row Backgrounds --> */}
                                                        <div class="upb_color" data-bg-override="ex-full" data-bg-color="#ffffff" data-fadeout="" data-fadeout-percentage="30" data-parallax-content="" data-parallax-content-sense="30" data-row-effect-mobile-disable="true" data-img-parallax-mobile-disable="true" data-rtl="false" data-custom-vc-row="" data-vc="6.5.0" data-is_old_vc="" data-theme-support="" data-overlay="false" data-overlay-color="" data-overlay-pattern="" data-overlay-pattern-opacity="" data-overlay-pattern-size=""></div>
                                                        <div data-vc-full-width="true" data-vc-full-width-init="false" class="vc_row wpb_row vc_row-fluid wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner vc_custom_1440674114296">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="spacer" style={{height: 20}}></div>
                                                                                    <div class="wpb_text_column wpb_content_element vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>Recent Articles V2</h1>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="">
                                                                                           <div class="items_shortcode_wrapper items_shortcode_wrapper_full">
                                                                                                  <div class="places_wrapper places_wrapper3" data-link="./2021/12/08/hello-world/">
                                                                                                         <div class="places3">
                                                                                                                <div class="listing-hover-gradient"></div>
                                                                                                                <div class="listing-hover"></div>
                                                                                                                <div class="listing-unit-img-wrapper shortcodefull"></div>
                                                                                                                <div class="featured-article-date blog_unit_full_row">Dec 08, 2021</div>
                                                                                                         </div>

                                                                                                         <Link to="./../2021/12/08/hello-world/index.html" class="blog-title-link">Hello world!</Link>
                                                                                                  </div>
                                                                                                  <div class="places_wrapper places_wrapper3" data-link="./2015/04/21/what-guests-want-to-know/">
                                                                                                         <div class="places3">
                                                                                                                <div class="listing-hover-gradient"></div>
                                                                                                                <div class="listing-hover"></div>
                                                                                                                <div class="listing-unit-img-wrapper shortcodefull">
                                                                                                                    <img src={Listing} alt="" />
                                                                                                                </div>
                                                                                                                <div class="featured-article-date blog_unit_full_row">Apr 21, 2015</div>
                                                                                                         </div>

                                                                                                         <Link to="./../2015/04/21/what-guests-want-to-know/index.html" class="blog-title-link">What Guests Want to Know</Link>
                                                                                                  </div>
                                                                                                  <div class="places_wrapper places_wrapper3" data-link="./2015/04/21/how-to-be-a-great-host/">
                                                                                                         <div class="places3">
                                                                                                                <div class="listing-hover-gradient"></div>
                                                                                                                <div class="listing-hover"></div>
                                                                                                                <div class="listing-unit-img-wrapper shortcodefull" >
                                                                                                                    <img src={Listing} alt="" />
                                                                                                                </div>
                                                                                                                <div class="featured-article-date blog_unit_full_row">Apr 21, 2015</div>
                                                                                                         </div>

                                                                                                         <Link to="./../2015/04/21/how-to-be-a-great-host/index.html" class="blog-title-link">How to be a Great Host for Renters</Link>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 40}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div class="vc_row-full-width vc_clearfix"></div>
                                                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1440769755665 wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner vc_custom_1429785946324">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="spacer" style={{height: 40}}></div>
                                                                                    <div class="bottom-estate_property nobutton">
                                                                                           <div class="items_shortcode_wrapper">
                                                                                                  <h2 class="shortcode_title">List Items by ID shortcode</h2>

                                                                                                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="149">
                                                                                                         <div class="property_listing" data-link="./properties/west-town-3rd-floor-dorm/">
                                                                                                                <div class="listing-unit-img-wrapper">
                                                                                                                       <Link to="./../properties/west-town-3rd-floor-dorm/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/11-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                       <div class="price_unit_wrapper"></div>
                                                                                                                       <div class="price_unit">€ 23<span class="pernight"> /night</span></div>
                                                                                                                </div>

                                                                                                                <div class="property_status_wrapper"><div class="property_status status_verified">verified</div></div>
                                                                                                                <div class="title-container">
                                                                                                                       <div class="price_unit">€ 23<span class="pernight"> /night</span></div>

                                                                                                                       <div class="rating_placeholder"></div>

                                                                                                                       <Link to="./../properties/west-town-3rd-floor-dorm/index.html" class="owner_thumb">
                                                                                                                           <img src={West_town} alt="" />
                                                                                                                       </Link>

                                                                                                                       <div class="category_name">
                                                                                                                              <Link itemprop="url" to="./../properties/west-town-3rd-floor-dorm/index.html" class="listing_title_unit">
                                                                                                                                     <span itemprop="name"> West Town 3rd Floor Dorm </span>
                                                                                                                              </Link>
                                                                                                                              <div class="category_tagline map_icon"><Link to="./../area/arlington/index.html" rel="tag">Arlington</Link>, <Link to="./../city/baltimore/index.html" rel="tag">Baltimore</Link></div>

                                                                                                                              <div class="category_tagline actions_icon"><Link to="./../listings/dorm/index.html" rel="tag">Dorm</Link> / <Link to="./../action/shared-room/index.html" rel="tag">Shared room</Link></div>
                                                                                                                       </div>

                                                                                                                       <div class="property_unit_action">
                                                                                                                              <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="149"><i class="fas fa-heart"></i></span>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>

                                                                                                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="141">
                                                                                                         <div class="property_listing" data-link="./properties/modern-spacious-villa/">
                                                                                                                <div class="listing-unit-img-wrapper">
                                                                                                                       <Link to="./../properties/modern-spacious-villa/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/10-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                       <div class="price_unit_wrapper"></div>
                                                                                                                       <div class="price_unit">€ 159<span class="pernight"> /night</span></div>
                                                                                                                </div>

                                                                                                                <div class="property_status_wrapper"></div>
                                                                                                                <div class="title-container">
                                                                                                                       <div class="price_unit">€ 159<span class="pernight"> /night</span></div>

                                                                                                                       <div class="rating_placeholder"></div>

                                                                                                                       <Link to="./../properties/modern-spacious-villa/index.html" class="owner_thumb">
                                                                                                                           <img src={Villa} alt="" />
                                                                                                                       </Link>

                                                                                                                       <div class="category_name">
                                                                                                                              <Link itemprop="url" to="./../properties/modern-spacious-villa/index.html" class="listing_title_unit">
                                                                                                                                     <span itemprop="name"> Modern &amp; Spacious Villa </span>
                                                                                                                              </Link>
                                                                                                                              <div class="category_tagline map_icon"><Link to="./../area/east-side/index.html" rel="tag">East Side</Link>,</div>

                                                                                                                              <div class="category_tagline actions_icon"><Link to="./../listings/villa/index.html" rel="tag">Villa</Link> / <Link to="./../action/entire-home/index.html" rel="tag">Entire home</Link></div>
                                                                                                                       </div>

                                                                                                                       <div class="property_unit_action">
                                                                                                                              <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="141"><i class="fas fa-heart"></i></span>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>

                                                                                                  <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-4 shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="137">
                                                                                                         <div class="property_listing" data-link="./properties/huge-sunny-villa-east-side/">
                                                                                                                <div class="listing-unit-img-wrapper">
                                                                                                                       <Link to="./../properties/huge-sunny-villa-east-side/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/9-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                       <div class="price_unit_wrapper"></div>
                                                                                                                       <div class="price_unit">€ 500<span class="pernight"> /night</span></div>
                                                                                                                </div>

                                                                                                                <div class="featured_div">featured</div>
                                                                                                                <div class="property_status_wrapper"></div>
                                                                                                                <div class="title-container">
                                                                                                                       <div class="price_unit">€ 500<span class="pernight"> /night</span></div>

                                                                                                                       <div class="rating_placeholder"></div>

                                                                                                                       <Link to="./../properties/huge-sunny-villa-east-side/index.html" class="owner_thumb" >
                                                                                                                           <img src={Villa} alt="" />
                                                                                                                       </Link>

                                                                                                                       <div class="category_name">
                                                                                                                              <Link itemprop="url" to="./../properties/huge-sunny-villa-east-side/index.html" class="listing_title_unit">
                                                                                                                                     <span itemprop="name"> Huge Sunny Villa – East Side </span>
                                                                                                                              </Link>
                                                                                                                              <div class="category_tagline map_icon"><Link to="./../area/east-side/index.html" rel="tag">East Side</Link>,</div>

                                                                                                                              <div class="category_tagline actions_icon"><Link to="./../listings/villa/index.html" rel="tag">Villa</Link> / <Link to="./../action/entire-home/index.html" rel="tag">Entire home</Link></div>
                                                                                                                       </div>

                                                                                                                       <div class="property_unit_action">
                                                                                                                              <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="137"><i class="fas fa-heart"></i></span>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 30}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        {/* <!-- Row Backgrounds --> */}
                                                        <div class="upb_color" data-bg-override="ex-full" data-bg-color="#ffffff" data-fadeout="" data-fadeout-percentage="30" data-parallax-content="" data-parallax-content-sense="30" data-row-effect-mobile-disable="true" data-img-parallax-mobile-disable="true" data-rtl="false" data-custom-vc-row="" data-vc="6.5.0" data-is_old_vc="" data-theme-support="" data-overlay="false" data-overlay-color="" data-overlay-pattern="" data-overlay-pattern-opacity="" data-overlay-pattern-size=""></div>
                                                        <div class="vc_row wpb_row vc_row-fluid wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner vc_custom_1435665261660">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="spacer" style={{height: 20}}></div>
                                                                                    <div class="wpb_text_column wpb_content_element vc_custom_1440769861480 vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>Featured Owners</h1>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1435665228614 wpestate_row_inner vc_row_inner">
                                                                                           <div class="wpb_column vc_column_container vc_col-sm-4 vc_column_inner">
                                                                                                  <div class="vc_column-inner">
                                                                                                         <div class="wpb_wrapper">
                                                                                                                <div class="featured_property featured_agent" data-link="./owners/amberdemo/">
                                                                                                                       <div class="places1">
                                                                                                                              <div class="listing-hover-gradient"></div>
                                                                                                                              <div class="listing-hover"></div>
                                                                                                                              <div class="listing-unit-img-wrapper shortcodefull"></div>
                                                                                                                              <div class="category_name">
                                                                                                                                     <Link class="featured_listing_title" to="./../owners/amberdemo/index.html"> Amber Leigh </Link>
                                                                                                                                     <div class="category_tagline">I love to travel and interact with new people.</div>
                                                                                                                              </div>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                           <div class="wpb_column vc_column_container vc_col-sm-4 vc_column_inner">
                                                                                                  <div class="vc_column-inner">
                                                                                                         <div class="wpb_wrapper">
                                                                                                                <div class="featured_property featured_agent" data-link="./owners/johndemo/">
                                                                                                                       <div class="places1">
                                                                                                                              <div class="listing-hover-gradient"></div>
                                                                                                                              <div class="listing-hover"></div>
                                                                                                                              <div class="listing-unit-img-wrapper shortcodefull">
                                                                                                                                  <img src={Listing} alt="" />
                                                                                                                              </div>
                                                                                                                              <div class="category_name">
                                                                                                                                     <Link class="featured_listing_title" to="./../owners/johndemo/index.html"> John Doe </Link>
                                                                                                                                     <div class="category_tagline">New York history &amp; art lover.</div>
                                                                                                                              </div>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                           <div class="wpb_column vc_column_container vc_col-sm-4 vc_column_inner">
                                                                                                  <div class="vc_column-inner">
                                                                                                         <div class="wpb_wrapper">
                                                                                                                <div class="featured_property featured_agent" data-link="./owners/user/">
                                                                                                                       <div class="places1">
                                                                                                                              <div class="listing-hover-gradient"></div>
                                                                                                                              <div class="listing-hover"></div>
                                                                                                                              <div class="listing-unit-img-wrapper shortcodefull"></div>
                                                                                                                              <div class="category_name">
                                                                                                                                     <Link class="featured_listing_title" to="./../owners/user/index.html"> user </Link>
                                                                                                                                     <div class="category_tagline">Professional Photographers in NY.</div>
                                                                                                                              </div>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 40}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1440770012896 wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="article_container slider_container bottom-estate_property nobutton">
                                                                                           <div class="slider_control_left"><i class="demo-icon icon-left-open-big"></i></div>
                                                                                           <div class="slider_control_right"><i class="demo-icon icon-right-open-big"></i></div>
                                                                                           <h2 class="shortcode_title title_slider">Properties Slider</h2>
                                                                                           <div class="shortcode_slider_wrapper" data-auto="0">
                                                                                                  <ul class="shortcode_slider_list">
                                                                                                         <li>
                                                                                                                <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md- shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="137">
                                                                                                                       <div class="property_listing" data-link="./properties/huge-sunny-villa-east-side/">
                                                                                                                              <div class="listing-unit-img-wrapper">
                                                                                                                                     <Link to="./../properties/huge-sunny-villa-east-side/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/9-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                                     <div class="price_unit_wrapper"></div>
                                                                                                                                     <div class="price_unit">€ 500<span class="pernight"> /night</span></div>
                                                                                                                              </div>

                                                                                                                              <div class="featured_div">featured</div>
                                                                                                                              <div class="property_status_wrapper"></div>
                                                                                                                              <div class="title-container">
                                                                                                                                     <div class="price_unit">€ 500<span class="pernight"> /night</span></div>

                                                                                                                                     <div class="rating_placeholder"></div>

                                                                                                                                     <Link to="./../properties/huge-sunny-villa-east-side/index.html" class="owner_thumb">
                                                                                                                                         <img src={Villa} alt="" />
                                                                                                                                     </Link>

                                                                                                                                     <div class="category_name">
                                                                                                                                            <Link itemprop="url" to="./../properties/huge-sunny-villa-east-side/index.html" class="listing_title_unit">
                                                                                                                                                   <span itemprop="name"> Huge Sunny Villa – East Side </span>
                                                                                                                                            </Link>
                                                                                                                                            <div class="category_tagline map_icon"><Link to="./../area/east-side/index.html" rel="tag">East Side</Link>,</div>

                                                                                                                                            <div class="category_tagline actions_icon"><Link to="./../listings/villa/index.html" rel="tag">Villa</Link> / <Link to="./../action/entire-home/index.html" rel="tag">Entire home</Link></div>
                                                                                                                                     </div>

                                                                                                                                     <div class="property_unit_action">
                                                                                                                                            <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="137"><i class="fas fa-heart"></i></span>
                                                                                                                                     </div>
                                                                                                                              </div>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </li>
                                                                                                         <li>
                                                                                                                <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md- shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="119">
                                                                                                                       <div class="property_listing" data-link="./properties/beautiful-cabin-simple-price/">
                                                                                                                              <div class="listing-unit-img-wrapper">
                                                                                                                                     <Link to="./../properties/beautiful-cabin-simple-price/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/4-1-1-1-scaled-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                                     <div class="price_unit_wrapper"></div>
                                                                                                                                     <div class="price_unit">€ 64<span class="pernight"> /night</span></div>
                                                                                                                              </div>

                                                                                                                              <div class="featured_div">featured</div>
                                                                                                                              <div class="property_status_wrapper"></div>
                                                                                                                              <div class="title-container">
                                                                                                                                     <div class="price_unit">€ 64<span class="pernight"> /night</span></div>

                                                                                                                                     <div class="rating_placeholder"></div>

                                                                                                                                     <Link to="./../properties/beautiful-cabin-simple-price/index.html" class="owner_thumb">
                                                                                                                                       <img src={Cabin} alt="" /> 
                                                                                                                                     </Link>

                                                                                                                                     <div class="category_name">
                                                                                                                                            <Link itemprop="url" to="./../properties/beautiful-cabin-simple-price/index.html" class="listing_title_unit">
                                                                                                                                                   <span itemprop="name"> Beautiful Cabin, Simple Price </span>
                                                                                                                                            </Link>
                                                                                                                                            <div class="category_tagline map_icon"><Link to="./../area/brightwood/index.html" rel="tag">Brightwood</Link>, <Link to="./../city/philadelphia/index.html" rel="tag">Philadelphia</Link></div>

                                                                                                                                            <div class="category_tagline actions_icon"><Link to="./../listings/cabin/index.html" rel="tag">Cabin</Link> / <Link to="./../action/entire-home/index.html" rel="tag">Entire home</Link></div>
                                                                                                                                     </div>

                                                                                                                                     <div class="property_unit_action">
                                                                                                                                            <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="119"><i class="fas fa-heart"></i></span>
                                                                                                                                     </div>
                                                                                                                              </div>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </li>
                                                                                                         <li>
                                                                                                                <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md- shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="115">
                                                                                                                       <div class="property_listing" data-link="./properties/victorian-bed-breakfast/">
                                                                                                                              <div class="listing-unit-img-wrapper">
                                                                                                                                     <Link to="./../properties/victorian-bed-breakfast/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/3-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                                     <div class="price_unit_wrapper"></div>
                                                                                                                                     <div class="price_unit">€ 65<span class="pernight"> /night</span></div>
                                                                                                                              </div>

                                                                                                                              <div class="featured_div">featured</div>
                                                                                                                              <div class="property_status_wrapper"></div>
                                                                                                                              <div class="title-container">
                                                                                                                                     <div class="price_unit">€ 65<span class="pernight"> /night</span></div>

                                                                                                                                     <div class="rating_placeholder"></div>

                                                                                                                                     <Link to="./../properties/victorian-bed-breakfast/index.html" class="owner_thumb"></Link>

                                                                                                                                     <div class="category_name">
                                                                                                                                            <Link itemprop="url" to="./../properties/victorian-bed-breakfast/index.html" class="listing_title_unit">
                                                                                                                                                   <span itemprop="name"> Victorian Bed &amp; Breakfast </span>
                                                                                                                                            </Link>
                                                                                                                                            <div class="category_tagline map_icon"><Link to="./../area/mattapan/index.html" rel="tag">Mattapan</Link>, <Link to="./../city/boston/index.html" rel="tag">Boston</Link></div>

                                                                                                                                            <div class="category_tagline actions_icon"><Link to="./../listings/b-b/index.html" rel="tag">B &amp; B</Link> / <Link to="./../action/shared-room/index.html" rel="tag">Shared room</Link></div>
                                                                                                                                     </div>

                                                                                                                                     <div class="property_unit_action">
                                                                                                                                            <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="115"><i class="fas fa-heart"></i></span>
                                                                                                                                     </div>
                                                                                                                              </div>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </li>
                                                                                                         <li>
                                                                                                                <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md- shortcode-col property_unit_v1 property_flex" data-org="4" data-listid="107">
                                                                                                                       <div class="property_listing" data-link="./properties/sunny-2-bedrooms-in-the-haight/">
                                                                                                                              <div class="listing-unit-img-wrapper">
                                                                                                                                     <Link to="./../properties/sunny-2-bedrooms-in-the-haight/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/10-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                                                                     <div class="price_unit_wrapper"></div>
                                                                                                                                     <div class="price_unit">€ 225<span class="pernight"> /night</span></div>
                                                                                                                              </div>

                                                                                                                              <div class="featured_div">featured</div>
                                                                                                                              <div class="property_status_wrapper"><div class="property_status status_verified">verified</div></div>
                                                                                                                              <div class="title-container">
                                                                                                                                     <div class="price_unit">€ 225<span class="pernight"> /night</span></div>

                                                                                                                                     <div class="property-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>

                                                                                                                                     <Link to="./../properties/sunny-2-bedrooms-in-the-haight/index.html" class="owner_thumb">
                                                                                                                                         <img src={Sunny} alt="" />
                                                                                                                                     </Link>

                                                                                                                                     <div class="category_name">
                                                                                                                                            <Link itemprop="url" to="./../properties/sunny-2-bedrooms-in-the-haight/index.html" class="listing_title_unit">
                                                                                                                                                   <span itemprop="name"> Sunny 2 Bedrooms Video </span>
                                                                                                                                            </Link>
                                                                                                                                            <div class="category_tagline map_icon"><Link to="./../area/glover-park/index.html" rel="tag">Glover Park</Link>, <Link to="./../city/washington/index.html" rel="tag">Washington</Link></div>

                                                                                                                                            <div class="category_tagline actions_icon"><Link to="./../listings/house/index.html" rel="tag">House</Link> / <Link to="./../action/private-room/index.html" rel="tag">Private room</Link></div>
                                                                                                                                     </div>

                                                                                                                                     <div class="property_unit_action">
                                                                                                                                            <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="107"><i class="fas fa-heart"></i></span>
                                                                                                                                     </div>
                                                                                                                              </div>
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         </li>
                                                                                                  </ul>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 30}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        {/* <!-- Row Backgrounds --> */}
                                                        <div class="upb_color" data-bg-override="ex-full" data-bg-color="#ffffff" data-fadeout="" data-fadeout-percentage="30" data-parallax-content="" data-parallax-content-sense="30" data-row-effect-mobile-disable="true" data-img-parallax-mobile-disable="true" data-rtl="false" data-custom-vc-row="" data-vc="6.5.0" data-is_old_vc="" data-theme-support="" data-overlay="false" data-overlay-color="" data-overlay-pattern="" data-overlay-pattern-opacity="" data-overlay-pattern-size=""></div>
                                                        <div data-vc-full-width="true" data-vc-full-width-init="false" class="vc_row wpb_row vc_row-fluid wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="spacer" style={{height: 20}}></div>
                                                                                    <div class="wpb_text_column wpb_content_element vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>List of Places</h1>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="places_wrapper places_wrapper3 places_wrapper_no_shadow" data-link="./features/essentials/" style={{marginBottom: 16, paddingLeft: 8, paddingRight: 8}}>
                                                                                    <div class="listing-hover-gradient" style={{left: 8, right: 8}}></div>
                                                                                           <div class="listing-hover" style={{left: 8, right: 8}}></div>
                                                                                           <div class="places3" >
                                                                                               <img src={Default} alt="" />
                                                                                           </div>
                                                                                           <div class="category_name">
                                                                                                  <Link class="featured_listing_title" to="./../features/essentials/index.html"></Link>
                                                                                                  <div class="category_tagline"></div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="places_wrapper places_wrapper3 places_wrapper_no_shadow places_wrapper_no_shadow" data-link="./features/elevator-in-building/" style={{marginBottom: 16, paddingLeft: 8, paddingRight: 8}}>
                                                                                    <div class="listing-hover-gradient" style={{left: 8, right: 8}}></div>
                                                                                           <div class="listing-hover" style={{left: 8, right: 8}}></div>
                                                                                           <div class="places3" >
                                                                                               <img src={Default} alt="" />
                                                                                           </div>
                                                                                           <div class="category_name">
                                                                                                  <Link class="featured_listing_title" to="./../features/elevator-in-building/index.html"></Link>
                                                                                                  <div class="category_tagline"></div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="places_wrapper places_wrapper3 places_wrapper_no_shadow places_wrapper_no_shadow places_wrapper_no_shadow" data-link="./area/east-side/" style={{marginBottom: 16, paddingLeft: 8, paddingRight: 8}}>
                                                                                           <div class="listing-hover-gradient" style={{left: 8, right: 8}}></div>
                                                                                           <div class="listing-hover" style={{left: 8, right: 8}}></div>
                                                                                           <div class="places3" >
                                                                                               <img src={Default} alt="" />
                                                                                           </div>
                                                                                           <div class="category_name">
                                                                                                  <Link class="featured_listing_title" to="./../area/east-side/index.html"></Link>
                                                                                                  <div class="category_tagline"></div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 40}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div class="vc_row-full-width vc_clearfix"></div>
                                                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1440770205301 wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-6 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="wpb_text_column wpb_content_element vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>Featured City</h1>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="places_wrapper" data-link="./features/elevator-in-building/">
                                                                                           <div class="listing-hover-gradient"></div>
                                                                                           <div class="listing-hover"></div>
                                                                                           <div class="places1 featuredplace">
                                                                                               <img src={Default} alt="" />
                                                                                           </div>
                                                                                           <div class="category_name">
                                                                                                  <Link class="featured_listing_title" to="./../features/elevator-in-building/index.html"></Link>
                                                                                                  <div class="category_tagline"></div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 60}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div class="wpb_column vc_column_container vc_col-sm-6 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="wpb_text_column wpb_content_element vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>Featured Area</h1>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="places_wrapper" data-link="./features/dryer/">
                                                                                           <div class="listing-hover-gradient"></div>
                                                                                           <div class="listing-hover"></div>
                                                                                           <div class="places1 featuredplace">
                                                                                               <img src={Default} alt="" />
                                                                                           </div>
                                                                                           <div class="category_name">
                                                                                                  <Link class="featured_listing_title" to="./../features/dryer/index.html"></Link>
                                                                                                  <div class="category_tagline"></div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 60}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        {/* <!-- Row Backgrounds --> */}
                                                        <div class="upb_color" data-bg-override="ex-full" data-bg-color="#ffffff" data-fadeout="" data-fadeout-percentage="30" data-parallax-content="" data-parallax-content-sense="30" data-row-effect-mobile-disable="true" data-img-parallax-mobile-disable="true" data-rtl="false" data-custom-vc-row="" data-vc="6.5.0" data-is_old_vc="" data-theme-support="" data-overlay="false" data-overlay-color="" data-overlay-pattern="" data-overlay-pattern-opacity="" data-overlay-pattern-size=""></div>
                                                        <div data-vc-full-width="true" data-vc-full-width-init="false" class="vc_row wpb_row vc_row-fluid wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner vc_custom_1435666854259">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="spacer" style={{height: 20}}></div>
                                                                                    <div class="wpb_text_column wpb_content_element vc_custom_1440770254014 vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>Testimonials</h1>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1435666978764 wpestate_row_inner vc_row_inner">
                                                                                           <div class="wpb_column vc_column_container vc_col-sm-6 vc_column_inner">
                                                                                                  <div class="vc_column-inner">
                                                                                                         <div class="wpb_wrapper">
                                                                                                                <div class="testimonial-container testimonial_type_1">
                                                                                                                       <div class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare massa at sollicitudin varius. Nam eget hendrerit dolor. Phasellus vestibulum mi sit amet orci fermentum vehicula.</div>
                                                                                                                       <div class="testimonial-image" >
                                                                                                                           <img src="(https://demo1.wprentals.org/wp-content/uploads/2015/04/testimonial4.jpg)" alt="" />
                                                                                                                       </div>
                                                                                                                       <div class="testimonial-author-line"><span class="testimonial-author">Name Here</span> happy client</div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                           <div class="wpb_column vc_column_container vc_col-sm-6 vc_column_inner">
                                                                                                  <div class="vc_column-inner">
                                                                                                         <div class="wpb_wrapper">
                                                                                                                <div class="testimonial-container testimonial_type_1">
                                                                                                                       <div class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare massa at sollicitudin varius. Nam eget hendrerit dolor. Phasellus vestibulum mi sit amet orci fermentum vehicula.</div>
                                                                                                                       <div class="testimonial-image" >
                                                                                                                           <img src="(https://demo1.wprentals.org/wp-content/uploads/2015/04/testimonial4.jpg)" alt="" />
                                                                                                                       </div>
                                                                                                                       <div class="testimonial-author-line"><span class="testimonial-author">Name Here</span> happy client</div>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="spacer" style={{height: 10}}></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div class="vc_row-full-width vc_clearfix"></div>
                                                        <div data-vc-full-width="true" data-vc-full-width-init="false" class="vc_row wpb_row vc_row-fluid vc_custom_1440770621739 vc_row-has-fill wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-4 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="wpb_text_column wpb_content_element vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>Register Shortcode</h1>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div class="login_form shortcode-login">
                                                                                           <div class="loginalert" id="register_message_area_sh"></div>

                                                                                           <div class="loginrow">
                                                                                                  <input type="text" name="user_login_register" id="user_login_register_sh" class="form-control" placeholder="Username" size="20" />
                                                                                           </div>
                                                                                           <div class="loginrow">
                                                                                                  <input type="text" name="user_email_register" id="user_email_register_sh" class="form-control" placeholder="Email" size="20" />
                                                                                           </div>
                                                                                           <div class="acc_radio">
                                                                                                  <input type="radio" name="acc_type_sh" id="acctype0" value="1" checked required />
                                                                                                  <div class="radiolabel" for="acctype0">I only want to book</div>
                                                                                                  <br />
                                                                                                  <input type="radio" name="acc_type_sh" id="acctype1" value="0" required />
                                                                                                  <div class="radiolabel" for="acctype1">I want to rent my property</div>
                                                                                           </div>
                                                                                           <input type="checkbox" name="terms" id="user_terms_register_sh_sh" />
                                                                                           <label id="user_terms_register_sh_label" for="user_terms_register_sh">I agree with <Link to="./../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">terms &amp; conditions</Link> </label><button id="wp-submit-register_sh" style={{marginTop: 10}} class="wpb_button wpb_btn-info wpb_btn-small wpestate_vc_button vc_button">Create an account</button>
                                                                                           <p id="reg_passmail">*A password will be e-mailed to you</p>
                                                                                           <input type="hidden" id="security-register_sh" name="security-register" value="6e8cc160cd-1638969728" />
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div class="wpb_column vc_column_container vc_col-sm-4 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="wpb_text_column wpb_content_element vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>Login Shortcode</h1>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="login_form shortcode-login" id="login-div">
                                                                                           <div class="loginalert" id="login_message_area_sh"></div>

                                                                                           <div class="loginrow">
                                                                                                  <input type="text" class="form-control" name="log" id="login_user_sh" placeholder="Username" size="20" />
                                                                                           </div>

                                                                                           <div class="loginrow">
                                                                                                  <input type="password" class="form-control" name="pwd" id="login_pwd_sh" placeholder="Password" size="20" />
                                                                                           </div>

                                                                                           <input type="hidden" name="loginpop" id="loginpop" value="0" />
                                                                                           <input type="hidden" id="security-login_sh" name="security-login" value="2b5f64a2c6-1638969728" />

                                                                                           <button id="wp-login-but_sh" class="wpb_button wpb_btn-info wpb_btn-small wpestate_vc_button vc_button">Login</button>
                                                                                           <div class="login-links shortlog"><Link to="https://demo1.wprentals.org/">Register Now!</Link> | <Link to="#" id="forgot_pass">Forgot Password?</Link></div>
                                                                                           <div class="wpestate_social_login" id="facebooklogin_sh" data-social="facebook"><i class="fab fa-facebook-f"></i> Login with Facebook</div>
                                                                                           <input type="hidden" class="wpestate_social_login_nonce" value="428ebbade6" />
                                                                                    </div>
                                                                                    <div class="login_form shortcode-login" id="forgot-pass-div">
                                                                                           <div class="loginalert" id="forgot_pass_area"></div>
                                                                                           <div class="loginrow">
                                                                                                  <input type="text" class="form-control" name="forgot_email" id="forgot_email" placeholder="Enter Your Email Address" size="20" />
                                                                                           </div>
                                                                                           <input type="hidden" id="security-forgot" name="security-forgot" value="09bb43d42b" /><input type="hidden" name="_wp_http_referer" value="/wp-rentals-shortcodes/" />
                                                                                           <input type="hidden" id="postid" value="261" />
                                                                                           <button class="wpb_button wpb_btn-info wpb_btn-small wpestate_vc_button vc_button" id="wp-forgot-but" name="forgot">Reset Password</button>
                                                                                           <div class="login-links shortlog">
                                                                                                  <Link to="#" id="return_login">Return to Login</Link>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div class="wpb_column vc_column_container vc_col-sm-4 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="wpb_text_column wpb_content_element vc_column_text">
                                                                                           <div class="wpb_wrapper">
                                                                                                  <h1>Icon Content Box</h1>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div class="iconcol">
                                                                                           <div class="icon_img">
                                                                                                  <img src="https://demo1.wprentals.org/wp-content/uploads/2015/06/icon-content-box-search3.jpg" class="img-responsive" alt="thumb" />
                                                                                                  <h3><Link to="#">Title of the content box</Link></h3>
                                                                                           </div>
                                                                                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare massa at sollicitudin varius. Nam eget hendrerit dolor. Phasellus vestibulum mi sit amet orci fermentum vehicula. Phasellus vestibulum mi sit amet orci fermentum vehicula.</p>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div class="vc_row-full-width vc_clearfix"></div>
                                                        <div class="vc_row wpb_row vc_row-fluid wpestate_row vc_row">
                                                               <div class="wpb_column vc_column_container vc_col-sm-12 vc_column">
                                                                      <div class="vc_column-inner">
                                                                             <div class="wpb_wrapper">
                                                                                    <div class="spacer" style={{height: 30}}></div>
                                                                                    <div class="advanced_search_shortcode">
                                                                                           <h2 class="shortcode_title_adv">Advanced Search</h2>
                                                                                           <div class="adv-search-2 adv_extended_class 261 advanced_search_form_wrapper" data-postid="261">
                                                                                                  <form role="search" method="get" action="./advanced-search/">
                                                                                                         <div class="col-md-6 Where_do_you_want_to_go_? map_icon">
                                                                                                                <input type="hidden" class="stype" id="stype" name="stype" value="tax" /><input type="text" id="search_locationshortcode_autointernal" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="" /> <input type="hidden" id="advanced_cityshortcode" class="form-control" name="advanced_city" data-value="" value="" />
                                                                                                                <input type="hidden" id="advanced_areashortcode" class="form-control" name="advanced_area" data-value="" value="" />
                                                                                                                <input type="hidden" id="advanced_countryshortcode" class="form-control" name="advanced_country" data-value="" value="" />
                                                                                                                <input type="hidden" id="property_admin_areashortcode" name="property_admin_area" value="" />
                                                                                                                <Helmet>
                                                                                                                {/* <script type="text/javascript">
                                                                                                                       //<![CDATA[
                                                                                                                       jQuery(document).ready(function () {
                                                                                                                              var availableTags = [1];
                                                                                                                              jQuery("#search_location_autointernal,#search_locationmobile_autointernal,#search_locationsidebar_autointernal,#search_locationshortcode_autointernal,#search_location_filter_autointernal,#search_locationhalf_autointernal").autocomplete({
                                                                                                                                     source: function (request, response) {
                                                                                                                                            var results = jQuery.ui.autocomplete.filter(availableTags, request.term);
                                                                                                                                            response(results.slice(0, 10));
                                                                                                                                     },
                                                                                                                                     select: function (a, b) {
                                                                                                                                            jQuery(".stype").val(b.item.category);

                                                                                                                                            if (document.getElementById("search_location_filter_autointernal")) {
                                                                                                                                                   jQuery("#search_location_filter_autointernal").val(b.item.label);
                                                                                                                                                   wpestate_start_filtering_ajax_map(1);
                                                                                                                                            }
                                                                                                                                     },
                                                                                                                              });
                                                                                                                       });
                                                                                                                       //]]&gt;
                                                                                                                </script> */}

                                                                                                                </Helmet>
                                                                                                               
                                                                                                         </div>
                                                                                                         <div class="col-md-3 Check-In calendar_icon"><input type="text" id="check_in_shortcode" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                                                                                                         <div class="col-md-3 Check-Out calendar_icon"><input type="text" id="check_out_shortcode" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                                                                                                         <div class="col-md-3 Guests guest_no_drop">
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
                                                                                                         <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" value="061de97250" /><input type="hidden" name="_wp_http_referer" value="/wp-rentals-shortcodes/" />
                                                                                                         <div class="col-md-3"><input name="submit" type="submit" class="advanced_search_submit_button" value="Search" /></div>
                                                                                                  </form>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
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
                                                                      <Link to="#" target="_blank"><i class="fas fa-rss fa-fw"></i></Link><Link to="#" target="_blank"><i class="fab fa-facebook-f"></i></Link><Link to="#" target="_blank"><i class="fab fa-twitter fa-fw"></i></Link><Link to="#" target="_blank"><i class="fab fa-dribbble fa-fw"></i></Link><Link to="#" target="_blank"><i class="fab fa-google-plus-g fa-fw"></i></Link><Link to="#" target="_blank"><i class="fab fa-linkedin-in"></i></Link>
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
                                                                                    <Link to="./../properties/beautiful-cabin-simple-price/index.html"><img itemprop="image" src="./../wp-content/uploads/2018/08/4-1-1-1-scaled-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></Link>
                                                                                    <div class="price_unit_wrapper"></div>
                                                                             </div>

                                                                             <div class="title-container">
                                                                                    <div class="category_name">
                                                                                           <Link itemprop="url" to="./../properties/beautiful-cabin-simple-price/index.html" class="listing_title_unit">
                                                                                                  <span itemprop="name"> Beautiful Cabin, Simple Price </span>
                                                                                           </Link>
                                                                                    </div>

                                                                                    <div class="category_tagline"><Link to="./../area/brightwood/index.html" rel="tag">Brightwood</Link>, <Link to="./../city/philadelphia/index.html" rel="tag">Philadelphia</Link></div>

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

                                                                                    <div class="category_tagline"><Link to="./../area/mattapan/index.html" rel="tag">Mattapan</Link>, <Link to="./../city/boston/index.html" rel="tag">Boston</Link></div>

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
                                                        <div class="loginalert" id="login_message_area"></div>

                                                        <div class="loginrow">
                                                               <input type="text" class="form-control" name="log" id="login_user" placeholder="Username" size="20" />
                                                        </div>

                                                        <div class="loginrow">
                                                               <input type="password" class="form-control" name="pwd" placeholder="Password" id="login_pwd" size="20" />
                                                        </div>

                                                        <input type="hidden" name="loginpop" id="loginpop" value="0" />
                                                        <input type="hidden" id="security-login" name="security-login" value="2b5f64a2c6-1638969728" />

                                                        <button id="wp-login-but" class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" data-mixval="261">Login</button>
                                                        <div class="navigation_links">
                                                               <Link to="#" id="reveal_register">Don&#039;t have an account?</Link> |
                                                               <Link to="#" id="forgot_password_mod">Forgot Password</Link>
                                                        </div>
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

                                                        <div class="loginrow">
                                                               <input type="text" name="user_login_register" id="user_login_register" class="form-control" placeholder="Username" size="20" />
                                                        </div>
                                                        <div class="loginrow">
                                                               <input type="text" name="user_email_register" id="user_email_register" class="form-control" placeholder="Email" size="20" />
                                                        </div>
                                                        <div class="acc_radio">
                                                               <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                                                               <div class="radiolabel" for="acctype0">I only want to book</div>
                                                               <br />
                                                               <input type="radio" name="acc_type" id="acctype1" value="0" required />
                                                               <div class="radiolabel" for="acctype1">I want to rent my property</div>
                                                        </div>
                                                        <input type="checkbox" name="terms" id="user_terms_register_sh" />
                                                        <label id="user_terms_register_sh_label" for="user_terms_register_sh">I agree with <Link to="./../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">terms &amp; conditions</Link> </label><button id="wp-submit-register" style={{marginTop: 10}} class="wpb_button wpb_btn-info wpb_btn-small wpestate_vc_button vc_button">Create an account</button>
                                                        <p id="reg_passmail">*A password will be e-mailed to you</p>
                                                        <input type="hidden" id="security-register" name="security-register" value="6e8cc160cd-1638969728" />
                                                 </div>
                                                 <div id="reveal_login"><Link to="#">Already a member? Sign in!</Link></div>
                                                 <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/wp-rentals-shortcodes/" />
                                          </div>

                                          <div class="login_form" id="forgot-pass-div_mod">
                                                 <div class="loginalert" id="forgot_pass_area_shortcode"></div>
                                                 <div class="loginrow">
                                                        <input type="text" class="form-control forgot_email_mod" name="forgot_email" id="forgot_email_mod" placeholder="Enter Your Email Address" size="20" />
                                                 </div>
                                                 <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/wp-rentals-shortcodes/" />
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
       
        </body>
        </div>
    )
}
