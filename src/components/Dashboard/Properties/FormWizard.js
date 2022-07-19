import React from 'react'

import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';

import axios from 'axios';

//import {useNavigate} from 'react-router-dom';


import { useHistory } from "react-router-dom";

import * as Yup from 'yup';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import LocationDetails from './LocationDetails';

import { PropertDetailsContext } from '../../../helpers/PropertyDetailsContext';
import CustomSelect from './CustomSelect';
import CustomSelect2 from './custom-select';

import { stateOptions } from './data';
import CustomSelectPropertyType from './CustomSelectPropertyType';
import AmenitiesList from './AmenitiesList';



function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }


  const property_types=[
    {value:'Apartment',label:'Apartment'},
    {value:'Villa',label:'Villa'},
    {value:'Townhouse',label:'Townhouse'},
]

  const options=[
    {value:'1',label:'Madam Nour'},
    {value:'2',label:'Francis Mbatha'},
]

const my_values=stateOptions;

function FormWizard() {


    // const [stteOptions,setstteOptions] = useState([my_values]);


    const [count, setCount] = useState(my_values);

    

   


   

    const [propDetailsState, setPropDetailsState] = useState({
        id:0,
        prop_code:"",
      });
    

    //const navigate = useNavigate();


    const navigate = useHistory();

    const initialValues={

host_id:"",
name:"",
private_name:"",
url_name:"",
prop_code:"",
bedrooms :"",
beds:"",
bathrooms:"",    
    }


    const [isLoading,setLoading]=useState(false);

    const validationSchema=Yup.object().shape({
        name: Yup.string().min(3).max(50).required(),
        private_name: Yup.string().min(3).max(50).required(),
        url_name: Yup.string().min(3).max(50).required(),
      
        bedrooms: Yup.number().typeError('you must specify a number')
        .min(0, 'Min value 0.')
        .max(30, 'Max value 30.'),
        beds: Yup.number().typeError('you must specify a number')
        .min(0, 'Min value 0.')
        .max(10, 'Max value 10.'),


        bathrooms: Yup.number().typeError('you must specify a number')
        .min(0, 'Min value 0.')
        .max(30, 'Max value 30.'),
    
    });

    const onSubmit = (data) => {
        setLoading(true);

        

        axios.post("https://onlinebookingus-app-test.herokuapp.com/property",data).then((response)=>{

            console.log("PROPERTY DATA IS ",response);

            console.log("PROPERTY ID is ",response.data.id);


            setPropDetailsState({

                id:response.data.id,
                prop_code:response.data.prop_code,
              
        
              });

           
        


                localStorage.setItem("property", response.data);

              

        


          console.log("JUST ADDED PROPERTY ID IS",propDetailsState);
        

        


            setTimeout(() => {
                setLoading(false);
                toast.info('Information Added successfully');
            }, 1500);


           // navigate("/dashboard");
          
           
        }).catch((error) => {
            console.warn('Not good man :(');
        })

    }
    return (
        <div>

        <PropertDetailsContext.Provider value={{ propDetailsState, setPropDetailsState }}>

        <div class="main-content-wrap sidenav-open d-flex flex-column">
      
        <div class="main-content">
            <div class="breadcrumb">
                <h1>Add Property</h1>
                <ul>
                    <li><a href="href.html">UI Kits</a></li>
                    <li>Add Property</li>
                </ul>
            </div>
            <div class="separator-breadcrumb border-top"></div>
            <div class="row mb-3">
                <div class="col-12 col-lg-6 col-sm-12">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="theme_selector">Themes</label>
                            <select class="custom-select col-lg-6 col-sm-12" id="theme_selector">
                            <option value="arrows">arrows</option>
                            <option value="default">default</option>
                           
                               
                            
                                <option value="circles">circles</option>
                                <option value="dots">dots</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-sm-12 d-flex flex-column flex-sm-row align-items-center"><span class="m-auto"></span>
                    <label>External Buttons:</label>
                    <div class="btn-group col-lg-6 col-sm-12 pl-sm-3" role="group">
                        <button class="btn btn-secondary" id="prev-btn" type="button">Go Previous</button>
                        <button class="btn btn-secondary" id="next-btn" type="button">Go Next</button>
                        <button class="btn btn-danger" id="reset-btn" type="button">Reset Wizard</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                   
                    <div id="smartwizard">
                        <ul>
                       
                            <li><a href="#step-1">Step 1<br /><small>Property Details</small></a></li>
                            <li><a href="#step-2">Step 2<br /><small>Location Details</small></a></li>
                            <li><a href="#step-3">Step 3<br /><small>Amenities</small></a></li>
                            <li><a href="#step-4">Step 4<br /><small>Property Photos</small></a></li>
                            <li><a href="#step-5">Step 5<br /><small>Confirmation</small></a></li>
                        </ul>
                        <div>
                            <div id="step-1">


                            <div class="card mb-4">
                            <div class="card-body">
                            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

                            <Form>
                            
                                    <div class="form-row">
                                        <div class="col-md-3 mb-3">
                                     
                                            <label for="validationCustom01">Property Name</label>
                                            <ErrorMessage name="name" component="span" />
                                            <Field
                                            class="form-control" id="validationCustom01" type="text" name="name" placeholder="Property Name" 
                                             />
                                            <div class="valid-feedback">
                                                Looks good!

                                            </div>
                                        </div>

                                        <div class="col-md-3 mb-3">
                                        <label for="validationCustom02">User/Owner</label>
                                       

                                        <CustomSelect

                                       
                                    
                                        options={options} 
                                        
                                        value={initialValues.host_id}

                                        onChange={value=>Formik.setFieldValue('host_id')}
 
                                        
                                        
                                        />

                                  
                                        <div class="valid-feedback">
                                            Looks good!

                                        </div>
                                    </div>


                                    <div class="col-md-3 mb-3">
                                    <label for="validationCustom02"></label>

                                 

                                    

                                     <button class="btn btn-secondary" type="button">   <i class="nav-icon i-Add-User">New User</i></button>


                                    </div>


                                    <div class="col-md-3 mb-3">
                                    <label for="validationCustom05">Property Type</label>
                                   
                                    <CustomSelectPropertyType
                                   


                            
                                    options={property_types} 
                                    
                                   
                                    />

                                    <div class="invalid-feedback">
                                        Please provide a Bed Type.

                                    </div>
                                </div>


                                       

                                        
                                    </div>

                                    <div class="form-row">

                                    <div class="col-md-3 mb-3">
                                    <label for="validationCustom02">Private Name</label>
                                    <ErrorMessage name="private_name" component="span" />
                                    <Field
                                    class="form-control" id="validationCustom02" type="text" placeholder="Private Name"  name="private_name"
                                     />
                                    <div class="valid-feedback">
                                        Looks good!

                                    </div>
                                  </div>


                                    <div class="col-md-3 mb-3">
                                        <label for="validationCustom02">Url Name</label>
                                        <ErrorMessage name="url_name" component="span" />
                                        <Field
                                        class="form-control" id="validationCustom02" type="text" placeholder="URL Name"  name="url_name"
                                         />
                                        <div class="valid-feedback">
                                            Looks good!

                                        </div>
                                    </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom01">Property Code</label>
                                          
                                            <Field
                                             class="form-control" id="validationCustom01" type="text" placeholder="Propery Code" name="prop_code" value={between(100,9999)} />
                                            <div class="valid-feedback">
                                                Looks good!

                                            </div>
                                        </div>



                                    </div>


                                    
                                    <div class="form-row">
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom03">Bedrooms</label>
                                            <ErrorMessage name="bedrooms" component="span" />
                                            <Field
                                            class="form-control" id="validationCustom03" type="text" name="bedrooms" placeholder="No. of Bed Rooms"/>
                                            <div class="invalid-feedback">
                                          

                                            </div>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom04">Beds</label>
                                            <ErrorMessage name="beds" component="span" />
                                            <Field
                                             class="form-control" id="validationCustom04" type="number" placeholder="Beds" name="beds" />
                                            <div class="invalid-feedback">
                                                Please provide No of Beds

                                            </div>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom05">bed_type</label>
                                            <ErrorMessage name="bed_type" component="span" />
                                            <CustomSelect2

    
                                    
                                            options={count} 
                                            
                                           
                                            />
    
                                            <div class="invalid-feedback">
                                                Please provide a Bed Type.

                                            </div>
                                        </div>

                                        <div class="col-md-3 mb-3">
                                        <label for="validationCustom05">Bathrooms</label>
                                        <ErrorMessage name="bathrooms" component="span" />
                                        <Field
                                          class="form-control" id="validationCustom05" type="text" placeholder="No. Of Birth Rooms" name="bathrooms" />
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
                            <div id="step-2">

      <LocationDetails/>



                              
                                
                            </div>
                            <div id="step-3">

                            <AmenitiesList/>
                              
                            </div>
                            <div id="step-4">
                                <h3 class="border-bottom border-gray pb-2">Step 4 Content</h3>
                                <div class="card o-hidden">
                                    <div class="card-header">My Details</div>
                                    <div class="card-block p-0">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th>Name:</th>
                                                    <td>Tim Smith</td>
                                                </tr>
                                                <tr>
                                                    <th>Email:</th>
                                                    <td>example@example.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div id="step-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-grow-1"></div>
        <div class="app-footer">
            <div class="row">
                <div class="col-md-9">
                    <p><strong>Gull - Laravel + Bootstrap 4 admin template</strong></p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quis beatae officia saepe perferendis voluptatum minima eveniet voluptates dolorum, temporibus nisi maxime nesciunt totam repudiandae commodi sequi dolor quibusdam
                        <sunt></sunt>
                    </p>
                </div>
            </div>
            <div class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
                <a class="btn btn-primary text-white btn-rounded" href="https://themeforest.net/item/gull-bootstrap-laravel-admin-dashboard-template/23101970" target="_blank">Buy Gull HTML</a>
                <span class="flex-grow-1"></span>
                <div class="d-flex align-items-center">
                    <img class="logo" src="../../dist-assets/images/logo.png" alt=""/>
                    <div>
                        <p class="m-0">&copy; 2018 Gull HTML</p>
                        <p class="m-0">All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>

    </PropertDetailsContext.Provider>
            
        </div>
    )
}

export default FormWizard
