import React, { useCallback,useState,useEffect,useContext } from 'react';
import { GuestBookingContext } from "../Context/GuestBookingContext";

import ReactDOM from 'react-dom';
import Search from '../../Home/Header/Search';
import Thumb from '../../../assets/wp-content/uploads/2018/08/3-1-1-60x60.jpg';
import Thumb1 from '../../../assets/wp-content/uploads/2018/08/6-1-1-1-60x60.jpg';
import Thumb2 from '../../../assets/wp-content/uploads/2018/08/8-1-1-1-60x60.jpg';
import { Link } from 'react-router-dom';
import Victoria from '../../../assets/wp-content/uploads/2018/08/3-1-1-400x314.jpg';
import Simple from '../../../assets/wp-content/uploads/2018/08/4-1-1-1-scaled-1-400x314.jpg';
import Sunny from '../../../assets/wp-content/uploads/2018/08/9-1-1-1-400x314.jpg';
import Victoria_bed from '../../../assets/wp-content/uploads/2018/08/3-1-1-400x314.jpg'
import Condo from '../../../assets/wp-content/uploads/2018/08/6-1-1-1-400x314.jpg'


import {useHistory, useParams } from "react-router-dom"



import Axios from "axios";

function AreaPropertyListing() {
        let { address } = useParams();

    const booking = useContext(GuestBookingContext);

    const [propertyList, setpropertyList] = useState([]);


    const [propertyImage, setPropertyImage] = useState("")


    

    let history=useHistory();

    const  new_address=address.slice(0, 4);

//     const data = {
//         term: booking.paddress,
          
//     }

    useEffect(()=>{


        Axios.get(`https://onlinebookingus-app-test.herokuapp.com/property/search/${new_address}`).then((response) => {

                   setpropertyList(response.data);
                console.log("BOOKING UPDATES MANAGED"+response.data)

                console.log("THE NEW ADDRESS IS "+address.slice(0, 4));


                setPropertyImage(
                        response.data.map((like) => {
                          return like.Images[0].photo
                        })
                      );
               
             
                     
              
               

           
          });
    },[]);

   

    
  console.log("PROPERTY PHOTOS"+propertyImage);


 

   const redirectToBedRoom = () => {
         history.push('/property');
       };


       const redirectToSunnyDown = () => {
        history.push('/downtown');
      };


  return (

    <div class="row content-fixed" itemscope itemtype="http://schema.org/ItemList">
    <div class="col-md-12 breadcrumb_container">
            <ol class="breadcrumb">
                    <li><a href="./../../index.html">Home</a></li>
                    <li class="active">{booking.paddress}</li>
            </ol>
    </div>
    <div class="col-md-8 col-md-push-4">
            <h1 class="entry-title title_prop">{booking.paddress}</h1>

            {/* <!--Filters starts here--> */}

            <div class="listing_filters_head row">
                    <input
                        type="hidden"
                        id="page_idx"
                        value="
"
                    />

                    <div class="col-md-2 action_taxonomy_filter">
                        <div class="dropdown form_control listing_filter_select">
                                <div data-toggle="dropdown" id="a_filter_action" class="filter_menu_trigger" data-value="all">All Sizes <span class="caret caret_filter"></span></div>
                                <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_action">
                                        <li role="presentation" data-value="all">All Sizes</li>
                                        <li role="presentation" data-value="entire-home">Entire Home (7)</li>
                                        <li role="presentation" data-value="private-room">Private Room (4)</li>
                                        <li role="presentation" data-value="shared-room">Shared Room (3)</li>
                                </ul>
                        </div>
                    </div>

                    <div class="col-md-2 main_taxonomy_filter">
                        <div class="dropdown form_control listing_filter_select">
                                <div data-toggle="dropdown" id="a_filter_categ" class="filter_menu_trigger" data-value="all">All Types <span class="caret caret_filter"></span></div>
                                <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_categ">
                                        <li role="presentation" data-value="all">All Types</li>
                                        <li role="presentation" data-value="apartment">Apartment (2)</li>
                                        <li role="presentation" data-value="b-b">B &amp; B (2)</li>
                                        <li role="presentation" data-value="cabin">Cabin (2)</li>
                                        <li role="presentation" data-value="condos">Condos (2)</li>
                                        <li role="presentation" data-value="dorm">Dorm (1)</li>
                                        <li role="presentation" data-value="house">House (2)</li>
                                        <li role="presentation" data-value="villa">Villa (3)</li>
                                </ul>
                        </div>
                    </div>

                    <div class="col-md-2 city_taxonmy_filter">
                        <div class="dropdown form_control listing_filter_select">
                                <div data-toggle="dropdown" id="a_filter_cities" class="filter_menu_trigger" data-value="All Cities">All Cities <span class="caret caret_filter"></span></div>
                                <ul id="filter_city" class="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_cities">
                                        <li role="presentation" data-value="all" data-value2="all">All Cities</li>
                                        <li role="presentation" data-value="baltimore" data-value2="baltimore">Baltimore (2)</li>
                                        <li role="presentation" data-value="boston" data-value2="boston">Boston (2)</li>
                                        <li role="presentation" data-value="philadelphia" data-value2="philadelphia">Philadelphia (2)</li>
                                        <li role="presentation" data-value="washington" data-value2="washington">Washington (4)</li>
                                </ul>
                        </div>
                    </div>

                    <div class="col-md-2 area_taxonomy_filter">
                        <div class="dropdown form_control listing_filter_select">
                                <div data-toggle="dropdown" id="a_filter_areas" class="filter_menu_trigger" data-value="Manhattan">Manhattan <span class="caret caret_filter"></span></div>
                                <ul id="filter_area" class="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_areas">
                                        <li role="presentation" data-value="all">All Areas</li>
                                        <li role="presentation" data-value="arlington" data-parentcity="">Arlington (2)</li>
                                        <li role="presentation" data-value="brightwood" data-parentcity="">Brightwood (2)</li>
                                        <li role="presentation" data-value="east-side" data-parentcity="">East Side (2)</li>
                                        <li role="presentation" data-value="glover-park" data-parentcity="">Glover Park (1)</li>
                                        <li role="presentation" data-value="glover-park-washington" data-parentcity="">Glover Park, Washington (1)</li>
                                        <li role="presentation" data-value="manhattan" data-parentcity="">Manhattan (3)</li>
                                        <li role="presentation" data-value="mattapan" data-parentcity="">Mattapan (3)</li>
                                        <li role="presentation" data-value="wesley-heights" data-parentcity="">Wesley Heights (3)</li>
                                </ul>
                        </div>
                    </div>

                    <div class="col-md-2 order_filter">
                        <div class="dropdown listing_filter_select">
                                <div data-toggle="dropdown" id="a_filter_order" class="filter_menu_trigger" data-value="0">Default <span class="caret caret_filter"></span></div>

                                <ul id="filter_order" class="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_order">
                                        <li role="presentation" data-value="1">Price High to Low</li>
                                        <li role="presentation" data-value="2">Price Low to High</li>
                                        <li role="presentation" data-value="0">Default</li>
                                </ul>
                        </div>
                    </div>
            </div>
            {/* <!--Filters Ends here--> */}

            <div id="a_filter_action" data-value="All Sizes"></div>
            <div id="a_filter_categ" data-value="All Types"></div>
            <div id="a_filter_cities" data-value="All Cities"></div>
            <div id="a_filter_areas" data-value="Manhattan"></div>

            {/* <!-- Listings starts here --> */}
            <div class="loader-inner ball-pulse" id="listing_loader">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
            </div>
            
            <div id="listing_ajax_container" class="row">
             {propertyList.map((value, key) => {
                                            return (


                                            
                   

                    <div itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="listing_wrapper col-md-6 property_unit_v1 property_flex" data-org="4" data-listid="129">
                        <meta itemprop="position" content="2" />

                        <div class="property_listing" id={key}   onClick={() => {
                                history.push(`/property/${value.id}`);
                              }}>
                                <div class="listing-unit-img-wrapper">
                                
                                       <img itemprop="image" src={"https://onlinebookingus-app-test.herokuapp.com/uploads/"+value.id+"/"+value.Images[0].photo}  class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />
                                        <div class="price_unit_wrapper"></div>
                                        <div class="price_unit">{value.PropertyPrice.cleaning_fee}<span class="pernight"> /night</span></div>

                                        

                                      

                                       


                                </div>

                                <div class="property_status_wrapper"></div>
                                <div class="title-container">
                                        <div class="price_unit">{value.PropertyPrice.price}<span class="pernight"> /night</span></div>

                                        <div class="rating_placeholder"></div>

                                        <a href="./../../properties/2-bedrooms-condo/index.html" class="owner_thumb">
                                            <img src={Thumb1} alt="" />
                                        </a>

                                        <div class="category_name">
                                                <a itemprop="url" href="./../../properties/2-bedrooms-condo/index.html" class="listing_title_unit">
                                                    <span itemprop="name">{value.name} </span>
                                                </a>
                                                <div class="category_tagline map_icon">{value.PropertyAddress.address_line_2},</div>
                                               

                                                <div class="category_tagline actions_icon"><a href="./../../listings/condos/index.html" rel="tag">Condos</a> / <a href="./../../action/private-room/index.html" rel="tag">Private room</a></div>
                                        </div>

                                        <div class="property_unit_action">
                                                <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="129"><i class="fas fa-heart"></i></span>
                                        </div>
                                </div>
                        </div>
                    </div>
                   );
                 })}
            </div>
             
            {/* <!-- Listings Ends  here --> */}
    </div>
    {/* <!-- end 8col container-->

    <!-- begin sidebar --> */}
    <div class="clearfix visible-xs"></div>

    <div class="col-xs-12 col-md-4 col-md-pull-8 widget-area-sidebar" id="primary">
            <ul class="xoxo">
                    <li id="block-2" class="widget-container widget_block widget_search">
                        <form role="search" method="get" action="./" class="wp-block-search__button-outside wp-block-search__text-button wp-block-search">
                                <label for="wp-block-search__input-1" class="wp-block-search__label">Search</label>
                                <div class="wp-block-search__inside-wrapper"><input type="search" id="wp-block-search__input-1" class="wp-block-search__input" name="s" value="" placeholder="" required /><button type="submit" class="wp-block-search__button">Search</button></div>
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
                                                            <footer class="wp-block-latest-comments__comment-meta"><a class="wp-block-latest-comments__comment-author" href="https://wordpress.org/">A WordPress Commenter</a> on <a class="wp-block-latest-comments__comment-link" href="./../../2021/12/08/hello-world/index.html#comment-1">Hello world!</a></footer>
                                                    </article>
                                                </li>
                                                <li class="wp-block-latest-comments__comment">
                                                    <article>
                                                            <footer class="wp-block-latest-comments__comment-meta"><span class="wp-block-latest-comments__comment-author">user</span> on <a class="wp-block-latest-comments__comment-link" href="./../../properties/terrace-condo-penn-station/index.html#comment-10">Nice Terrace Condo Penn Station</a></footer>
                                                    </article>
                                                </li>
                                                <li class="wp-block-latest-comments__comment">
                                                    <article>
                                                            <footer class="wp-block-latest-comments__comment-meta"><span class="wp-block-latest-comments__comment-author">user</span> on <a class="wp-block-latest-comments__comment-link" href="./../../properties/terrace-condo-penn-station/index.html#comment-9">Nice Terrace Condo Penn Station</a></footer>
                                                    </article>
                                                </li>
                                                <li class="wp-block-latest-comments__comment">
                                                    <article>
                                                            <footer class="wp-block-latest-comments__comment-meta"><span class="wp-block-latest-comments__comment-author">user</span> on <a class="wp-block-latest-comments__comment-link" href="./../../properties/terrace-condo-penn-station/index.html#comment-8">Nice Terrace Condo Penn Station</a></footer>
                                                    </article>
                                                </li>
                                                <li class="wp-block-latest-comments__comment">
                                                    <article>
                                                            <footer class="wp-block-latest-comments__comment-meta"><span class="wp-block-latest-comments__comment-author">demo</span> on <a class="wp-block-latest-comments__comment-link" href="./../../properties/summerlin-cabin-perfect-holiday/index.html#comment-7">Summerlin Cabin &#8211; Perfect Holiday</a></footer>
                                                    </article>
                                                </li>
                                        </ol>
                                </div>
                        </div>
                    </li>
                    <li id="search-1" class="widget-container widget_search">
                        <form method="get" id="searchform" action="./">
                                <input type="hidden" id="wpestate_search_form_nonce" name="wpestate_search_form_nonce" value="5971cb409b" /><input type="hidden" name="_wp_http_referer" value="/area/manhattan/" /> <input type="text" class="form-control" name="s" id="s" placeholder="Search" />
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
                                <li class="recentcomments"><span class="comment-author-link">user</span> on <a href="./../../properties/terrace-condo-penn-station/index.html#comment-10">Nice Terrace Condo Penn Station</a></li>
                                <li class="recentcomments"><span class="comment-author-link">user</span> on <a href="./../../properties/terrace-condo-penn-station/index.html#comment-9">Nice Terrace Condo Penn Station</a></li>
                                <li class="recentcomments"><span class="comment-author-link">user</span> on <a href="./../../properties/terrace-condo-penn-station/index.html#comment-8">Nice Terrace Condo Penn Station</a></li>
                                <li class="recentcomments"><span class="comment-author-link">demo</span> on <a href="./../../properties/summerlin-cabin-perfect-holiday/index.html#comment-7">Summerlin Cabin &#8211; Perfect Holiday</a></li>
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
                        <div class="adv-search-2 adv_lower_class adv_extended_class 133 advanced_search_form_wrapper" data-postid="133">
                                <form role="search" method="get" action="./advanced-search/">
                                        <div class="col-md-12 Where_do_you_want_to_go_? map_icon">
                                                <input type="hidden" class="stype" id="stype" name="stype" value="tax" /><input type="text" id="search_locationsidebar_autointernal" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="" /> <input type="hidden" id="advanced_citysidebar" class="form-control" name="advanced_city" data-value="" value="" />
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
                                        <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" value="061de97250" /><input type="hidden" name="_wp_http_referer" value="/area/manhattan/" />
                                        <div class="col-md-12"><input name="submit" type="submit" class="advanced_search_submit_button" value="Search" /></div>
                                </form>
                        </div>

                    </li>
                    <li id="wpestate_login_widget-1" class="widget-container loginwd_sidebar">
                        <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/area/manhattan/" />
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
                                        <input type="checkbox" name="terms" id="user_terms_register_wd" /><label id="user_terms_register_wd_label" for="user_terms_register_wd">I agree with <a href="./../../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">terms &amp; conditions</a> </label><input type="hidden" id="security-register-wd" name="security-register-wd" value="d6ba4ef938-1638969718" /><button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-submit-register_wd">Register</button>
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
                                <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/area/manhattan/" />
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
                                                <a href="./../../properties/huge-sunny-villa-east-side/index.html"><img itemprop="image" src={Sunny} class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                                                <div class="price_unit_wrapper"></div>
                                        </div>

                                        <div class="title-container">
                                                <div class="category_name">
                                                    <a itemprop="url" href="./../../properties/huge-sunny-villa-east-side/index.html" class="listing_title_unit">
                                                            <span itemprop="name"> Huge Sunny Villa &#8211; East Side </span>
                                                    </a>
                                                </div>

                                                <div class="category_tagline"><a href="./../east-side/index.html" rel="tag">East Side</a>,</div>

                                                <div class="price_unit">€ 500<span class="pernight"> /night</span></div>
                                        </div>
                                </div>
                        </div>

                        <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="119">
                                <div class="property_listing" data-link="./properties/beautiful-cabin-simple-price/">
                                        <div class="listing-unit-img-wrapper">
                                                <a href="./../../properties/beautiful-cabin-simple-price/index.html"><img itemprop="image" src={Simple} class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                                                <div class="price_unit_wrapper"></div>
                                        </div>

                                        <div class="title-container">
                                                <div class="category_name">
                                                    <a itemprop="url" href="./../../properties/beautiful-cabin-simple-price/index.html" class="listing_title_unit">
                                                            <span itemprop="name"> Beautiful Cabin, Simple Price </span>
                                                    </a>
                                                </div>

                                                <div class="category_tagline"><a href="./../brightwood/index.html" rel="tag">Brightwood</a>, <a href="./../../city/philadelphia/index.html" rel="tag">Philadelphia</a></div>

                                                <div class="price_unit">€ 64<span class="pernight"> /night</span></div>
                                        </div>
                                </div>
                        </div>

                        <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="115">
                                <div class="property_listing" data-link="./properties/victorian-bed-breakfast/">
                                        <div class="listing-unit-img-wrapper">
                                                <a href="./../../properties/victorian-bed-breakfast/index.html"><img itemprop="image" src={Victoria_bed} class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                                                <div class="price_unit_wrapper"></div>
                                        </div>

                                        <div class="title-container">
                                                <div class="category_name">
                                                    <a itemprop="url" href="./../../properties/victorian-bed-breakfast/index.html" class="listing_title_unit">
                                                            <span itemprop="name"> Victorian Bed &#038; Breakfast </span>
                                                    </a>
                                                </div>

                                                <div class="category_tagline"><a href="./../mattapan/index.html" rel="tag">Mattapan</a>, <a href="./../../city/boston/index.html" rel="tag">Boston</a></div>

                                                <div class="price_unit">€ 65<span class="pernight"> /night</span></div>
                                        </div>
                                </div>
                        </div>
                        <div class="latest_listings"></div>
                    </li>
            </ul>
    </div>
    {/* <!-- end sidebar --> */}
</div>



  )
}

export default AreaPropertyListing;
