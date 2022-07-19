import React from 'react'

export default function Modal() {
    return (
        <div>
             <div class="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h2 class="modal-title_big">
              Log in or Sign up to continue
              <h4 class="modal-title" id="myModalLabel">Please fill in the log in or register forms</h4>
            </h2>
          </div>

          <div class="modal-body">
            <div id="ajax_login_div" class="">
              <div class="login_form" id="login-div">
                <div class="loginalert" id="login_message_area"></div>

                <div class="loginrow">
                  <input type="text" class="form-control" name="log" id="login_user" placeholder="Username" size="20" />
                </div>

                <div class="loginrow">
                  <input type="password" class="form-control" name="pwd" placeholder="Password" id="login_pwd" size="20" />
                </div>

                <input type="hidden" name="loginpop" id="loginpop" value="0" />
                <input type="hidden" id="security-login" name="security-login" value="ffda95c54b-1638969714" />

                <button id="wp-login-but" class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" data-mixval="18460">Login</button>
                <div class="navigation_links">
                  <a href="#" id="reveal_register">Don&#039;t have an account?</a>
                  |
                  <a href="#" id="forgot_password_mod">Forgot Password</a>
                </div>
              </div>
              {/* <!-- end login div--> */}
              <div class="login-links">
                <div class="wpestate_social_login" id="facebooklogin" data-social="facebook"><i class="fab fa-facebook-f"></i> Login with Facebook</div>
                <input type="hidden" class="wpestate_social_login_nonce" value="428ebbade6" />
              </div>
              {/* <!-- end login links--> */}
            </div>
            {/* <!-- /.ajax_login_div --> */}

            <div id="ajax_register_div" class="">
              <div class="login_form shortcode-login">
                <div class="loginalert" id="register_message_area"></div>

                <div class="loginrow">
                  <input type="text" name="user_login_register" id="user_login_register" class="form-control" placeholder="Username" size="20" />
                </div>
                <div class="loginrow">
                  <input type="text" name="user_email_register" id="user_email_register" class="form-control" placeholder="Email" size="20" />
                </div>
                <div class="acc_radio">
                  <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                  <div class="radiolabel" for="acctype0">I only want to book</div>
                  <br />
                  <input type="radio" name="acc_type" id="acctype1" value="0" required />
                  <div class="radiolabel" for="acctype1">I want to rent my property</div>
                </div>
                <input type="checkbox" name="terms" id="user_terms_register_sh" />
                <label id="user_terms_register_sh_label" for="user_terms_register_sh">I agree with <a href="./../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">terms &amp; conditions</a> </label
                                    ><button id="wp-submit-register" style={{ marginTop: 10 }} class="wpb_button wpb_btn-info wpb_btn-small wpestate_vc_button vc_button">Create an account</button>
                <p id="reg_passmail">*A password will be e-mailed to you</p>
                <input type="hidden" id="security-register" name="security-register" value="c37fe2e3b6-1638969714" />
              </div>
              <div id="reveal_login">
                <a href="#">Already a member? Sign in!</a>
              </div>
              <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/homepage-elementor/" />
            </div>

            <div class="login_form" id="forgot-pass-div_mod">
              <div class="loginalert" id="forgot_pass_area_shortcode"></div>
              <div class="loginrow">
                <input type="text" class="form-control forgot_email_mod" name="forgot_email" id="forgot_email_mod" placeholder="Enter Your Email Address" size="20" />
              </div>
              <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/homepage-elementor/" />
              <input type="hidden" id="postid" value="0" />
              <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-forgot-but_mod" name="forgot">Reset Password</button>

              <a href="#" id="return_login_mod">Return to Login</a>
            </div>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>
      {/* <!-- /.modal --> */}
    </div>
        </div>
    )
}
