import React from 'react'

import { useState,useEffect } from "react";
import Axios from "axios";


function AmenitiesList() {

    const [amenitiesList, setAmenitiesList] = useState([]);


    useEffect(()=>{

        Axios.get("https://onlinebookingus-app-test.herokuapp.com/amenities/getAmenities").then((response) => {
            setAmenitiesList(response.data);
          });

    },[]);

    return (
        <div>

        <div class="card mb-4">
        <div class="card-body">


        {amenitiesList.map((value, key) => {
            return (

                <div class="form-group row">

                <input class="form-check-input" id="{key}" type="checkbox" />
                <label class="form-check-label ml-3" for="gridCheck1">
                {value.title}

                </label>
           


             

                </div>

            );
        })}

        

        </div>
        </div>


        
            
        </div>
    )
}

export default AmenitiesList
