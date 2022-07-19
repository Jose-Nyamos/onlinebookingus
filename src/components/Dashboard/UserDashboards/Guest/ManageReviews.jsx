import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import GuestTopBar from './GuestTopBar';
import Sidebar from './Sidebar';

function ManageReviews() {
    

    const [bookingList, setbookingList] = useState([]);
 
	useEffect(()=>{

        Axios
        .get("http://localhost:3001/users/mybookings", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {


            setbookingList(response.data.myBookings)


        });



        Axios
        .get("http://localhost:3001/review/myreviews", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {


            setbookingList(response.data.myReviews)


        });

    },[]);
  return (
    <div class='text-left'>
    <div class='app-admin-wrap layout-sidebar-large'>
      <Sidebar/>
        <GuestTopBar/>
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
    
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
                <section class='content-header'>
                    <div class="row">
                        <div class="col-4">
                            <h3>
                                My Reviews
                                <small>Control panel</small>
                            </h3>

                        </div>
                        <div class="col-5"></div>

                        <div class="col-2">
                            <div class="float-lg-right">
                            <ol class='breadcrumb'>
                                <li>
                                    <Link to='/dashboard'>
                                        <i class='fa fa-dashboard'></i> Home
                                    </Link>
                                </li>
                            </ol>

                            </div>
                            
                        

                        </div>

                    </div>
                    
                
                </section>

            
            <div class="col-md-12 mb-3">
                <div class="card text-left">
                    <div class="card-body">
                    <div class="row">
                                    <div className="col-4 ml-3">
                                            <h4 class='box-title '>All My Reviews</h4>
                                        </div>
                                        <div className="col-4"></div>

                                        <div className="col-3">

                                        <div class="float-lg-right ml-4">
                                            <Link class='btn btn-success' to='/'>
                                               New Booking
                                            </Link>
                                        </div>
                                        </div>
                                 </div>
                                 <br />
                        <div class="table-responsive">
                            
                        <table class="display table table-striped table-bordered" id="zero_configuration_table"  width="100%">
                                <thead>
                                    <tr>
                                        
                                        <th scope="col">Booking Id</th>
                                        <th scope="col">Sender</th>
                                        <th scope="col">Receiver</th>
                                        <th scope="col">Reviewer</th>
                                        <th scope="col">Message</th>
                                        <th scope="col">Comments</th>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                { bookingList.map((amenity, index) => (

                                        <tr key={ index}>
                                        <td>{amenity.id }</td>
                                        <td>{ amenity.sender_id }</td>
                                        <td>{ amenity.receiver_id}</td>
                                        <td>{ amenity.reviewer}</td>
                                        
                                        <td>{ amenity.message }</td>
                                        <td>{ amenity.comments }</td>
                                       
                                        
                                        <td>
                                          <Link to={`/editamenities/${amenity.id}`}>
                                          <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
                                          </Link>  
                                            <button class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
                                        </td>
                                    </tr>
                                    )) }
                                
            
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

                

            </div>
        </div>
    </div>
</div>
  )
}

export default ManageReviews