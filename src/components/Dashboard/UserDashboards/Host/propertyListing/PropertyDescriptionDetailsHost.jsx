import React from 'react'

import Sidebar from '../Sidebar'

import { useEffect,useState } from 'react';

import axios from 'axios';

//import {useNavigate} from 'react-router-dom';


import { useHistory } from "react-router-dom";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { PropertDetailsContext } from '../../../../../helpers/PropertyDetailsContext';


import { Helmet } from 'react-helmet';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import TopbarHost from '../TopbarHost';






function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}


export default function PropertyDescriptionDetailsHost() {

    const [propDetailsState, setPropDetailsState] = useState({
        id:0,
        prop_code:"",
      });
    
    
      
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
      
    
        axios.get("http://localhost:3001/users/customers").then((response) => {
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
                  axios.post("http://localhost:3001/property", {
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
                      navigate.push(`/property-stepper-host/${response.data.id}`);
                  }, 4000);
                  
                  });
                }
  return (
    <div>

    <Helmet>
    <link rel="stylesheet" href="dist-assets/css/themes/lite-purple.min.css" />
    <link rel="stylesheet" href="dist-assets/css/plugins/perfect-scrollbar.min.css" />
</Helmet>
    <div class='text-left'>



    <div class='app-admin-wrap layout-sidebar-large'>
     <Sidebar/>

       <TopbarHost/>


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






    </div>
    </div>

    <Helmet>
    <script src="dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
    <script src="dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
    <script src="dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="dist-assets/js/scripts/script.min.js"></script>
    <script src="dist-assets/js/scripts/sidebar.large.script.min.js"></script>
    <script src="dist-assets/js/scripts/sidebar.script.min.js"></script>
    <script src="dist-assets/js/plugins/echarts.min.js"></script>
    <script src="dist-assets/js/scripts/echart.options.min.js"></script>
    <script src="dist-assets/js/scripts/dashboard.v1.script.min.js"></script>
</Helmet>
</div>
  )
}
