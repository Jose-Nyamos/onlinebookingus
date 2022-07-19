import React,{ useState, useEffect }  from 'react';
import { Link,useParams,useHistory } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

import {Helmet} from 'react-helmet'



function ViewProperty() {

    let { id } = useParams();

    const [property_id, setProperty_id] = useState(`${id}`);
const [name, setName] = useState("");
const [private_name, setPrivate_name] = useState("");
const [summary, setSummary] = useState("");
const [city, setCity] = useState("");

const [url_name, setUrlName] = useState("");

const [property_type, setproperty_type] = useState("");


const [space_type, setspace_type] = useState("");

const history = useHistory();





    useEffect(()=>{

        axios.get(`https://onlinebookingus-app-test.herokuapp.com/property/byId/${id}`).then((response) => {
            //setpropertyList(response.data);
            // setBedrooms(response.data.bedrooms)
            setName(response.data.name)
            setPrivate_name(response.data.private_name)
            setUrlName(response.data.url_name)
            // setBathrooms(response.data.bathrooms)
            setCity(response.data.city)
            setproperty_type(response.data.property_type)

            setspace_type(response.data.space_type)
      
      
            setProperty_id(response.data.id)
      
            console.log("the property id is"+property_id)
      
          });
      
      
          axios.get(`https://onlinebookingus-app-test.herokuapp.com/propdescription/byPropertyId/${id}`).then((response) => {
      
           let prop_sumry= response.data==null ? '' : response.data.summary
           
            setSummary(prop_sumry)
           
          });
      
      },[]);


      const backButton = () => {
        history.push('/manage-properties');
      };



    
  return (
    <div class='text-left'>


    <Helmet>
    <link rel="stylesheet" href="/dist-assets/css/themes/lite-purple.min.css" />
    <link rel="stylesheet" href="/dist-assets/css/plugins/perfect-scrollbar.min.css" />

    </Helmet>


    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class="main-content-wrap sidenav-open d-flex flex-column">
      
        <div class="main-content">
            <div class="breadcrumb">
                <h1>Property</h1>
                <ul>
                    <li><a href="#">Details</a></li>
                    <button  type="submit" class="btn btn-raised btn-raised-success m-1" onClick={backButton}><i class="fa fa-plus" aria-hidden="true"></i> Back</button>
                   
                </ul>
            </div>
            <div class="separator-breadcrumb border-top"></div>
           
            <div class="row mb-4">
                <div class="col-md-6 mb-4">
                    <div class="card text-left">
                        <div class="card-body">
                        
                        <div  class="col-md-12">
                        <div class="card mb-4 o-hidden"><img class="card-img-top" src="/dist-assets/images/photo-wide-3.jpg" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{summary}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Private Name: {private_name}</li>
                            <li class="list-group-item">City: {city}</li>
                            
                        </ul>
                        <div class="card-body"><a class="card-link" href="#">Property URL link</a><a class="card-link" href="#">{url_name}</a></div>
                    </div>
                    </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card text-left" id="create-tour">
                        <div class="card-body">

                        <div class="list-group">
                                    <button class="list-group-item list-group-item-action active" type="button">
                                        Property Details

                                    </button>
                                    <button class="list-group-item list-group-item-action" type="button">Property Type {property_type}</button>
                                    <button class="list-group-item list-group-item-action" type="button">Space Type: {space_type}</button>
                                    <button class="list-group-item list-group-item-action" type="button">City: {city}</button>
                                   
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
    </div>
    <Helmet>
        <script src="/dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
        <script src="/dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
        <script src="/dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
        <script src="/dist-assets/js/scripts/script.min.js"></script>
        <script src="/dist-assets/js/scripts/sidebar.large.script.min.js"></script>
        <script src="/dist-assets/js/scripts/sidebar.script.min.js"></script>
        <script src="/dist-assets/js/plugins/echarts.min.js"></script>
        <script src="/dist-assets/js/scripts/echart.options.min.js"></script>
        <script src="/dist-assets/js/scripts/dashboard.v1.script.min.js"></script>
     
    
    </Helmet>
</div>
  )
}

export default ViewProperty