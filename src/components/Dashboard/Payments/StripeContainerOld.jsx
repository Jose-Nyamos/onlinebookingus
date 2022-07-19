import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51KMF0eDBrPMc5x7R3pO8u49PVN6mnvMUw1KDQZApih3A6VAwRdQqnZad0QAz3C39NlJahlQwso6DsZ8Mm8pz97SP00VRAe6xw3"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
	return (
        <div>
    
    
        <div class="main-content-wrap sidenav-open d-flex flex-column">
       
        <div class="main-content">
            <div class="breadcrumb">
                <h1>Widget Card</h1>
                <ul>
                    <li><a href="#">Widgets</a></li>
                    <li>Widget Card</li>
                </ul>
            </div>
            <div class="separator-breadcrumb border-top"></div>
          
      <section class="widget-card">
    
      <div class="row mb-4">
    
      <div class="col-md-8">
          <div class="card text-left">
              <div class="card-body">
                  <div class="row">
                   
                      <div class="col-6">
    
                      <div class="woocommerce-additional-fields">
    
                      <Elements stripe={stripeTestPromise}>
			                  <PaymentForm />
		                 </Elements>
                     
    
                  </div>
    
                      
    
    
                          
                      </div>
                  </div>
    
                
    
          
    
              </div>
          </div>
      </div>
      <div class="col-md-4 mb-4">
          <div class="card text-left">
              <div class="card-body">
                  <h4 class="card-title mb-2">Entire home/apt in Avon Park , Avon Park, Florida,  </h4>
    
                  <div class="col-lg-12 col-xl-12 mt-3">
                  <div class="card">
                  <img class="d-block w-100 rounded rounded"  src="../../dist-assets/images/products/9-1-1-1-143x83.jpg" alt="First slide" />
                  <div class="wprentals_sidebar_cart">


                  <div class="panel-body">
                  <div class="extra-sizefont"><strong>Entire home/apt in Avon Park</strong></div>
                  <div class="h6"></div>
                  <hr/>
                  <div class="h6"><strong></strong> </div>
                  <div class="h6"><strong></strong></div>
                  <hr/>

                  <div class="">
                  <div class="side_tt">Cancellation Policy</div>
                  <div class="side_tt">
                      <a href="#" data-toggle="tooltip" title="{{ $result->policy->privacy }}">Flexible</a>
                      </div>
                </div>
                 
               
                  <div class="clearfix"></div>
                  <hr/>
                  <div class="exfont">
                    <div class="side_tt">$150 x 3 nights</div>
                    <div class="side_tt text-right">$150</div>
                  </div>
                 
                
                
                 
                </div>
                 
                  <h4>Total: <span class="woocommerce-Price-currencySymbol"> $</span><span class="woocommerce-Price-amount amount"> 150</span></h4>
              </div>
                  </div>
              </div>
                 
                 
              </div>
          </div>
      </div>
    
      
      
    </div>
    
            
    
            
              
            </section>
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
	)}