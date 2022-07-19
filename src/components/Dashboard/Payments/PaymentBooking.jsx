import React, { useEffect, useState } from "react";

import {Link,useParams} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';


import moment from "moment";





const PaymentBooking = () => {

    let { id } = useParams();

    const [property_id, setProperty_id] = useState(0);
    const [booking_id, setBooking_id] = useState(0);
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [userfname, setUserFname] = useState('');
    const [clientemail, setClientEmail] = useState('');
    const [total_night, setTotal_night] = useState('');
    const [property_address, setProperty_address] = useState('');
    const [totalcharge, setTotalCharge] = useState(0);

    const [cleaning_fee, setCleaningFee] = useState(0);

    const [visible, setVisible] = useState(false);

    const [showResults, setShowResults] = React.useState(false)


    const [bookingPayment, setBookingPayment] = useState([]);


    
    


    useEffect(() => {
        axios.get(`https://onlinebookingus-app-test.herokuapp.com/payment/getpaymentById/${id}`).then((response) => {
            setBooking_id(response.data.BookingId)
            setStart_date(response.data.Booking.start_date)
            setEnd_date(response.data.Booking.end_date)
            setUserFname(response.data.User.first_name)
            setClientEmail(response.data.User.email)
            setTotal_night(response.data.Booking.total_night)
            setProperty_address(response.data.Property.city)

            setCleaningFee(response.data.Booking.cleaning_fee)

            setTotalCharge(response.data.Booking.total)
        //   setFirst_name(response.data.first_name);
        //   setLast_name(response.data.last_name)
    
        });



        axios.get('https://onlinebookingus-app-test.herokuapp.com/booking/booking_payments/'+2).then((response) => {
           
        console.log("This is my booking data"+booking_id)
    
        });


        sendData();



    }, []);


    let sendData = async() => {
  
      
        
        let sendInfo = await axios.get(`https://onlinebookingus-app-test.herokuapp.com/payment/getpaymentById/${id}`)
           // setBooking_id(response.data.BookingId)



           console.log("This is my booking xxxydy"+JSON.stringify(sendInfo.data.Booking.id))
        
    
    

        
        let bookg_id = sendInfo.data.Booking.id
        
        let booking_data = await  axios.get('https://onlinebookingus-app-test.herokuapp.com/booking/booking_payments/'+bookg_id)
           
            console.log("This is my booking payment data finally"+JSON.stringify(booking_data.data.Payment))

        
            setBookingPayment([booking_data.data.Payment])
            
      }






    const handleChange=()=> {
        setVisible({
          visible: !visible
          })
        }


        const content = visible
        ? <div class="form-group col-8">
        
        <div class="box-body">

        

             <input type="hidden" name="payment_id" value=""/>

             <input type="hidden" name="_token" value="RqGQyLPSaGyU5OHBJ2s2U7EM6IyDgYIUJn712ESG"/>

             <div class="form-group">

               <label for="payment_amount">Amount</label>

               <div class="input-group">

                 <span class="input-group-addon">$</span>

                 <input id="payment_amount" type="number" pattern="[0-9]" class="form-control" value="" name="payment_amount" min="0"/>

               </div>

             </div>

             <div class="form-group">

               <label for="fee">Fee</label>

               <div class="input-group">

                 <span class="input-group-addon">$</span>

                 <input id="fee" type="number" pattern="[0-9]" class="form-control" value="" name="fee" min="0"/>

               </div>

             </div>

             <div class="form-group">

               <label for="payment_method_id">Payment Method</label>

               <select class="form-control" id="payment_method_id" name="payment_method_id">

                 
                   <option value="1">Paypal</option>

                 
                   <option value="2">Stripe</option>

                 
                   <option value="3">Cash</option>

                 
                   <option value="4">Credit Card</option>

                 
                   <option value="5">Online Link</option>

                 
                   <option value="6">Wire Transfer</option>

                 
                   <option value="7">Check</option>

                 
               </select>

             </div>

             <div class="form-group">

               <label for="notes">Notes</label>

               <textarea class="form-control" name="notes" id="notes"></textarea>

             </div>

              <div class="form-group input-mb">

                 <label>Money Received</label>

                 <div class="input-group date mg-check-in">

                   <div class="input-group-addon"><i class="fa fa-calendar"></i></div>

                   <input class="form-control" name="payment_date" value="04/03/2222" id="payment_date" placeholder="Money Received" autocomplete="off" type="text" readonly="readonly" required=""/>

                 </div>

             </div>

             <div class="form-group">

               <button type="submit" class="btn btn-primary">Add Payment</button>

             </div>

    

     </div>
        
        </div>
        : null;

        const ShowCharges = () => {
            setShowResults(true)
        }

        const Results = () => (
            <form  id="edit_charges" method="post" >

                            <input type="hidden" name="_token" value="y1EJ5HqWvm4cigqyW4l0lrKpzF4ZW9n86d4lZ2z7" />

                            <input type="hidden" name="payment_charge_id" value="" />

                            <div class="form-group amount_add_payment_form">

                                <label>Rental Price For Period</label>

                                <div class="input-group">

                                    <div class="input-group-addon">$</div>

                                    <input name="base_price" class="form-control" min="0" step="any" value={totalcharge} />

                                </div>

                            </div>



                            <div class="form-group amount_add_payment_form">

                                <label>Cleaning Fee</label>

                                <div class="input-group">

                                    <div class="input-group-addon">$</div>

                                    <input name="cleaning_fee" class="form-control" min="0" step="any" value={cleaning_fee} />

                                </div>

                            </div>



                            <div class="form-group amount_add_payment_form">

                                    <label>Additional guest charge</label>

                                    <div class="input-group">

                                    <div class="input-group-addon">$</div>

                                    <input name="guest_fee" class="form-control" min="0" step="any" value="0" />

                                    </div>

                            </div>

                            <div class="form-group amount_add_payment_form">

                                <label>Service Fees For Period</label>

                                <div class="input-group">

                                    <div class="input-group-addon">$</div>

                                    <input name="service_fee" class="form-control" min="0" step="any" value="3" />

                                </div>

                            </div>

                                

                            <div class="form-group amount_add_payment_form">

                                <label>Security Deposit</label>

                                <div class="input-group">

                                    <div class="input-group-addon">$</div>

                                    <input name="security_fee" class="form-control" min="0" step="any" value="" />

                                </div>

                            </div>

                                

                            <div class="form-group amount_add_payment_form">

                                <label>Host Fee</label>

                                <div class="input-group">

                                    <div class="input-group-addon">$</div>

                                    <input name="host_fee" class="form-control" min="0" step="any" value="" />

                                </div>

                            </div>                                                                                            

                                

                            <button type="submit" class="btn btn-primary">Save Charges</button>

                            <div class="btn btn-danger cancel_edit_charges">Cancel</div>

                        </form>
          )

return (
    
<div class="main-content-wrap sidenav-open d-flex flex-column">

    {/* <!-- ============ Body content start ============= --> */}
        <div class="main-content">           
            <section class="content">
            <div class="box-body">

                <Link  to={`/booking-details/${booking_id}`}  class="btn btn-primary btn-lg" style={{marginBottom: 10}}>Bookings Page</Link>

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

                            <td>{moment(start_date).format("MM-DD-YYYY")} </td>

                            <td>{moment(end_date).format("MM-DD-YYYY")}</td>

                            <td>{userfname}</td>

                            <td>{clientemail}</td>

                            <td>{total_night}</td>

                            <td>{property_address}</td>

                            <td>

                                
                                    <span class="label label-danger">Pending</span>

                                
                            </td>

                            </tr>

                        </tbody>

        </table>

        <div class="box-body">

            <div class="col-md-4">

                    <div class="box-body" id="">

                        <table class="table table-bordered charges_table selectable box_sum_1">

                            <tbody>

                                <tr>

                                    <th>Total Charge</th>

                                    <th></th>

                                    <th class="number_right" number_right=""> {totalcharge} </th>

                                </tr>

                                <tr>

                                    <td>Total Rental Price</td>

                                    <td class="charges_btn_td">

                                        <div class="btn btn-primary btn-sm">

                                            <span class="add_to_note_btn ace-icon glyphicon glyphicon-plus" title="Add Charge To payment note">

                                            </span>

                                        </div>

                                    </td>

                                    <td class="select_sum number_right" value="118">{totalcharge}</td>

                                </tr>

                            </tbody>

                        </table>

                    
                        <div id="show_edit_charges_form" class="btn btn-primary" onClick={ShowCharges}>Edit Charges</div>


                      


                        { showResults ? <Results /> : null }

                        
                        

                    </div>

            </div>



            <div class="col-md-8">

            <h2>Payment details</h2>

            <hr />

            
            <h2 class="text-center" style={{fontSize: 20, color:'green'}}>No Payment details</h2>

            <table class="table table-bordered">

                                    <thead style={{background: '#ddd'}}>

                                      <tr>

                                        <th class="text-center">#ID</th>

                                        <th class="text-center">Date</th>

                                        <th class="text-center">Amount</th>

                                        <th class="text-center">Fee</th>

                                        <th class="text-center">Payment method</th>

                                       
                                        <th class="text-center">Deposit in Bank</th>

                                        <th class="text-center">Attachment</th>

                                        <th class="text-center">User</th>

                                        <th class="text-center">Payment options</th>

                                      </tr>

                                    </thead>

                                    <tbody>



                                      
                                        {bookingPayment.map((value, key) => {
                                            return (
                                                                                              
                                                  <tr bgcolor="">

                                                  <td class="text-center">{value.id}</td>

                                                  <td class="text-center">{moment(value.createdAt).format("MM-DD-YYYY")}</td>

                                                  <td class="text-center">$ {value.payment_amount}</td>

                                                  <td class="text-center">$ 0</td>

                                                  <td class="text-center">{value.payment_method_id}</td>

                                                
                                                  <td class="text-center"> <a href="javacript:void(0)" onclick="depositInBank('173','yes')"><span class="label label-success">YES</span></a>  <a href="javacript:void(0)" onclick="depositInBank('173','no')"><span class="label label-danger">NO</span></a> </td>

                                              

                                                  
                                                      <td class="text-center">

                                                        <a target="_blank" href="#"></a>

                                                      </td>

                                                  


                                                  <td class="text-center">Dharma</td>

                                                  <td class="text-center">

                                                     <a title="Edit Payment" href="#" class="btn btn-primary btn-xs"><i class="fa fa-edit"></i></a>

                                                     <a title="Print Invoice" href="#" class="btn btn-primary btn-xs"><i class="fa fa-print"></i></a>

                                                     <a title="Add Attachment" data-rel="173" data-toggle="modal" data-target="#customerModal" class="btn btn-primary btn-xs customerModal"><i class="fa fa-paperclip"></i></a>

                                                     <a title="Delete Payment" href="#" onclick="return confirm('Are you sure to delete?');" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i></a>

                                                  </td>

                                                </tr>
                                                );
                                            })}

                                                
                                                
                                              

                                          
                                                                                              
                                                

                                                
                                                
                                              

                                          
                                                                                              
                                                  

                                                
                                                
                                              

                                          
                                                <tr>

                                                  <th class="text-center"></th>

                                                  <th class="text-center">Sum</th>

                                                  <th class="text-center">$ {totalcharge}</th>

                                                  <th class="text-center">$ 0</th>

                                                  <th class="text-center" colspan="4"></th>

                                                </tr>

                                    </tbody> 

                                  </table>



                                  <div class="col-md-6">

                   
             

                  
                                  <button class="btn btn-primary" type="submit" 
                                  onClick={handleChange }>
                                  Add Payment
                                  </button>
                                  
                                
                                  { content }
                                
                                
                                                    
                                                    
                                                
                                
                                                    
                                                    
                                            </div>
                                
                                
                                            <div class="col-md-6">
                                
                                           
                                                  
                                            
                                            
                                            <Link to="" class="btn btn-primary">Charge credit card</Link>
                                
                                            
                                            
                                           </div>



            </div>


        

 
          

        </div>



        <div class="box-body">



        </div>

        {/* <!-- /.box-header -->

        <!-- Payments Schedule --> */}

        <div class="box-body">

            <div class="col-md-4">

                <div class="col-md-12 charge_box" id="">

                    <div class="box" id="">

                        <div class="box-header" id="">

                            <h3 class="box-title hide_night">Security Deposit and Refund</h3>

                        </div>

                        <div class="box-body">

                                <table class="table table-bordered charges_table selectable box_sum_2">

                                    <tbody>

                                        <tr class="danger">

                                            <td>Security Deposit</td>

                                            <td>

                                                <div class="btn btn-primary btn-sm">

                                                <span class="add_to_note_btn ace-icon glyphicon glyphicon-plus" title="Add Charge To payment note">

                                                </span>

                                                </div>

                                            </td>

                                            {/* <!--<td class="select_sum number_right" value="0">$ 0</td>--> */}
                                            <td class="select_sum number_right" value="0">$ </td>
                                            <td></td>

                                        </tr>

                                        
                                        
                                        <tr class="hide_night">

                                            <th>Previous Balance</th>

                                            <th></th>

                                            <th class="number_right">

                                                $ 0

                                            </th>

                                        </tr>

                                        <tr class="hide_night">

                                            <td><b>Refund</b></td>

                                            <td></td>

                                            <td class="number_right"><b>$ 0</b></td>

                                        </tr>

                                    </tbody>

                                </table>

                                

                                <h4 class="btn btn-primary show_add_charge_form">Add Extra Charge</h4>

                                
                                <div class="add_extra_charge_form" style={{display: 'none'}}>

                                    <form action="http://localhost:8000/admin/process-security-deposits" method="post">

                                            <input type="hidden" name="booking_id" value="160" />

                                            <div class="form-group pick_charge_from_list">

                                                <label>Choose Extra Charge</label><br/>

                                                <select id="extra_charges_select" name="extra_charge_name" class="form-control">

                                                
                                                    <option value="1">Extra Nights </option>

                                                
                                                    <option value="2">cleaning out fee </option>

                                                
                                                </select>

                                            </div>

                                            <div class="form-group amount_add_payment_form">

                                                <label>Type of charge</label><br />   

                                                <select name="extra_charge_type" id="extra_charge_type" class="form-control">

                                                    <option value="1">Other extra charge</option>

                                                    <option value="2">Extra rent charge</option>

                                                </select>

                                            </div>

                                            <div class="form-group amount_add_payment_form">

                                                <div class="input-group">

                                                    <div class="input-group-addon">$</div>

                                                    <input id="new_extra_charge_amount" name="amount" class="form-control" type="number" min="0" placeholder="Amount" required="" />

                                                </div>

                                            </div>

                                            <div class="form-group">

                                                <label>Text</label>

                                                <textarea class="form-control" type="text" id="payment_text" name="payment_text" placeholder="Enter text..." required=""></textarea>

                                            </div>

                                            <div class="box-footer">                                     

                                                <button type="submit" class="btn btn-primary add_extra_charge_btn">Add Extra Charge to Form</button>

                                                <div class="btn btn-danger cancel_add_charge">Cancel</div>

                                            </div>

                                    </form>

                                </div>

                        </div>

                    </div>

                </div>

            </div>

            <div class="col-md-8">

            <h2>Payments Schedule</h2>

            <hr />

            
            <table class="table table-bordered">

                <thead style={{background: '#ddd'}}>

                <tr>

                    <th class="text-center">Date</th>

                    <th class="text-center">Amount Due</th>

                    <th class="text-center">Details</th>

                    <th class="text-center">Payments Attached</th>
                    <th class="text-center">User</th>

                    <th class="text-center">Balance</th>

                    <th class="text-center">Payment options</th>

                </tr>

                </thead>

                <tbody>

                        
                        
                            <tr>

                            <th class="text-center">Starting balance</th>

                            <th class="text-center">$ {totalcharge}</th>

                            <th class="text-center" colspan="4"></th>

                            </tr>

                        
                </tbody> 

            </table>

                                    

                <div class="box-body">

                    <form action="http://localhost:8000/admin/booking-payments?booking_id=160&amp;paymenttext=addschedulepayment" class="form-horizontal" method="post" id="schedule_additional_payment_form">

                        <div class="form-group">

                            <h4>Schedule Additional Payment</h4>

                        </div>

                        <input type="hidden" name="schedule_payment_id" value="" />

                        <input type="hidden" name="_token" value="y1EJ5HqWvm4cigqyW4l0lrKpzF4ZW9n86d4lZ2z7" />

                        <div class="form-group input-mb">

                            <label>Date</label>

                            <div class="input-group date mg-check-in">

                                <div class="input-group-addon"><i class="fa fa-calendar"></i></div>

                                <input class="form-control" name="payment_date" value="28/01/2222" id="schedule_payment_date" autocomplete="off" type="text" readonly="readonly" required="" />

                            </div>

                        </div>

                        <div class="form-group">

                            <label for="payment_amount">Amount</label>

                            <div class="input-group">

                            <span class="input-group-addon">$</span>

                            <input id="payment_amount" type="number" pattern="[0-9]" class="form-control" value="" name="payment_amount" min="0" />

                            </div>

                        </div>

                        <div class="form-group">

                            <label for="notes">Text</label>

                            <textarea class="form-control" placeholder="Enter description" name="schedule_payment_text" id="schedule_payment_text"></textarea>

                        </div>

                        <div class="form-group">

                        
                            <button type="submit" class="btn btn-primary">Save</button>

                            
                        </div>

                    </form>



                </div>

            </div>

        </div>

        </div>
        <footer class="main-footer">
            <div class="pull-right hidden-xs">
            <b>Version</b> 1.0.0
            </div>
            <strong>Copyright © 2016-2022 <a href="#">Corporate Home US</a>.</strong> All rights
            reserved.
        </footer>


            </section>
        </div>
</div>
    );
}
export default PaymentBooking