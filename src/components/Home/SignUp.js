import React from 'react';
import { withRouter } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { registerPost } from '../Utility/ReigstrationLoginFunction';

import { toast, ToastContainer, Zoom, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from 'react-helmet'

function refreshPage() {
 window.location.reload();
}

class SignUp extends React.Component {
 constructor() {
  super();
  // initial modal state : false
  this.state = {
   modal: false,
   fields: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repassword: ''
   },
   errors: {},
   password_error: [],
   email_duplicate_error: false,

   passwordCheck: [
    { req: '≥ 8 characters', valid: false },
    { req: 'At least 1 uppercase letter', valid: false },
    { req: 'At least 1 lowercase letter', valid: false },
    { req: 'At least 1 special character !@#$%^&*', valid: false }
   ]
  };

  this.toggle = this.toggle.bind(this);
  this.updateFields = this.updateFields.bind(this);
  this.register = this.register.bind(this);
  this.passwordChecker = this.passwordChecker.bind(this);
 }

 updateFields(event) {
  let temp_fields = this.state.fields;
  temp_fields[event.target.name] = event.target.value;
  this.setState({ fields: temp_fields });

  this.passwordChecker();
 }

 passwordChecker() {
  let pw = this.state.fields.password;
  let tmp_passwordCheck = this.state.passwordCheck;

  // req:"≥ 8 characters"
  tmp_passwordCheck[0].valid = pw.length >= 8 ? true : false;

  // At least 1 Uppercase letter
  if (/(?=.*[A-Z])/.test(pw)) {
   tmp_passwordCheck[1].valid = true;
  } else {
   tmp_passwordCheck[1].valid = false;
  }

  // At least 1 Lowercase letter
  if (/(?=.*[a-z])/.test(pw)) {
   tmp_passwordCheck[2].valid = true;
  } else {
   tmp_passwordCheck[2].valid = false;
  }

  // At least 1 special character !@#$%^&*
  if (/(?=.*[!@#$%^&*])/.test(pw)) {
   tmp_passwordCheck[3].valid = true;
  } else {
   tmp_passwordCheck[3].valid = false;
  }

  this.setState({ passwordCheck: tmp_passwordCheck });
 }

 // toggle modal
 toggle() {
  this.setState({
   ...this.state,
   modal: !this.state.modal
   // or this.setState((currentState) => {modal:!currentState.modal})
  });
 }

 // when clicking register
 register = (event) => {
  // console.log('Register clicked')
  event.preventDefault();
  if (this.validate()) {
   const temp_fields = {
    firstname: this.state.fields.firstname,
    lastname: this.state.fields.lastname,
    email: this.state.fields.email,
    password: this.state.fields.password
   };
   registerPost(temp_fields).then((response) => {
    if (response === 200) {
     this.setState({ email_duplicate_error: false }, () => this.pushtoCurrentURL());
    } else if (response === 400) {
     this.setState({ email_duplicate_error: true }, () => this.pushtoCurrentURL());
    }
   });
  }
 };

 pushtoCurrentURL() {
  const currentURL = this.props.location.pathname + this.props.location.search;
  this.props.history.push(currentURL);
 }

 validate() {
  let temp_fields = this.state.fields;
  let temp_errors = {};
  let temp_password_error = [];
  let formIsValid = true;

  if (temp_fields['firstname'] === '') {
   formIsValid = false;
   temp_errors['firstname'] = '*Please enter first name';
  }

  // allowed "spacing" for character check
  if (temp_fields['firstname'] !== '') {
   if (!temp_fields['firstname'].match(/^[a-z A-Z]*$/)) {
    formIsValid = false;
    temp_errors['firstname'] = '*Please enter English characters only.';
   }
  }

  if (temp_fields['lastname'] === '') {
   formIsValid = false;
   temp_errors['lastname'] = '*Please enter last name';
  }

  if (temp_fields['lastname'] !== '') {
   if (!temp_fields['lastname'].match(/^[a-zA-Z]*$/)) {
    formIsValid = false;
    temp_errors['lastname'] = '*Please enter English characters only.';
   }
  }

  if (temp_fields['email'] === '') {
   formIsValid = false;
   temp_errors['email'] = '*Please enter email';
  }

  if (temp_fields['email'] !== '') {
   //regular expression for email validation
   let checker = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
   if (!checker.test(temp_fields['email'])) {
    formIsValid = false;
    temp_errors['email'] = '*Please enter a valid email';
   }
  }

  if (temp_fields['password'] === '') {
   formIsValid = false;
   temp_errors['password'] = '*Please enter a password';
  }

  if (temp_fields['password'] !== '') {
   let checker = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$');
   if (!checker.test(temp_fields['password'])) {
    formIsValid = false;
    temp_errors['password'] = '*This password does not meet the requirements';
   } else {
    if (temp_fields['repassword'] === '') {
     formIsValid = false;
     temp_errors['repassword'] = '*Please re-enter password';
    }

    if (temp_fields['repassword'] !== '') {
     if (!temp_fields['repassword'].match(temp_fields['password'])) {
      formIsValid = false;
      temp_errors['repassword'] = '*Passwords must match';
     }
    }
   }
  }

  this.setState({
   errors: temp_errors,
   password_error: temp_password_error
  });
  return formIsValid;
 }

 render() {
  const password_error = (
   <div className="text-warning">
    {this.state.password_error.map((each) => (
     <div>{each}</div>
    ))}
   </div>
  );

  const no_error = <div className="text-warning"></div>;

  const email_duplicate_error = <div className="text-warning">This email is already registered</div>;

  var password_requirements_component = this.state.passwordCheck.map((ele) => {
   return (
    <div key={ele.req} className={ele.valid ? 'valid-req' : 'invalid-req'}>
     {ele.req}
    </div>
   );
  });
  return (
   <div>
      
      <div class="login_form" id="register-div-mobile" style={{ display: 'block' }}>
      <form onSubmit={this.register} >
       <div class="loginalert" id="register_message_area_wd_mobile"></div>
       <input type="text" name="firstname" value={this.state.fields.firstname} onChange={this.updateFields} id="user_login_register_wd_mobile" class="form-control" placeholder="First Name" />
       <div className="text-warning">{this.state.errors.firstname}</div>

       <input type="text" name="lastname" value={this.state.fields.lastname} onChange={this.updateFields} id="user_login_register_wd_mobile" class="form-control" placeholder="Last Name" />
       <div className="text-warning">{this.state.errors.lastname}</div>

       <input type="email" name="email" value={this.state.fields.email} onChange={this.updateFields} id="user_email_register_wd_mobile" class="form-control" placeholder="Email" />
       <div className="text-warning">{this.state.errors.email}</div>
       {this.state.email_duplicate_error ? email_duplicate_error : no_error}

       <input type="password" name="password" id="user_password_wd_mobile" class="form-control" size="20" value={this.state.fields.password} onChange={this.updateFields} placeholder="********" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$" required />
       <div className="text-warning">{this.state.errors.password}</div>
       {this.state.password_error ? password_error : no_error}
       {/* <div trigger="focus" placement="right" target="PopoverFocus">
        <PopoverHeader>Password Requirements</PopoverHeader>
        <PopoverBody>{password_requirements_component}</PopoverBody>
       </div> */}

       <input type="password" id="user_password_retype_wd_mobile" class="form-control" size="20" name="repassword" value={this.state.fields.repassword} onChange={this.updateFields} placeholder="********" required />
       <div className="text-warning">{this.state.errors.repassword}</div>

       <div class="acc_radio">
        <input type="radio" name="acc_type" id="acctype0" value="1" checked="" required="" />
        <div class="radiolabel" for="acctype0">
         I only want to book
        </div>
        <br />
        <input type="radio" name="acc_type" id="acctype1" value="0" required="" />
        <div class="radiolabel" for="acctype1">
         I want to rent my property
        </div>
       </div>
       <input type="checkbox" name="terms" id="user_terms_register_wd_mobile" />
       <label id="user_terms_register_wd_label_mobile" for="user_terms_register_wd_mobile">
        I agree with{' '}
        <a href="https://onlinebookingus.com/terms-and-conditions/" target="_blank" id="user_terms_register_topbar_link">
         terms &amp; conditions
        </a>{' '}
       </label>
       <input type="hidden" id="security-register-mobile" name="security-register-mobile" value="4551f586bc-1652214261" />
       <div id="mobile_register_menu" style={{ float: 'left', transform: 'scale(0.77)', webkittransform: 'scale(0.77)', transformOrigin: '0 0', webkittransformorigin: '0 0', marginTop: '10px' }}>
        <div style={{ width: '304px', height: '78px' }}>
         <div>
          <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lf4OlwaAAAAAFZQ4GgBERSiMImH5_5gh1achni3&amp;co=aHR0cHM6Ly9vbmxpbmVib29raW5ndXMuY29tOjQ0Mw..&amp;hl=en&amp;v=nEGwmCAyCoKVn9PSwAGnQWhY&amp;theme=light&amp;size=normal&amp;cb=3wk0ft455rgu" width="304" height="78" role="presentation" name="a-98ak0drnu9zq" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
         </div>
         <textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }}></textarea>
        </div>
        <iframe style={{ display: 'none' }}></iframe>
       </div>
       <button class="wpb_button  wpb_btn-info  wpb_regularsize  wpestate_vc_button  vc_button" id="wp-submit-register_wd_mobile" onClick={this.register}>
        Register
       </button>
       <div class="login-links">
        <a href="/SignIn" id="widget_login_sw_mobile">
         Back to Login
        </a>
       </div>
       <div class="login-links"></div>
       {/* <!-- end login links-->  */}
       </form>
      </div>
  
   </div>
  );
 }
}

export default withRouter(SignUp);
