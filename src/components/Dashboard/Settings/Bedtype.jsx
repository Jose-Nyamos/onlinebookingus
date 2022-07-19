import React , {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';



const Bedtype = () => {

    const history  = useHistory()
    const [bedtype, setBedtype] = useState([]);

	useEffect(() => {
        getBedtype();
    }, []);

	const getBedtype = async () => {
        const response = await axios.get('http://localhost:3003/bedtype');
        setBedtype(response.data);
    }


 
    const deleteBedtype = async (id) => {
        await axios.delete(`http://localhost:3003/bedtype/${id}`);
        getBedtype();
    }

  
  
  return <div class='text-left'>

  
  

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
       

    
          <div class="row mb-4">
          <div class="col-md-3 mb-4">
                        <div class="card text-left">
                            <div class="card-body">
                                <h4 class="card-title mb-2">MANAGE SETTINGS</h4>
                                <div class="list-group">
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/general")}>General</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/preferences")}>Preferences</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/sms_settings")}>Sms Settings</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/banners")}>Banners</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/starting")}>Starting Cities</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/propertytype")}>Property Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/spacetype")}>Space Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/bedtype")}>Bed Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/currency")}>Currency</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/country")}>Country</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/amenitytype")}>Amenity Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/emailsettings")}>Email Settings</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/fees")}>Fees</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/language")}>Language</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/meta")}>Metas</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/apicredentials")}>Api Credentials</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/paymentmethods")}>Payment Methods</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/sociallinks")}>Social Links</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/privacy")}>Privacy Policy</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/roles")}>Roles and Permissions</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/database")}>Database Backups</button>

                                </div>
                            </div>
                        </div>
                    </div>

            <div class="col-md-9">
                      
     
					
                        <div class="card text-left">
                            <div class="card-body">
							<div class="row">
											<div className="col-4 ml-3">
													<h4 class='box-title '>Bed Type Management</h4>
												</div>
												<div className="col-4"></div>

												<div className="col-3">

												<div class="float-lg-right ml-4">
													<Link class='btn btn-success' to='/addbedtype'>
														Add Bed Type
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
                                             
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                         { bedtype.map((val) => (
                                                <tr key={val.id}>
                                                <td>{val.name}</td>
												
                                                <td>
                                                  <Link to={`/editbedtype/${val.id}`}>
												  <button class="btn btn-success" type="button"><i class="nav-icon i-Pen-2"></i></button>
												  </Link>  
                                                    <button  class="btn btn-danger" onClick={() => deleteBedtype(val.id)} type="button"><i class="nav-icon i-Close-Window"></i></button>
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

export default Bedtype;
