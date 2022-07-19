
import React, { Component,useState,useEffect} from 'react';
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





function UpdateAddressDetails(props) {

    let { id } = useParams();


    const [PropertyId, setPropertyId] = useState(`${id}`);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
  
    const [country, setCountry] = useState("");


    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [address_line_1, setaddress_line_1] = useState("");
    const [address_line_2, setaddress_line_2] = useState("");

    const [postal_code, setPostal_code] = useState("");


  
      const [showingInfoWindow, setShowingInfoWindow] = useState(false);

      const [activeMarker, setActiveMarker] = useState({});
      const [selectedPlace, setSelectedPlace] = useState({});

      const history = useHistory();
  
  
    const [address, setAddress] = React.useState("");
    const [mapCenter, setMapCenter] = useState({
        lat: 29.78780029999999,
        lng: -95.6928635
    });

    const [coordinates, setCoordinates] = React.useState({
      lat: null,
      lng: null
    });

    const [isLoading,setLoading]=useState(false);

    useEffect(()=>{

        axios.get(`https://onlinebookingus-app-test.herokuapp.com/property-address/getBypropertyId/${id}`).then((response) => {
            //setpropertyList(response.data);
            setCountry(response.data.country)
            setCity(response.data.city)
            setState(response.data.state)
            setaddress_line_1(response.data.address_line_1)
            setaddress_line_2(response.data.address_line_2)
            setPostal_code(response.data.postal_code)
            setLatitude(response.data.latitude)
            setLongitude(response.data.longitude)
      
      
            setAddress(response.data.address)

            // setPricing_id(response.data.id)
      
            // console.log("THE PRICING ID IS "+pricing_id)
      
          });
      
      },[]);



   const handleChange = address => {
    setAddress(address);
      };


      const handleSelect = address => {
        setAddress(address);
         geocodeByAddress(address)
          .then(results =>  getLatLng(results[0]))
          .then(latLng => {
            console.log('Success', latLng);
            
            // const address_one = address.results[0].formatted_address;
           
    
            // console.log('Formated Addres', address_one);
    
    
            // update center state
            setMapCenter(latLng );
    
            setaddress_line_2(address);
    
            
           
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
    
    
            setCity(city);
    
            setPostal_code(postal_code);
    
            setState(state);
    
          
          
      
           // console.log('ADDRESS COMPONENTS',addressComponent[2]);
            
          })
          .catch(error => console.error('Error', error));
      };


    const  AddPropertyAddress = () => {
  

        setLoading(true);
     
         const  data = {
           PropertyId: PropertyId,
           address_line_1: address_line_1,
           address_line_2: address_line_2,
           latitude:mapCenter.lat,
           longitude:mapCenter.lng,
           city:city,
           state:state,
           postal_code:postal_code   
          
       }
     
       axios.put(`http://localhost:3001/property-address/updateAddress/${id}`, data).then((response) => {
       
       
         console.log("UPDATES MANAGED IS "+response)
     
     
         setTimeout(() => {
          setLoading(false);
           toast.info('Property Updated successfully');
           // navigate.push('/add-property');
           history.push(`/amenitylist/${id}`)
       }, 2000);
     
       
     });
       
     
       }
  

    return  (
        <div>
      <div id='googleMaps'>
        <PlacesAutocomplete
        
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
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
          google={props.google}
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
   

      <div style={{padding:"20px"}}>
     
      <div class="form-group">
      <label for="inputAddress">Latitude</label>

       
    
        <input  class="form-control"
          
        value={mapCenter.lat}

        onChange={(event) => {
          setLatitude(event.target.value);
        }}
         
          name="latitude" type="text" placeholder="latitude" />
      </div>


      <div class="form-group">
      <label for="inputAddress">Longitude</label>
    
        <input  class="form-control"

        value={mapCenter.lng}

        onChange={(event) => {
          setLongitude(event.target.value);
        }}


          name="longitude" type="text" placeholder="longitude" />
      </div>


      <div class="form-group">
      <label for="inputAddress">Address Line 2</label>
          <input  class="form-control"
           
  
          value={address_line_2}
  
          onChange={(event) => {
              setaddress_line_2(event.target.value);
            }}
          
          
          name="address_line_2" type="text" placeholder="address_line_2" />
      </div>


      <div class="form-group">
      <label for="inputAddress">City</label>
        <input class="form-control"


        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}

        


          name="city" type="text" placeholder="city" />
      </div>



      <div class="form-group">
      <label for="inputAddress">State</label>
          <input class="multisteps-form__input form-control" 



          value={state}
          
          onChange={(event) => {
              setState(event.target.value);
            }}
          
          name="state" type="text" placeholder="state" />
      </div>



      <div class="form-group">
      <label for="inputAddress">Postal Code</label>
      <input class=" form-control" 

      value={postal_code}
      
      onChange={(event) => {
          setPostal_code(event.target.value);
        }}
      
      name="postal_code" type="text" placeholder="postal code" />
  </div>


  

    
<div class="row">

<div class="col-md-6 col-xs-6 text-left">

    <a data-prevent-default="" href="http://localhost:8000/admin/listing/105/description" class="btn btn-large btn-primary">Back</a>

</div>

<div class="col-md-6 col-xs-6 text-right">

  
{!isLoading && <button type="submit" onClick={AddPropertyAddress} class="btn btn-primary ml-auto js-btn-next" title="Save" >Next</button>
      
} 
{isLoading &&
   <button type="submit" class="btn btn-success ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
}

</div>

</div>
  </div>
 
    

    </div>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAOJjEor9H6PWdsKLAQSr3dIH1fWJNveGI')
  })(UpdateAddressDetails)