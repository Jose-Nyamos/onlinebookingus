import React from "react";
import { useContext } from 'react';



import { Link,useHistory } from 'react-router-dom';




export default function Sidebar() {

	const history = useHistory();

	const routeToAvailabilityCalendar=()=>{

		history.push('/availability-calendar')

	}
	return (
		<div>
			<div class="side-content-wrap">
				<div class="sidebar-left open rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
					<ul class="navigation-left">
						<li class="nav-item" data-item="dashboard">
							<a class="nav-item-hold" href="#">
								<i class="nav-icon i-Bar-Chart"></i>
								<span class="nav-text">Dashboard</span>
							</a>
							<div class="triangle"></div>
						</li>
						<li class="nav-item">
							
								
							
							<Link to="/customers"  class="nav-item-hold"> <i class="nav-icon i-Conference"></i>
						<span class="nav-text">Customers</span></Link>
							<div class="triangle"></div>
						</li>
						
						<li class="nav-item">
							<a class="nav-item-hold" onClick={routeToAvailabilityCalendar}>
							

								<i class="fa fa-calendar"></i>
								<span class="nav-text">Availability calendar</span>
							</a>
							<div class="triangle"></div>
						</li>




					

					<li class="nav-item" data-item="propmenu">


					       <a class="nav-item-hold" href="#">
							

								<i class="i-Home1"></i>
								<span class="nav-text">Properties</span>
							</a>


                        <div class="triangle"></div>
                    </li>


					




						<li class="nav-item" data-item="extrakits-booking">
							<a class="nav-item-hold" href="#">
							

							<i class="nav-icon i-ID-Card"></i>
								<span class="nav-text">Manage Bookings</span>
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

						<li class="nav-item" data-item="apps">
							<a class="nav-item-hold" href="#">
								<i class="nav-icon i-ID-Card"></i>
								<span class="nav-text">Static Pages</span>
							</a>
							<div class="triangle"></div>
						</li>
						<li class="nav-item" data-item="widgets">
							<a class="nav-item-hold" href="#">
								<i class="nav-icon i-Receipt-4"></i>
								<span class="nav-text">Categories</span>
							</a>
							<div class="triangle"></div>
						</li>
						<li class="nav-item" data-item="widgets">
							<a class="nav-item-hold" href="#">
								<i class="nav-icon i-Receipt-4"></i>
								<span class="nav-text">Clean Tasks</span>
							</a>
							<div class="triangle"></div>
						</li>
						<li class="nav-item">

						<Link to="/amenities"  class="nav-item-hold"> <i class="nav-icon i-Life-Safer"></i>
						<span class="nav-text">Amenities</span></Link>
							
							<div class="triangle"></div>
						</li>
						<li class="nav-item" data-item="charts">
							<a class="nav-item-hold" href="#">
								<i class="nav-icon i-Eye"></i>
								<span class="nav-text">Manage Reviews</span>
							</a>
							<div class="triangle"></div>
						</li>
					
						<li class="nav-item">
							<a class="nav-item-hold" href="datatables.html">
								<i class="nav-icon i-Blogger"></i>
								<span class="nav-text">Blogs</span>
							</a>
							<div class="triangle"></div>
						</li>
						<li class="nav-item">
							
						<i class="nav-icon i-Add-User"></i>
							
							
						<Link to="/users" class="nav-item-hold"><span class="nav-text">Users</span>
						</Link>
							<div class="triangle"></div>
						</li>
					
						<li class="nav-item active" data-item="others">
							<a class="nav-item-hold" href="#">
								<i class="nav-icon i-Mail-Send"></i>
								<span class="nav-text">Send Email</span>
							</a>
							<div class="triangle"></div>
						</li>
						<li class="nav-item active" data-item="email">
							<a class="nav-item-hold" href="#">
								<i class="nav-icon i-Mail-Gallery"></i>
								<span class="nav-text">Email Templates</span>
							</a>
							<div class="triangle"></div>
						</li>
						<li class="nav-item active" data-item="others">
							<a class="nav-item-hold" href="#">
								<i class="nav-icon i-Bar-Chart-5"></i>
								<span class="nav-text">Reports</span>
							</a>
							<div class="triangle"></div>
						</li>
						<li class="nav-item active" data-item="others">
							<a class="nav-item-hold" href="#">
								<i class="nav-icon i-Financial"></i>
								<span class="nav-text">Payments Table</span>
							</a>
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


					<ul class="childNav" data-parent="extrakits-booking">
						
						<li class="nav-item">

						   
						<Link to="/bookings" ><i class="nav-icon i-ID-Card"></i>
						<span class="item-name">Booking</span>
						</Link>
							
							
						</li>
						<li class="nav-item">
						 
							<Link to="/addbooking" ><i class="fa fa-plus" aria-hidden="true"></i>
							<span class="item-name">Add Booking</span>
						
							</Link>


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
							<a href="toastr.html">
								<i class="nav-icon i-Bell"></i>
								<span class="item-name">Toastr</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="sweet.alerts.html">
								<i class="nav-icon i-Approved-Window"></i>
								<span class="item-name">Sweet Alerts</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="tour.html">
								<i class="nav-icon i-Plane"></i>
								<span class="item-name">User Tour</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="upload.html">
								<i class="nav-icon i-Data-Upload"></i>
								<span class="item-name">Upload</span>
							</a>
						</li>
					</ul>
					<ul class="childNav" data-parent="uikits">
						<li class="nav-item">
							<a href="alerts.html">
								<i class="nav-icon i-Bell1"></i>
								<span class="item-name">Alerts</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="accordion.html">
								<i class="nav-icon i-Split-Horizontal-2-Window"></i>
								<span class="item-name">Accordion</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="badges.html">
								<i class="nav-icon i-Medal-2"></i>
								<span class="item-name">Badges</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="buttons.html">
								<i class="nav-icon i-Cursor-Click"></i>
								<span class="item-name">Buttons</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="cards.html">
								<i class="nav-icon i-Line-Chart-2"></i>
								<span class="item-name">Cards</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="card.metrics.html">
								<i class="nav-icon i-ID-Card"></i>
								<span class="item-name">Card Metrics</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="carousel.html">
								<i class="nav-icon i-Video-Photographer"></i>
								<span class="item-name">Carousels</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="lists.html">
								<i class="nav-icon i-Belt-3"></i>
								<span class="item-name">Lists</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="pagination.html">
								<i class="nav-icon i-Arrow-Next"></i>
								<span class="item-name">Paginations</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="popover.html">
								<i class="nav-icon i-Speach-Bubble-2"></i>
								<span class="item-name">Popover</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="progressbar.html">
								<i class="nav-icon i-Loading"></i>
								<span class="item-name">Progressbar</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="tables.html">
								<i class="nav-icon i-File-Horizontal-Text"></i>
								<span class="item-name">Tables</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="tabs.html">
								<i class="nav-icon i-New-Tab"></i>
								<span class="item-name">Tabs</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="tooltip.html">
								<i class="nav-icon i-Speach-Bubble-8"></i>
								<span class="item-name">Tooltip</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="modals.html">
								<i class="nav-icon i-Duplicate-Window"></i>
								<span class="item-name">Modals</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="nouislider.html">
								<i class="nav-icon i-Width-Window"></i>
								<span class="item-name">Sliders</span>
							</a>
						</li>
					</ul>
					<ul class="childNav" data-parent="sessions">
						<li class="nav-item">
							<a href="http://demos.ui-lib.com/gull/html/sessions/signin.html">
								<i class="nav-icon i-Checked-User"></i>
								<span class="item-name">Sign in</span>
							</a>
						</li>
						<li class="nav-item">
							
								<i class="nav-icon i-Add-User"></i>
								
							<Link to="/manage-properties" class="nav-item-hold"><i class="i-Home1"></i><span class="nav-text">New User</span>
							</Link>
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
	);
}
