import { ValidationSchema } from './helpers/Context'




export const initialValues: ValidationSchema = {
    name: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 50,
    helperText: 'Custom error message'
  },
  private_name: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 50
  },

  url_name: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  prop_code: {
    value: '',
    error: '',
    validate: 'number'
    
  },
  property_type: {
    value: '',
    error: '',
    validate: 'select'
  },

  bed_type: {
    value: '',
    error: '',
    validate: 'select'
  },


  booking_type: {
    value: '',
    error: '',
    validate: 'select'
  },

  minimum_stay:{
    value: '',
    error: '',
    validate: 'number'
  },

  
  minimum_stay_seasonal:{
    value: '',
    error: '',
    validate: 'number'
  },

  policy_id:{
    value: '',
    error: '',
    validate: 'number'
  },


  bedrooms: {
    value: '',
    error: '',
    validate: 'number'
  
  },


  beds: {
    value: '',
    error: '',
    validate: 'number'
  
  },

  bathrooms: {
    value: '',
    error: '',
    validate: 'number'
   
  },


  
  summary: {
    value: '',
    error: '',
    validate: 'text',
  },


  
  
  city: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },

  state: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },

  country: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },
  address_line_1: {
    value: '',
    error: '',
    validate: 'text',
  },

  address_line_2: {
    value: '',
    error: '',
    validate: 'text',
  },

  latitude: {
    value: '',
    error: '',
    validate: 'text',
  },

  longitude: {
    value: '',
    error: '',
    validate: 'text',
  },
  

  postal_code: {
    value: '',
    error: '',
    validate: 'text',
  },


  

  cover_photo: {
    value: '',
    error: '',
    validate: 'file',
  },
  phone: {
    value: '',
    error: '',
    validate: 'phone',
    maxLength: 15
  }
  ,
  amenity_title: {
    value: '',
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Essentails'
  }
}
