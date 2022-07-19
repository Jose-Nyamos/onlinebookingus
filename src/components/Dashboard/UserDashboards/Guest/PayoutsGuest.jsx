import React, { useCallback,useState,useEffect,useContext } from 'react'
import GuestTopBar from './GuestTopBar';
import Sidebar from './Sidebar';

import { Link } from 'react-router-dom';

import Axios from "axios";

import { useHistory } from "react-router-dom";

import moment from "moment";

import { Helmet } from "react-helmet";

function PayoutsGuest() {


const [paymentList, setPaymentList] = useState([]);
const history = useHistory();

    useEffect(()=>{

      Axios
      .get("https://onlinebookingus-app-test.herokuapp.com/users/mypayouts", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      }).then((response) => {

            setPaymentList(response.data);

            console.log("THIS IS YOUR PAYOUT"+response.data)

          });

          
    },[]);

  return (
    <div class='text-left'>

    <Helmet>
    <link rel="stylesheet" href="/dist-assets/css/themes/lite-purple.min.css" />
    <link rel="stylesheet" href="/dist-assets/css/plugins/perfect-scrollbar.min.css" />
  </Helmet>
  
  
      <div class='app-admin-wrap layout-sidebar-large'>
          <GuestTopBar/>
          <Sidebar/>
          <div class='main-content-wrap sidenav-open d-flex flex-column'>
             
              {/* <!-- ============ Body content start ============= --> */}
              <div class='main-content'>
              <section class="content">
                <div class="row">
                  <h4>Payouts</h4>
  
          <div class="table-responsive">
                                      
                    <table class="display table table-striped table-bordered" id="zero_configuration_table"  width="100%">
                        <thead>
                            <tr>                            
                                <th scope="col">User</th>
                                <th scope="col">User Type</th>
                                <th scope="col">Property Name</th>
                                <th scope="col">Payouts Account</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Date</th>
                              
                            </tr>
                        </thead>
                        <tbody>
  
                        {paymentList.map((value, key) => {
                          return (
                          <tr>
                             
                             
                              <td>{value.User.first_name}</td>
                              <td>{value.user_type}</td>
  
                              <td>{value.Property.name}</td>
                              <td>{value.account}</td>

                              <td>{value.amount}</td>
                          

                              <td><span class="badge badge-success">{value.status}</span></td>

                              <td>{value.createdAt}</td>
                              
                            
                              
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
    </div>
  )
}

export default PayoutsGuest