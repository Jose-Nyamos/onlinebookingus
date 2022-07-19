import React from 'react'

const PropertySearch = () => {
  return (
    <div>

<div class="container main_wrapper  wide  ">
     <div class="master_header master_  wide  google_map_list_header master_header_wide_yes hover_type_5">


                
    <div class="mobile_header  is_half_map ">
    <div class="mobile-trigger"><i class="fas fa-bars"></i></div>
    <div class="mobile-logo">
        <a href="https://onlinebookingus.com">
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
                
                                <div class="signuplink" id="topbarlogin">Login</div>
                                <div class="signuplink" id="topbarregister">Sign Up</div>    
                                <a href="https://onlinebookingus.com/add-new-listing/" id="submit_action">Submit Property</a>
                                                                            
                           </div> 
     

        
        
                        <nav id="access">
                            <ul id="menu-main-1" class="menu"><li id="menu-item-19193" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home no-megamenu   "><a class="menu-item-link" href="https://onlinebookingus.com/">Home</a></li>
                            <li id="menu-item-19167" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children no-megamenu   "><a class="menu-item-link" href="https://onlinebookingus.com/properties-list-standard/">Property List</a>
                            <ul  class="  sub-menu ">
                                <li id="menu-item-19168" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item   "><a class="menu-item-link" href="https://onlinebookingus.com/advanced-search/">Advanced Search</a></li>
                            </ul>
                            </li>
                            <li id="menu-item-19171" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children no-megamenu   "><a class="menu-item-link" href="https://onlinebookingus.com/blog-list/">Blog List</a>
                            <ul class="  sub-menu ">
                                <li id="menu-item-19198" class="menu-item menu-item-type-post_type menu-item-object-post   "><a class="menu-item-link" href="https://onlinebookingus.com/what-guests-want-to-know/">What Guests Want to Know</a></li>
                                <li id="menu-item-19199" class="menu-item menu-item-type-post_type menu-item-object-post   "><a class="menu-item-link" href="https://onlinebookingus.com/how-to-be-a-great-host/">How to be a Great Host for Renters</a></li>
                            </ul>
                            </li>
                            <li id="menu-item-19172" class="menu-item menu-item-type-post_type menu-item-object-page no-megamenu   "><a class="menu-item-link" href="https://onlinebookingus.com/favorite-listings/">Favorite Listings</a></li>
                            </ul>      
                            </nav>
                            {/* <!-- #access --> */}
                    </div>
                </div>

            </div>

 
    
    <div id="google_map_prop_list_sidebar" class="half_header_type1">
         
        
<div id="advanced_search_map_list">
    <div class="advanced_search_map_list_container">
                    <div class="col-md-12 radius_wrap">
                <input type="text" id="geolocation_search" class="form-control pac-target-input" name="geolocation_search" placeholder="Location" value="" autocomplete="off" />
                <input type="hidden" id="geolocation_lat" name="geolocation_lat" />
                <input type="hidden" id="geolocation_long" name="geolocation_lat" />
            </div>

            <div class="col-md-3 slider_radius_wrap">
                <div class="label_radius">Radius: <span class="radius_value">12 miles</span></div>
            </div>

            <div class="col-md-9 slider_radius_wrap">
                <div id="wpestate_slider_radius" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-max" style={{width: '77.551%'}}></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{left: '22.449%;'}}></span></div>
                <input type="hidden" id="geolocation_radius" name="geolocation_radius" value="12" />
            </div>
        
        <div class="advanced_search_map_list_container_trigger">


        <div class=" advanced_search_form_wrapper" data-postid="4">

            <form role="search" method="get" action="https://onlinebookingus.com/advanced-search/">
                <div class=" col-md-8 Location  ">
                    <i class="custom_icon_class_icon fas fa-map-marker"></i>
                <input type="text" id="search_locationhalf" class="form-control pac-target-input" name="search_location" placeholder="Where do you want to go ?" value="New York, NY, USA" autocomplete="off" /> 
                    <input type="hidden" id="advanced_cityhalf" class="form-control" name="advanced_city" data-value="" value="new-york" />
                    <input type="hidden" id="advanced_areahalf" class="form-control" name="advanced_area" data-value="" value="" />
                    <input type="hidden" id="advanced_countryhalf" class="form-control" name="advanced_country" data-value="" value="united-states" />
                    <input type="hidden" id="property_admin_areahalf" name="property_admin_area" value="new-york" />
                        </div><div class=" col-md-4 Guests  "><i class="custom_icon_class_icon fas fa-user"></i>
                        <div class="dropdown custom_icon_class  form-control "> 
                        <div data-toggle="dropdown" id="guest_no_toogle" class=" filter_menu_trigger  " data-value="2">2
                <span class="caret  caret_filter "></span>
                </div>
                 <input type="hidden" name="guest_no" id="guest_no" value="2" />
                    <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="guest_no_toogle">
                         <li role="presentation" data-value="all">Guests</li><li data-value="1" value="1">1</li>
                         <li data-value="2" value="2">2</li><li data-value="3" value="3">3</li>
                         <li data-value="4" value="4">4</li><li data-value="5" value="5">5</li>
                         <li data-value="6" value="6">6</li><li data-value="7" value="7">7</li>
                         <li data-value="8" value="8">8</li><li data-value="9" value="9">9</li>
                         <li data-value="10" value="10">10</li><li data-value="11" value="11">11</li>
                         <li data-value="12" value="12">12</li><li data-value="13" value="13">13</li>
                         <li data-value="14" value="14">14</li><li data-value="15" value="15">15</li>
                    </ul>
                </div></div><div class=" col-md-4 Check-In  "><i class="custom_icon_class_icon fas fa-calendar-alt"></i>
                <input type="text" id="check_in" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="04-07-2022" readonly="readonly" />
                </div><div class=" col-md-4 Check-Out  "><i class="custom_icon_class_icon fas fa-calendar-alt"></i>
                <input type="text" id="check_out" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="05-03-2022" />
                </div><div class=" col-md-4 Type  "><i class="custom_icon_class_icon fas fa-home"></i>
                <div class="dropdown custom_icon_class  form-control "> 
                <div data-toggle="dropdown" id="property_category_toogle" class=" filter_menu_trigger  " data-value="">All Types
                <span class="caret  caret_filter "></span>
                </div> 
                <input type="hidden" name="property_category" id="property_category" value="" />
                    <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="property_category_toogle">
                         <li role="presentation" data-value="all">All Types</li>
                         <li role="presentation" data-value="apartment">Apartment (16)</li>
                    </ul>
                </div></div><div class=" col-md-4 Category  "><i class="custom_icon_class_icon fas fa-home"></i>
                <div class="dropdown custom_icon_class  form-control "> 
                <div data-toggle="dropdown" id="property_action_category_toogle" class=" filter_menu_trigger  " data-value="">All Sizes
                <span class="caret  caret_filter "></span>
                </div> 
                <input type="hidden" name="property_action_category" id="property_action_category" value="" />
                    <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="property_action_category_toogle">
                         <li role="presentation" data-value="all">All Sizes</li>
                         <li role="presentation" data-value="entire-home">Entire Home (16)</li>
                    </ul>
                </div>
                </div>
                <div class=" col-md-8 Bedrooms  "><i class="custom_icon_class_icon fas fa-bed"></i>
                <input type="text" id="search_locationhalf" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="New York, NY, USA" /> 
                 <input type="hidden" id="advanced_cityhalf" class="form-control" name="advanced_city" data-value="" value="new-york" />
                    <input type="hidden" id="advanced_areahalf" class="form-control" name="advanced_area" data-value="" value="" />
                    <input type="hidden" id="advanced_countryhalf" class="form-control" name="advanced_country" data-value="" value="united-states" />
                    <input type="hidden" id="property_admin_areahalf" name="property_admin_area" value="new-york" />
                    </div>
                    <div class=" col-md-8 Bathrooms  ">
                        <i class="custom_icon_class_icon fas fa-bath"></i>
                        <input type="text" id="search_locationhalf" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="New York, NY, USA" />
                         <input type="hidden" id="advanced_cityhalf" class="form-control" name="advanced_city" data-value="" value="new-york" />
                        <input type="hidden" id="advanced_areahalf" class="form-control" name="advanced_area" data-value="" value="" />
                        <input type="hidden" id="advanced_countryhalf" class="form-control" name="advanced_country" data-value="" value="united-states" />
                        <input type="hidden" id="property_admin_areahalf" name="property_admin_area" value="new-york" />
                    </div>

                    <div class=" col-md-8   ">
                        <div class="adv_search_slider"> 
                        <p>
                            <label for="amount">Price range:</label>
                            <span id="amount" style={{border: 0,  fontWeight: 'bold'}}>$ 1 to $ 50,000</span>
                        </p>
                        <div id="slider_price" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                            <div class="ui-slider-range ui-corner-all ui-widget-header" style={{left: '0%', width: '100%'}}></div>
                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{left: '0%'}}></span>
                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{left: '100%'}}></span>
                            </div>
                        <input type="hidden" id="price_low" name="price_low" value="1" />
                        <input type="hidden" id="price_max" name="price_max" value="50000" />
                    </div>
                </div>

        <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" value="4b610fe73b"  />
            <input type="hidden" name="_wp_http_referer" />    
  
                <div class="col-md-4">
                <input name="submit" type="submit" class="advanced_search_submit_button " value="Search" />
                </div>
                <div class="adv_extended_options_text">More Search Options</div>
                <div class="extended_search_check_wrapper" style={{display: 'none'}}>
                    <span class="adv_extended_close_button" style={{display: 'none'}}><i class="fas fa-times"></i></span>
                    <div class="extended_search_checker">
                            <input type="checkbox" data-label-search="check-in-check-out-in-person" id="check-in-check-out-in-personadv" name="check-in-check-out-in-person" value="1" />
                            <label for="check-in-check-out-in-personadv">Check-in/Check-out in Person</label>
                        </div><div class="extended_search_checker">
                            <input type="checkbox" data-label-search="elevator-in-building" id="elevator-in-buildingadv" name="elevator-in-building" value="1" />
                            <label for="elevator-in-buildingadv">Elevator in Building</label>
                        </div><div class="extended_search_checker">
                            <input type="checkbox" data-label-search="free-parking-on-premises" id="free-parking-on-premisesadv" name="free-parking-on-premises" value="1" />
                            <label for="free-parking-on-premisesadv">Free Parking on Premises</label>
                        </div><div class="extended_search_checker">
                            <input type="checkbox" data-label-search="pool" id="pooladv" name="pool" value="1" />
                            <label for="pooladv">Pool</label>
                        </div>
                        </div>

                        </form>
                       
                            </div>
                        </div>
                    </div>


                <div id="advanced_search_map_list_hidden">
                    <div class="col-md-2">
                        <div class="show_filters" id="adv_extended_options_show_filters">Search Options</div>
                    </div>
                </div>
                        <div class="loader-inner ball-pulse" id="listing_loader" style={{display: 'none'}}>
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div> 
            
            <div id="listing_ajax_container" class="ajax-map" itemscope="" itemtype="http://schema.org/ItemList">
            <div class="half_map_results">0  Results found!</div>
            <span id="scrollhere"></span><span class="no_results">We didn't find any results</span></div>
               
            </div>

           
        </div> 

         <div className="hotel-search-map-column col-lg-6">
						<div id="map"></div>
					</div>  
        </div>

        <a href="#" class="backtop "><i class="fas fa-chevron-up"></i></a>

</div>
    
  )
}


export default PropertySearch
