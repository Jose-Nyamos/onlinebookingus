import { hot } from 'react-hot-loader/root';
import {Helmet} from 'react-helmet'
import React from "react";
import { useContext } from 'react';


import '../../../src/assets/dist-assets/css/plugins/perfect-scrollbar.min.css'

import { Link,NavLink } from 'react-router-dom';



const Sidebar =() =>{
	return (
		<div>
	<Helmet>
	<link href="dist-assets/css/themes/lite-purple.min.css" rel="stylesheet" />
    <link href="dist-assets/css/plugins/perfect-scrollbar.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="./dist-assets/css/plugins/datatables.min.css" />
	<script src="dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
    <script src="dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
    <script src="/dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
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
							<Link class="nav-item-hold" to="/dashboard">
								<i class="nav-icon i-Bar-Chart"></i>
								<span class="nav-text">Dashboard</span>
							</Link>

							
							<div class="triangle"></div>
						</li>
						<li class="nav-item">



						<a class="nav-item-hold" href="/customers">
						<i class="nav-icon i-Conference"></i>
								<span class="nav-text">Customers</span>
							</a>
							
								
							
							<div class="triangle"></div>
						</li>
						
					


						<li class="nav-item">

						<Link to="/availability-calendar"  class="nav-item-hold"> 	<i class="fa fa-calendar"></i>
						<span class="nav-text">Availability calendar</span></Link>
							
							<div class="triangle"></div>
						</li>




					

					<li class="nav-item" data-item="propmenu">


					       <Link class="nav-item-hold" to="#">
							

								<i class="i-Home1"></i>
								<span class="nav-text">Properties</span>
							</Link>


                        <div class="triangle"></div>
                    </li>


					




						<li class="nav-item" data-item="extrakits">
							<Link class="nav-item-hold" to="#">
							

							<i class="nav-icon i-ID-Card"></i>
								<span class="nav-text">Manage Bookings</span>
							</Link>

							
							<div class="triangle"></div>
						</li>

						<li class="nav-item active" >


						<a class="nav-item-hold" href="/all-payments">
						        <i class="nav-icon i-Financial"></i>
								<span class="nav-text">Payments Table</span>
							</a>



					
						<div class="triangle"></div>
					</li>
						<li class="nav-item">
							<Link to="/payouts" class="nav-item-hold" >
								<i class="nav-icon i-Paypal"></i>
								<span class="nav-text">Payouts</span>
							</Link>
							<div class="triangle"></div>
						</li>
						<li class="nav-item">

						<a class="nav-item-hold" href="/amenities">
						<i class="nav-icon i-Life-Safer"></i>
								<span class="nav-text">Amenities</span>
							</a>

							
							<div class="triangle"></div>
						</li>

						<li class="nav-item">
							<Link class="nav-item-hold" to="/staticpages">
								<i class="nav-icon i-ID-Card"></i>
								<span class="nav-text">Static Pages</span>
							</Link>
							<div class="triangle"></div>
						</li>
						<li class="nav-item">
							<Link class="nav-item-hold" to="/managereviews">
								<i class="nav-icon i-Eye"></i>
								<span class="nav-text">Manage Reviews</span>
							</Link>
							<div class="triangle"></div>
						</li>

						<li class="nav-item">
						
						<a class="nav-item-hold" href="/users">
								<i class="nav-icon i-Add-User"></i>
								<span class="nav-text">Users</span>
							</a>
							
							<div class="triangle"></div>
						</li>

						<li class="nav-item" >
							<Link class="nav-item-hold" to="/show-messages">
								<i class="nav-icon i-Receipt-4"></i>
								<span class="nav-text">Messages</span>
							</Link>
							<div class="triangle"></div>
						</li>

						<li class="nav-item">
							<Link class="nav-item-hold" to="/category">
								<i class="nav-icon i-Receipt-4"></i>
								<span class="nav-text">Categories</span>
							</Link>
							<div class="triangle"></div>
						</li>

						<li class="nav-item" >
							<Link class="nav-item-hold" to="/cleaningtask">
								<i class="nav-icon i-Receipt-4"></i>
								<span class="nav-text">Clean Tasks</span>
							</Link>
							<div class="triangle"></div>
						</li>
					
						
					
						<li class="nav-item">
							<Link class="nav-item-hold" to="/bloglist">
								<i class="nav-icon i-Blogger"></i>
								<span class="nav-text">Blogs</span>
							</Link>
							<div class="triangle"></div>
						</li>
					
					
						<li class="nav-item active" data-item="others">
							<Link class="nav-item-hold" to="#">
								<i class="nav-icon i-Mail-Send"></i>
								<span class="nav-text">Send Email</span>
							</Link>
							<div class="triangle"></div>
						</li>
						<li class="nav-item active" data-item="email">
							<Link class="nav-item-hold" to="#">
								<i class="nav-icon i-Mail-Gallery"></i>
								<span class="nav-text">Email Templates</span>
							</Link>
							<div class="triangle"></div>
						</li>
						<li class="nav-item active">
							<Link class="nav-item-hold" to="#">
								<i class="nav-icon i-Bar-Chart-5"></i>
								<span class="nav-text">Reports</span>
							</Link>
							<div class="triangle"></div>
						</li>
					
						<li class="nav-item active" >
							<Link class="nav-item-hold" to="/settings">
								<i class="nav-icon i-Settings-Window"></i>
								<span class="nav-text">Settings</span>
							</Link>
							<div class="triangle"></div>
						</li>

					
					</ul>
				</div>

				<div class="sidebar-left-secondary rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
					{/* <!-- Submenu Dashboards--> */}



					<ul class="childNav" data-parent="propmenu">
						<li class="nav-item">


						
					

						<Link to="/manage-properties" class="nav-item-hold"><i class="i-Home1"></i><span class="nav-text">View Properties</span>
						</Link>
						
						<div class="triangle"></div>
			
						</li>
						<li class="nav-item">
						<Link to="/property-form" class="nav-item-hold"><i class="i-Home1"></i><span class="nav-text">Add Property</span>
						</Link>
                        <div class="triangle"></div>
						</li>
						
					</ul>
				
			
					<ul class="childNav" data-parent="email">
						<li class="nav-item">
							<Link to="invoice.html">
								<i class="nav-icon i-Add-File"></i>
								<span class="item-name">Invoice</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="inbox.html">
								<i class="nav-icon i-Email"></i>
								<span class="item-name">Inbox</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="chat.html">
								<i class="nav-icon i-Speach-Bubble-3"></i>
								<span class="item-name">Chat</span>
							</Link>
						</li>
					</ul>
				
			
					<ul class="childNav" data-parent="extrakits">
						<li class="nav-item">
							<Link to="/addbooking">
								<i class="nav-icon i-Crop-2"></i>
								<span class="item-name">Add Bookings</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="/bookings">
								<i class="nav-icon i-Crop-2"></i>
								<span class="item-name">Bookings</span>
							</Link>
						</li>
					
					</ul>
				
					<ul class="childNav" data-parent="sessions">
						<li class="nav-item">
							<Link to="http://demos.ui-lib.com/gull/html/sessions/signin.html">
								<i class="nav-icon i-Checked-User"></i>
								<span class="item-name">Sign in</span>
							</Link>
						</li>
						<li class="nav-item">
							
								<i class="nav-icon i-Add-User"></i>
								
							<Link to="/manage-properties" class="nav-item-hold"><i class="i-Home1"></i><span class="nav-text">New User</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="http://demos.ui-lib.com/gull/html/sessions/forgot.html">
								<i class="nav-icon i-Find-User"></i>
								<span class="item-name">Forgot</span>
							</Link>
						</li>
					</ul>
					<ul class="childNav" data-parent="others">
						<li class="nav-item">
							<Link to="http://demos.ui-lib.com/gull/html/sessions/not-found.html">
								<i class="nav-icon i-Error-404-Window"></i>
								<span class="item-name">Not Found</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="user.profile.html">
								<i class="nav-icon i-Male"></i>
								<span class="item-name">User Profile</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link class="open" to="blank.html">
								<i class="nav-icon i-File-Horizontal"></i>
								<span class="item-name">Blank Page</span>
							</Link>
						</li>
					</ul>
				</div>
				<div class="sidebar-overlay"></div>
			</div>
		</div>
	);
}
export default hot(Sidebar);