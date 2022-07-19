import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../../../helpers/Context'

export default function Amenities() {

    const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
    const { city, state, amenity_title } = formValues
  
    const isError = useCallback(
      () =>
        Object.keys({ city, state, amenity_title}).some(
          (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
        ),
      [formValues, city, state, amenity_title]
    )
    return (
        <>
        <Grid container spacing={2}>
          
         
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={amenity_title.value}
                  onChange={handleChange}
                  name='amenity_title'
                  color='primary'
                  required={amenity_title.required}
                />
              }
              label='Essentials'
            />
          </Grid>

          
        
        </Grid>
  
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Button variant='contained' disabled={isError()} color='primary' onClick={!isError() ? handleNext : () => null}>
            Next
          </Button>
        </Box>
      </>
    )
}
