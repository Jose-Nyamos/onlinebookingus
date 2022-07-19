
import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { AppContext } from '../../../helpers/Context'

import axios from 'axios';



import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



export default function Confirm() {
  let p_id=0;
    const { formValues, handleBack, handleNext } = useContext(AppContext)
    const { name,private_name,url_name,prop_code,property_type, bed_type,bedrooms,beds,bathrooms, city, state, country,amenity_title } = formValues


  
    const handleSubmit = () => {
      // Remove unwanted properties from formValue object
      let form = {}
  
      Object.keys(formValues).map((name) => {
        form = {
          ...form,
          [name]: formValues[name].value
        }
        return form
      })



      axios.post("http://localhost:3001/property",form).then((response)=>{

        console.log("PROPERTY DATA IS ",response);

        console.log("PROPERTY ID is ",response.data.id);

        p_id=response.data.id;

        console.log("NOW THE GLOBAL ID IS ", p_id);

 



        setTimeout(() => {
            toast.info('Information Added successfully');
        }, 3000);


       // navigate("/dashboard");
      
       
    }).catch((error) => {
        console.warn('Not good man :(');
    });


    const address_details={
      PropertyId:p_id,
      prop_code:prop_code.value,
      city :city.value,
      state:state.value,
      country:country.value,
        
          }

    axios.post("http://localhost:3001/property-address",address_details).then((response)=>{

      console.log("THE ADDRESS DATA IS ",response);

     // navigate("/dashboard");
    
     
  }).catch((error) => {
      console.warn('Not good man :(');
  });



      // Do whatever with the values
      console.log(form)
      
      // Show last component or success message
      handleNext()
    }
  
    return (
      <>
        <List disablePadding>
          <ListItem>
            <ListItemText primary='Propertty Name' secondary={name.value || 'Not Provided'} />
          </ListItem>


          <Divider />
  
          <ListItem>
            <ListItemText primary='Prop Name' secondary={url_name.value || 'Not Provided'} />
          </ListItem>
  
          <Divider />
  
          <ListItem>
            <ListItemText primary='Private Name' secondary={private_name.value || 'Not Provided'} />
          </ListItem>

          <ListItem>
            <ListItemText primary='property_type' secondary={property_type.value || 'Not Provided'} />
          </ListItem>

          <ListItem>
            <ListItemText primary='bed_type' secondary={bed_type.value || 'Not Provided'} />
          </ListItem>

          <ListItem>
            <ListItemText primary='bedrooms' secondary={bedrooms.value || 'Not Provided'} />
          </ListItem>


          <ListItem>
            <ListItemText primary='beds' secondary={beds.value || 'Not Provided'} />
          </ListItem>

          <ListItem>
            <ListItemText primary='bathrooms' secondary={bathrooms.value || 'Not Provided'} />
          </ListItem>

          <Divider />
          
          <ListItem>
            <ListItemText primary='City' secondary={city.value || 'Not Provided'} />
          </ListItem>
  
          <Divider />
  
          <ListItem>
            <ListItemText primary='State' secondary={state.value || 'Not Provided'} />
          </ListItem>
  
          <Divider />
  
          <ListItem>
            <ListItemText primary='Country' secondary={country.value || 'Not Provided'} />
          </ListItem>


          <ListItem>
            <ListItemText primary='Country' secondary={country.value || 'Not Provided'} />
          </ListItem>

          <ListItem>
            <ListItemText primary='amenity_title' secondary={amenity_title.value || 'Not Provided'} />
          </ListItem>

          <ListItem>
            <ListItemText primary='Prop Code' secondary={prop_code.value || 'Not Provided'} />
          </ListItem>
  
          
          <Divider />
  
         
        </List>
  
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button sx={{ mr: 1 }} onClick={handleBack}>
            Back
          </Button>
          <Button variant='contained' color='success' onClick={handleSubmit}>
            Confirm & Continue
          </Button>

          <ToastContainer />
        </Box>
      </>
    )
  }
  