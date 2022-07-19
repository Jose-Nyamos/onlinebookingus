import React, { useCallback,useState,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom';

import Axios from "axios";

import { useHistory } from "react-router-dom";

import moment from "moment";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
//import LocationDetails from './LocationDetails';





const CustomerBooking = () => {

    const [bookingList, setBookingList] = useState([]);

const history = useHistory();


const [isLoading,setLoading]=useState(false);


    useEffect(()=>{

        Axios.get("https://onlinebookingus-app-test.herokuapp.com/booking/bookings").then((response) => {
            setBookingList(response.data.bookingList);

            console.log("THIS IS YOUR DATA"+response.data)

          });

          
    },[]);


 
    const new_property = () => {
        history.push('/property-form');
      };

return (

<div class="main-content-wrap sidenav-open d-flex flex-column">
            {/* <!-- ============ Body content start ============= --> */}
<div class="main-content">

<section class="content">
      <div class="box">
   <div class="panel-body">
    <div class="nav-tabs-custom">
    <ul class="cus nav nav-tabs" role="tablist">
            <li class="">
              <Link to="/editcustomer">Edit Customer</Link>
            </li>
            <li class="">
              <Link to="/customerproperty">Properties</Link>
            </li>

            <li class="">
              <Link to="/customerbooking">Bookings</Link>
            </li>
            
            <li class="">
              <Link to="/payout">Payouts</Link>
            </li>

            <li class="active">
              <Link to="/payment">Payment Methods</Link>
            </li>
       </ul>
      <div class="clearfix"></div>
    </div>
   </div>
</div> 
 
    {/* <!--Filtering Box Start --> */}
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-body">
              <form class="form-horizontal" enctype="multipart/form-data" action="http://localhost:8000/admin/customer/bookings/76" method="GET" accept-charset="UTF-8">
                <input class="form-control" id="startfrom" type="hidden" name="from" value="" />
                <input class="form-control" id="endto" type="hidden" name="to" value="" />
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <div class="col-md-3 col-sm-3 col-xs-12">
                        <label>Date Range</label>
                        <div class="input-group  col-xs-12">
                          <button type="button" class="form-control" id="daterange-btn">
                                <span class="pull-left"><i class="fa fa-calendar"></i> &nbsp;&nbsp; Pick a date range</span>
                                <i class="fa fa-caret-down pull-right"></i>
                              </button>
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-3 col-xs-12">
                        <label>Property</label>
                        <select class="form-control select2 select2-hidden-accessible" name="property" id="property" tabindex="-1" aria-hidden="true">
                            <option value="">All</option>
                                                      </select><span class="select2 select2-container select2-container--default" dir="ltr" style={{width: 95}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-property-container"><span class="select2-selection__rendered" id="select2-property-container" title="All">All</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                      </div>
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>Status</label>
                        <select class="form-control" name="status" id="status">
                            <option value="">All</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Declined">Declined</option>
                            <option value="Expired">Expired</option>
                            <option value="Pending">Pending</option>
                          </select>
                      </div>
                      <div class="col-md-1 col-sm-2 col-xs-4" style={{marginTop: 5}}>
                        <br />
                        <button type="submit" name="btn" class="btn btn-primary btn-flat">Filter</button>
                      </div>
                      <div class="col-md-1 col-sm-2 col-xs-4" style={{marginTop: 5}}>
                        <br />
                        <button type="submit" name="reset_btn" class="btn btn-primary btn-flat">Reset</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     {/* <!--Filtering Box End --> */}
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            {/* <!-- /.box-header --> */}
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover dt-responsive" id="dataTableBuilder" width="100%" cellspacing="0">
                    <thead>
                    <tr><th>#</th>
                    <th>Host Name</th>
                    <th>Guest Name</th>
                    <th>Property Name</th>
                    <th>Total Amount</th>
                    <th>Payouts</th>
                    <th>Status</th>
                    <th>Added By</th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                    <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {bookingList.map((value, key) => {
                        return (
                        <tr>
                            <th scope="row">{key}</th>
                           
                            <td>{value.Property.host_id}</td>
                            <td>{value.User.first_name}</td>

                            <td>{value.Property.name}</td>
                          
                            <td>{value.total}</td>
                            <td><span class="badge badge-danger">No</span></td>
                            <td><span class="badge badge-success">Accepted</span></td>
                            <td>Admin corporatehomeus</td>
                          
                          
                            <td>{moment(value.start_date).format("MM-DD-YYYY")}</td>
                            <td>{moment(value.end_date).format("MM-DD-YYYY")}</td>
                        
                           
                          
                           
                            <td>
                            
                                <button class="btn btn-info" onClick={()=>{
                                  history.push('/booking-details/'+value.id)
                                }} type="button"><i class="fa fa-share"></i></button>
                              
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
    </section>
            </div>

            </div>
          );
          }
export default CustomerBooking; 