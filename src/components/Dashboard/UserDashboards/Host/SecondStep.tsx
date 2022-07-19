
import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../../../../helpers/Context'

export default function SecondStep() {
    const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
    const { city, state, country } = formValues
  
    const isError = useCallback(
      () =>
        Object.keys({ city, state, country }).some(
          (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
        ),
      [formValues, city, state, country]
    )
  
    return (
      <>
        <Grid container spacing={2}>
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
  