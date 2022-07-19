import React from 'react'
import AddAmenityForm from './AddAmenityForm'

function AddAmenities() {
    return (
        <div>

        <div class="main-content-wrap sidenav-open d-flex flex-column">
       
        <div class="main-content">
            <div class="breadcrumb">
                <h1>Layouts</h1>
                <ul>
                    <li><a href="href.html">Forms</a></li>
                    <li>Form Layouts</li>
                </ul>
            </div>

            <AddAmenityForm/>
           
       
          
            
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
            
        </div>
    )
}

export default AddAmenities
