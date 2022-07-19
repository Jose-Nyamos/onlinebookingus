import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: '',

      city:'',
     

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375
      }
    };
  }

  handleChange = address => {
    this.setState({ address });
   
  };
 
  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address).then(response=>{

      
      console.log('Success',response);
      console.log('Formatted',response[0].formatted_address);


      var addressComponent = response[0].address_components;


      console.log('Success',addressComponent[2]);
      
    })
      .then(results => getLatLng(results[0]))
      .then(latLng => {

     
    

        console.log('Success',latLng);

      

        console.log('Success',this.state.address);

      // console.log('City is', city);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
      <div id='googleMaps'>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search City ...',
                  className: 'form-control',
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

       
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAOJjEor9H6PWdsKLAQSr3dIH1fWJNveGI')
})(MapContainer)