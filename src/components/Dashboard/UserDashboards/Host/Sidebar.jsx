import React from 'react'


import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
		<div class="side-content-wrap">
        <div class="sidebar-left open rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
            <ul class="navigation-left">

            <li class="nav-item" data-item="dashboard">
            <Link class="nav-item-hold" to="/dashboard-host">
                <i class="nav-icon i-Bar-Chart"></i>
                <span class="nav-text">Dashboard</span>
            </Link>

          
            <div class="triangle"></div>
        </li>
              


        <li class="nav-item">
        <i class="nav-icon i-Male"></i>
        <Link to="/profile-guest" class="nav-item-hold"><span class="nav-text">Profile</span>
        </Link>
        <div class="triangle"></div>
    </li>
                
                

                <li class="nav-item" >
                    
                    
                    <i class="fa fa-map-marker"></i>
                   
                      

                <Link to="/my-listings" class="nav-item-hold"><span class="nav-text">My Listings</span>
                        </Link>
                    
                    <div class="triangle"></div>
                </li>

                <li class="nav-item">
                   
                    

                    <i class="fa fa-plus"></i>
                        
                   <Link to="/list-property-host" class="nav-item-hold"><i class="i-Home1"></i><span class="nav-text">Add Property</span>
				    </Link>
                   
                    <div class="triangle"></div>
                </li>

                <li class="nav-item" >
                    <a class="nav-item-hold" href="#">
                    

                    <i class="fa fa-heart"></i>
                        <span class="nav-text">Favorites</span>
                    </a>
                    <div class="triangle"></div>
                </li>
                



                <li class="nav-item">
                    <a class="nav-item-hold" href="#">
                    

                    <i class="fa fa-folder-open"></i>
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
                

                <Link to="/inbox-host"  class="nav-item-hold">   <i class="fa fa-inbox"></i>
						<span class="nav-text">In Box</span></Link>
                

                <div class="triangle"></div>
                 </li>


                 <li class="nav-item">
                 <a class="nav-item-hold" href="#">
                 

                 <i class="fa fa-comment"></i>
                     <span class="nav-text">Reviews</span>
                 </a>
                 <div class="triangle"></div>
               </li>
               
                <li class="nav-item" data-item="uikits">
                    <a class="nav-item-hold" href="#">
                        <i class="nav-icon i-Paypal"></i>
                        <span class="nav-text">Payouts</span>
                    </a>
                    <div class="triangle"></div>
                </li>

                
             

                <li class="nav-item" >
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
