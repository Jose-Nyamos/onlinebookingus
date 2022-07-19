import React from 'react'

import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';

import Axios from 'axios';


import * as Yup from 'yup';

import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';

import { Helmet } from 'react-helmet';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




const options=[
    {value:'Admin',label:'Admin'},
    {value:'Staff',label:'Staff'},
    {value:'Host',label:'Host'},
    {value:'Guest',label:'Guest'},
]

function AddCustomerForm() {

    const [usersList, setusersList] = useState([]);

    const [password, setPassword] = useState("4321")


    

      const handleChange = (event) => {
        setPassword(event.target.value);
      };

    const initialValues={
        first_name:"",
        last_name:"",
        email:"",
        phone_no:"",
        password:"4321",
       
    }

     
    const [isLoading,setLoading]=useState(false);
        
    const validationSchema=Yup.object().shape({

        first_name: Yup.string().min(3).max(20).required(),
      
        email:Yup.string().email('Invalid email format').required('Required'),

        phone_no: Yup.string().min(8).max(15).required(),
     

    });


    const onSubmit = (data) => {
        setLoading(true);

        Axios.post("https://onlinebookingus-app-test.herokuapp.com/users",data).then((response)=>{


            console.log("INFORMATION ADDED ",response);

            setTimeout(() => {
                setLoading(false);
                toast.info('CUSTOMER DETAILS ADDED');
            }, 3000);
         
           // navigate("/dashboard");


           setusersList([
            ...usersList,
            {
            first_name: response.data.first_name,
            username: response.data.username,
            phone_no: response.data.phone_no,
            email: response.data.email,
            role: response.data.role,
             
            },
          ]);
          
           
        }).catch((error) => {
            console.warn('Not good man :(');
        })

    }


    useEffect(()=>{

        Axios.get("https://onlinebookingus-app-test.herokuapp.com/users/allusers").then((response) => {
            setusersList(response.data);
          });

    },[]);

    return (
        <div>

        <div class="text-left">
        <Helmet>
          <link rel="stylesheet" href="dist-assets/css/plugins/perfect-scrollbar.min.css" />
          <link rel="stylesheet" href="dist-assets/css/themes/lite-purple.min.css" />



      
        
          <link rel="stylesheet" href="dist-assets/css/plugins/smart.wizard/smart_wizard.min.css" />
          <link rel="stylesheet" href="dist-assets/css/plugins/smart.wizard/smart_wizard_theme_arrows.min.css" />
          <link rel="stylesheet" href="dist-assets/css/plugins/smart.wizard/smart_wizard_theme_circles.min.css" />
          <link rel="stylesheet" href="dist-assets/css/plugins/smart.wizard/smart_wizard_theme_dots.min.css" />






          <link rel="stylesheet" href="dist-assets/js/scripts/script.min.js" />








          {/* <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900" rel="stylesheet" /> */}
        <script type="text/javascript" src="dist-assets/js/plugins/jquery-3.3.1.min.js" />
          <script type="text/javascript" src="dist-assets/js/plugins/bootstrap.bundle.min.js" />
          <script type="text/javascript" src="dist-assets/js/scripts/script.min.js" />
          <script type="text/javascript" src="dist-assets/js/scripts/sidebar.large.script.min.js" />
          <script type="text/javascript" src="dist-assets/js/scripts/dashboard.v2.script.min.js" />
          <script type="text/javascript" src="dist-assets/js/plugins/datatables.min.js" />
          <script type="text/javascript" src="dist-assets/js/scripts/sidebar.large.script.min.js" />
          <script type="text/javascript" src="dist-assets/js/plugins/echarts.min.js" />
          <script type="text/javascript" src="dist-assets/js/scripts/echart.options.min.js" />
          <script type="text/javascript" src="dist-assets/js/plugins/datatables.min.js" />
        
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/perfect-scrollbar/1.5.3/perfect-scrollbar.min.js" />
       
          <script src="dist-assets/js/plugins/perfect-scrollbar.min.js"></script>


        
      
        <script type="text/javascript" src="dist-assets/js/plugins/jquery.smartWizard.min.js"></script>
        <script type="text/javascript" src="dist-assets/js/scripts/smart.wizard.script.min.js"></script>
       
       
       
          </Helmet>
          <div class="app-admin-wrap layout-sidebar-large">
          <Topbar />
          <Sidebar />

        <div class="main-content-wrap sidenav-open d-flex flex-column">

     


        <div class="border-top mb-5"></div>
        <div class="row">
        <div class="col-md-12">
    
      
        <div class="card mb-5">
            <div class="card-body">
            <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">Add Customer</h3>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

            <Form>

                     <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="inputEmail3">First Name</label>
                        <div class="col-sm-10">
                        <ErrorMessage name="first_name" component="span" />
                        <Field 
                            class="form-control"  type="text" name="first_name" placeholder="Names" />
                        </div>
                    </div>

                    <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="inputEmail3">Last Name</label>
                    <div class="col-sm-10">
                  
                    <Field 
                        class="form-control"  type="text" name="lastname" placeholder="Last Name" />
                    </div>
                   </div>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="inputEmail3">Email</label>
                        <div class="col-sm-10">
                        <ErrorMessage name="email" component="span" />
                        <Field class="form-control" id="inputEmail3" type="email" name="email" placeholder="Email" />
                        </div>
                    </div>

                    <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="phone_no">Phone No</label>
                    <div class="col-sm-10">
                    <ErrorMessage name="phone_no" component="span" />
                    <Field class="form-control" id="inputEmail3" type="phone_no" name="phone_no" laceholder="eg.+1334625483" />
                    </div>
                 </div>


                 <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="inputPassword3">Password</label>
                        <div class="col-sm-10">

                        <div>{password}</div>

                    
                       
                        <Field 
                        class="form-control" id="inputPassword3" type="hidden"

                        
                        
                        name="password" placeholder="Password"

                        value={password}
                        onChange={handleChange}  

                      
                        
                        />
                        </div>
                    </div>
                   
                   
                    <div class="form-group row">
                        <div class="col-sm-10">
                                           
  {!isLoading && <button type="submit" class="btn btn-raised btn-raised-success m-1"><i class="fas fa-save"></i> Save</button>

} 
{isLoading &&
   <button type="submit" class="btn btn-raised btn-raised-success m-1" disabled> <i class="fas fa-spinner fa-spin"></i>Saving</button>
}

                        </div>
                    </div>
                    </Form>
                    </Formik>
                    <ToastContainer />
            </div>
            </div>
        </div>
    </div>

           
        </div>
        </div>

        </div>
       
      </div>


            
        </div>
    )
}

export default AddCustomerForm
