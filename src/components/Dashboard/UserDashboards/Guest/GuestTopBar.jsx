import React, { useCallback,useState,useEffect,useContext } from "react";
// import Logo from '../../assets/dist-assets/images/logo.png';
// import Logo from '../images/pamojor-logo.png';
// import Logo_icon from '../../../../../../assets/dist-assets/images/faces/1.jpg';
import Logo_icon from '../../../../assets/dist-assets/images/faces/1.jpg';
import {Link,Redirect} from 'react-router-dom';
import {Language, NotificationsNone, Settings} from "@material-ui/icons";



import { AuthContext } from '../../../../helpers/AuthContext'

import { GuestBookingContext } from "../../../Properties/Context/GuestBookingContext";



import { useHistory } from "react-router-dom";

import axios from "axios";

export default function GuestTopBar() {

  const booking = useContext(GuestBookingContext);


  const {authState} = useContext(AuthContext);


  const {setAuthState} = useContext(AuthContext);

    
  
    //let navigate=useNavigate();
  
    const history = useHistory();


    

  
   






  
    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });
  
        history.push("/");
  
      };
  
      return (
        <div>
          <div className="main-header">
            <div class="logo">
              <Link to="/">
                <img src="https://demo1.wprentals.org/wp-content/uploads/2019/09/demo1_transparent.png" class="img-responsive retina_ready" alt="logo" />
              </Link>
            </div>
            <div className="menu-toggle">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="d-flex align-items-center">
              {/* <!-- / Mega menu --> */}
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <i className="search-icon text-muted i-Magnifi-Glass1"></i>
              </div>
              <li className='d-sm-inline-block'> Welcome to <span class="badge badge-warning"></span>  Dasboard</li>
            </div>
            <div style={{ margin: 'auto' }}></div>


            <div className="header-part-right">
            <li className='d-sm-inline-block'> I <i className="i-Shop-4"></i> Home </li> 
            </div>

            <div className="header-part-right">
            <li className='d-sm-inline-block'> I <i className="i-Shop-4"></i> Properties </li> 
            </div>
  
            <div className="header-part-right">
            
  
            <li className='d-sm-inline-block'>Logged in As: <span class="badge badge-warning"></span></li>
  
          
  
            </div>
          
            <div className="header-part-right">
            <li className='d-sm-inline-block'> I  <button class="badge badge-warning" >Sign out  </button> </li> 
            </div>
            <div className="header-part-right">
              {/* <!-- Full screen toggle --> */}
              <i className="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen></i>
              
              {/* <!-- Grid menu Dropdown --> */}
              <div className="dropdown">
                <i className="i-Safe-Box text-muted header-icon" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div className="menu-icon-grid">
                    <a href="#">
                      <i className="i-Shop-4"></i> Home
                    </a>
                    <a href="#">
                      <i className="i-Library"></i> UI Kits
                    </a>
                    <a href="#">
                      <i className="i-Drop"></i> Apps
                    </a>
                    <a href="#">
                      <i className="i-File-Clipboard-File--Text"></i> Forms
                    </a>
                    <a href="#">
                      <i className="i-Checked-User"></i> Sessions
                    </a>
                    <a href="#">
                      <i className="i-Ambulance"></i> Support
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Notificaiton --> */}
              <div className="dropdown">
              <div className="badge-top-container" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="badge badge-primary">1</span>
               
                <i class="fas fa-shopping-cart header-icon"></i>
              </div>
              {/* <!-- Notification dropdown --> */}
              <div className="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none" aria-labelledby="dropdownNotification" data-perfect-scrollbar data-suppress-scroll-x="true">
                <div className="dropdown-item d-flex">
                  <div className="notification-icon">
                    <i className="i-Speach-Bubble-6 text-primary mr-1"></i>
                  </div>
                  <div className="notification-details flex-grow-1">
                    <p className="m-0 d-flex align-items-center">
                      <span>New message</span>
                      <span className="badge badge-pill badge-primary ml-1 mr-1">new</span>
                      <span className="flex-grow-1"></span>
                      <span className="text-small text-muted ml-auto">10 sec ago</span>
                    </p>
                    <h4><Link to="/cart-details"><span className="badge badge-success">View Cart</span></Link></h4>
                  </div>
                </div>
               
                
              
              </div>
            </div>
              <div className="dropdown">
                <div className="badge-top-container" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="badge badge-primary">3</span>
                  <i className="i-Bell text-muted header-icon"></i>
                </div>
                {/* <!-- Notification dropdown --> */}
                <div className="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none" aria-labelledby="dropdownNotification" data-perfect-scrollbar data-suppress-scroll-x="true">
                  <div className="dropdown-item d-flex">
                    <div className="notification-icon">
                      <i className="i-Speach-Bubble-6 text-primary mr-1"></i>
                    </div>
                    <div className="notification-details flex-grow-1">
                      <p className="m-0 d-flex align-items-center">
                        <span>New message</span>
                        <span className="badge badge-pill badge-primary ml-1 mr-1">new</span>
                        <span className="flex-grow-1"></span>
                        <span className="text-small text-muted ml-auto">10 sec ago</span>
                      </p>
                      <p className="text-small text-muted m-0">James: Hey! are you busy?</p>
                    </div>
                  </div>
                  <div className="dropdown-item d-flex">
                    <div className="notification-icon">
                      <i className="i-Receipt-3 text-success mr-1"></i>
                    </div>
                    <div className="notification-details flex-grow-1">
                      <p className="m-0 d-flex align-items-center">
                        <span>New order received</span>
                        <span className="badge badge-pill badge-success ml-1 mr-1">new</span>
                        <span className="flex-grow-1"></span>
                        <span className="text-small text-muted ml-auto">2 hours ago</span>
                      </p>
                      <p className="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
                    </div>
                  </div>
                  <div className="dropdown-item d-flex">
                    <div className="notification-icon">
                      <i className="i-Empty-Box text-danger mr-1"></i>
                    </div>
                    <div className="notification-details flex-grow-1">
                      <p className="m-0 d-flex align-items-center">
                        <span>Product out of stock</span>
                        <span className="badge badge-pill badge-danger ml-1 mr-1">3</span>
                        <span className="flex-grow-1"></span>
                        <span className="text-small text-muted ml-auto">10 hours ago</span>
                      </p>
                      <p className="text-small text-muted m-0">Headphone E67, R98, XL90, Q77</p>
                    </div>
                  </div>
                  <div className="dropdown-item d-flex">
                    <div className="notification-icon">
                      <i className="i-Data-Power text-success mr-1"></i>
                    </div>
                    <div className="notification-details flex-grow-1">
                      <p className="m-0 d-flex align-items-center">
                        <span>Server Up!</span>
                        <span className="badge badge-pill badge-success ml-1 mr-1">3</span>
                        <span className="flex-grow-1"></span>
                        <span className="text-small text-muted ml-auto">14 hours ago</span>
                      </p>
                      <p className="text-small text-muted m-0">Server rebooted successfully</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="dropdown">
         
                <div className="user col align-self-end">
              
                  <img src={Logo_icon} id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <div className="dropdown-header">
                      <i className="i-Lock-User mr-1"></i>                     </div>
                    <a className="dropdown-item">Account settings</a>
                    <a className="dropdown-item">Billing history</a>
                    <a className="dropdown-item" >
                    <button > Sign out</button>
                    
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
  