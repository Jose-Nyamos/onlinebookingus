import React from 'react'

import { hot } from 'react-hot-loader/root';

import {Helmet} from 'react-helmet'

import { Link,NavLink } from 'react-router-dom';



const Sidebar =() =>{

    
    return (
        <div>

        <Helmet>
	<link href="dist-assets/css/themes/lite-purple.min.css" rel="stylesheet" />
    <link href="dist-assets/css/plugins/perfect-scrollbar.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="dist-assets/css/plugins/datatables.min.css" />
	<script src="dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
    <script src="dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
    <script src="dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="dist-assets/js/scripts/script.min.js"></script>
    <script src="dist-assets/js/scripts/sidebar.large.script.min.js"></script>
    <script src="dist-assets/js/plugins/datatables.min.js"></script>
    <script src="dist-assets/js/scripts/datatables.script.min.js"></script>
    <script src="cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <script src="dist-assets/js/plugins/quill.min.js"></script>
    <script src="dist-assets/js/scripts/quill.script.min.js"></script>
			
	</Helmet>
        <div class="side-content-wrap">
        <div class="sidebar-left open rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
            <ul class="navigation-left">


                        <li class="nav-item">
                            <Link class="nav-item-hold" to="/dashboard-guest">
                                <i class="nav-icon i-Bar-Chart"></i>
                                <span class="nav-text">Dashboard</span>
                            </Link>

                          
                            <div class="triangle"></div>
                        </li>


                        <li class="nav-item">


                        <a class="nav-item-hold" href="/profile-guest">
                        <i class="nav-icon i-Male"></i>
                        <span class="nav-text">Profile</span>
                         </a>



                            
                            <div class="triangle"></div>
                        </li>


                        
                     




                        
              


              
                
                

              {/*  <li class="nav-item" >
                    <a class="nav-item-hold" href="/guest-listing">
                    
                    <i class="fa fa-map-marker"></i>
                   
                        <span class="nav-text">My Listings</span>
                    </a>
                    <div class="triangle"></div>
                </li>

                */}

             

                <li class="nav-item">
                    <a class="nav-item-hold"  href="/list-property-guest">
                    

                    <i class="fa fa-plus"></i>
                        <span class="nav-text">Add New Listing</span>
                    </a>
                    <div class="triangle"></div>
                </li>

                <li class="nav-item" >
                    <a class="nav-item-hold" href="/my-favorites">
                    

                    <i class="fa fa-heart"></i>
                        <span class="nav-text">Favorites</span>
                    </a>
                    <div class="triangle"></div>
                </li>

                <li class="nav-item">


                <a class="nav-item-hold" href="/my-bookings">
                <i class="nav-icon i-Conference"></i>
                <span class="nav-text">My Bookings</span>
                 </a>
							
								
							
							
							<div class="triangle"></div>
						</li>
                



             

                <li class="nav-item">
                    <a class="nav-item-hold" href="#">
                    

                    <i class="fa fa-folder-open"></i>
                        <span class="nav-text">My Reservations</span>
                    </a>
                    <div class="triangle"></div>
                </li>


                <li class="nav-item">
                



                <Link to="/inbox-guest"  class="nav-item-hold">   <i class="fa fa-inbox"></i>
						<span class="nav-text">In Box</span></Link>
                

               
                <div class="triangle"></div>
                 </li>


                 <li class="nav-item">
                 <a class="nav-item-hold" href="/my-reviews">
                 

                 <i class="fa fa-comment"></i>
                     <span class="nav-text">Reviews</span>
                 </a>
                 <div class="triangle"></div>
               </li>

                <li class="nav-item">


                <a class="nav-item-hold" href="/payouts-guest">
                <i class="nav-icon i-Paypal"></i>
                <span class="nav-text">Payouts</span>
                 </a>

                
                    <div class="triangle"></div>
                </li>

                
             

                <li class="nav-item">
                    <a class="nav-item-hold" href="#">
                        <i class="fa fa-file"></i>
                        <span class="nav-text"> Invoices</span>
                    </a>
                    <div class="triangle"></div>
                </li>

                <li class="nav-item">
                <a class="nav-item-hold" href="datatables.html">
                <i class="fa fa-power-off"></i>
                <span class="nav-text">Logout</span></a>
                <div class="triangle"></div>
               </li>
            
                
                
               
                
            </ul>
        </div>

        <div class="sidebar-left-secondary rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
            {/* <!-- Submenu Dashboards--> */}
        
    
            <ul class="childNav" data-parent="email">
                <li class="nav-item">
                    <a href="invoice.html">
                        <i class="nav-icon i-Add-File"></i>
                        <span class="item-name">Invoice</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="inbox.html">
                        <i class="nav-icon i-Email"></i>
                        <span class="item-name">Inbox</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="chat.html">
                        <i class="nav-icon i-Speach-Bubble-3"></i>
                        <span class="item-name">Chat</span>
                    </a>
                </li>
            </ul>
            <ul class="childNav" data-parent="widgets">
                <li class="nav-item">
                    <a href="widget-card.html">
                        <i class="nav-icon i-Add-User"></i>
                        <span class="item-name">Changes</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="widget-statistics.html">
                        <i class="nav-icon i-Bar-Chart-5"></i>
                        <span class="item-name">Reports</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="widget-statistics.html">
                        <i class="nav-icon i-Financial"></i>
                        <span class="item-name">Payments</span>
                    </a>
                </li>
            
                <li class="nav-item">
                    <a href="weather-card.html">
                        <i class="nav-icon i-Receipt-4"></i>
                        <span class="item-name">
                            Weather App <span class="ml-2 badge badge-pill badge-danger"> New</span>
                        </span>
                    </a>
                </li>
            </ul>
    
            <ul class="childNav" data-parent="extrakits">
                <li class="nav-item">
                    <a href="image.cropper.html">
                        <i class="nav-icon i-Crop-2"></i>
                        <span class="item-name">Image Cropper</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="loaders.html">
                        <i class="nav-icon i-Loading-3"></i>
                        <span class="item-name">Loaders</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="ladda.button.html">
                        <i class="nav-icon i-Loading-2"></i>
                        <span class="item-name">Ladda Buttons</span>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a href="http://demos.ui-lib.com/gull/html/sessions/forgot.html">
                        <i class="nav-icon i-Find-User"></i>
                        <span class="item-name">Forgot</span>
                    </a>
                </li>
            </ul>
            <ul class="childNav" data-parent="others">
                <li class="nav-item">
                    <a href="http://demos.ui-lib.com/gull/html/sessions/not-found.html">
                        <i class="nav-icon i-Error-404-Window"></i>
                        <span class="item-name">Not Found</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="user.profile.html">
                        <i class="nav-icon i-Male"></i>
                        <span class="item-name">User Profile</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="open" href="blank.html">
                        <i class="nav-icon i-File-Horizontal"></i>
                        <span class="item-name">Blank Page</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="sidebar-overlay"></div>
    </div>
            
        </div>
    )
}

export default hot(Sidebar);
