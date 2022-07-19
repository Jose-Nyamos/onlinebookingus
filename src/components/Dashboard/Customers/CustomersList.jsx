import React from 'react'

import { useState,useEffect } from "react";
import Axios from "axios";

import { useHistory } from "react-router-dom";

import '../../../../src/assets/dist-assets/css/plugins/perfect-scrollbar.min.css'

function CustomersList() {
    const [usersList, setusersList] = useState([]);

    const history = useHistory();


    useEffect(()=>{

        Axios.get("https://onlinebookingus-app-test.herokuapp.com/users/customers").then((response) => {
            setusersList(response.data);
          });

    },[]);

    const add_customer = () => {
        history.push('/add-customer');
      };
    return (
        <div>

        <div class="main-content-wrap sidenav-open d-flex flex-column">


        <div class="row mb-8">
                    <div class="col-md-12 mb-3">
                        <div class="card text-left">
                            <div class="card-body">
                                <div class="row">
                                <div class="col-md-8 mb-3">
                                <h4 class="card-title mb-3">Customers Management</h4>
                                </div>

                                <div class="col-md-4 mb-3">
                                <button  type="submit" class="btn btn-raised btn-raised-success m-1" onClick={add_customer}><i class="fa fa-plus" aria-hidden="true"></i> New Customer</button>
                                </div>
                               
                                </div>
                              
                            
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>

                                          
        
                                            <th scope="col">#</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Profile Pic</th>
                                          
                                            <th scope="col">Phone No</th>
                
                                            <th scope="col">Email</th>
                                         
                                            <th scope="col">Status</th>
                                            <th scope="col">Created At</th>
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
                                                <td>{value.last_name}</td>
                                                <td><img class="rounded-circle m-0 avatar-sm-table" src="../../dist-assets/images/faces/1.jpg" alt="" /></td>
                                                <td>{value.phone_no}</td>
                                                <td>{value.email}</td>
                                                <td><span class="badge badge-success">Active</span></td>
                                              
                                                <td>{value.createdAt}</td>
                                               
                                             
                                              
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

export default CustomersList
