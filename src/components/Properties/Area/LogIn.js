import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../helpers/AuthContext";

import { GuestBookingContext } from "../Context/GuestBookingContext";

import { Link } from 'react-router-dom';




function LogIn() {

        const booking = useContext(GuestBookingContext);
        const [username, setUsername] = useState("");
      
        const [role, setRole] = useState("");
        const [password, setPassword] = useState("");
        const { setAuthState } = useContext(AuthContext);
      
       // let history = useHistory();
      
        const history = useHistory();
      
      
        const [isLoading,setLoading]=useState(false);
      
        const login = () => {
            
          const data = { username: username, password: password };
      
          setLoading(true);
          axios.post("https://onlinebookingus-app-test.herokuapp.com/users/login", data).then((response) => {
            if (response.data.error) {
              alert(response.data.error);
              setLoading(false);
            } else {
              localStorage.setItem("accessToken", response.data.token);
              setAuthState({
                username: response.data.username,
                role: response.data.role,
                first_name: response.data.first_name,
                phone_no: response.data.phone_no,
                email:response.data.email,
                id: response.data.id,
                status: true,
              });
      
              console.log("Response is",response.data)
      
              if(response.data.role=="Admin"){
      
                setTimeout(() => {
                  setLoading(false);
                  history.push('/dashboard')
                  
              }, 2000);
      
              }
            else if(response.data.role=="Host"){
      
              setTimeout(() => {
                setLoading(false);
                history.push("/payment")

                window.location.reload(false);
               // history("/dashboard-host");
            }, 2000);
      
            }
            else{
              setTimeout(() => {
                setLoading(false);
                history.push("/payment");
                window.location.reload(false);
                
            }, 2000);
      
      
            }
      
             
            
            }
          });
        };

        const createAccount=()=>{

            history.push('/register');
      
           }
  return (
        <div>

    <div className="login_form" id="login-div">
    <div className="loginalert" id="login_message_area"></div>

    <div className="loginrow">
    
      <input
      type="text"
      className="form-control"
      placeholder="Username"
      onChange={(event) => {
        setUsername(event.target.value);
      }}
      size="20"
    />
    </div>

    <div className="loginrow">
    

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        size="20"
      />
    </div>

    <input type="hidden" name="loginpop" id="loginpop" value="0" />
    <input type="hidden" id="security-login" name="security-login" value="4bd21394d1-1638969710" />

    


     {!isLoading && <button id="wp-login-but" className="wpb_button  wpb_btn-info  wpb_regularsize   wpestate_vc_button  vc_button" data-mixval="1745" onClick={login}>
     Login </button>

  } 
  {isLoading &&
    <button id="wp-login-but" className="wpb_button  wpb_btn-info  wpb_regularsize   wpestate_vc_button  vc_button" data-mixval="1745" disabled>
    <i class="fas fa-spinner fa-spin"></i>Signing In</button>
    
  }

    
  <div className="navigation_links">
  <a href="#" data-toggle="modal" data-target="#signupModal">
    Don&#039;t have an account?
  </a>{' '}
  |
  <a href="#" id="forgot_password_mod">
    Forgot Password
  </a>
</div>
  </div>
  {/* <!-- end login div-->  */}
  <div className="login-links">
    <div className="wpestate_social_login" id="facebooklogin" data-social="facebook">
      <i className="fab fa-facebook-f"></i> Login with Facebook
    </div>
    <input type="hidden" className="wpestate_social_login_nonce" value="428ebbade6" />
  </div>
            
        </div>
    )
}

export default LogIn;
