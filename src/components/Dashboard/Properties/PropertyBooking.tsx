import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../../../helpers/Context'

export default function PropertyBooking() {
    const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
    const { booking_type, minimum_stay,minimum_stay_seasonal,policy_id } = formValues
  
    const isError = useCallback(
      () =>
        Object.keys({booking_type, minimum_stay,minimum_stay_seasonal,policy_id}).some(
          (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
        ),
      [formValues,booking_type, minimum_stay,minimum_stay_seasonal,policy_id]
    )
  
    return (
      <>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              select
              SelectProps={{
                native: true
              }}
              label='booking_type'
              name='booking_type'
              value={booking_type.value}
              onChange={handleChange}
              error={!!booking_type.error}
              helperText={booking_type.error}
              required={booking_type.required}
            >
              <option value=''> </option>
              <option value='Review each request'>Review each request</option>
              <option value='Guest book instantly'>Guest book instantly</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
          <TextField
              
              margin={margin}
              fullWidth
              label='minimum_stay'
              name='minimum_stay'
              placeholder='cover_photo'
              value={minimum_stay.value}
              onChange={handleChange}
              error={!!minimum_stay.error}
              helperText={minimum_stay.error}
              required={minimum_stay.required}
            />
          </Grid>

          <Grid item xs={12}>
          <TextField
              
              margin={margin}
              fullWidth
              label='minimum_stay_seasonal'
              name='minimum_stay_seasonal'
              placeholder='cover_photo'
              value={minimum_stay_seasonal.value}
              onChange={handleChange}
              error={!!minimum_stay_seasonal.error}
              helperText={minimum_stay_seasonal.error}
              required={minimum_stay_seasonal.required}
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