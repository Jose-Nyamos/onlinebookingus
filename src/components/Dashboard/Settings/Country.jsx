import React , {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';


const Country = () => {
    const [country, setCountry] = useState([]);

	useEffect(() => {
        getCountry();
    }, []);

	const getCountry = async () => {
        const response = await axios.get('http://localhost:3003/country');
        setCountry(response.data);
    }


 
    const deleteCountry = async (id) => {
        await axios.delete(`http://localhost:3003/country/${id}`);
        getCountry();
    }

    const history  = useHistory()

  
  
  return <div class='text-left'>

  
  

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
       

    
          <div class="row mb-4">
           <Manage  />

            <div class="col-md-9">
                      
     
					
                        <div class="card text-left">
                            <div class="card-body">
							<div class="row">
											<div className="col-4 ml-3">
													<h4 class='box-title '>Country  Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addcountry'>
														Add Country
													</Link>
												</div>
												</div>
								     	</div>
										 <br />
                                <div class="table-responsive">
									
								<table class="display table table-striped table-bordered" id="dtBasicExample"  width="100%">
                                        <thead>
                                                     <tr>
                                                     <th scope="col">Short Name</th>
                                                     <th scope="col">Long Name</th>
                                                     <th scope="col">Iso3</th>
                                                     <th scope="col">Num code</th>
                                                     <th scope="col">Phone code</th>
                                                     <th scope="col">Action</th>
                                                     </tr>

                                       
                                       
                                        </thead>
                                        <tbody>
                                        {country.map((val, index) => (

                                            <tr key={val.id} >
                                                <td>{val.short_name}</td>
                                                <td>{val.name}</td>
                                                <td>{val.iso3}</td>
                                                <td>{val.number_code}</td>
                                                <td>{val.phone_code}</td>						
                                                <td>
                                                  <Link to={`/editcountry/${val.id}`}>
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button  onClick= {() => deleteCountry(val.id)} class="btn btn-danger" type="button"><i class="nav-icon i-Close-Window"></i></button>
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

export default Country;
