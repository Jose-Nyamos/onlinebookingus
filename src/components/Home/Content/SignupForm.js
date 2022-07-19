import React from 'react'

import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';

import axios from 'axios';

import {useNavigate} from 'react-router-dom';

import * as Yup from 'yup';



import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import "../../../../App.css";

function SignupForm() {
    // let history=useNavigate();
    const navigate = useNavigate();

    const initialValues={
        first_name:"",
        username:"",
        email:"",
        phone_no:"",
        account_type:"",
        password:"",
       
    }

    const [isLoading,setLoading]=useState(false);

    const validationSchema=Yup.object().shape({
        username: Yup.string().min(3).max(10).required(),
        first_name: Yup.string().min(3).max(20).required(),
        email:Yup.string().email('Invalid email format').required('Required'),

        phone_no: Yup.string().min(8).max(10).required(),
        account_type: Yup.boolean().required().oneOf([true], 'Select account type'),
        password: Yup.string().min(3).max(8).required(),

    })

    const  onSubmit = (data) => {
        setLoading(true);

        axios.post("http://localhost:3001/users",data).then((response)=>{

            console.log("User IS IS",response.data.id);

      


            setTimeout(() => {
                setLoading(false);
                toast.info('Information Added successfully');
            }, 3000);
         
           // navigate("/dashboard");
          
           
        })

    }
    return (
        <div>

        <div className="login_form shortcode-login create-space">
        <div className="loginalert" id="register_message_area"></div>

      

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

        <Form>
        <div className="loginrow">
        <ErrorMessage name="first_name" component="span" />
        <Field
        autoComplete="off"
        className="form-control"
        id="inputCreatePost"
        name="first_name"
        placeholder="Names"
        />
        </div>

        <div className="loginrow">
        <ErrorMessage name="username" component="span" />
                    <Field
                    autoComplete="off"
                    className="form-control"
                    id="inputCreatePost"
                    name="username"
                    placeholder="username"
                    />
        </div>

        <div className="loginrow">
        <ErrorMessage name="email" component="span" />
        <Field
       
        autoComplete="off"
        id="inputCreatePost"
        className="form-control"
        name="email"
        placeholder="email"
        />
        </div>


        <div class="form-group">
                      
                        <ErrorMessage name="phone_no" component="span" />
                        <Field
                       
                        autoComplete="off"
                        id="inputCreatePost"
                        name="phone_no"
                        placeholder="eg.+254734625483"
                      />
                    </div>

        <div className="loginrow">
        <ErrorMessage name="password" component="span" />
        <Field
       
        autoComplete="off"
        className="form-control"
        id="inputCreatePost"
        type="password"
        name="password"
       
        />
        </div>

        <div class="divider">
        <hr class="left" />Accnt<hr class="right" />
        <ErrorMessage name="account_type" component="span" />
        </div>


        <div class="form-check form-check-inline">
      
        <Field class="form-check-input" type="radio" name="account_type" id="inlineRadio1" value="1"/>
          <label class="form-check-label" for="inlineRadio1"> I only want to book</label>
</div>
<div class="form-check form-check-inline">
<Field  class="form-check-input" type="radio" name="account_type" id="inlineRadio2" value="2"/>
<label class="form-check-label" for="inlineRadio2"> I want to rent my property</label>
</div>
                 <br />
                
  {!isLoading && <button type="submit" class="btn btn-primary btn-sm text">Sign Up</button>

  } 
  {isLoading &&
     <button type="submit" class="btn btn-primary btn-sm text" disabled> <i class="fas fa-spinner fa-spin"></i>Sign Up</button>
  }

               
                 <br /><br />

        </Form>

        </Formik>
        
         
      
        
            <ToastContainer />

          </div>
        
  
            
        </div>
    )
}

export default SignupForm
