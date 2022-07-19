
import React,{ useState, useEffect }  from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from "axios";
import GuestTopBar from './GuestTopBar';
import Sidebar from './Sidebar';

import {Helmet} from 'react-helmet'

import { useContext } from 'react';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../../helpers/AuthContext'

function ReviewProperty() {

    const {authState} = useContext(AuthContext);

    const [bookingList, setbookingList] = useState([]);

    
    const [usersList, setUsersList] = useState([]);

    const [message, setMessage] = useState('');
    const [comments, setComments] = useState('');
    const [improve_message, setImprove_message] = useState('');
    const [sender_id, setSender_id] = useState('');
    const [reviewer, setReviewer] = useState('');
    const [receiver_id, setReceiver_id] = useState('');
    const [isLoading,setLoading]=useState(false);


    const {id}=useParams()
 
	useEffect(()=>{

        Axios
        .get("http://localhost:3001/users/mybookings", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {

            setbookingList(response.data.myBookings)


        });


        Axios.get("http://localhost:3001/users/customers").then((response) => {
                   setUsersList(response.data);
                  // setUsers(response.data);
                 });



    },[]);


    const data = {
        sender_id:4,
        receiver_id: receiver_id,
        reviewer: reviewer,
        message: message,
        comments: comments,
        improve_message: improve_message,
        
       }

    const makeReview = () => {
        setLoading(true);

          
      Axios.post("http://localhost:3001/review", data).then((response) => {
    
    
        console.log("REVIEW HAS BEEN ADDED"+response)



        setTimeout(() => {
          setLoading(false);
          toast.info('Information Added successfully');
          // navigate.push('/add-property');
      }, 3000);
   
  });
         
      }
  return (
    <div class='text-left'>

    
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
                                            <h4 class='box-title '>Make Review</h4>
                                        </div>
                                        <div className="col-4"></div>

                                        <div className="col-3">

                                        <div class="float-lg-right ml-4">
                                            <Link class='btn btn-success' to='/'>
                                               New Review
                                            </Link>
                                        </div>
                                        </div>
                                 </div>
                                 <br />

                                 <div>


                    

         

          
            

                 


                                 <div class="col-12 col-sm-12">
                                 <div class="form-group row">
                                 <label class="col-sm-2 col-form-label" for="inputEmail3">Recipient</label>
                                 <div class="col-sm-10">
                                 <select id="booking_customer_id" name="booking_customer_id" 
                                                   
                                 onChange={(event) => {
                                   setReceiver_id(event.target.value);
                                   }}
                                                 
                                                 
                                   class="custom-select mr-sm-2" tabindex="-1" aria-hidden="true">
                                                 <option value=''> </option>
                                                       {usersList.map((value, key) => {
                                                         return (
                                                       <option key={key} value={value.id}>{value.first_name===null ? '' : value.first_name} {value.id}</option>
                                                       
                                                       );
                                                     })}
                                                          </select>
                                
                                 
                                 </div>
                                </div>
                                </div>
                   
                               
                                 
                                 
                   
                                
                             
                                   <div class="col-12 col-sm-12">
                                   <div class="form-group row">
                   
                                   <label class="col-sm-2 col-form-label" for="inputEmail3">Message</label>
                                       <div class="col-sm-10">
                   
                                     <textarea cols={10} rows={3} class="multisteps-form__textarea form-control" onChange={(event) => {
                                       setMessage(event.target.value);
                                     }}  placeholder="Message">
                   
                   
                                     </textarea>
                                     </div>
                                   </div>
                                   </div>


                                   <div class="col-12 col-sm-12">
                                   <div class="form-group row">
                   
                                   <label class="col-sm-2 col-form-label" for="inputEmail3">Comments</label>
                                       <div class="col-sm-10">
                   
                                     <textarea cols={10} rows={3} class="multisteps-form__textarea form-control" onChange={(event) => {
                                        setComments(event.target.value);
                                     }}  placeholder="Comments">
                   
                   
                                     </textarea>
                                     </div>
                                   </div>
                                   </div>


                                   <div class="col-12 col-sm-12">
                                   <div class="form-group row">
                   
                                   <label class="col-sm-2 col-form-label" for="inputEmail3">improve_message</label>
                                       <div class="col-sm-10">
                   
                                     <textarea cols={10} rows={3} class="multisteps-form__textarea form-control" onChange={(event) => {
                                       setMessage(event.target.value);
                                     }}  placeholder="improve_message">
                   
                   
                                     </textarea>
                                     </div>
                                   </div>
                                   </div>
                   
                   
                   
                                   <div class="col-12 col-sm-12">
                                   <div class="form-group row">
                                   <label class="col-sm-2 col-form-label" for="inputEmail3">Sender</label>
                                   <div class="col-sm-10">
                                  
                                   <input class="form-control" id="title" type="number" onChange={(event) => {
                                     setSender_id(event.target.value);
                                   }} value={authState.id} placeholder="Title" name="title" />
                                   </div>
                                  </div>
                                  </div>


                                  <div class="col-12 col-sm-12">
                                  <div class="form-group row">
                                  <label class="col-sm-2 col-form-label" for="inputEmail3">Reviewer</label>
                                  <div class="col-sm-10">
                                 
                                  <input class="form-control" id="title" type="text" onChange={(event) => {
                                    setImprove_message(event.target.value);
                                  }} value={authState.role} placeholder="Title" name="title" />
                                  </div>
                                 </div>
                                 </div>
                   
                   
                                 
                   
                                  <div class="form-group row">
                                 <div class="button-row d-flex mt-4">
                                 <div class="col-sm-10">
                                   {!isLoading && <button type="submit" onClick={makeReview} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>
                   
                                   }
                                   {isLoading &&
                                     <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-spinner fa-spin"></i>Saving Infor</button>
                                   }
                               </div>
                               </div>
                               </div>
                   
                              
                               
                               <ToastContainer />
                         
                   
                         
                    
                                                   
                                               </div>
                       
                    </div>
                </div>
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
  )
}

export default ReviewProperty