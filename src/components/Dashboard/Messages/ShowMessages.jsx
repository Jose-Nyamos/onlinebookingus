import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';


function ShowMessages() {


    const [messagesList, setMessagesList] = useState([]);



    useEffect(()=>{
  

        axios.get("http://localhost:3001/message/getMessages").then((response) => {
            setMessagesList(response.data);
                  // setUsers(response.data);
                 });
        
    },[]);
  return (
    <div class='text-left'>


			<div class='app-admin-wrap layout-sidebar-large'>
				<Sidebar />
				<Topbar />
				<div class='main-content-wrap sidenav-open d-flex flex-column'>
			
					{/* <!-- ============ Body content start ============= --> */}
					<div class='main-content'>
						<section class='content-header'>
							<div class="row">
								
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
													<h4 class='box-title '>Category Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addcategory'>
														Add Message
													</Link>
												</div>
												</div>
								     	</div>
										 <br />
                                <div class="table-responsive">
									
								<table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                
                                                <th scope="col">No</th>
                                                <th scope="col">Sender Id</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Message</th>
                                                <th scope="col">Receiver</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
										 { messagesList.map((message, index) => {

                                            return(

                                            <tr>
                                                <td>{message.id}</td>
                                                <td>{message.sender_id}</td>
                                                <td>{message.subject}</td>
                                                <td>{message.message}</td>
                                                <td>{message.receiver_id}</td>
                                                <td><span class="badge badge-success">read</span></td>
                                                <td>
                                                  <Link to="#">
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button  class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
                                                </td>
                                            </tr>
                                             

											) 
                                         } 
                                         )
                                        }
                                        
                    
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

export default ShowMessages