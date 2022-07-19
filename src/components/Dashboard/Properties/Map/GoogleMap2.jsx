import React, { useCallback,useState,useEffect,useContext,useMemo } from 'react'

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export default function GoogleMap2() {

    const [address_line_1, setAddress_line_1] = useState("");
    const [address_line_2, setAddress_line_2] = useState("");
    const [latitude, setLatitude] = useState("");


    const [longitude, setLongitude] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");


    const [country, setcountry] = useState("");
    const [postal_code, setPostal_code] = useState("");

    const [address, setAddress] = React.useState("");
    const [mapCenter, setMapCenter] = React.useState({
        lat: 49.2827291,
        lng: -123.1207375
    });


    const handleChange = address => {
        setAddress({ address });
      };


   const   handleSelect = address => {
        setAddress({ address });
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            console.log('Success', latLng);
            
            // const address_one = address.results[0].formatted_address;
           
    
            // console.log('Formated Addres', address_one);
    
    
            // update center state
            this.setState({ mapCenter: latLng });
           
          });
          geocodeByAddress(address).then(response=>{
    
          
            var add= response[0].formatted_address ;
            var  value=add.split(",");
      
          let  count=value.length;
          let  country=value[count-1];
          let   state=value[count-2];
          let  city=value[count-3];
          let  postal_code=value[count-4];
      
            console.log('COUNTRY'+country);
            console.log('CITY'+city);
            console.log('STATE'+state);
            console.log('ZIP CODE'+postal_code);
      
      
          
      
           // console.log('ADDRESS COMPONENTS',addressComponent[2]);
            
          })
          .catch(error => console.error('Error', error));
      };
      

  return (

  <div>
  <div id='googleMaps'>
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'multisteps-form__input form-control',
            })}
          />

        

          
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>

   <div class="col" style={{height:"400px"}}>

    <Map 
      google={google}
      initialCenter={{
        lat: mapCenter.lat,
        lng: mapCenter.lng
      }}
      center={{
        lat: mapCenter.lat,
        lng: mapCenter.lng
      }}
    >
      <Marker 
        position={{
          lat: mapCenter.lat,
          lng: mapCenter.lng
        }} />
    </Map>
 </div>
  </div>

  <div class="form-row mt-4">
  <div class="col-8">
    <input class="multisteps-form__input form-control"
      
    value={this.state.mapCenter.lat}
     
      name="latitude" type="text" placeholder="latitude" />
  </div>

</div>

<div class="row">
<div class="form-row mt-4">
  <div class="col-8">
    <input class="multisteps-form__input form-control"

    value={this.state.mapCenter.lng}


      name="longitude" type="text" placeholder="longitude" />
  </div>

  </div>

  <div class="form-row mt-4">
  <div class="col-8">
      <input class="multisteps-form__input form-control"


      onChange={(event) => {
          setAddress_line_2(event.target.value);
        }}
      
      
      name="address_line_2" type="text" placeholder="address_line_2" />
  </div>
  
</div>





<div class="form-row mt-4">
<div class="col-8">
  <input class="multisteps-form__input form-control"

  onChange={(event) => {
      setCity(event.target.value);
    }}
  
  
  name="city" type="text" placeholder="city" />
</div>

</div>

<div class="form-row mt-4">
<div class="col-8">
<input class="multisteps-form__input form-control" 

onChange={(event) => {
  setState(event.target.value);
}}

name="state" type="text" placeholder="state" />
</div>

</div>

<div class="form-row mt-4">
<div class="col-8">
<input class="multisteps-form__input form-control" 

onChange={(event) => {
  setPostal_code(event.target.value);
}}

name="postal_code" type="text" placeholder="postal code" />
</div>

</div>


</div>
</div>
  );
}
