import React,{ useState, useEffect }  from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';



const Bloglist = () => {
	const [blogs, setBlogs] = useState([]);
  const id = useParams()



	useEffect(() => {
        getBlogs();
    }, [id]);

	const getBlogs = async () => {
        const response = await axios.get('http://localhost:3003/blogs');
        console.log(response.data)
        setBlogs(response.data);
       
    }
    const deleteBlogs = async (id) => {
      await axios.delete(`http://localhost:3003/blogs/${id}`);
      getBlogs();
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
										Blog
										<small>Control panel</small>
									</h3>

								</div>
								<div class="col-5"></div>

								<div class="col-2">
									<div class="float-lg-right">
									<ol class='breadcrumb'>
										<li>
											<Link to='/dashboard'>
												<i class='nav-icon i-Home-4'></i> Home
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
													<h4 class='box-title '>All Blog List</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

										
												</div>
								     	</div>
										 <br />
                       <div class="table-responsive">
									
								<table class="display table table-striped table-bordered" id="dtBasicExample"  width="100%">
                                <thead>
                                    <tr>
                                    <th>ID </th>
                                      <th>Image</th>
                                      <th>Title</th>
                                      <th>Blog Content</th>
                                      <th>Posted by</th>
                                      <th>Posted on</th>
                                      <th>status</th>
                                      <th width="60px">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 

                                        {blogs.map((val, index) => (
                                          <tr key ={val.id}>
                                          <td>{index + 1}</td>
                                          <td ><img src={val.images} /></td>
                                          <td>{val.title}</td>
                                          <td>{val.blog_content}</td>
                                          <td>{val.posted_by}</td>
                                          <td>{val.createdAt}</td>
                                                <td><span class="badge badge-success">Active</span></td>
                                                <td>
                                                  <Link to={`/blogdescription/${val.id}`}>
											                	       <button class="btn btn-success" type="button"><i class="nav-icon i-Eye-Visible"></i></button>
												                         </Link>  
                                                 <Link to={`/editblogs/${val.id}`}>
											                	           <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												                         </Link> 
                                                    <button onClick={ () => deleteBlogs(val.id) }  class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
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

export default Bloglist;

