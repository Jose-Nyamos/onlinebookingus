
import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import Confirm from './../../Properties/Confirm'
import Success from './../../Properties/Success'
import { AppContext } from '../../../../helpers/Context'

// Step titles
const labels = ['Basic', 'Description','Location','Amenities','Images','Price', 'Booking','Calendar']
const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <FirstStep />
    case 1:
      return <SecondStep />
    case 2:
     return <SecondStep />
    case 3:
        return <SecondStep />
    case 4:
        return <SecondStep />
    case 5:
      return <Confirm />
    default:
      throw new Error('Unknown step')
  }
}

const  StepFormWizard=()=>{
    const { activeStep } = useContext(AppContext)
  
    return (
      <>
        {activeStep === labels.length ? (
          <Success />
        ) : (
          <>
            <Box sx={{ my: 12 }}>
              {/* <Typography variant='h4' align='center'>
                Property Information
              </Typography> */}
             
            </Box>
            <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
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
  
  export default StepFormWizard;  
