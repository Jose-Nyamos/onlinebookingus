import React from 'react';
import PropTypes from 'prop-types';

function Registeration(props) {
 return (
  <div>
   <div class="login_form" id="register-div-mobile" style={{ display: 'block' }}>
    <div class="loginalert" id="register_message_area_wd_mobile"></div>
    <input type="text" name="user_login_register" id="user_login_register_wd_mobile" class="form-control" placeholder="Username" />
    <input type="text" name="user_email_register" id="user_email_register_wd_mobile" class="form-control" placeholder="Email" />
    <input type="password" name="user_password" id="user_password_wd_mobile" class="form-control" placeholder="Password" size="20" />
    <input type="password" name="user_password_retype" id="user_password_retype_wd_mobile" class="form-control" placeholder="Retype Password" size="20" />
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
    <button class="wpb_button  wpb_btn-info  wpb_regularsize  wpestate_vc_button  vc_button" id="wp-submit-register_wd_mobile">
     Register
    </button>
    <div class="login-links">
     <a href="#" id="widget_login_sw_mobile">
      Back to Login
     </a>
    </div>
    <div class="login-links"></div>
    {/* <!-- end login links-->  */}
   </div>
  </div>
 );
}

Registeration.propTypes = {};

export default Registeration;
