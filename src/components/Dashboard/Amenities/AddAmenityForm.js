import React from 'react'

import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';

import Axios from 'axios';


import * as Yup from 'yup';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




function AddAmenityForm() {


    const [amenitiesList, setAmenitiesList] = useState([]);

    // const {propDetailsState} = useContext(PropertDetailsContext);

    const initialValues={

title:"",
description:"",
symbol:"",
icons:"",
 
    }

    const [isLoading,setLoading]=useState(false);

    const validationSchema2=Yup.object().shape({
        title: Yup.string().min(3).max(50).required(),
        description: Yup.string().min(3).max(50).required(),

        symbol: Yup.string().min(3).max(250).required(),
        icons:Yup.string().min(3).max(15000).required(),
    });

    const onSubmit = (data) => {
        setLoading(true);

        Axios.post("https://onlinebookingus-app-test.herokuapp.com/amenities",data).then((response)=>{


            console.log("INFORMATION ADDED ",response);

            setTimeout(() => {
                setLoading(false);
                toast.info('AMENITIES DETAILS ADDED');
            }, 3000);
         
           // navigate("/dashboard");


           setAmenitiesList([
            ...amenitiesList,
            {
            title: response.data.title,
            description: response.data.title,
            symbol: response.data.title,
            icons: response.data.title,
             
            },
          ]);
          
           
        }).catch((error) => {
            console.warn('Not good man :(');
        })

    }


    useEffect(()=>{

        Axios.get("https://onlinebookingus-app-test.herokuapp.com/amenities/getAmenities").then((response) => {
            setAmenitiesList(response.data);
          });

    },[]);
    return (
        <div>

        <div class="main-content-wrap sidenav-open d-flex flex-column">

     


        <div class="border-top mb-5"></div>
        <div class="row">
            <div class="col-md-6">
                <h4>New Amenity Item</h4>
              
                <div class="card mb-5">
                    <div class="card-body">
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema2}>

                    <Form>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label" for="inputEmail3">Title</label>
                                <div class="col-sm-10">
                                <ErrorMessage name="title" component="span" />
                                <Field class="form-control" id="title" type="text" placeholder="Title" name="title" />
                                </div>
                            </div>
                            
                            <div class="form-group row">
                            <label class="col-sm-2 col-form-label" for="inputPassword3">Description</label>
                            <div class="col-sm-10">
                            <ErrorMessage name="description" component="span" />
                            <Field class="form-control" id="inputPassword3" type="text" placeholder="description" name="description"  />
                            </div>
                        </div>
                        <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="inputPassword3">Symbol</label>
                        <div class="col-sm-10">
                        <ErrorMessage name="symbol" component="span" />
                        <Field class="form-control" id="inputPassword3" type="text"  placeholder="symbol" name="symbol"/>
                        </div>
                       </div>
                       <div class="form-group row">
                       <label class="col-sm-2 col-form-label" for="inputEmail3">icons</label>
                       <div class="col-sm-10">

                       <ErrorMessage name="icons" component="span" />
                       <Field class="form-control" id="icons" type="text"  name="icons" placeholder="icons" />
                       </div>
                   </div>
                           
                        
                            <div class="form-group row">
                                <div class="col-sm-10">
                                {!isLoading && <button type="submit" class="btn btn-primary btn-sm text" >Save</button>

                            } 
                            {isLoading &&
                               <button type="submit" class="btn btn-primary btn-sm text" disabled> <i class="fas fa-spinner fa-spin"></i>Saving Infor</button>
                            }
                                </div>
                            </div>
                      </Form>
                      </Formik>
                      <ToastContainer />
                    </div>
                </div>
            </div>

            <div class="col-md-6">
            <h4>All Amenities Item</h4>
          
            <div class="card mb-5">
            <div class="card-body">
           
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>


                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Symbol</th>

                            <th scope="col">Type</th>
                            <th scope="col">icons</th>
                           

                            <th scope="col">Status</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {amenitiesList.map((value, key) => {
                        return (
                        <tr>
                            <th scope="row">{key}</th>
                            <td>{value.title}</td>
                            <td>{value.description}</td>
                            <td>{value.symbol}</td>
                            <td>Essentail</td>
                            <td><img class="rounded-circle m-0 avatar-sm-table" src="../../dist-assets/images/faces/1.jpg" alt="" /></td>
                           
                         
                            <td><span class="badge badge-success">Active</span></td>
                            <td>
                                <button class="btn btn-success" type="button"><i class="nav-icon i-Eye"></i></button>
                            </td>
                            <td>
                                <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
                            </td>
                            <td>
                                <button class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
                            </td>
                        </tr>

                        );
                    })}
                        
                    </tbody>
                </table>
            </div>
        </div>
            </div>
        </div>
        </div>
        </div>
       
            
        </div>
    )
}

export default AddAmenityForm
