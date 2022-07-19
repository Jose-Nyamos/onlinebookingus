import React, { useCallback,useState,useEffect,useContext } from 'react'
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';



import { Link } from 'react-router-dom';

import Axios from "axios";

import { useHistory } from "react-router-dom";

import moment from "moment";

import { Helmet } from "react-helmet";


const Paymenttable = () => {

const [paymentList, setPaymentList] = useState([]);
const history = useHistory();


    useEffect(()=>{

        Axios.get("https://onlinebookingus-app-test.herokuapp.com/payment/allpayments").then((response) => {
            setPaymentList(response.data);

            console.log("THIS IS YOUR DATA"+response.data)

          });

          
    },[]);
  return <div class='text-left'>
  <Helmet>
  <link rel="stylesheet" href="/dist-assets/css/themes/lite-purple.min.css" />
  <link rel="stylesheet" href="/dist-assets/css/plugins/perfect-scrollbar.min.css" />
</Helmet>


    <div class='app-admin-wrap layout-sidebar-large'>
        <Topbar />
        <Sidebar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
            <section class="content">
              <div class="row">
                <h4>Payments</h4>

        <div class="table-responsive">
									
                  <table class="display table table-striped table-bordered" id="zero_configuration_table"  width="100%">
                      <thead>
                          <tr>                            
                              <th scope="col">Payment ID</th>
                              <th scope="col">Reservation</th>
                              <th scope="col">Apartment</th>
                              <th scope="col">Is Attached</th>
                              <th scope="col">Payment Date</th>
                              <th scope="col">Payment</th>
                              <th scope="col">Fee</th>
                              <th scope="col">Company</th>
                              <th scope="col">Client</th>
                          </tr>
                      </thead>
                      <tbody>

                      {paymentList.map((value, key) => {
                        return (
                        <tr>
                            <th scope="row">{value.id}</th>
                           
                            <td>{value.name}</td>
                            <td>{value.Property.name}</td>

                            <td>value.name</td>
                          
                            <td>{moment(value.start_date).format("MM-DD-YYYY")}</td>
                            <td>{value.payment_amount}</td>
                            <td><span class="badge badge-success">Accepted</span></td>
                            <td>Admin corporatehomeus</td>
                          
                          
                           
                            <td>{value.User.first_name}</td>
                        
                          
                            <td>
                            
                                <button class="btn btn-info" onClick={()=>{

                                    history.push('/booking-payment/'+value.id)

                                }} type="button"><i class="fa fa-share"></i></button>
                              
                            </td>
                        </tr>

                        );
                    })}
    
                      
  
                      </tbody>
                  </table>
              </div>

              </div>
  
    
  </section>

                </div>
                </div>
            </div>
            <Helmet>
            <script src="/dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
            <script src="/dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
            <script src="/dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
            <script src="/dist-assets/js/scripts/script.min.js"></script>
            <script src="/dist-assets/js/scripts/sidebar.large.script.min.js"></script>
            <script src="/dist-assets/js/scripts/sidebar.script.min.js"></script>
            <script src="/dist-assets/js/plugins/echarts.min.js"></script>
            <script src="/dist-assets/js/scripts/echart.options.min.js"></script>
            <script src="/dist-assets/js/scripts/dashboard.v1.script.min.js"></script>
        </Helmet>
  </div>;
}

export default Paymenttable;
