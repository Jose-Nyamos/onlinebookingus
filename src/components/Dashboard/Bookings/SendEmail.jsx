import React,{ useState, useEffect }  from 'react';
import { Link,useParams} from 'react-router-dom';
import Axios from "axios";

import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

import { Helmet } from "react-helmet";


import { useContext } from 'react';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'


function SendEmail() {

    let {id}=useParams()
    const {authState} = useContext(AuthContext);

    const [UserId, setUserId] = useState('');
    const [usersList, setUsersList] = useState([]);

    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [sender_id, setSender_id] = useState('');
    const [receiver_id, setReceiver_id] = useState('');
    const [email, setEmail] = useState("");

    const [senderemail,setSenderEmail ] = useState("");
    const [isLoading,setLoading]=useState(false);





    


    useEffect(()=>{

        Axios.get(`https://onlinebookingus-app-test.herokuapp.com/booking/getbookingById/${id}`).then((response) => {
          
            // setStartDate(response.data.booking.start_date)
            console.log("THE RETURNED BOOKING DATA IS"+response.data.booking.id)

            setReceiver_id(response.data.user.id)
            setEmail(response.data.user.email)
           
           



           // let s_d=moment(response.data.booking.start_date).format("MM-DD-YYYY")

            //setStartDate(s_d)

           //setEndDate(response.data.booking.end_date)
          });
  
  

        Axios.get("https://onlinebookingus-app-test.herokuapp.com/users/customers").then((response) => {
                   setUsersList(response.data);
                  // setUsers(response.data);
                 });
        
    },[]);

    const data = {
      sender_id: 2,
      receiver_id: receiver_id,
      subject: subject,
      message: message,
      
     }


    const addMessage = () => {
      setLoading(true);
    
      Axios.post("https://onlinebookingus-app-test.herokuapp.com/message", data).then((response) => {
    
    
            console.log("MASSAGE ADDED"+response)
    
    
    
            setTimeout(() => {
              setLoading(false);
              toast.info('Information Added successfully');
              // navigate.push('/add-property');
          }, 3000);
       
      });
    }
  return (
    <div> <div>

    <Helmet>
    <link rel="stylesheet" href="/dist-assets/css/themes/lite-purple.min.css" />
    <link rel="stylesheet" href="/dist-assets/css/plugins/perfect-scrollbar.min.css" />

</Helmet>
    <div class='text-left'>



    <div class='app-admin-wrap layout-sidebar-large'>
      <Sidebar/>
       <Topbar/>


        <div class="main-content-wrap sidenav-open d-flex flex-column">
       
        <div class="main-content">

        


          
            <div class="inbox-main-sidebar-container" data-sidebar-container="main">
                <div class="inbox-main-content" data-sidebar-content="main">


                <div class="inbox-secondary-sidebar-container box-shadow-1" data-sidebar-container="secondary">
                <div data-sidebar-content="secondary">
                    <div class="inbox-secondary-sidebar-content position-relative" style={{minHeight: "500px"}}>
                        <div class="inbox-topbar box-shadow-1 perfect-scrollbar rtl-ps-none pl-3" data-suppress-scroll-y="true">
                          <a class="link-icon d-md-none" data-sidebar-toggle="main"><i class="icon-regular i-Arrow-Turn-Left"></i></a><a class="link-icon mr-3 d-md-none" data-sidebar-toggle="secondary"><i class="icon-regular mr-1 i-Left-3"></i> Inbox</a>
                            <div class="d-flex"><a class="link-icon mr-3" href="#"><i class="icon-regular i-Mail-Reply"></i> Reply</a><a class="link-icon mr-3" href="#"><i class="icon-regular i-Mail-Reply-All"></i> Forward</a><a class="link-icon mr-3" href="#"><i class="icon-regular i-Mail-Reply-All"></i> Delete</a></div>
                        </div>
                        
                        <div class="inbox-details perfect-scrollbar rtl-ps-none" data-suppress-scroll-x="true">
                          
                            <div>


                    

         

          
            

                 


              <div class="col-12 col-sm-12">
              <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="inputEmail3">Recipient</label>
              <div class="col-sm-10">

              <input class="form-control" id="title" type="text"

              value={email}

              onChange={(event) => {
                setEmail(event.target.value);
             }}
              
              placeholder="receiver_email" name="title" />
              
             
              
              </div>
             </div>
             </div>

             <div class="col-12 col-sm-12">
             <div class="form-group row">
             <label class="col-sm-2 col-form-label" for="inputEmail3">Subject</label>
             <div class="col-sm-10">
            
             <input class="form-control" id="title" type="text"

             onChange={(event) => {
              setSubject(event.target.value);
            }}
             
             placeholder="subject" name="title" />
             </div>
            </div>
            </div>
              
              

             
          
                <div class="col-12 col-sm-12">
                <div class="form-group row">

                <label class="col-sm-2 col-form-label" for="inputEmail3">Message</label>
                    <div class="col-sm-10">

                  <textarea cols={10} rows={10} class="multisteps-form__textarea form-control" onChange={(event) => {
                    setMessage(event.target.value);
                  }}  placeholder="Message">


                  </textarea>
                  </div>
                </div>
                </div>

                


                <div class="col-12 col-sm-12">
                <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="inputEmail3">Sender</label>
                <div class="col-sm-10">
               
                <input class="form-control" id="title" type="text"
                
                value="corporatehomeus@gmail.com"
                
                onChange={(event) => {
                    setSenderEmail(event.target.value);
                }}  placeholder="Title" name="title" />
                </div>
               </div>
               </div>


              

               <div class="form-group row">
              <div class="button-row d-flex mt-4">
              <div class="col-sm-10">
                {!isLoading && <button type="submit" onClick={addMessage} class="btn btn-primary ml-auto js-btn-next" title="Save" >Send</button>

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


          



            
          
           
            
           
          
        </div>
        <div class="flex-grow-1"></div>

       
       
      
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
</div>
  )
}

export default SendEmail