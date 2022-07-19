
import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AppContext } from '../../../../helpers/Context'

export default function FirstStep() {

    const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext)
  
      const{name,private_name,url_name,prop_code,property_type, bed_type,bedrooms,beds,city} = formValues
    
      // Check if all values are not empty and if there are some errors
      const isError = useCallback(
        () =>
          Object.keys({name,private_name,url_name,prop_code,property_type,bed_type, bedrooms,beds,city}).some(
            (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
          ),
        [formValues,name,private_name,url_name,prop_code,property_type, bed_type,bedrooms,beds,city]
  
      
      )
    
      return (
        <>
          <Grid container spacing={2}>
           
            
    
          
    
            <Grid item xs={6} sm={6}>
              <TextField
                variant={variant}
                margin={margin}
                fullWidth
                select
                SelectProps={{
                  native: true
                }}
                label='Home Type'
                name='Home Type'
                value={property_type.value}
                onChange={handleChange}
                error={!!property_type.error}
                helperText={property_type.error}
                required={property_type.required}
              >
                <option value=''> </option>
                <option value='Apartment'>Apartment</option>
                <option value='Villa'>Villa</option>
              </TextField>
            </Grid>
  
  
           
  
              
  
  
            <Grid item xs={6} sm={6}>
              <TextField
                variant={variant}
                margin={margin}
                fullWidth
                label='Accommodates'
                name='beds'
                placeholder='beds'
                value={beds.value}
                onChange={handleChange}
                error={!!beds.error}
                helperText={beds.error}
                required={beds.required}
              />
            </Grid>
  
  
            <Grid item xs={6} sm={6}>
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
  
           
  
            
            <Grid item xs={6} sm={6}>
              <TextField
                variant={variant}
                margin={margin}
                fullWidth
                label='City'
                name='city'
                placeholder='city'
                value={city.value}
                onChange={handleChange}
                error={!!city.error}
                helperText={city.error}
                required={city.required}
              />
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