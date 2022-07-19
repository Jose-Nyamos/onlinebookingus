import React from 'react';
import { Link } from 'react-router-dom';

export default function Mobile() {
    return (
    <div>
     <div class="mobilewrapper-user">
      <div class="snap-drawers">
        {/* <!-- Right Sidebar--> */}
        <div class="snap-drawer snap-drawer-right">
          <div class="mobilemenu-close-user"><i class="fas fa-times"></i></div>

          <div class="login_sidebar_mobile">
            <h3 class="widget-title-sidebar" id="login-div-title-mobile">Login</h3>
            <div class="login_form" id="login-div-mobile">
              <div class="loginalert" id="login_message_area_wd_mobile"></div>
              <input type="text" class="form-control" name="log" id="login_user_wd_mobile" placeholder="Username" />
              <input type="password" class="form-control" name="pwd" id="login_pwd_wd_mobile" placeholder="Password" />
              <input type="hidden" name="loginpop" id="loginpop_mobile" value="0" />
              <input type="hidden" id="security-login-mobile" name="security-login-mobile" value="047063c315-1638969714" />
              <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-login-but-wd-mobile">Login</button>
              <div class="login-links">
                <Link to="#" id="widget_register_mobile">Need an account? Register here!</Link>
                <Link to="#" id="forgot_pass_widget_mobile">Forgot Password?</Link>
              </div>
              <div class="wpestate_social_login" id="facebooklogin_mb" data-social="facebook"><i class="fab fa-facebook-f"></i> Login with Facebook</div>
              <input type="hidden" class="wpestate_social_login_nonce" value="428ebbade6" />
            </div>

            <h3 class="widget-title-sidebar" id="register-div-title-mobile">Register</h3>
            <div class="login_form" id="register-div-mobile">
              <div class="loginalert" id="register_message_area_wd_mobile"></div>
              <input type="text" name="user_login_register" id="user_login_register_wd_mobile" class="form-control" placeholder="Username" />
              <input type="text" name="user_email_register" id="user_email_register_wd_mobile" class="form-control" placeholder="Email" />
              <div class="acc_radio">
                <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                <div class="radiolabel" for="acctype0">I only want to book</div>
                <br />
                <input type="radio" name="acc_type" id="acctype1" value="0" required />
                <div class="radiolabel" for="acctype1">I want to rent my property</div>
              </div>
              <input type="checkbox" name="terms" id="user_terms_register_wd_mobile" /><label id="user_terms_register_wd_label_mobile" for="user_terms_register_wd_mobile"
                >I agree with
                <Link to="./../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">terms &amp; conditions</Link>
              </label>
              <input type="hidden" id="security-register-mobile" name="security-register-mobile" value="75fa241f7f-1638969714" /><button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-submit-register_wd_mobile">
                Register
              </button>
              <div class="login-links">
                <Link to="#" id="widget_login_sw_mobile">Back to Login</Link>
              </div>
            </div>
          </div>

          <div id="mobile_forgot_wrapper">
            <h3 class="widget-title-sidebar" id="forgot-div-title_mobile">Reset Password</h3>
            <div class="login_form" id="forgot-pass-div_mobile">
              <div class="loginalert" id="forgot_pass_area_shortcode_wd_mobile"></div>
              <div class="loginrow">
                <input type="text" class="form-control" name="forgot_email" id="forgot_email_mobile" placeholder="Enter Your Email Address" size="20" />
              </div>
              <input type="hidden" id="security-login-forgot_wd_mobile" name="security-login-forgot_wd_mobile" value="33233a3efc" /><input type="hidden" name="_wp_http_referer" value="/homepage-elementor/" /><input
                type="hidden"
                id="postid"
                value="0"
              />
              <button class="wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-forgot-but_mobile" name="forgot">Reset Password</button>
              <div class="login-links shortlog">
                <Link to="#" id="return_login_shortcode_mobile">Return to Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
