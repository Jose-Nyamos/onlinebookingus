import React from 'react'


import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';

import Axios from 'axios';


import * as Yup from 'yup';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import RoleSelect from './RoleSelect';


const options=[
    {value:'Admin',label:'Admin'},
    {value:'Staff',label:'Staff'},
    {value:'Host',label:'Host'},
    {value:'Guest',label:'Guest'},
    {value:'Cleaner',label:'Cleaner'},
]

//var password="4321";

function AddUserForm() {

    const [usersList, setusersList] = useState([]);

    const [password, setPassword] = useState("4321")


    

      const handleChange = (event) => {
        setPassword(event.target.value);
      };

    const initialValues={
        first_name:"",
        username:"",
        email:"",
        phone_no:"",
        password:"4321",
       
    }

        
            const [isLoading,setLoading]=useState(false);
        
            const validationSchema=Yup.object().shape({
                username: Yup.string().min(3).max(10).required(),
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
                        toast.info('USER DETAILS ADDED');
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

        <div class="main-content-wrap sidenav-open d-flex flex-column">

     


        <div class="border-top mb-5"></div>
        <div class="row">
        <div class="col-md-6">
        <h4>User Management</h4>
      
        <div class="card mb-5">
            <div class="card-body">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

            <Form>

                     <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="inputEmail3">Names</label>
                        <div class="col-sm-10">
                        <ErrorMessage name="first_name" component="span" />
                        <Field 
                            class="form-control"  type="text" name="first_name" placeholder="Names" />
                        </div>
                    </div>

                    <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="inputEmail3">username</label>
                    <div class="col-sm-10">
                    <ErrorMessage name="username" component="span" />
                    <Field 
                        class="form-control"  type="text" name="username" placeholder="Username" />
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
                    <label class="col-sm-2 col-form-label" for="inputEmail3">Role</label>
                    <div class="col-sm-10">
                    <RoleSelect
                    
                    options={options} 
                    />
                    </div>
                        
                  
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                                           
  {!isLoading && <button type="submit" class="btn btn-primary btn-sm text">Save</button>

} 
{isLoading &&
   <button type="submit" class="btn btn-primary btn-sm text" disabled> <i class="fas fa-spinner fa-spin"></i>Saving</button>
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
            <h4>Manage Users</h4>
          
            <div class="card mb-5">
            <div class="card-body">
           
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>


                            <th scope="col">#</th>
                            <th scope="col">Names</th>
                          
                            <th scope="col">Phone No</th>

                            <th scope="col">Email</th>
                            <th scope="col">icons</th>
                           

                            <th scope="col">Status</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                    {usersList.map((value, key) => {
                        return (
                        <tr>
                            <th scope="row">{key}</th>
                            <td>{value.first_name}</td>
                           
                            <td>{value.phone_no}</td>
                            <td>{value.email}</td>
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

export default AddUserForm
