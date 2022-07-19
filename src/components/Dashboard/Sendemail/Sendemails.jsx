import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';



const Sendemails = () => {

	// const [category, setCategory] = useState([]);
 
    // useEffect(() => {
    //     getCategory();
    // }, []);
 
    // const getCategory = async () => {
    //     const response = await axios.get('http://localhost:3001/categories');
    //     setCategory (response.data);
    // }
 
    // const deleteCategory = async (id) => {
    //     await axios.delete(`http://localhost:3001/categories/${id}`);
    //     getCategory();
    // }


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
								<div class="col-4">
									<h3>
										Customer
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
													<h4 class='box-title '>Select and send email</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addcustomerdetail'>
														Add Customer
													</Link>
												</div>
												</div>
								     	</div>
										 <br />
                                <div class="table-responsive">
									
								<table class="display table table-striped table-bordered" id="zero_configuration_table"  width="100%">
                                        <thead>
                                            <tr>
                                               <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">email</th>
                                                <th scope="col">Phone(s)</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                            <th scope="row">
                                        <label class="checkbox checkbox-outline-info">
                                                    <input type="checkbox" checked="" /><span class="checkmark"></span>
                                                </label>
                                            </th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                              
                                            </tr>
										
                                        
                    
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
	);
}

export default Sendemails;
