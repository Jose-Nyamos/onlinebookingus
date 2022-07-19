import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';



const Categories = () => {

	const [category, setCategory] = useState([]);
 
    useEffect(() => {
        getCategory();
    }, []);
 
    const getCategory = async () => {
	const response = await axios.get(`http://localhost:3003/category`);
        setCategory (response.data);
    }
 
    const deleteCategory = async (id) => {
        await axios.delete(`http://localhost:3003/category/${id}`);
        getCategory();
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
										Category
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
													<h4 class='box-title '>Category Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addcategory'>
														Add Category
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
														  <th scope="col">Name</th>
														  <th scope="col">Status</th>
														  <th scope="col">Action</th>
													  </tr>

                                          
                                        </thead>
                                        <tbody>
										{/* { category.map((category, index) => ( */}
											{category.map((val, index) => (

                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{val.category_name}</td>
                                                <td>{val.status}</td>
                                                <td>
                                                  <Link to={`/edit/${val.id}`}>
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button  onClick={ () => deleteCategory(val.id) } class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
														</td>
													</tr>
												))}
                                        
                    
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

export default Categories;
