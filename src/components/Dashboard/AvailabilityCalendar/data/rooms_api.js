import React from 'react'

import { useState,useEffect } from "react";
import Axios from "axios";




function propertiesDetails(){
    const [rooms, setRooms] = useState([]);



    useEffect(()=>{

        Axios.get("http://localhost:3001/property/allproperties").then((response) => {
            setRooms(response.data);

             console.log("This there My Propertie"+rooms);
          });

    },[]);


}





