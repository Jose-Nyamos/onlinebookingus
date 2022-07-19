
import React, { useState, useContext } from "react";
import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect } from 'react';

import axios from 'axios';

import {useNavigate} from 'react-router-dom';

import * as Yup from 'yup';

import { useHistory } from "react-router-dom";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from "../../../helpers/AuthContext";

import { GuestBookingContext } from "../Context/GuestBookingContext";


function refreshPage() {
    window.location.reload();
  }


function Register()  {

    const history = useHistory();

    const booking = useContext(GuestBookingContext);


    const [username, setUsername] = useState("");
      
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);

    const initialValues={
        first_name:"",
        username:"",
        email:"",
        phone_no:"",
        password:"",
       
    }
  

    var json_data_obj={};
    

    const [isLoading,setLoading]=useState(false);

    const validationSchema=Yup.object().shape({
        username: Yup.string().min(3).max(10).required(),
        first_name: Yup.string().min(3).max(20).required(),
        email:Yup.string().email('Invalid email format').required('Required'),

        phone_no: Yup.string().min(8).max(10).required(),
        password: Yup.string().min(3).max(8).required(),

    })

    const  onSubmit = (data) => {
        setLoading(true);

        axios.post("https://onlinebookingus-app-test.herokuapp.com/users",data).then((response)=>{

            console.log("USER DATA IS "+JSON.stringify(data));

            const json_data=JSON.stringify(data);
            
             json_data_obj=JSON.parse(json_data);

           // setUsername(json_data_obj.username);
           // setPassword(json_data_obj.password);

           booking.setFirst_name(String(json_data_obj.first_name));

           booking.setPhoneno(String(json_data_obj.phoneno));

            console.log("This is username "+json_data_obj.username);


            localStorage.setItem("accessToken", response.data.token);
            setAuthState({
              username: json_data_obj.username,
              role: "guest",
              first_name: json_data_obj.first_name,
              phone_no: json_data_obj.phone_no,
              id: response.data.id,
              status: true,
            });


            setTimeout(() => {
                setLoading(false);
                toast.info('Information Added successfully');
                //refreshPage(); 
                history.push('/payment');
            }, 3000);
         
        
           // navigate("/dashboard");
          
           
        })

    };
    return (
        <div>

       
     
        <div class="loginalert" id="register_message_area"></div>

      

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
                    placeholder="Username"
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


        <div class="loginrow">
                      
        <ErrorMessage name="phone_no" component="span" />
                        <Field
                        autoComplete="off"
                        className="form-control"
                        id="inputCreatePost"
                        name="phone_no"
                        placeholder="eg.+1334625483"
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

        <div class="acc_radio">
                  <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                  <div class="radiolabel" for="acctype0">I only want to book</div>
                  <br />
                  <input type="radio" name="acc_type" id="acctype1" value="0" required />
                  <div class="radiolabel" for="acctype1">I want to rent my property</div>
        </div>
                
                
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
    )
}


export default Register;
