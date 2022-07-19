import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import axios from "axios";
import { useHistory } from 'react-router-dom';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const  Cleantask = ( ) => {

    const [cleanerlist, setCleanerlist] = useState([]);

    const [cleaninglist, setCleaningList] = useState([]);

    const [propertiesList, setPropertiesList] = useState([]);


    const [user_id, setUser_id] = useState([]);
  

    const [name, setName] = useState([]);
    const [property_id, setProperty_id] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');

    const [notes,setNotes] = useState('');

    const [isLoading,setLoading]=useState(false);



    // const [propery]
  
    useEffect(() => {
        getCleaners();
        getProperties();
        getCleanersList();

      }, []);
      
    const getCleaners = async () => {
        const response = await axios.get('https://onlinebookingus-app-test.herokuapp.com/users/searchcleaners');
        setCleanerlist(response.data);
      }

      const getProperties = async () => {
        const response = await axios.get('https://onlinebookingus-app-test.herokuapp.com/property/allproperties');
        setPropertiesList(response.data);
      }


      const getCleanersList = async () => {
        const response = await axios.get('https://onlinebookingus-app-test.herokuapp.com/cleaninglady/allcleaners');
        setCleaningList(response.data);
      }
    
    
       
        let data={
          user_id: user_id,
          property_id: property_id,
          amount: amount,
          date: date,
          notes:notes,

        }
      
    
        const AddCleaner = () => {
          setLoading(true);
        
          axios.post("https://onlinebookingus-app-test.herokuapp.com/cleaninglady", data).then((response) => {
        
        
                console.log("MASSAGE ADDED"+response.data)
        
        
        
                setTimeout(() => {
                  setLoading(false);
                  toast.info('Information Added successfully');
                  // navigate.push('/add-property');
              }, 3000);
           
          });
        }

      
  return (
    <div>
        	<div class='app-admin-wrap layout-sidebar-large'>
				<Sidebar />
				<Topbar />
				<div class='main-content-wrap sidenav-open d-flex flex-column'>
			
					{/* <!-- ============ Body content start ============= --> */}
					<div class="row">
								<div class="col-4">
									<h3>
										Cleaning Lady
										<small>Assigned task</small>
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

		<div class="box mb-5">
           
            <div class="form-horizontal">
                <div class="box-body">                              
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="control-label col-sm-3">Select Cleaning Lady<span style={{color: 'red' }}>*</span></label>
                        <div class="col-sm-8">
                      


                        <select id="booking_customer_id" name="booking_customer_id" 
                                
                        onChange={(event) => {
                            setUser_id(event.target.value);
                          }}
                                        
                                        
                          class="form-control" tabindex="-1" aria-hidden="true">
                                        <option value=''> </option>
                                              {cleanerlist.map((value, key) => {
                                                return (
                                              <option key={key} value={value.id}>{value.first_name===null ? '' : value.first_name} {value.id}</option>
                                              
                                              );
                                            })}
                                                 </select>



                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="control-label col-sm-3">Property</label><span style={{color: 'red' }}>*</span>
                        <div class="col-sm-8">
                        <select id="booking_customer_id" name="booking_customer_id" 
                                
                        onChange={(event) => {
                            setProperty_id(event.target.value);
                          }}
                                        
                                        
                          class="form-control" tabindex="-1" aria-hidden="true">
                                        <option value=''> </option>
                                              {propertiesList.map((value, key) => {
                                                return (
                                              <option key={key} value={value.id}>{value.name===null ? '' : value.name} {value.id}</option>
                                              
                                              );
                                            })}
                                                 </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="control-label col-sm-3">Amount<span style={{color: 'red' }}>*</span></label>
                        <div class="col-sm-8">
                        <input type="number" class="form-control" onChange={(event) => {
                          setAmount(event.target.value)
                        }} name="amount" id="amount" placeholder="120"/>
                        <div id="emailError"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="control-label col-sm-3">Cleaning Date<span style={{color: 'red' }}>*</span></label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control error" name="clean_date" id="clean_date" readonly="" placeholder="" />
                        <div id="emailError"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="control-label col-sm-3">Note /Message<span style={{color: 'red' }}>*</span></label>
                        <div class="col-sm-8">
                        <textarea name="notes" class="form-control" onChange={(event) => {
                          setNotes(event.target.value);
                        }} placeholder="Write any notes or message here"></textarea>
                        <div id="emailError"></div>
                        </div>
                    </div>              
                </div>
                {/* <!-- /.box-body --> */}
                <div class="box-footer">
                <button type="reset" class="btn btn-default">Reset</button>
                {!isLoading && <button type="submit" onClick={AddCleaner} class="btn btn-info pull-right" title="Save" >Submit</button>

              }
              {isLoading &&
                <button type="submit" class="btn btn-info pull-right" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
              }
                </div>
                {/* <!-- /.box-footer --> */}

                <ToastContainer />
            </div>
        </div>
        <br />
        <br />

					<div class="box-body mb-5">
                <div class="table-responsive">
				<table class="display table table-striped table-bordered" id="zero_configuration_table"  width="100%">
                    <thead>
                    <tr>

                     <th>Sn</th>
                      <th>Cleaner Name</th>
                      <th>Property Name</th>
                      <th>Notes by you</th>
                      <th>Notes by cleaner</th>
                      <th>Amount</th>
                      <th>Clean date</th>
                      <th>Status</th>
                      <th>Action</th>
                      
                      
                    </tr>
                    </thead>
                    <tbody>  
                        {cleaninglist.map((cleaner, index) => (
                               <tr key={ cleaner.id }>
                               <td>{index +1}</td>
                               <td>Jane</td>
                               <td>{cleaner.property_id}</td>
                               <td>{cleaner.notes}</td>
                               <td>{cleaner.cleaner_reply_note}</td>
                               <td>{cleaner.amount}</td>
                               <td> {cleaner.clean_date}</td>
                               <td> {cleaner.status}</td>
                               <td>
                                   <Link to=""> <i class="fa fa-pencil"></i></Link>
                                   <Link to="#"> <i class="fa fa-trash"></i></Link>
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
			)
			}

export default Cleantask