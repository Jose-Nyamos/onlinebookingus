import React, { createContext, useState } from 'react';

import moment from "moment";

export const GuestBookingContext = createContext();

export const GuestBookingContextProvider = ({ children }) => {
  
    const [paddress,setPaddress] = useState("California State University Long Beach, Long Beach, CA, USA")

    const [startDate,setStartDate ] = useState(moment(new Date()).format("MM/DD/YYYY"));

    const [endDate,setEndDate ] = useState(moment(new Date()).format("MM/DD/YYYY"));

    const [guests,setGuests] = useState(2);

    const [propertyName,setPropertyName] = useState("Entire Home/Apt In Avon Park");

    const [product,setProduct] = useState("Entire Home/Apt In Avon Park");

    const[email,setEmail]= useState("testguest@gmail.com");

    const[phoneno,setPhoneno]= useState("+13473227069");



    const [property_id,setProperty_id] = useState(91);

    const [host_id,setHost_id] = useState(5);

    const[user_id,setUser_id]= useState(7);

    const[base_price,setBase_price]= useState(4700);



    const[first_name,setFirst_name]= useState("TestGuest");

    const[last_name,setLast_name]= useState("Guest10");

    const[property_price,SetProperty_price]= useState(169);

    const[nights,setNights]= useState(3);

    const[cleaningfee,setCleaningFee]= useState(0);
    
    const[securityfee,setSecurityFee]= useState(0);

    const[servicefee,setServiceFee]= useState(0);

    const[minimum_stay,setMinimumStay]= useState(3);


    const[latitude,setLatitude]= useState(0);

    const[longitude,setLongitude]= useState(0);

    const[bookingdata,setBookingData]=useState({
      propertyName:"",
      property_id:"",
      guests:"",
      startDate:"",
      endDate:"",
      nights:0,
      property_price:0,
      base_price:0,
    })


    





  
    return (
      <GuestBookingContext.Provider value={{first_name,last_name, user_id,paddress,startDate,endDate,guests,setPaddress,
        propertyName,property_id,host_id,product,email,phoneno,base_price,property_price,nights,servicefee,cleaningfee,securityfee,
        setFirst_name,setLast_name,setUser_id,setStartDate,setEndDate,setGuests,setPropertyName,setProperty_id,setHost_id,setProduct,setEmail,
        setPhoneno,setBase_price,setNights,SetProperty_price,setCleaningFee,setSecurityFee,setServiceFee,latitude,longitude,setLatitude,setLongitude,bookingdata,setBookingData,minimum_stay,setMinimumStay}}>
        {
          children
        }
      </GuestBookingContext.Provider>
    );
  }
  
  // export default GuestBookingContextProvider;