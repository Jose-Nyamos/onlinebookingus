import React from 'react';
import { withRouter } from 'react-router-dom';
// import Registration from '../Registration/Registration';
import { logoutClearSession, loginPost, verifyLogin } from '../Utility/ReigstrationLoginFunction';
// import imageLogo from './Images/logo.png';
// import neccessary components
import { Form, FormGroup, Input } from 'reactstrap';

class Login extends React.Component {
 constructor() {
  super();
  this.state = {
   loginfields: {
    email: '',
    password: ''
   },
   emailerror: '',
   loginerror: ''
  };

  this.updateFields = this.updateFields.bind(this);
  this.login = this.login.bind(this);
 }

 compoenentDidMount(prevProps) {
  if (prevProps.location.search !== this.props.location.search || prevProps.location.state !== this.props.location.state) {
   verifyLogin();
  }
 }

 componentDidUpdate(prevProps) {
  if (prevProps.location.search !== this.props.location.search || prevProps.location.state !== this.props.location.state) {
   verifyLogin();
  }
 }

 updateFields(event) {
  let temp_fields = this.state.loginfields;
  temp_fields[event.target.name] = event.target.value;
  this.setState({ loginfields: temp_fields });
 }

 login = event => {
  event.preventDefault();
  // console.log('login clicked')
  if (this.validate()) {
   const temp_fields = {
    email: this.state.loginfields.email,
    password: this.state.loginfields.password
   };

   loginPost(temp_fields).then(response => {
    // console.log("loginPost got excuted")
    // console.log(response)
    let temp_loginerror = '';
    let empty_fields = {};
    empty_fields['password'] = '';

    if (response === 'S') {
     // console.log("login success")
     empty_fields['email'] = '';
     temp_loginerror = '';
     if (window.location.pathname === '/recoverage' || window.location.pathname === '/Accesscode') this.props.history.push('/');
    } else {
     temp_loginerror = '*Please enter valid credentials (email or password) or reset password';
     this.setState({ loginerror: temp_loginerror });
     empty_fields['email'] = this.state.loginfields.email;
    }

    this.setState({ loginfields: empty_fields, loginerror: temp_loginerror }, () => this.pushtoCurrentURL());
   });
  }
 };

 pushtoCurrentURL() {
  const currentURL = this.props.location.pathname + this.props.location.search;
  this.props.history.push(currentURL);
 }

 Home(event) {
  event.preventDefault();

  this.props.history.push(`/`);
 }

 Logout(event) {
  logoutClearSession();
  event.preventDefault();
  localStorage.removeItem('accesstoken');
  if (window.location.pathname === '/UserProfile' || window.location.pathname === '/Reservations') this.props.history.push('/');
  else this.pushtoCurrentURL();
 }

 ResetPassword(event) {
  event.preventDefault();
  this.props.history.push('/recoverage');
 }

 UserProfile(event) {
  event.preventDefault();

  this.props.history.push(`/UserProfile`);
 }

 Reservations(event) {
  event.preventDefault();

  this.props.history.push(`/Reservations`);
 }

 validate() {
  let temp_email = this.state.loginfields.email;
  let temp_error = '';
  let formIsValid = true;

  if (temp_email !== '') {
   //regular expression for email validation
   let checker = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
   if (!checker.test(temp_email)) {
    formIsValid = false;
    temp_error = '*Please enter valid email.';
   }
  }

  this.setState({
   emailerror: temp_error
  });

  return formIsValid;
 }

