import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';



const Admin = () => {

	// const [pages, setPages] = useState([]);
 
    // useEffect(() => {
    //     getPages();
    // }, []);
 
    // const getPages = async () => {
    //     const response = await axios.get('http://localhost:3001/pages');
    //     setPages (response.data);
    // }
 
    // const deletePages = async (id) => {
    //     await axios.delete(`http://localhost:3001/pages/${id}`);
    //     getPages();
    // }


	return (
		<div class='text-left'>


			<div class='app-admin-wrap layout-sidebar-large'>
				<Sidebar />
				<Topbar />
				<div class='main-content-wrap sidenav-open d-flex flex-column'>
			
					{/* <!-- ============ Body content start ============= --> */}
					<div class='main-content'>
			

					
                    <div class="col-md-12 mb-3">
                        <div class="card text-left">
                            <div class="card-body">
							<div class="row">
											<div className="col-4 ml-3">
													<h4 class='box-title '>Admin User Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addadmin'>
														Add Admin User
													</Link>
												</div>
												</div>
								     	</div>
										 <br />
                                <div class="table-responsive">
									
								<table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                
                                                <th scope="col">Username</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Rolename</th>
                                                <th scope="col">status</th>

                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
										{/* { pages.map((page, index) => ( */}

                                            <tr >
                                                <td><Link to="/editadminform">N</Link></td>
                                                <td></td>
                                                <td></td>

                                                <td><span class="badge badge-success">Active</span></td>
                                                <td>
                                                  <Link to=''>
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
                                                </td>
                                            </tr>
											{/* )) } */}
                                        
                    
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

export default Admin;
