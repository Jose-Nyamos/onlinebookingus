import React,{ useState, useEffect }  from 'react';
import { Link, useParams,useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

import { Helmet } from 'react-helmet';

import Axios from "axios";


import { useContext } from 'react';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function EditReview() {

    let {id}=useParams()

    const [bookingList, setbookingList] = useState([]);

    
 

    const [message, setMessage] = useState('');
    const [comments, setComments] = useState('');
    const [improve_message, setImprove_message] = useState('');
    const [sender_id, setSender_id] = useState('');
    const [reviewer, setReviewer] = useState('');
    const [receiver_id, setReceiver_id] = useState('');
    const [isLoading,setLoading]=useState(false);

    const navigate=useHistory()



    useEffect(()=>{

    

        Axios.get(`http://localhost:3001/review/byId/${id}`).then((response) => {

            setMessage(response.data.message);
            setComments(response.data.comments)
            setImprove_message(response.data.improve_message);
            setSender_id(response.data.sender_id)

            setReviewer(response.data.reviewer);
            setReceiver_id(response.data.receiver_id)
 
                 });

    },[]);



    const updateHandler = async (e) => {

        setLoading(true);
    
        const data = {
            message: message,
           
           
        }
    
        Axios.put(`http://localhost:3001/review/updatereview/${id}`, data).then((response) => {
    
    
              console.log("REVIEW UPDATES MANAGED"+response.data)
    
    
              setTimeout(() => {
                setLoading(false);
                toast.info('Information Added successfully');
                 navigate.push('/managereviews');
            }, 3000);
         
        });
      
    
    }




  return <div>
      <Helmet>
	<link href="/dist-assets/css/themes/lite-purple.min.css" rel="stylesheet" />
    <link href="/dist-assets/css/plugins/perfect-scrollbar.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/dist-assets/css/plugins/datatables.min.css" />
	<script src="/dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
    <script src="/dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
    <script src="/dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="/dist-assets/js/scripts/script.min.js"></script>
    <script src="/dist-assets/js/scripts/sidebar.large.script.min.js"></script>
    <script src="/dist-assets/js/plugins/datatables.min.js"></script>
    <script src="/dist-assets/js/scripts/datatables.script.min.js"></script>
    <script src="cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <script src="dist-assets/js/plugins/quill.min.js"></script>
    <script src="dist-assets/js/scripts/quill.script.min.js"></script>
			
	</Helmet>

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
            <section class="content">
     
      <div class="row">
                    <div class="col-md-6">
                        <h4>Edit Review Form</h4>
                        <div class="card mb-5">
                            <div class="card-body">
                              
                                    <div class="form-group row">
                                        <label class="col-sm-4 col-form-label" for="inputEmail3"><b>Booking ID</b></label>
                                        <div class="col-sm-8">
                                        <p>111</p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-4 col-form-label" for="inputPassword3">Property Name</label>
                                        <div class="col-sm-8">
                                        <p>Concorde Hotel New York</p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-4 col-form-label" for="inputPassword3">Sender</label>
                                        <div class="col-sm-8">
                                        <p>N</p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-4 col-form-label" for="inputPassword3">Receiver</label>
                                        <div class="col-sm-8">
                                        <p>{receiver_id}</p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-4 col-form-label" for="inputPassword3">Message</label>
                                        <div class="col-sm-8">
                                        <textarea cols={10} rows={3} class="multisteps-form__textarea form-control" value={message} onChange={(event) => {
                                            setMessage(event.target.value);
                                          }}  placeholder="Message">
                                          {message}
                        
                        
                                          </textarea>
                                        </div>
                                    </div>
                                   
                                 
                                    <div class="box-footer">
                                        <button type="submit" class="btn btn-default" name="cancel" value="cancel">Cancel</button>
                                        <button type="submit" class="btn btn-info float-right" onClick={updateHandler} name="submit" value="submit">Submit</button>
                                      </div>
                                   
                            

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
  </div>;
}

export default EditReview;
