import React from 'react'

export default function Search() {
    return (
        <div>
    <div id="adv-search-header-mobile">Advanced Search</div>

        <div class="adv-search-mobile" id="adv-search-mobile">
          <div class="advanced_search_form_wrapper" data-postid="18460">
            <form role="search" method="get" action="./advanced-search/">
              <div class="col-md-12 Where_do_you_want_to_go_? map_icon">
                <input type="hidden" class="stype" id="stype" name="stype" value="tax" />
                <input type="text" id="search_locationmobile_autointernal" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="" />
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
        </div>
    )
}
