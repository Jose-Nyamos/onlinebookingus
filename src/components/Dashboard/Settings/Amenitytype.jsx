import React , {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';


const Amenitytype = () => {

    const history  = useHistory()
    const [amenitytype, setAmenitytype] = useState([]);

	useEffect(() => {
        getAmenitytype();
    }, []);

	const getAmenitytype = async () => {
        const response = await axios.get('http://localhost:3003/amenitytype');
        setAmenitytype(response.data);
    }


 
    const deleteAmenitytype = async (id) => {
        await axios.delete(`http://localhost:3003/amenitytype/${id}`);
        getAmenitytype();
    }



  
  
  return <div class='text-left'>

  
  

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
       

    
          <div class="row mb-4">
           <Manage />

            <div class="col-md-9">
                      
     
					
                        <div class="card text-left">
                            <div class="card-body">
							<div class="row">
											<div className="col-4 ml-3">
													<h4 class='box-title '>Amenity Type  Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addamenitytype'>
														Add Amenity Type
													</Link>
												</div>
												</div>
								     	</div>
										 <br />
                                <div class="table-responsive">
									
								<table class="display table table-striped table-bordered" id="dtBasicExample"  width="100%">
                                        <thead>
                                            <tr>
                                                
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                             
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          
                                          {amenitytype.map((val) =>(
                                                <tr key={val.id}>
                                                <td>{val.name}</td>
                                                <td>{val.description}</td>					
                                                <td>
                                                  <Link to={`/editamenitytype/${val.id}`}>
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button  onClick = {() => deleteAmenitytype(val.id)} class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
                                                </td>
                                            </tr>
                                        

                                          ))}
                                          
                    
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                 
        
        </div>
        {/* <!--/.col (right) --> */}
      </div>
          
          </div>
       </div>
       </div>
       
    
</div>
  ;
}

export default Amenitytype;
