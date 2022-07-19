import React, { useEffect, useState } from "react";

import {Link,useParams} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';


import moment from "moment";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
//import LocationDetails from './LocationDetails';






const BookDetails = () => {


    let { id } = useParams();

    const [property_id, setProperty_id] = useState(0);
    const [booking_id, setBooking_id] = useState(0);
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [userfname, setUserFname] = useState('');
    const [clientemail, setClientEmail] = useState('');
    const [clientphoneno, setClientPhoneNo] = useState('');
    const [total_night, setTotal_night] = useState('');
    const [property_address, setProperty_address] = useState('');
    const [totalcharge, setTotalCharge] = useState(0);

    const [property_name, setPropertyName] = useState("");

    const [propertyprice, setPropertyPrice] = useState(0);

    const [hostname, setHostName] = useState(0);

    const [status, setStatus] = useState('');

    const [cancelled_at, setCancelled_at] = useState(moment(new Date()));


    const history=useHistory()

    const [isLoading,setLoading]=useState(false);



    useEffect(() => {
        axios.get(`https://onlinebookingus-app-test.herokuapp.com/booking/getbookingById/${id}`).then((response) => {
            setBooking_id(response.data.booking.id)
            setStart_date(response.data.booking.start_date)
            setEnd_date(response.data.booking.end_date)
            setUserFname(response.data.user.first_name)
            setClientEmail(response.data.user.email)
            setClientPhoneNo(response.data.user.phone_no)
            setTotal_night(response.data.booking.total_night)
            setProperty_address(response.data.propertyaddress.address_line_2)

            setTotalCharge(response.data.booking.total)
            setStatus(response.data.booking.status)
            setPropertyName(response.data.property.name)
            setHostName(response.data.owner.first_name)
            setPropertyPrice(response.data.propertyprice.price)
        //   setFirst_name(response.data.first_name);
        //   setLast_name(response.data.last_name)
    
        });


       



    }, []);


    const confirmArrival = () => {
      setLoading(true);


   

      const data = {
        confirm_arrival_status: 'Yes',    
    }
    
      axios.put("https://onlinebookingus-app-test.herokuapp.com/booking/confirm_arrival/"+id, data).then((response) => {
    
    
            console.log("STATUS UPDATED "+response.data)
    
    
            setTimeout(() => {
              setLoading(false);
              toast.info('Arrival Confirmed');
              // navigate.push('/add-property');
              // history.push(`/description/${id}`)
          }, 2000);
       
      });
    };



    const switchToPending = () => {
      setLoading(true);


   

      const data = {
        status: 'Pending',    
    }
    
      axios.put("https://onlinebookingus-app-test.herokuapp.com/booking/update_status/"+id, data).then((response) => {
    
    
            console.log("STATUS UPDATED "+response.data)
    
    
            setTimeout(() => {
              setLoading(false);
              toast.info('Status Updated');
              // navigate.push('/add-property');
              // history.push(`/description/${id}`)
          }, 2000);
       
      });
    };


    const cancelBooking = () => {
      setLoading(true);

      const data = {
        status: 'Cancelled', 
        cancelled_at:cancelled_at,

    }
    
      axios.put("https://onlinebookingus-app-test.herokuapp.com/booking/update_cancellation/"+id, data).then((response) => {
    
    
            console.log("STATUS UPDATED "+response.data)
    
    
            setTimeout(() => {
              setLoading(false);
              toast.info('Status Updated');
              // navigate.push('/add-property');
              // history.push(`/description/${id}`)
          }, 2000);
       
      });
    };


        

    return (
        <div>
    
            <div class="main-content-wrap sidenav-open d-flex flex-column">
            {/* <!-- ============ Body content start ============= --> */}
            <div class="main-content"> 
            
          
            <section class="content-header">
                <h4>
                Booking Details
               
                <small>Manage Bookings</small>
                </h4>
               
                <ol class="breadcrumb">
                <li><Link to="/dashboard"><i class="fa fa-dashboard"></i> Home</Link></li>
                </ol>
                </section>

                <div class="box-body">

                    
                    <Link to="/all-payments" class="btn btn-primary btn-lg" style={{marginBottom: 10}}>Payments</Link>

                    
                      <table class="table table-condensed">

                        <thead style={{background: '#ddd'}}>

                          <tr>

                            <th>Booking Id</th>

                            <th>Check In</th>

                            <th>Check Out</th>

                            <th>Client's Name</th>

                            <th>Email</th>

                            <th>Night</th>

                            <th>Apartment Address</th>

                            <th>Status</th>

                          </tr>

                        </thead>

                        <tbody>

                          <tr>

                            <td>{booking_id}</td>


                            <td>{moment(start_date).format("MM-DD-YYYY")}</td>
                            <td>{moment(end_date).format("MM-DD-YYYY")}</td>

                            

                            <td>{userfname}</td>

                            <td>{clientemail}</td>

                            <td>{total_night}</td>

                            <td>{property_address}</td>

                            <td>

                                
                                  <span class="label label-success">{status}</span>

                                
                            </td>

                          </tr>

                        </tbody>

                      </table>

                      <table class="table table-condensed">

                        <tbody><tr>

                          <th>Property name</th>

                          <td>{property_name}</td>

                        </tr>

                        <tr>

                          <th>Host Name</th>

                          <td>{hostname}</td>

                        </tr>

                        <tr>

                          <th>Booking Date</th>

                          <td>28/01/2022 10:19 AM</td>

                        </tr>

                        <tr>

                          <th>Added by</th>

                          
                          <td>Corporatehomeus</td>

                          
                        </tr>

                        <tr>

                          <th>{status}</th>

                          <td>

                               
                                  <span class="label label-success">Accepted</span>

                                  
                                  <Link to={`/edit-booking/${id}`} class="btn btn-primary btn-sm">Change Properties</Link>



                                  {!isLoading &&  <button type="submit" id="bookingConfirm" onClick={switchToPending} class="btn btn-primary btn-sm">
                                  Switch bookings to pending
                                 </button>
  
  } 
  {isLoading &&
  <button type="submit" id="bookingConfirm" class="btn btn-primary btn-sm" disabled> <i class="fas fa-spinner fa-spin"></i>Switching status pending...</button>
  }
  

                                  
                                  
                                

                                  
                                  
                                  <Link to="#" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure to delete bookings?');">Delete Bookings</Link>

                                  
                                  
                                

                                  {!isLoading &&  <button type="submit" id="bookingConfirm" onClick={cancelBooking} class="btn btn-danger btn-sm">
                                  Cancel Bookings
                                 </button>
  
  } 
  {isLoading &&
  <button type="submit" id="bookingConfirm" class="btn btn-primary btn-sm" disabled> <i class="fas fa-spinner fa-spin"></i>Cancelling Booking...</button>
  }
  
                                  
                                  <button onClick={()=>{
                                    history.push(`/edit-booking/${id}`)

                                  }} class="btn btn-info btn-sm">Edit Bookings</button>

                                  
                                  
                          </td>

                        </tr>

                        <tr>

                          <th>Check In | Check Out</th>

                          <td>

                              
                                <span class="label label-danger">Not Checked In</span>

                               
                             

                                {!isLoading &&  <button type="submit" id="bookingConfirm" onClick={confirmArrival} class="btn btn-success btn-sm">
                                Confirm Arrival
                               </button>

} 
{isLoading &&
<button type="submit" id="bookingConfirm" class="btn btn-success btn-sm" disabled> <i class="fas fa-spinner fa-spin"></i>Confirming</button>
}


                                
                               
                          </td>

                        </tr>

                        <tr>

                          <th>Client's Name</th>

                          <td>

                            {userfname} &nbsp;

                            
                            <Link to="#" data-toggle="modal" data-target="#customerModal" class="btn btn-primary btn-sm">Edit Client's Info</Link>&nbsp;

                            
                            
                            <Link to="/addbooking" class="btn btn-primary btn-sm">New Reservation</Link>

                            
                          </td>

                        </tr>

                        <tr>

                          <th>Phone Number</th>

                          <td>{clientphoneno}</td>

                        </tr>

                        <tr>

                          <th>Client Email</th>

                          <td>

                          {clientemail} &nbsp;&nbsp;

                            
                               

                                
                                <Link to={`/admin-send-email/${id}`} class="btn btn-primary btn-sm send-mail">



                                  Send Email

                                </Link>

                            
                            
                          </td>

                        </tr>



                        <tr>

                          <th>Number of guests</th>

                          <td>

                            6



                          </td>

                        </tr>



                        <tr>

                          <th>Total nights</th>

                          <td>

                           {total_night}



                          </td>

                        </tr>



                        <tr>

                          <th>Per nights fee</th>

                          <td>

                            {propertyprice}



                          </td>

                        </tr>



                        <tr>

                          <th>Sub total amount</th>

                          <td>

                            {totalcharge}



                          </td>

                        </tr>

                         <tr>

                          <th>Cleaning fee</th>

                          <td>

                            0



                          </td>

                        </tr>



                         <tr>

                          <th>Additional guest fee</th>

                          <td>

                            0

                          </td>

                        </tr>

                        <tr>

                          <th>Service fee</th>

                          <td>

                            3

                          </td>

                        </tr>

                        <tr>

                          <th>Security money</th>

                          <td>

                            0

                          </td>

                        </tr>

                        <tr>

                          <th>Host fee</th>

                          <td>

                            0

                          </td>

                        </tr>

                        <tr>

                          <th>Total</th>

                          <td>

                          {totalcharge}

                          </td>

                        </tr>

                        <tr>

                          <th>Currency</th>

                          <td>

                            USD

                          </td>

                        </tr>

                        <tr><td>Notes</td><td><div class="widget-box">

                        <div class="widget-header">

                        <h4 class="widget-title lighter smaller">

                        <i class="ace-icon fa fa-comment blue" style={{color:'#00c0ef'}}></i>

                        Notes

                        </h4>
                        <ToastContainer />
                        </div>



                        <div class="widget-body">

                          <div class="widget-main no-padding">

                            {/* <!-- #section:pages/dashboard.conversations --> */}

                            <div class="dialogs ace-scroll scroll-active"> </div>

                            
                          
                          <form action="http://localhost:8000/admin/notes" method="post" id="add_note" novalidate="novalidate">

                            

                           <div class="form-group">



                            <div class="col-md-10">

                              <br />

                              <input placeholder="Type your message here..." type="text" class="form-control" name="message" />

                              <input type="hidden" name="booking_id" value="160" />

                            </div>

                            <div class="col-md-2">

                              <br />

                            <button class="btn btn-primary">Add note</button>

                            </div>

                          </div>

                        </form>

                         
                        

                        </div>
                        {/* <!-- /.widget-main --> */}

                        </div>
                        {/* <!-- /.widget-body --> */}

                        </div>

                        </td>
                        </tr>

                        <tr>

                        

                          <th>Change</th>

                          <td>

                            
                            
                                <span class="label label-danger">

                                  
                                    New Resesrvation.28/01/2022 10:19 AM. Added By:0

                                  
                                </span>

                                <br />

                            
                          </td>



                        </tr>

                      </tbody>
                      </table>

                    {/* <!-- /.box-header --> */}

          

          </div>
            </div>
            </div>

        </div>
        );
    }

    export default BookDetails;