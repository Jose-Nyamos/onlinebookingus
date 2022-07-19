import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../../../helpers/Context'

export default function PropertyPhotos() {
    const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
    const { name, cover_photo } = formValues
  
    const isError = useCallback(
      () =>
        Object.keys({ name, cover_photo}).some(
          (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
        ),
      [formValues, name, cover_photo]
    )
  
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='Listing Name'
              name='name'
              placeholder='Enter your city'
              value={name.value}
              onChange={handleChange}
              error={!!name.error}
              helperText={name.error}
              required={name.required}
            />
          </Grid>
          <Grid item xs={12}>

          <input className="file-input" type="file"  name='cover_photo' value={name.value} onChange={handleChange} />
          
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
