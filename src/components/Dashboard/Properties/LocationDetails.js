import React from 'react'

import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';

import axios from 'axios';

//import {useNavigate} from 'react-router-dom';

import * as Yup from 'yup';

import { useContext } from 'react';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { PropertDetailsContext } from '../../../helpers/PropertyDetailsContext';



import { useHistory } from "react-router-dom";



function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

function LocationDetails() {

    const navigate = useHistory();


    const {propDetailsState} = useContext(PropertDetailsContext);

    const initialValues={
PropertyId:'',

address_line_1:"",
address_line_2:"",
latitude:"",
longitude:"",
city :"",
state:"",
country:"",
postal_code:"",

       
    }


console.log("PROPERTY",propDetailsState.id)

    const [isLoading,setLoading]=useState(false);

    const validationSchema2=Yup.object().shape({
        address_line_1: Yup.string().min(3).max(50).required(),
        address_line_2: Yup.string().min(3).max(50).required(),

        latitude: Yup.number().typeError('you must specify a number')
        .min(0, 'Min value 0.')
        .max(30, 'Max value 30.'),
      
      
        longitude: Yup.number().typeError('you must specify a number')
        .min(0, 'Min value 0.')
        .max(30, 'Max value 30.'),
        city: Yup.string().min(3).max(50).required(),
        state: Yup.string().min(3).max(50).required(),

        country: Yup.string().min(3).max(50).required(),

        postal_code: Yup.string().min(3).max(50).required(),

      
    
    });

    const onSubmit = (data) => {
        setLoading(true);

        axios.post("http://localhost:3001/property-address",data).then((response)=>{

            console.log("PROPERTY ADDRESS IS ",response);

            console.log("THE PROPERTY ADDRESS ID IS",response.data.id);
        


            setTimeout(() => {
                setLoading(false);
                toast.info('ADDRESS DETAILS Added ');
            }, 3000);
         
           // navigate("/dashboard");
          
           
        }).catch((error) => {
            console.warn('Not good man :(');
        })

    }

 
    return (
        <div>

        <div class="card mb-4">
        <div class="card-body">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema2}>

        <Form>
        
                <div class="form-row">

                <div class="col-md-3 mb-3">
                 
                <label for="validationCustom01">Prop ID</label>
                <ErrorMessage name="PropertyId" component="span" />
                <Field
                class="form-control" id="validationCustom01" type="number" name="PropertyId" placeholder="PropertyId" 

              
                value={propDetailsState.id} />
                <div class="valid-feedback">
                    Looks good!

                </div>
            </div>
                    <div class="col-md-3 mb-3">
                 
                        <label for="validationCustom01">Country</label>
                        <ErrorMessage name="address_line_1" component="span" />
                        <Field
                        class="form-control" id="validationCustom01" type="text" name="address_line_1" placeholder="address_line_1" 
                         />
                        <div class="valid-feedback">
                            Looks good!

                        </div>
                    </div>
                   
                    <div class="col-md-3 mb-3">
                        <label for="validationCustom02">address_line_2</label>
                        <ErrorMessage name="address_line_2" component="span" />
                        <Field
                        class="form-control" id="validationCustom02" type="text" placeholder="address_line_2"  name="address_line_2"
                         />
                        <div class="valid-feedback">
                            Looks good!

                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                    <label for="validationCustom02">latitude</label>
                    <ErrorMessage name="latitude" component="span" />
                    <Field
                    class="form-control" id="validationCustom02" type="text" placeholder="latitude"  name="latitude"
                     />
                    <div class="valid-feedback">
                        Looks good!

                    </div>
                </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationCustom01">longitude</label>
                        <ErrorMessage name="longitude" component="span" />
                        <Field
                         class="form-control" id="validationCustom01" type="text" placeholder="longitude" name="longitude" value={between(100,9999)} />
                        <div class="valid-feedback">
                            Looks good!

                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-3 mb-3">
                        <label for="validationCustom03">city</label>
                        <ErrorMessage name="city" component="span" />
                        <Field
                        class="form-control" id="validationCustom03" type="text" name="city" placeholder="city"/>
                        <div class="invalid-feedback">
                      

                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationCustom04">state</label>
                        <ErrorMessage name="state" component="span" />
                        <Field
                         class="form-control" id="validationCustom04" type="text" placeholder="state" name="state" />
                        <div class="invalid-feedback">
                            Please provide State

                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationCustom05">country</label>
                        <ErrorMessage name="bed_type" component="span" />
                        <Field
                         class="form-control" id="validationCustom05" type="text" placeholder="country" name="country" />
                        <div class="invalid-feedback">
                            Please provide country.

                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                    <label for="validationCustom05">postal_code</label>
                    <ErrorMessage name="postal_code" component="span" />
                    <Field
                      class="form-control" id="validationCustom05" type="text" placeholder="postal_code" name="postal_code" />
                    <div class="invalid-feedback">
                        Please provide a valid zip.

                    </div>
                </div>
                </div>
               
              

                {!isLoading && <button type="submit" class="btn btn-primary btn-sm text" >Save</button>

} 
{isLoading &&
<button type="submit" class="btn btn-primary btn-sm text" disabled> <i class="fas fa-spinner fa-spin"></i>Saving Infor</button>
}

                </Form>

                </Formik>
                <ToastContainer />

        </div>
    </div>
            
        </div>
    )
}

export default LocationDetails
