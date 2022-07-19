import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Helmet } from 'react-helmet';



const Staticpages = () => {

	const [pages, setPages] = useState([]);

	
 
    useEffect(() => {
        getPages();
    }, []);
 
    const getPages = async () => {
        const response = await axios.get('http://localhost:3001/pages/getPages');
        setPages(response.data);
    }
 
    const deletePages = async (id) => {
        await axios.delete(`http://localhost:3001/pages/${id}`);
        getPages();
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
										Pages
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
													<h4 class='box-title '>Page Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addstatic'>
														Add Page
													</Link>
												</div>
												</div>
								     	</div>
										 <br />
                                <div class="table-responsive">
									
								<table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                
                                                <th scope="col">Name</th>
                                                <th scope="col">url</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
										{ pages.map((page, index) => (

                                            <tr key={ page.id }>
                                                <td>{ page.name }</td>
                                                <td>{ page.url }</td>
                                                <td><span class="badge badge-success">Active</span></td>
                                                <td>
                                                  <Link to={`/editpage/${page.id}`}>
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button onClick={ () => deletePages(page.id) } class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
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
	);
}

export default Staticpages;
