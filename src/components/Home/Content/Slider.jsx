import React from 'react';
// import '../assets/style.js';
import Background from '../../../assets/images/slider.jpg';
import Background_1 from '../../../assets/images/slider3.jpg';
import Background_2 from '../../../assets/images/slider2.jpg';

export default function Slider() {
    return (
        <div>
            <div class="header_media with_search_newtype">
         <div class=" theme_slider_wrapper_type2 theme_slider_extended   " id="estate-carousel_slick">
                <div class="item-slick ">
               
                <div class="slider-content-wrapper">  
                  <div class="item-version">01</div>
                    <div class="slider-content">
                    
                        <div class="theme-slider-price">
                            <div class="price-slider-wrapper">
                                <span class="price-slider">€ 23</span>/per night
                            </div>        
                        </div>
                        

                        <div class="slider-title">
                            <h2>
                      <a href="./properties/west-town-3rd-floor-dorm/index.html">West Town 3rd Floor Dorm</a> </h2>
                        </div>

                        <div class="listing-desc-slider"> 
                            <span>Beautiful 3rd floor P/House w/in a short walk/drive to restaurants, stores and public trans. Private room/bath featuring top amenities. HDTV, internet, biz center (in room), washer/dryer, wine fridge, gas fireplace, surround sound, private roof deck. One bus ride away from subway. Wifi, eat in kitchen, cable tshopsv, warm host family, and a small lovable dog. ...  </span>
                        </div>
    
                        <a class="theme-slider-view" href="./properties/west-town-3rd-floor-dorm/index.html">View more</a>
                            
                    </div> 
                </div>  
                
                <div class="slider-content-cover">
              </div>  
                
                <div class="slider-content-image">
                    <img src={Background} alt="" srcset="" />
                </div>

            </div>
             <div class="item-slick ">
               
                <div class="slider-content-wrapper">  
                  <div class="item-version">02</div>
                    <div class="slider-content">
                    
                        <div class="theme-slider-price">
                            <div class="price-slider-wrapper">
                                <span class="price-slider">€ 159</span>/per night
                            </div>        
                        </div>
                        

                        <div class="slider-title">
                        <h2>
                      <a href="./properties/modern-spacious-villa/index.html">Modern &#038; Spacious Villa</a> </h2>
                        </div>

                        <div class="listing-desc-slider"> 
                            <span>This spacious and modern 1 bedroom with balcony is located on Essex and Stanton in the Lower East Side (close to the Hotel on Rivington) in a brand new building with elevator and a rooftop deck with spectacular city views. The apartment gets tons of light and comes with modern amenities including centralized heat/AC (vital ...  </span>
                        </div>
    
                        <a class="theme-slider-view" href="./properties/modern-spacious-villa/index.html">View more</a>
                            
                    </div> 
                </div>  
                
                <div class="slider-content-cover"></div>  
                
                <div class="slider-content-image">
                    <img src={Background_2} alt="" srcset="" />
                </div>

            </div>
             <div class="item-slick ">
               
                <div class="slider-content-wrapper">  
                  <div class="item-version">03</div>
                    <div class="slider-content">
                    
                        <div class="theme-slider-price">
                            <div class="price-slider-wrapper">
                                <span class="price-slider">€ 500</span>/per night
                            </div>        
                        </div>
                        

                        <div class="slider-title">
                            <h2>
                      <a href="./properties/huge-sunny-villa-east-side/index.html">Huge Sunny Villa &#8211; East Side</a> </h2>
                        </div>

                        <div class="listing-desc-slider"> 
                            <span>Enjoy a huge bedroom in a newly renovated 1000 sq feet, 3 bedroom, apartment with all the amenities. It has a fully functional kitchen with cookware and a bathroom with all the essentials and a dryer. The apartment is located right in the middle of all the most convenient, vibrant, and fun neighborhoods in NYC.  </span>
                        </div>
    
                        <a class="theme-slider-view" href="./properties/huge-sunny-villa-east-side/index.html">View more</a>
                            
                    </div> 
                </div>  
                
                <div class="slider-content-cover"></div>  
                
                <div class="slider-content-image">
                    <img src={Background_1} alt="" srcset="" />
                </div>

            </div>
       </div>



    <div class="search_wrapper type2 advpos_themeslider search_wr_newtype    with_search_form_float " id="search_wrapper" data-postid="1745">
        <div class="adv-2-header">Make a Reservation</div>
            <div class="adv-2-wrapper"></div>
            <div class="adv-search-2   adv_extended_class 1745 advanced_search_form_wrapper" data-postid="1745">
            <form role="search" method="get" action="./advanced-search/">
            <div class=" col-md-12 Where_do_you_want_to_go_? map_icon ">
            
                <input type="hidden" class="stype" id="stype" name="stype" value="tax" />
                <input type="text" id="search_location_autointernal" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="" /> 
                <input type="hidden" id="advanced_city" class="form-control" name="advanced_city" data-value="" value="" />
                <input type="hidden" id="advanced_area" class="form-control" name="advanced_area" data-value="" value="" />
                <input type="hidden" id="advanced_country" class="form-control" name="advanced_country" data-value="" value="" />
                <input type="hidden" id="property_admin_area" name="property_admin_area" value="" /> 
            </div>
            <div class=" col-md-12 Check-In calendar_icon  ">
            <input type="text" id="check_in" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="" />

                </div>
               <div class=" col-md-12 Check-Out calendar_icon  ">
            <input type="text" id="check_out" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="" />

                </div>
            <div class=" col-md-12 Guests guest_no_drop ">
                <div class="dropdown custom_icon_class  form-control "> 
                <div data-toggle="dropdown" id="guest_no_toogle" class=" filter_menu_trigger  " data-value="">Guests
                <span class="caret  caret_filter "></span>
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
                <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" value="061de97250" />
                <input type="hidden" name="_wp_http_referer" value="/" />
                    <div class="col-md-12">
                        <input name="submit" type="submit" class="advanced_search_submit_button " value="Search" />

                    </div>
                </form>
            </div>
        </div>
                
        </div>
    </div>
    )
}
