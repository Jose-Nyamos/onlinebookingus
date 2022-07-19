import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
// import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import Confirm from './Confirm'
import Success from './Success'
import { AppContext } from '../../../helpers/Context'

import { PropertDetailsContext } from '../../../helpers/PropertyDetailsContext';
import Amenities from './Amenities'
import PropertyDescription from './PropertyDescription'
import PropertyPhotos from './PropertyPhotos'
import PropertyBooking from './PropertyBooking'
import { MultiUploader } from './Uploader'
import FirstStep from './FirstStep'




// Step titles
const labels = ['Basics','Description','Location', 'Address Details','Amenities','Photos','Pricing','Booking', 'Confirmation']
const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <FirstStep/>
    case 1:
        return <PropertyDescription/>
    case 2:
      return <SecondStep />
    case 3:
     return <Amenities/>
    case 4:
        return <SecondStep />
    case 5:
        return <SecondStep />
    case 6:
          return <MultiUploader/>
    case 7:
            return <PropertyPhotos/>
    case 8:
            return <PropertyBooking/>
    case 9:
      return <Confirm />
    default:
      throw new Error('Unknown step')
  }
}

const StepForm=()=>{
    const { activeStep } = useContext(AppContext)
    


  
    return (
      <>
        {activeStep === labels.length ? (
          <Success />
        ) : (
          <>
            <Box sx={{ my: 12}}>
              {/* <Typography variant='h4' align='center'>
                Property Information
              </Typography> */}
             
            </Box>
            <Stepper activeStep={activeStep} sx={{ py: 3,mt:5 }} alternativeLabel>
              {labels.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
  
            {handleSteps(activeStep)}
          </>
        )}
      </>
    )
  }
  
  export default StepForm;  