 render() {
  const EmptyForm = <div></div>;

  // const Username = (<div className="col-auto"  >{this.state.loginfields.email}</div>)
  // const ProfileLink = (<div className="col-auto" onClick={this.UserProfile.bind(this)} >My Profile</div>)
  // const ReservationLink = (<div className="col-auto" onClick={this.Reservations.bind(this)} >My Reservations</div>)
  // const ResetPasswordLink = (<div className="col-auto" onClick={this.ResetPassword.bind(this)} >Reset Password</div>)

  const LoginForm = (
   /*RIGHT SIDE*/

   <div>
    <div>
     <div class="login_form" id="register-div-mobile" style={{ display: 'block' }}>
      <Form className="form-inline my-2 my-lg-0" onSubmit={this.login}>
       {/*EMAIL*/}
       <div className="col-auto pl-0">
        <div className="input-group">
         {/*Error message for invalid login credentials (email or pw)*/}
         <div className="form-inline my-2 my-lg-0">
          <div className="text-warning">{this.state.loginerror}</div>
         </div>
         <div className="input-group-prepend">
          <div className="email-icon input-group-text">
           <i className="far fa-user"></i>
          </div>
         </div>


         <div className="col-12">
         <FormGroup>
          <Input type="text" name="email" value={this.state.loginfields.email} onChange={this.updateFields} placeholder="Email" />
         </FormGroup>
         </div>
      

        </div>
       </div>

       {/*PASSWORD*/}
       <div className="col-auto pl-0">
        <div className="input-group">
         <div className="input-group-prepend">
          <div className="password-icon input-group-text">
           <i className="fa fa-lock"></i>
          </div>
         </div>
         
         <FormGroup>
          <Input type="password" name="password" value={this.state.loginfields.password} onChange={this.updateFields} placeholder="********" />
         </FormGroup>
      

        </div>
       </div>
       <div className="form-inline my-2 my-lg-0">
        <div className="text-warning">{this.state.emailerror}</div>
       </div>

       {/*LOGIN BUTTON*/}
       <button class="wpb_button  wpb_btn-info  wpb_regularsize  wpestate_vc_button  vc_button" id="wp-submit-register_wd_mobile" onClick={this.register}>
        Login
       </button>
      </Form>

      {/*Error message for invalid email*/}
     </div>

     <div className="navigation_links">
      <a href="#" id="reveal_register">
       Don&#039;t have an account?
      </a>{' '}
      |
      <a href="#" id="forgot_password_mod">
       Forgot Password
      </a>
     </div>
     <div className="login-links">
      <div className="wpestate_social_login" id="facebooklogin" data-social="facebook">
       <i className="fab fa-facebook-f"></i> Login with Facebook
      </div>
      <input type="hidden" className="wpestate_social_login_nonce" value="428ebbade6" />
     </div>
     <div class="login-links"></div>
     {/* <!-- end login links-->  */}
    </div>
   </div>
  );

  const LogoutForm = (
   <div>
    <form className="form-inline my-2 my-lg-0">
     <div className="col-auto pl-0 pr-0">
      <button className="btn btn-primary my-2 my-sm-0" onClick={this.Logout.bind(this)} type="submit">
       LOGOUT
      </button>
     </div>
    </form>
   </div>
  );

  function navbarChange(temp) {
   if (temp === '/HotelSearch') {
    return 'sticky-top navbar navbar-pages fixed-top';
   } else if (temp === '/RoomPage' || temp === '/ModifyRoomPage' || temp === '/Checkout') {
    return 'sticky-top navbar navbar-page-room fixed-top';
   } else {
    return 'sticky-top navbar navbar-home fixed-top';
   }
  }

  return (
   //   <nav className={navbarChange(this.props.location.pathname)}>
   //     {/*<nav className="sticky-top navbar navbar-home navbar-dark bg-light fixed-top">*/}

   //     {/*LEFT SIDE*/}
   //     <div className="navbar-left form-inline my-2 my-lg-0" >
   //       <div className="col-auto pl-0 custom-row" onClick={this.Home.bind(this)}>
   //         <img className="imageLogo" src={imageLogo} alt="logologologo"></img>
   //         <div>Wprentals</div>
   //       </div>
   //       {localStorage.accesstoken ? EmptyForm : <div className="">|</div>}
   //       {localStorage.accesstoken ? EmptyForm : <Registration />}
   //     </div>

   //     {/*RIGHT SIDE*/}
   <div>
    {/* {localStorage.accesstoken ? ProfileLink : EmptyForm} */}
    {/* {localStorage.accesstoken ? ReservationLink : EmptyForm} */}
    {/* {localStorage.accesstoken ? EmptyForm : ResetPasswordLink} */}
    {LoginForm}
   </div>

   //   </nav>
  );
 }
}

export default withRouter(Login);
