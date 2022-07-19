import React, { useCallback,useState,useEffect,useContext } from 'react';
import { DateRangePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { useHistory } from "react-router-dom";
import './react_dates_overrides.css';


import styled from "styled-components";


import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import { GuestBookingContext } from '../Properties/Context/GuestBookingContext';


const StyledDatePickerWrapper = styled.div`
  & .DateRangePicker,
  .DateRangePickerInput {
    .DateInput {
      width: 100%;
      height: 40px;
    

      .DateInput_input {
        font-size: 8px;
        border-bottom: 0;
        padding: 3px 10px 3px;
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
        background: green;
        border: blueviolet;
      }
    }

    .DateRangePicker_picker.DateRangePicker_picker {
      top: 43px;
      left: 2px;
      /* top: 43px !important;
      left: 2px !important; */
    }
  }
`;

function ReservationForm() {

  const booking = useContext(GuestBookingContext);



  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const [city, setCity] = useState("");



  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const [isLoading,setLoading]=useState(false);

  const history = useHistory();



  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCity(value);
    setCoordinates(latLng);
  };
      

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    booking.setStartDate(startDate);

    booking.setEndDate(endDate);

    console.log("End Date"+endDate);
  };


  const searchProperties = () => {
    setLoading(true);


    localStorage.removeItem('latitude');
    localStorage.removeItem('longitude');

 booking.setPaddress(address);
 booking.setStartDate(startDate);
 booking.setEndDate(endDate);

 booking.setLatitude(coordinates.lat)
 booking.setLongitude(coordinates.lng)

 localStorage.setItem('latitude',coordinates.lat)
 localStorage.setItem('longitude',coordinates.lng)




console.log("THE PROPERTY ADDRESS IS "+booking.paddress);

console.log("End Date"+endDate);

console.log("THE ADDRESS COORDINATES ARE"+JSON.stringify(coordinates))
console.log("THE ADDRESS LATITUDE IS"+coordinates.lat)


setTimeout(() => {
  setLoading(false);
 // history.push('/search-location-avon-park-florida');
 history.push(`/search-location/${address}`);
}, 3000);

  };



  return (


    <div class="search_wrapper type2 advpos_themeslider search_wr_newtype with_search_form_float"  id="search_wrapper" data-postid="18460">
    <div class="adv-2-header">Make a Reservation</div>
    <div class="adv-2-wrapper"></div>
    <div class="adv-search-2 adv_extended_class 18460 advanced_search_form_wrapper" data-postid="18460">
      
        <div class="col-md-12 Where_do_you_want_to_go_? map_icon">
          <input type="hidden" class="stype" id="stype" name="stype" value="tax" />


          <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
          listViewDisplayed="auto" 
          
          
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
            
             

              <input
              
              class="form-control" {...getInputProps({ placeholder: "Where do you want to go ?" })} 
              
              id="search_location_autointernal"
             
  
               name="search_location" />
  
              <div>
                {loading ? <div>...loading</div> : null}
  
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#fffff', cursor: 'pointer' };
  
                  return (
                    <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span style={{

                   
                      
                      backgroundColor: "#E9ECF2",
                     
                    
                      fontSize:"12px",
                      display: "block",
                      position: 'relative',
                      zIndex: '10', 
                    
                      color: "#5d6475",
                      
                      width: "100%",
                      float: "left"
                    
                    
                   
                    }}>{suggestion.description}</span>
                  </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>


          
         



          <input type="hidden" id="advanced_city" class="form-control" name="advanced_city" data-value="" value="" />
          <input type="hidden" id="advanced_area" class="form-control" name="advanced_area" data-value="" value="" />
          <input type="hidden" id="advanced_country" class="form-control" name="advanced_country" data-value="" value="" />
          <input type="hidden" id="property_admin_area" name="property_admin_area" value="" />
  
        </div>
        

          
              <div class="col-md-12 Check-In calendar_icon">
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
    
        <div class="col-md-12 Guests guest_no_drop">
          <div class="dropdown custom_icon_class form-control">
            <div data-toggle="dropdown" id="guest_no_toogle" class="filter_menu_trigger" data-value="">
              Guests
              <span class="caret caret_filter"></span>
                </div>
                  <input type="hidden" name="guest_no" id="guest_no"   onChange={e => booking.setGuest(e.target.value)} value="" />
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
        {/*  <input name="submit" type="submit" class="advanced_search_submit_button" value="Search" />*/}

        {!isLoading && <button type="submit" onClick={searchProperties} class="advanced_search_submit_button" value="Search">Search</button>

      }
      {isLoading &&
        <button type="submit" class="advanced_search_submit_button" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Searching....</button>
      }
        </div>
   
    </div>

  </div>
      
    
    
  )
}

export default ReservationForm;
