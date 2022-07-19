import React from 'react'

import { useState,useEffect } from "react";
import Axios from "axios";

import { useHistory } from "react-router-dom";

function PropertiesTable() {

    const [propertyList, setpropertyList] = useState([]);

    const [usersList, setusersList] = useState([]);

    const history = useHistory();



    const getPropertiesList=()=>{

        Axios.get("https://onlinebookingus-app-test.herokuapp.com/property/allproperties").then((response) => {
            setpropertyList(response.data);
          });

    };


    useEffect(()=>{

        Axios.get("https://onlinebookingus-app-test.herokuapp.com/property/allproperties").then((response) => {
            setpropertyList(response.data);
          });

    },[]);


    const new_property = () => {
        history.push('/property-form');
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
                            <h4 class="card-title mb-3">Property Management</h4>
                            </div>

                            <div class="col-md-4 mb-3">
                            <button  type="submit" class="btn btn-raised btn-raised-success m-1" onClick={new_property}><i class="fa fa-plus" aria-hidden="true"></i> Add Property</button>
                            </div>
                           
                            </div>
                            
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>

                                          
        
                                                <th scope="col">#</th>
                                                <th scope="col">Property Name</th>
                                                <th scope="col">private_name</th>

                                                <th scope="col">Owner</th>
                                                <th scope="col">space_type</th>
                                                <th scope="col">url_name</th>
                                                <th scope="col">bedrooms</th>

                                                <th scope="col">beds</th>
                                                <th scope="col">bed_type</th>


                                                <th scope="col">bathrooms</th>
                                                <th scope="col">Email</th>


                                              
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {propertyList.map((value, key) => {
                                            return (
                                            <tr>
                                                <th scope="row">{key}</th>
                                                <td>{value.name}</td>
                                                <td>{value.private_name}</td>
                                                
                                                <td>{value.User.first_name}<img class="rounded-circle m-0 avatar-sm-table" src="../../dist-assets/images/faces/1.jpg" alt="" /></td>
                                                <td>{value.space_type}</td>
                                                <td>{value.url_name}</td>
                                                <td>{value.bedrooms}</td>
                                                <td>{value.beds}</td>
                                                <td>{value.bed_type}</td>
                                                <td>{value.bathrooms}</td>
                                               
                                                <td>{value.User.email}</td>
                                         

                                                
                                                
                                                <td>
                                                    <button class="btn btn-success" type="button" onClick={()=>{

                                                        history.push('/view-property/'+value.id)
                    
                                                    }}><i class="nav-icon i-Eye"></i></button>
                                                    <button class="btn btn-success" type="button" onClick={()=>{

                                                        history.push('/basicdetails/'+value.id)
                    
                                                    }}><i class="nav-icon i-Pen-2"></i></button>
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

export default PropertiesTable
