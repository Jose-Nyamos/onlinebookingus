import React from 'react'
import GoogleMap from './GoogleMap'
import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';

import axios from 'axios';

//import {useNavigate} from 'react-router-dom';


import { useHistory } from "react-router-dom";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import LocationDetails from './LocationDetails';

import { PropertDetailsContext } from '../../../helpers/PropertyDetailsContext';
import CustomSelect from './CustomSelect';


import { stateOptions } from './data';

import { Helmet } from 'react-helmet';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";



const options=[
  {value:'1',label:'Madam Nour'},
  {value:'2',label:'Francis Mbatha'},
  {value:'3',label:'Alexander'},
  {value:'4',label:'Sultan'},
]

const property_types=[
  {value:'Apartment',label:'Apartment'},
  {value:'Villa',label:'Villa'},
  {value:'Townhouse',label:'Townhouse'},
]


const room_types=[
  {value:'Entire Home/apt',label:'Entire Home/apt'},
  {value:'Private Room',label:'Private Room'},
  {value:'Shared Room',label:'Shared Room'},
]


const no_accomdated=[
  {value:'1',label:'1'},
  {value:'2',label:'2'},
  {value:'3',label:'3'},
  {value:'4',label:'4'},
  {value:'5',label:'5'},
  {value:'6',label:'6'},
  {value:'7',label:'7'},
  {value:'9',label:'9'},
  {value:'10',label:'10'},
  {value:'11',label:'11'},
  {value:'13',label:'12'},
  {value:'13',label:'13'},
 
]


const my_values=stateOptions;


function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}


function PropertyDescriptionDetails() {



  const [propDetailsState, setPropDetailsState] = useState({
    id:0,
    prop_code:"",
  });


  const [count, setCount] = useState(my_values);

  
  const [UserId, setUserId] = useState('');
  const [host_id, setHost_id] = useState("1");
  const [property_type, setProperty_type] = useState("");
  const [accommodates, setAccommodates] = useState("");
  const [city, setCity] = useState("");
  const [space_type, setSpace_type] = useState("");

  const [prop_code, setProp_code] = useState(between(100,9999));


  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const [usersList, setUsersList] = useState([]);

  const navigate = useHistory();




    
 const [isLoading,setLoading]=useState(false);



 useEffect(()=>{
  

    axios.get("https://onlinebookingus-app-test.herokuapp.com/users/customers").then((response) => {
               setUsersList(response.data);
              // setUsers(response.data);
             });
    
},[]);


const handleChange = address => {
  setAddress({ address });
};




 const handleSelect = async value => {
  const results = await geocodeByAddress(value);
  const latLng = await getLatLng(results[0]);
  setAddress(value);
  setCity(value);
  setCoordinates(latLng);
};
    
       
    

            const addProperty = () => {
            
              setLoading(true);
              axios.post("https://onlinebookingus-app-test.herokuapp.com/property", {
                host_id: host_id,
                prop_code:prop_code,
                property_type: property_type,
                accommodates: accommodates,
                space_type: space_type,
                city: address,
                UserId: UserId,
              }).then((response) => {

                console.log("PROPERTY DATA IS ",response);

                console.log("PROPERTY ID is ",response.data.id);

                console.log("The City Is "+city);



                setPropDetailsState({
                  id:response.data.id,
                  prop_code:response.data.prop_code,
                });

                setTimeout(() => {
                  setLoading(false);
                  toast.info('Information Added successfully');
                  // navigate.push('/add-property');
                  navigate.push(`/mdb-stepper/${response.data.id}`);
              }, 4000);
              
              });
            }

  
    return (
        <div>

      
        <PropertDetailsContext.Provider value={{ propDetailsState, setPropDetailsState }}>

   

        <div class="main-content-wrap sidenav-open d-flex flex-column">

     


        <div class="border-top mb-5"></div>
        <div class="row">
      
        <div class="col-md-12">
        
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">List Your Space</h3>
            </div>
          
            
           
            <div class="box-body">

       
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="inputEmail3">User</label>
               
                <div class="col-sm-4">
                <select id="booking_customer_id" name="booking_customer_id" 
                                
                onChange={(event) => {
                  setUserId(event.target.value);
                  }}
                                
                                
                  class="custom-select mr-sm-2" tabindex="-1" aria-hidden="true">
                                <option value=''> </option>
                                      {usersList.map((value, key) => {
                                        return (
                                      <option key={key} value={value.id}>{value.first_name===null ? '' : value.first_name} {value.id}</option>
                                      
                                      );
                                    })}
                                         </select>
              </div>
              <div class="col-sm-2">
                <a href="#" data-toggle="modal" data-target="#customerModal" style={{ width: "100%" }} class="btn btn-primary btn-sm"><span class="fa fa-user"></span>&nbsp;&nbsp;New Customer</a>
              </div>

              <p class="error-tag"></p>
                
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="inputPassword3">Home Type</label>
                <div class="col-sm-4">


                <select id="booking_type"  class="custom-select mr-sm-2" name="bed_type" 
                onChange={(event) => {
                  setProperty_type(event.target.value);
                  }}
                
                 >
    
                <option value=''> </option>
                <option value='Apartment'>Apartment</option>
                <option value='Villa'>Villa</option>
                <option value='Townhouse'>Townhouse</option>
    
                </select>


              
                </div>
            </div>


            <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="inputPassword3">Room Type</label>
            <div class="col-sm-4">

            <select id="room_type"  class="custom-select mr-sm-2" name="bed_type" 
            onChange={(event) => {
              setSpace_type(event.target.value);
              }}
            
             >

             <option value=''> </option>
             <option value='Entire Home/apt'>Entire Home/apt</option>
             <option value='Private Room'>Private Room</option>
             <option value='Shared Room'>Shared Room</option>

            </select>

          
              
            </div>
        </div>


        <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="inputPassword3">Property Code</label>
        <div class="col-sm-4">

        
        <input
        type="number"
        class="form-control"
        value={between(100,9999)}
        onChange={(event) => {
          setProp_code(event.target.value);
        }}
      />
          
        </div>
    </div>



    <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="inputPassword3">Accomondates</label>
    <div class="col-sm-4">

    <input
    type="number"
    class="form-control"
    onChange={(event) => {
      setAccommodates(event.target.value);
    }}
  />
      
    </div>
   </div>


  <div class="form-group row">
  <label class="col-sm-2 col-form-label" for="inputPassword3">City New</label>
  <div class="col-sm-4">

  <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
          
            <input class="form-control" {...getInputProps({ placeholder: "Search City" })}/>

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    
  </div>
 </div>

            
           
            <div class="form-group row">
                <div class="col-sm-10">
                <div class="box-footer">
                <button type="reset" class="btn btn-default btn-sm">Reset</button>
              

             {!isLoading && <button type="submit" onClick={addProperty} class="btn btn-info pull-right btn-sm" >Continue</button>

              } 
              {isLoading &&
                 <button type="submit" class="btn btn-primary btn-sm text" disabled> <i class="fas fa-spinner fa-spin"></i>Saving Infor</button>
              }
                
              </div>
                </div>
            </div>
      


         
            </div> 
				     
         
          </div>
        </div>
    
      </div>

      </div>

      </PropertDetailsContext.Provider>


      
    
      </div>

      
      
    
      
    )
}

export default PropertyDescriptionDetails
