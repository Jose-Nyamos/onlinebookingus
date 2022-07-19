import React, { useEffect, useState } from "react";

import {Link,useParams} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import GuestTopBar from './GuestTopBar';

import { Helmet } from 'react-helmet';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const UpdateProfile = () => {

    let { id } = useParams();

  const [title, setTitle] = useState('');
  const [decsription, setDescription] = useState('');
  const [symbol, setSymbol] = useState('');
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  const [isLoading,setLoading]=useState(false);


  useEffect(() => {
    axios.get(`https://onlinebookingus-app-test.herokuapp.com/users/basicinfo/${id}`).then((response) => {
      setUsername(response.data.username);
      setEmail(response.data.email)
      setFirst_name(response.data.first_name);
      setLast_name(response.data.last_name)

    });
}, []);




const updateHandler = async (e) => {

    setLoading(true);

    const data = {
        first_name: first_name,
        last_name:last_name,
        email: email,
        username : username
       
    }

    axios.put(`https://onlinebookingus-app-test.herokuapp.com/users/updateuser/${id}`, data).then((response) => {


          console.log("PROFILE UPDATES MANAGED"+response.data)


          setTimeout(() => {
            setLoading(false);
            toast.info('Information Added successfully');
            // navigate.push('/add-property');
        }, 3000);
     
    });
  

}

  



  
  return <div class='text-left'>
  <Helmet>
    <link rel="stylesheet" href="/dist-assets/css/themes/lite-purple.min.css" />
    <link rel="stylesheet" href="/dist-assets/css/plugins/perfect-scrollbar.min.css" />
  </Helmet>


    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar/>

     <GuestTopBar/>
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
            <section class='content-header'>
							<div class="row">
								<div class="col-4">
									<h3>
										User Profile
										<small>Update Profile</small>
									</h3>

								</div>
								<div class="col-5"></div>

								<div class="col-2">
									<div class="float-lg-right">
									<ol class='breadcrumb'>
										<li>
											<Link to='/dashboard'>
                      <i class="i-Home1">Home</i>
                                          
											</Link>
										</li>
							        </ol>

									</div>
									
								

								</div>

							</div>
							
						
						</section>
            <div class="card text-left">
            <section class="ml-6">


      <div class="card">
            <div class="card-body">

            <div class="box-header with-border">
              <h4 class="box-title">Amenitie Add Form</h4>
            </div>
            <br />
            {/* <!-- form start --> */} 
           
            <div class="box-body">


            <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 control-label">First Name <span style={{color: 'red'}}>*</span></label>
            <div class="col-sm-6">
            <input type="text" name="username" class="form-control " id="username" value={first_name}
            
            onChange={(event) => {
                setFirst_name(event.target.value);
              }}
            placeholder="First Name"/>
            <span class="text-danger"></span>
          </div>
      
           </div>  


           <div class="form-group row">
           <label for="inputEmail3" class="col-sm-3 control-label">Last Name <span style={{color: 'red'}}>*</span></label>
           <div class="col-sm-6">
           <input type="text" name="username" class="form-control " id="username" value={last_name}
           
           onChange={(event) => {
            setLast_name(event.target.value);
          }}
           
           
           placeholder="Username"/>
           <span class="text-danger"></span>
         </div>
     
          </div>  
                    
                     
          <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-3 control-label">Username <span style={{color: 'red'}}>*</span></label>
                        <div class="col-sm-6">
                        <input type="text" name="username" class="form-control " id="username" value={username} 
                        
                        onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                        
                        placeholder="Username"/>
                        <span class="text-danger"></span>
                      </div>
                  
                       </div>  
                    
                       <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-3 control-label">Email <span style={{color: 'red'}}>*</span></label>
                    <div class="col-sm-6">
                    <input type="text" name="email" class="form-control " id="email" value={email}
                    
                    onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    
                    placeholder="Email"/>
                    <span class="text-danger"></span>
                  </div>
                  <div class="col-sm-3">
                    <small></small>
                  </div>
                </div>                     
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 control-label">Password <span style={{color: 'red'}}>*</span></label>
                  <div class="col-sm-6">
                  <input type="password" name="password" class="form-control " id="password" value=""
                  
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  placeholder="Password" />
                  <span class="text-danger"></span>
                </div>
                <div class="col-sm-3">
                  <small></small>
                </div>

              </div>                            
                   
                               
            </div>
            {/* <!-- /.box-body --> */}
            <div class="box-footer">
            <div class="button-row form-group col-6 d-flex mt-4">
            {!isLoading && <button type="submit" onClick={updateHandler} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>

            }
            {isLoading &&
              <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
            }
          </div>
            </div>
  
            <ToastContainer />
       </div>
       </div>
      
   
     
      {/* <!-- /.row --> */}
    </section>


            </div>


     

          </div>
       </div>
       </div>

       <Helmet>
       <script src="/dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
       <script src="/dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
       <script src="/dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
       <script src="/dist-assets/js/scripts/script.min.js"></script>
       <script src="/dist-assets/js/scripts/sidebar.large.script.min.js"></script>
       <script src="/dist-assets/js/scripts/sidebar.script.min.js"></script>
       <script src="/dist-assets/js/plugins/echarts.min.js"></script>
       <script src="/dist-assets/js/scripts/echart.options.min.js"></script>
       <script src="/dist-assets/js/scripts/dashboard.v1.script.min.js"></script>
   </Helmet>
       
    
</div>
  ;
}

export default UpdateProfile;
