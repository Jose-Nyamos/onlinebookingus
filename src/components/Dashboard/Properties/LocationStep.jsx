import React, { useCallback,useState,useEffect,useContext,useMemo } from 'react'
import {useHistory, useParams } from "react-router-dom"
import axios from "axios";
import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Select from 'react-select'
import countryList from 'react-select-country-list'
import GoogleMap from './Map/GoogleMap';

import './Map/mapstyles.css';
import AddressDetailsStep from './Map/AddressDetailsStep';
function LocationStep() {
    let { id } = useParams();
  
   
    const [PropertyId, setPropertyId] = useState(`${id}`);
    const [address_line_1, setAddress_line_1] = useState("");
    const [address_line_2, setAddress_line_2] = useState("");
    const [latitude, setLatitude] = useState("");


    const [longitude, setLongitude] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");


    const [country, setcountry] = useState("");
    const [postal_code, setPostal_code] = useState("");


    const options = useMemo(() => countryList().getData(), [])



    const changeHandler = country=> {
      setcountry(country);
     
    }


  
  
    const data = {
        PropertyId:PropertyId,
        address_line_1: address_line_1,
        address_line_2:address_line_2,
        latitude:latitude,
        longitude:longitude,
        city:city,
        state:state,
        postal_code:postal_code
       
        
       
    }
  
   
  
   
    const [isLoading,setLoading]=useState(false);
  
  
    
  const AddPropertyAddress = () => {
    setLoading(true);
  
    axios.post("https://onlinebookingus-app-test.herokuapp.com/property-address", data).then((response) => {
  
  
          console.log("UPDATES MANAGED IS "+response)
  
  
  
          setTimeout(() => {
            setLoading(false);
            toast.info('Information Added successfully');
            // navigate.push('/add-property');
        }, 3000);
     
    });

    
  };
    return (
      <div className="form-group">


                <div class="multisteps-form__panel shadow p-4 rounded bg-white js-active" data-animation="scaleIn">
                   
                    <div class="multisteps-form__content">

                   

                        <div class="form-row mt-4">
                           
                        <div class="col-8">
                          <AddressDetailsStep/>
                        </div>
                    </div>

                       
                    </div>
                </div>

                <ToastContainer />
            
            
        </div>
    )
}

export default LocationStep
