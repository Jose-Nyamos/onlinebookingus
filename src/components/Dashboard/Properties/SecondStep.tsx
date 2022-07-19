import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../../../helpers/Context'

export default function SecondStep(){
    const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
    const { city, state, country,address_line_1,address_line_2,latitude,longitude,postal_code } = formValues
  
    const isError = useCallback(
      () =>
        Object.keys({ city, state, country,address_line_1,address_line_2,latitude,longitude,postal_code}).some(
          (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
        ),
      [formValues, city, state, country,address_line_1,address_line_2,latitude,longitude,postal_code]
    )
  
    return (
      <>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='Country'
              name='country'
              placeholder='Country'
              value={country.value}
              onChange={handleChange}
              error={!!country.error}
              helperText={country.error}
              required={country.required}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='address_line_1'
              name='address_line_1'
              placeholder='address_line_1'
              value={address_line_1.value}
              onChange={handleChange}
              error={!!address_line_1.error}
              helperText={address_line_1.error}
              required={address_line_1.required}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='address_line_2'
              name='address_line_2'
              placeholder='address_line_2'
              value={address_line_2.value}
              onChange={handleChange}
              error={!!address_line_2.error}
              helperText={address_line_2.error}
              required={address_line_2.required}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='City'
              name='city'
              placeholder='Enter your city'
              value={city.value}
              onChange={handleChange}
              error={!!city.error}
              helperText={city.error}
              required={city.required}
            />
          </Grid>
          <Grid item xs={12}>
          <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='State'
              name='state'
              placeholder='Enter your city'
              value={state.value}
              onChange={handleChange}
              error={!!state.error}
              helperText={state.error}
              required={state.required}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='postal_code'
              name='postal_code'
              placeholder='postal_code'
              value={postal_code.value}
              onChange={handleChange}
              error={!!postal_code.error}
              helperText={postal_code.error}
              required={postal_code.required}
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
  