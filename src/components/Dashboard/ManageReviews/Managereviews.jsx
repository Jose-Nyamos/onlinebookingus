import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Helmet} from 'react-helmet'


function Managereviews() {

	

    const [reviewsList, setReviewsList] = useState([]);
 
	useEffect(()=>{

        Axios
        .get("http://localhost:3001/review/getReviews", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {


            setReviewsList(response.data)


        });


    },[]);

	


  return <div class='text-left'>

	  

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
            
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
            <section class='content-header'>
							<div class="row">
								<div class="col-4">
									<h3>
										Reviews
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
            <section class="content">
    {/* <!--Filtering Box Start --> */}
    <div class="row">
              <input class="form-control" id="startfrom" type="hidden" name="from" value="" />
              <input class="form-control" id="endto" type="hidden" name="to" value="" />
                    <div class="col-md-3 col-sm-3 col-xs-12">
                      <label>Date Range</label>
                      <div class="input-group col-xs-12">
                        <button type="button" class="form-control" id="daterange-btn">
                          <span class="pull-left"><i class="fa fa-calendar"></i> &nbsp;&nbsp; Pick a date range</span>
                          <i class="fa fa-caret-down pull-right"></i>
                          </button>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-3 col-xs-12">
                      <label>Property</label>
                      <select class="form-control select2 select2-hidden-accessible" name="property" id="property" tabindex="-1" aria-hidden="true">
                          <option value="">All</option>
                                                  </select>
                    </div>
                    <div class="col-md-3 col-sm-2 col-xs-12">
                      <label>Reviewer</label>
                      <select class="form-control" name="reviewer" id="reviewer">
                          <option value="">All</option>
                          <option value="guest">Guest</option>
                          <option value="host">Host</option>
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
						{/* <!--Filtering Box End --> */}
						<section class='content'>
											<div class="card">
												<div class="tab-content" id="myTabContent">
													
									<div className="row">
											<div className="col-4">
													<h4 class='box-title'>Reviews Management</h4>
												</div>
												<div className="col-5"></div>

												<div className="col-3">

										
												</div>
								     	</div>
										 <br />

									

									
											

									
										{/* <!-- /.box-header --> */}

        <div class="table-responsive">
									
									<table class="display table table-striped table-bordered" id="zero_configuration_table"  width="100%">
										<thead>
											<tr>                            
												<th scope="col">Property Name</th>
												<th scope="col">Sender</th>
												<th scope="col">Receiver</th>
												<th scope="col">Reviewer</th>
												<th scope="col">Message</th>
												<th scope="col">Date</th>
												<th scope="col">Action</th>

											</tr>
										</thead>
										<tbody>


										{ reviewsList.map((review, index) => (

											<tr key={ index}>
											<td>hotel manhattan</td>
											<td>{ review.sender_id }</td>
											<td>{ review.receiver_id}</td>
											<td>{ review.reviewer}</td>
											
											<td>{ review.message }</td>
											<td>{ review.createdAt }</td>
										   
											
											<td>
											  <Link to={`/editreviews/${review.id}`}>
											  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
											  </Link>  
												<button class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
											</td>
										</tr>
										)) }


											<tr >
												<td><Link to="/editreviews">Concorded hotel manhattan</Link></td>
												<td><Link to="/editreviews">N</Link></td>
												<td>guest</td>
												<td>I liked your place. You have all the basic amentites needed.</td>
												<td>28/07/2020 5:42 PM</td>
												<td>Action</td>
												
												<td>
                                                  <Link to="#">
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button  class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
                                                </td>
				  
					   
											</tr>
					  
										
					
										</tbody>
									</table>
								</div>
						</div>
						</div>
						</section>
                                    </section>



                    </div>
                  </div>
                </div>
            </div>


  ;
}

export default Managereviews;
