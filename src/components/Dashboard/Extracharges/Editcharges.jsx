import React from 'react'

import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';


const Editcharges = () => {
    const [charge_name, setCharge_name] = useState('');
    const [charge_value, setCharge_value] = useState('');

    const history = useHistory();
    const {id} = useParams("id");

    const EditCharge = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:3003/extracharge/${id}`,{
            charge_name: charge_name,
            charge_value: charge_value
                
            });
            history.push("/extracharges");
        }

        useEffect(() => {
          getChargeById(id);
      }, []);

      const getChargeById = async (id) => {
          const response = await axios.get(`http://localhost:3003/extracharge/${id}`);
          setCharge_name(response.data.charge_name);
          setCharge_value(response.data.charge_value);
      }

  return <div>
<div class='text-left'>
<div class='app-admin-wrap layout-sidebar-large'>
    <Topbar />
        <Sidebar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
           
						<section class='content-header'>
							<div class="row">
              <div class="breadcrumb">
              <h1>Extra Charge</h1>
             
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
        <section class="content">
      <div class="row">
 
        <div class="col-md-12">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="card-title mb-3">Edit Extra Charges</div>
                                <form onSubmit={ EditCharge } > 
                                    <div class="row p-4">
                                      <div className="col-md-2"></div>
                                      <div className="col-md-3">
                                      <label for="charge_name"><b>Extra Charge Name </b></label>
                                       </div>
                                        <div class="col-md-5 form-group mb-3">
                                            <input class="form-control form-control-rounded" id="charge_name" type="text"  value={charge_name}  onChange = { (e) => setCharge_name(e.target.value) } placeholder="Extra charge name" />
                                        </div>
                                        <div className="col-md-2"></div>

                                        <div className="col-md-2"></div>
                                        <div className="col-md-3">
                                        <label for="charge_value"><b>Extra Default Charge Value</b></label>
                                        </div>
                                        <div class="col-md-5 form-group mb-3">
                                            <input class="form-control form-control-rounded" id="charge_value" type="number" value={charge_value}  onChange = { (e) => setCharge_value(e.target.value) } placeholder="Extra charge Default value" />
                                        </div>

                                       <div className="col-md-2"></div> 
                                        <div class="col-md-12">
                                            <button class="btn btn-grey">Reset</button>
                                            <button class="btn btn-primary float-right">Submit</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
      </div>
    </section>

  </div>
  </div>
  </div>
  </div>
  </div>
  ;
}

export default Editcharges;
