import React, { Component } from 'react';

import BookingContext,{BookingProvider,BookingConsumer}from '../Context/ClassBasedContext';

class ReservationDetails extends Component {
    // constructor(props) {
    //     super(props);

    // }

   
    render() {
        return (
            <BookingConsumer>
            {props =>{

                const {address,guests}=props;

                return(

           
           
            <div className="search_wrapper type2 advpos_map search_wr_newtype with_search_form_float" id="search_wrapper" data-postid="133">
            <div className="adv-2-header">Make a Reservation</div>
            <div className="adv-2-wrapper"></div>
            <div className="adv-search-2 adv_lower_class adv_extended_class 133 advanced_search_form_wrapper" data-postid="133">
                   <form role="search" method="get" action="./advanced-search/">
                          <div className="col-md-12 Where_do_you_want_to_go_? map_icon">
                                 <input type="hidden" className="stype" id="stype" name="stype" value="tax" />
                                 <input type="text" id="search_location_autointernal" className="form-control" name="search_location" placeholder="Where do you want to go ?" value={address} />
                                  <input type="hidden" id="advanced_city" className="form-control" name="advanced_city" data-value="" value="" />
                                 <input type="hidden" id="advanced_area" className="form-control" name="advanced_area" data-value="" value="" />
                                 <input type="hidden" id="advanced_country" className="form-control" name="advanced_country" data-value="" value="" />
                                 <input type="hidden" id="property_admin_area" name="property_admin_area" value="" />
                  
                          </div>
                          <div className="col-md-12 Check-In calendar_icon"><input type="text" id="check_in" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                          <div className="col-md-12 Check-Out calendar_icon"><input type="text" id="check_out" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                          <div className="col-md-12 Guests guest_no_drop">
                                 <div className="dropdown custom_icon_class form-control">
                                        <div data-toggle="dropdown" id="guest_no_toogle" class="filter_menu_trigger" data-value="">
                                               Guests
                                               <span className="caret caret_filter"></span>
                                        </div>
                                        <input type="hidden" name="guest_no" id="guest_no" value="" />
                                        <ul className="dropdown-menu filter_menu" role="menu" aria-labelledby="guest_no_toogle">
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
                          <input type="hidden" name="_wp_http_referer" value="/area/manhattan/" />
                          <div className="col-md-12"><input name="submit" type="submit" className="advanced_search_submit_button" value="Search" /></div>
                   </form>
            </div>
   
     </div>
                )
    }}
     </BookingConsumer>
        );
    }
}


export default ReservationDetails;