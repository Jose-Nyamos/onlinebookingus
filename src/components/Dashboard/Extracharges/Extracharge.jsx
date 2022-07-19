import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';



const Extracharge = () => {

	const [extracharges, setExtracharges] = useState([]);
 
    useEffect(() => {
        getCharges()
    }, []);
 
    const getCharges = async () => {
        const response = await axios.get('http://localhost:3003/extracharge');
        setExtracharges(response.data);
    }
 
    const deleteCharge = async (id) => {
        await axios.delete(`http://localhost:3003/extracharge/${id}`);
        getCharges();
    }


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
										Extra Charges
										<small>Extra charges panel</small>
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
													<h4 class='box-title '>Extra charges Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addcharge'>
														Add Extra Charge
													</Link>
												</div>
												</div>
								     	</div>
										 <br />
                                <div class="table-responsive">
									
								<table class="display table table-striped table-bordered" id="dtBasicExample"  width="100%">
                                        <thead>
                                            <tr>
                                                
                                                <th scope="col">ID</th>
                                                <th scope="col">Charge Name</th>
                                                <th scope="col">Charge Value</th>
                                                <th scope="col">Created At</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
										{ extracharges.map((val, index) => {

                                            return(<tr key = {val.id}>
                                                <td>{index + 1}</td>
                                                <td>{val.charge_name}</td>
												<td>{val.charge_value}</td>
												<td>{val.createdAt}</td>
                                                <td>
                                                  <Link to={`/editcharge/${val.id}`}>
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button  onClick= {() => deleteCharge(val.id)}class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
                                                </td>
                                            </tr>
                                            )

                                            
                                        }) }  
                                        
                    
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

export default Extracharge;
