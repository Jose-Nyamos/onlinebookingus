import React, { Component,useContext,useState } from 'react';
import PropTypes from 'prop-types';


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
import Loadingbar from './Loadingbar';
import BookingContext,{BookingProvider,BookingConsumer}from '../Context/ClassBasedContext';
import ReservationDetails from './ReservationDetails';
import ReservationFormDetails from './ReservationFormDetails';
import { GuestBookingContextProvider } from '../Context/GuestBookingContext';

import { GuestBookingContext } from '../Context/GuestBookingContext';


function MapSearchNew(props) {

  const booking = useContext(GuestBookingContext);

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

     
  
  
    const [address, setAddress] = React.useState("");

    let lat=localStorage.getItem('latitude')
    lat=JSON.parse(lat)

    let lng=localStorage.getItem('longitude')
    lng=JSON.parse(lng)

    const [mapCenter, setMapCenter] = useState({
      lat: lat,
      lng:lng
    });


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


    return (
        <div>


        <Loadingbar/>
            
        <div className="header_media with_search_newtype">
                               {/* <!-- Google Map --> */}


                              {/*    <div class="col" style={{height:"400px", padding:"10px"}}>

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
                            </div>*/}

                              <div id="gmap_wrapper" className="" data-post_id="133" style={{height: 550}}>
                                  

                                      <div id="gmap-controls-wrapper">
                                             <div id="gmapzoomplus"></div>
                                             <div id="gmapzoomminus"></div>

                                             <div id="geolocation-button"></div>
                                             <div id="gmap-full"></div>
                                             <div id="gmap-prev"></div>
                                             <div id="gmap-next"></div>
                                      </div>

                                      <div id="googleMap" style={{height: 550}}>
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

                                      <div className="tooltip">click to enable zoom</div>
                                      <div id="gmap-loading">
                                             Loading Maps
                                             <div className="loader-inner ball-pulse" id="listing_loader_maps">
                                                    <div className="double-bounce1"></div>
                                                    <div className="double-bounce2"></div>
                                             </div>
                                      </div>

                                      <div id="gmap-noresult">We didn&#039;t find any results</div>

                                      <div className="gmap-controls">
                                             <div id="openmap"><i className="fas fa-angle-down"></i>open map</div>
                                      </div>
    </div>
                               {/* <!-- END Google Map --> */}

                          

                            <ReservationFormDetails/>
                            
                           

                            
                        </div>






        </div>
    )







}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAOJjEor9H6PWdsKLAQSr3dIH1fWJNveGI')
  })(MapSearchNew)