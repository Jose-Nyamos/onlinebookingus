import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';



const Addrole = () => {

    const history  = useHistory()

  
  
  return <div class='text-left'>

  
  

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
       

    
          <div class="row mb-4">
         <Manage/>

            <div class="col-md-9">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="card-title mb-3">Add Property Type Form</div>
                            <form>
                            <div class="row p-4">
     
                                    <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Name</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="name" type="text"   />
                                        </div>
                                        <div className="col-md-1"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Display Name</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="name" type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>


                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Description</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <textarea class="form-control form-control-rounded" name="name" type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                      

                                                <div className="col-md-1"></div>
                                                    <div className="col-md-4">
                                                        <b>Permissions</b>
                                                    </div>

                                                    <div className="col-md-6">
                                                               
                                            <ul style={{display: 'inlineBlock', listStyleType: 'none', padding:0, margin:0}}>

                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="33"/> <span class="checkmark"></span> 
                                            Manage Roles
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="34"/> <span class="checkmark"></span> 
                                            Database Backup
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="35"/> <span class="checkmark"></span> 
                                            Manage Messages
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="36"/> <span class="checkmark"></span> 
                                            Manage Payments
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="37"/> <span class="checkmark"></span> 
                                            Manage Changes
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="38"/> <span class="checkmark"></span> 
                                            Manage SMS
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="39"/> <span class="checkmark"></span> 
                                            Delete Customer
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="40"/> <span class="checkmark"></span> 
                                            Bookings Details View
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="41"/> <span class="checkmark"></span> 
                                            Booking Payments
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="42"/> <span class="checkmark"></span> 
                                            Admin Send Email
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="43"/> <span class="checkmark"></span> 
                                            Cancel Booking
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="44"/> <span class="checkmark"></span> 
                                            Delete Booking
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="45"/> <span class="checkmark"></span> 
                                            Edit Booking
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="46"/> <span class="checkmark"></span> 
                                            Switch Booking To Pending
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="47"/> <span class="checkmark"></span> 
                                            Edit Client Info
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="48"/> <span class="checkmark"></span> 
                                            New Reservation
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="49"/> <span class="checkmark"></span> 
                                            Confirm Arrival
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="50"/> <span class="checkmark"></span> 
                                            Add Notes
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="51"/> <span class="checkmark"></span> 
                                            Edit Charge
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="52"/> <span class="checkmark"></span> 
                                            Extra Charge
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="53"/> <span class="checkmark"></span> 
                                            Add Payment
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="54"/> <span class="checkmark"></span> 
                                            Charge Credit Card
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="55"/> <span class="checkmark"></span> 
                                            Edit Payment Schedule
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="56"/> <span class="checkmark"></span> 
                                            Schedule Additional Payment
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="57"/> <span class="checkmark"></span> 
                                            Add Amenities
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="58"/> <span class="checkmark"></span> 
                                            Edit Amenities
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="59"/> <span class="checkmark"></span> 
                                            Delete Amenities
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="60"/> <span class="checkmark"></span> 
                                            Add Page
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="61"/> <span class="checkmark"></span> 
                                            Edit Page
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="62"/> <span class="checkmark"></span> 
                                            Delete Page
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="63"/> <span class="checkmark"></span> 
                                            Edit Review
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="64"/> <span class="checkmark"></span> 
                                            Delete Review
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="65"/> <span class="checkmark"></span> 
                                            Add Admin User
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="66"/> <span class="checkmark"></span> 
                                            Edit Admin User
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="67"/> <span class="checkmark"></span> 
                                            Delete Admin User
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="68"/> <span class="checkmark"></span> 
                                            Edit Message
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="69"/> <span class="checkmark"></span> 
                                            Delete Message
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="70"/> <span class="checkmark"></span> 
                                            Add Categories
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="71"/> <span class="checkmark"></span> 
                                            Edit Categories
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="72"/> <span class="checkmark"></span> 
                                            Delete Categories
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="73"/> <span class="checkmark"></span> 
                                            Add Extra Charge
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="74"/> <span class="checkmark"></span> 
                                            Edit Extra Charge
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="75"/> <span class="checkmark"></span> 
                                            Delete Extra Charge
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="76"/> <span class="checkmark"></span> 
                                            Report Overview &amp; States
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="77"/> <span class="checkmark"></span> 
                                            Sales Report
                                            </label>
                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="78"/> <span class="checkmark"></span> 
                                            Sales Analysis
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="79"/> <span class="checkmark"></span> 
                                            Availability Calender
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="80"/> <span class="checkmark"></span> 
                                            Bookings 
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="81"/> <span class="checkmark"></span> 
                                            Add Bookings
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="82"/> <span class="checkmark"></span> 
                                            Manage Categories
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="83"/> <span class="checkmark"></span> 
                                            Manage Extra Charge
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="84"/> <span class="checkmark"></span> 
                                            Change Properties
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="85"/> <span class="checkmark"></span> 
                                            Manage Privacy Policy
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="86"/> <span class="checkmark"></span> 
                                            Manage Send Email to customers
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="87"/> <span class="checkmark"></span> 
                                            Manage Cleaning
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="88"/> <span class="checkmark"></span> 
                                            Manage Cleaning Tasks
                                            </label>

                                            </li>
                                            <li class="checkbox" style={{display: 'inline-block', minWidth: 155}}>
                                            <label>
                                            <input type="checkbox" name="permission[]" value="89"/> <span class="checkmark"></span> 
                                            Manage Blogs
                                            </label>

                                            </li>
                                            </ul>


                                                    </div>

                                           

                                           
                            
                                                      
                              <div class="col-md-12">
                                <button class="btn btn-grey">Reset</button>
                                <button class="btn btn-primary float-right">Submit</button>
                            </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
          
          </div>
       </div>
       </div>
       
    
</div>
  ;
}

export default Addrole;
