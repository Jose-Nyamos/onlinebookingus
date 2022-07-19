// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { AuthContext } from '../../helpers/AuthContext';


// class SignIn extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//           loginfields: {
//             email: '',
//             password: '',
//           },
//           emailerror: '',
//           loginerror: ''
//         }
    
//         this.updateFields = this.updateFields.bind(this)
//         this.login = this.login.bind(this)
//       }
    
//       compoenentDidMount(prevProps) {
//         if (prevProps.location.search !== this.props.location.search || prevProps.location.state !== this.props.location.state) {
//           verifyLogin()
//             }
//       }
    
//         componentDidUpdate(prevProps) {
//             if (prevProps.location.search !== this.props.location.search || prevProps.location.state !== this.props.location.state) {
//           verifyLogin()
//             }
//       }
    
//       updateFields(event) {
//         let temp_fields = this.state.loginfields;
//         temp_fields[event.target.name] = event.target.value;
//         this.setState({ loginfields: temp_fields });
//       }
    
//       login = (event) => {
//         event.preventDefault()
//         // console.log('login clicked')
//         if (this.validate()) {
//           const temp_fields = {
//             email: this.state.loginfields.email,
//             password: this.state.loginfields.password
//           }
    
//           loginPost(temp_fields).then(response => {
//             // console.log("loginPost got excuted")
//             // console.log(response)
//             let temp_loginerror = ''
//             let empty_fields = {}
//             empty_fields["password"] = ''
    
//             if (response === "S") {
//               // console.log("login success")
//               empty_fields["email"] = ''
//               temp_loginerror = ''
//               if (window.location.pathname === '/recoverage' || window.location.pathname === '/Accesscode')
//                 this.props.history.push('/')
//             } else {
//               temp_loginerror = "*Please enter valid credentials (email or password) or reset password"
//               this.setState({ loginerror: temp_loginerror })
//               empty_fields["email"] = this.state.loginfields.email
//             }
    
//             this.setState({ loginfields: empty_fields, loginerror: temp_loginerror }, () => this.pushtoCurrentURL())
//           })
//         }
//       }
    
//       pushtoCurrentURL() {
//         const currentURL = this.props.location.pathname + this.props.location.search
//         this.props.history.push(currentURL)
//       }
    
//       Home(event) {
//         event.preventDefault()
    
//         this.props.history.push(`/`)
//       }
    
//       Logout(event) {
//         logoutClearSession()
//         event.preventDefault()
//         localStorage.removeItem('accesstoken')
//         if (window.location.pathname === '/UserProfile' || window.location.pathname === '/Reservations')
//           this.props.history.push('/')
//         else
//           this.pushtoCurrentURL()
//       }
    
//       ResetPassword(event){
//         event.preventDefault()
//         this.props.history.push('/recoverage')
//       }
    
//       UserProfile(event) {
//         event.preventDefault()
    
//         this.props.history.push(`/UserProfile`)
//       }
    
//       Reservations(event) {
//         event.preventDefault()
    
//         this.props.history.push(`/Reservations`)
//       }
    
//       validate() {
//         let temp_email = this.state.loginfields.email
//         let temp_error = ''
//         let formIsValid = true;
    
//         if (temp_email !== '') {
//           //regular expression for email validation
//           let checker = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//           if (!checker.test(temp_email)) {
//             formIsValid = false;
//             temp_error = "*Please enter valid email.";
//           }
//         }
    
//         this.setState({
//           emailerror: temp_error
//         });
    
//         return formIsValid;
//       }

//       render(){
//         const Login = (
//             <div>
//             <div className="login_form" id="login-div">
//             <div className="loginalert" id="login_message_area"></div>
        
//             <div className="loginrow">
//              <input
//               type="text"
//               className="form-control"
//               placeholder="Username"
//               onChange={event => {
//                setUsername(event.target.value);
//               }}
//               size="20"
//              />
//             </div>
        
//             <div className="loginrow">
//              <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               onChange={event => {
//                setPassword(event.target.value);
//               }}
//               size="20"
//              />
//             </div>
        
//             <input type="hidden" name="loginpop" id="loginpop" value="0" />
//             <input type="hidden" id="security-login" name="security-login" value="4bd21394d1-1638969710" />
        
//             {!isLoading && (
//              <button id="wp-login-but" className="wpb_button  wpb_btn-info  wpb_regularsize   wpestate_vc_button  vc_button" data-mixval="1745" onClick={login}>
//               Login{' '}
//              </button>
//             )}
//             {isLoading && (
//              <button id="wp-login-but" className="wpb_button  wpb_btn-info  wpb_regularsize   wpestate_vc_button  vc_button" data-mixval="1745" disabled>
//               <i class="fas fa-spinner fa-spin"></i>Signing In
//              </button>
//             )}
        
//             <div className="navigation_links">
//              <a href="#" id="reveal_register">
//               Don&#039;t have an account?
//              </a>{' '}
//              |
//              <a href="#" id="forgot_password_mod">
//               Forgot Password
//              </a>
//             </div>
//            </div>
//            {/* <!-- end login div-->  */}
//            <div className="login-links">
//             <div className="wpestate_social_login" id="facebooklogin" data-social="facebook">
//              <i className="fab fa-facebook-f"></i> Login with Facebook
//             </div>
//             <input type="hidden" className="wpestate_social_login_nonce" value="428ebbade6" />
//            </div>
//           </div>


//         )
//       }
     

//  return (
  
//     zz
 
//  );
// }

// export default SignIn;
