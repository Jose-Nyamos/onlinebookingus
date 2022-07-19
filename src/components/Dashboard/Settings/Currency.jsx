import React , {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';


const Currency = () => {
    const [currency, setCurrency] = useState([]);

	useEffect(() => {
        getCurrency();
    }, []);

	const getCurrency = async () => {
        const response = await axios.get('http://localhost:3003/currency');
        setCurrency(response.data);
    }


 
    const deleteCurrency = async (id) => {
        await axios.delete(`http://localhost:3003/currency/${id}`);
        getCurrency();
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
           <Manage />

            <div class="col-md-9">			
                        <div class="card text-left">
                            <div class="card-body">
						
                                <div class="table-responsive">
                                <div class="row">
											<div className="col-4 ml-3">
													<h4 class='box-title '>Currency  Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addcurrency'>
														Add Currency
													</Link>
												</div>
												</div>
								     	</div>
										 <br />
									
								<table class="display table table-striped table-bordered" id="dtBasicExample"  width="100%">
                                        <thead>
                                            <tr>
                                                
                                                <th scope="col">Name</th>
                                                <th scope="col">Code</th>
                                                <th scope="col">Symbol</th>
                                                <th scope="col">Status</th>                                            
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                       {currency.map((val, index) =>(
                                          <tr key = {val.id}>
                                          <td>{val.name}</td>
                                          <td>{val.code}</td>
                                          <td>{val.symbol}</td>
                                          <td>{val.status}</td>
                                          
                                          <td>
                                            <Link to={`/editcurrency/${val.id}`}>
                                            <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
                                            </Link>  
                                              <button  class="btn btn-danger" onClick={() => deleteCurrency(val.id)} type="button"><i class="nav-icon i-Close-Window"></i></button>
                                          </td>
                                      </tr>
                                       
                                        ) )}
                                         
                                        
                    
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

export default Currency;
