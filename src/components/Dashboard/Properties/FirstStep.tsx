
import React, { useCallback,useState,useEffect,useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AppContext } from '../../../helpers/Context'

import {useHistory, useParams } from "react-router-dom"
import axios from "axios";


export default function FirstStep() {

  //let { id } = useParams();

  // const [propertyObject, setPropertyObject] = useState({});

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/property/byId/${id}`).then((response) => {

  //   console.log('THE PROPERTY ID ID'+response.data.id);
  //     // setPropertyObject(response.data);
  //   });
  // }, []);


  const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext)

    const{bed_type,bedrooms,beds,bathrooms} = formValues
  
    // Check if all values are not empty and if there are some errors
    const isError = useCallback(
      () =>
        Object.keys({bed_type, bedrooms,beds,bathrooms}).some(
          (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
        ),
      [formValues,bed_type,bedrooms,beds,bathrooms]

    
    )
  
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='bedrooms'
              name='bedrooms'
              placeholder='bedrooms'
              value={bedrooms.value}
              onChange={handleChange}
              error={!!bedrooms.error}
              helperText={bedrooms.error}
              required={bedrooms.required}
            />
          </Grid>


          <Grid item xs={12} sm={4}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='bathrooms'
              name='bathrooms'
              placeholder='bathrooms'
              value={bathrooms.value}
              onChange={handleChange}
              error={!!bathrooms.error}
              helperText={bathrooms.error}
              required={bathrooms.required}
            />
          </Grid>


          <Grid item xs={12} sm={4}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='beds'
              name='beds'
              placeholder='beds'
              value={beds.value}
              onChange={handleChange}
              error={!!beds.error}
              helperText={beds.error}
              required={beds.required}
            />
          </Grid>


         

          <Grid item xs={12} sm={4}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              select
              SelectProps={{
                native: true
              }}
              label='bed_type'
              name='bed_type'
              value={bed_type.value}
              onChange={handleChange}
              error={!!bed_type.error}
              helperText={bed_type.error}
              required={bed_type.required}
            >
              <option value=''> </option>
              <option value='Queen'>Queen</option>
              <option value='King'>King</option>
            </TextField>
          </Grid>

          
         
        </Grid>
  
        <Box sx={{ display: 'flex', border:0, justifyContent: 'flex-end' }}>

        

          <Button
            variant='contained'
            sx={{ mt: 3, ml: 1 }}
            disabled={isError()}
            color='primary'
            onClick={!isError() ? handleNext : () => null}
          >
            Next
          </Button>
        </Box>
      </>
    )
}