import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { margin } from '@mui/system';

import axios from "axios";

import {useHistory, useParams } from "react-router-dom"


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
     
      PropertyId:'2',
      city: '',
      state: '',
      postal_code: '',
      country: '',

      address: '',

      latitude:'',

      longitude:'',

      address_line_1:'',

      address_line_2:'',
      isLoading:false,

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      mapCenter: {
        lat: 29.78780029999999,
        lng: -95.6928635
      }
    };


  

  }

  
  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
        
        // const address_one = address.results[0].formatted_address;
       

        // console.log('Formated Addres', address_one);


        // update center state
        this.setState({ mapCenter: latLng });

        this.setState({ address_line_2: address });

        
       
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

        // console.log('THE ID IS'+propid);


        this.setState({city:city});

        this.setState({postal_code:postal_code});

        this.setState({state:state});

      
      
  
       // console.log('ADDRESS COMPONENTS',addressComponent[2]);
        
      })
      .catch(error => console.error('Error', error));
  };


  

  
  AddPropertyAddress = () => {
  

   this.setState({isLoading:true});

    const  data = {
      PropertyId: this.state.PropertyId,
      address_line_1: this.state.address_line_1,
      address_line_2:this.state.address_line_2,
      latitude:this.state.mapCenter.lat,
      longitude:this.state.mapCenter.lng,
      city:this.state.city,
      state:this.state.state,
      postal_code:this.state.postal_code   
     
  }

  axios.post("https://onlinebookingus-app-test.herokuapp.com/property-address", data).then((response) => {
  
  
    console.log("UPDATES MANAGED IS "+response)


    setTimeout(() => {
      this.setState({isLoading:false});
      toast.info('Information Added successfully');
      // navigate.push('/add-property');
  }, 3000);

  

});
  


  }
 
  render() {

  

   
    return (
        <div>
      <div id='googleMaps'>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>


            <div class="form-group">
            <label for="inputAddress">Address Line 1</label>
           

            <input
            class="form-control" id="inputAddress"
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'multisteps-form__input form-control',
                })}

             
              />
            </div>
              

              
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
                      <span style={{color:"blue",backgroundColor:"#E5E4E2",border:"1px",borderRadius:"1px"}}>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

       <div class="col" style={{height:"400px", padding:"10px"}}>

        <Map 
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
        >
          <Marker 
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }} />
        </Map>
     </div>
      </div>
   

      <div style={{padding:"20px"}}>
     
      <div class="form-group">
      <label for="inputAddress">Latitude</label>

       
    
        <input  class="form-control"
          
        value={this.state.mapCenter.lat}

        onChange={(event) => {
          this.setState(event.target.value);
        }}
         
          name="latitude" type="text" placeholder="latitude" />
      </div>


      <div class="form-group">
      <label for="inputAddress">Longitude</label>
    
        <input  class="form-control"

        value={this.state.mapCenter.lng}

        onChange={(event) => {
          this.setState(event.target.value);
        }}


          name="longitude" type="text" placeholder="longitude" />
      </div>


      <div class="form-group">
      <label for="inputAddress">Address Line 2</label>
          <input  class="form-control"
           
  
          value={this.state.address_line_2}
  
          onChange={(event) => {
              this.setState(event.target.value);
            }}
          
          
          name="address_line_2" type="text" placeholder="address_line_2" />
      </div>


      <div class="form-group">
      <label for="inputAddress">City</label>
        <input class="form-control"


        value={this.state.city}
        onChange={(event) => {
          this.setState(event.target.value);
        }}

        


          name="city" type="text" placeholder="city" />
      </div>



      <div class="form-group">
      <label for="inputAddress">State</label>
          <input class="multisteps-form__input form-control" 



          value={this.state.state}
          
          onChange={(event) => {
              this.setState(event.target.value);
            }}
          
          name="state" type="text" placeholder="state" />
      </div>



      <div class="form-group">
      <label for="inputAddress">Postal Code</label>
      <input class=" form-control" 

      value={this.state.postal_code}
      
      onChange={(event) => {
          this.setState(event.target.value);
        }}
      
      name="postal_code" type="text" placeholder="postal code" />
  </div>


  <div class="button-row d-flex mt-4">
                        
      
                        {!this.state.isLoading && <button type="submit" onClick={this.AddPropertyAddress} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>
      
                      } 
                      {this.state.isLoading &&
                         <button type="submit" class="btn btn-success ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                      }
                        
                        
                        </div>
  </div>
 
    

    </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAOJjEor9H6PWdsKLAQSr3dIH1fWJNveGI')
})(MapContainer)