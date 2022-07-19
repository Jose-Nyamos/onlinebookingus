import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer id="colophon" className="  footer_back_repeat  ">
        <div id="footer-widget-area" className="row ">
          <div id="first" className="widget-area col-md-4">
            <ul className="xoxo">
              <li id="text-2" className="widget-container widget_text">
                <h3 className="widget-title-footer">ABOUT WP RENTALS</h3>{' '}
                <div className="textwidget">
                  <p>WP RENTALS is committed to delivering a high level of expertise, customer service, and attention to detail to the market of accommodation booking .</p>
                  <p>We built the most featured WordPress theme for such a project. Test and convince yourself.</p>
                </div>
              </li>
              <li id="wpestate_multiple_currency_widget-1" className="widget-container multiple_currency_widget">
                <h3 className="widget-title-footer">Change Your Currency</h3>
                <div className="dropdown form-control">
                  <div data-toggle="dropdown" id="sidebar_currency_list" className="sidebar_filter_menu">
                    € <span className="caret "></span>
                  </div>

                  <input type="hidden" name="filter_curr[]" value="" />
                  <ul id="list_sidebar_curr" className="dropdown-menu filter_menu list_sidebar_currency" role="menu" aria-labelledby="sidebar_currency_list">
                    <li role="presentation" data-curpos="before" data-coef="1" data-value="€" data-symbol="€" data-symbol2="€" data-pos="-1">
                      €{' '}
                    </li>
                    <li role="presentation" data-curpos="before" data-coef="0.765" data-value="$" data-symbol="$" data-symbol2="USD" data-pos="0">
                      {' '}
                      ${' '}
                    </li>
                    <li role="presentation" data-curpos="after" data-coef="1.587" data-value="£" data-symbol="£" data-symbol2="GBP" data-pos="1">
                      {' '}
                      £{' '}
                    </li>
                  </ul>
                </div>
                <input type="hidden" id="wprentals_change_currency" value="d33f6ebf0a" />
              </li>
            </ul>
          </div>
          {/* <!-- #first .widget-area --> */}

          <div id="second" className="widget-area col-md-4">
            <ul className="xoxo">
              <li id="wpestate_contact_widget-1" className="widget-container contact_sidebar">
                <h3 className="widget-title-footer">Contact</h3>
                <div className="contact_sidebar_wrap">
                  <p className="widget_contact_addr">
                    <i className="fas fa-home"></i>3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755 Commercial OR 97302
                  </p>
                  <p className="widget_contact_phone">
                    <i className="fas fa-phone"></i>
                    <a href="tel:%28305%29+555-4446">(305) 555-4446</a>
                  </p>
                  <p className="widget_contact_email">
                    <i className="far fa-envelope"></i>
                    <a href="mailto:email@yourdomain.com">email@yourdomain.com</a>
                  </p>
                  <p className="widget_contact_url">
                    <i className="fas fa-desktop"></i>
                    <a href="http://demo1.wprentals.org/">WP Rentals</a>
                  </p>
                </div>
              </li>
              <li id="wpestate_social_widget-1" className="widget-container social_sidebar">
                <h3 className="widget-title-footer">Social Links:</h3>
                <div className="social_sidebar_internal">
                  <a href="#" target="_blank">
                    <i className="fas fa-rss fa-fw"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter  fa-fw"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-dribbble  fa-fw"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-google-plus-g  fa-fw"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- #second .widget-area --> */}

          <div id="third" className="widget-area col-md-4">
            <ul className="xoxo">
              <li id="wpestate_footer_latest_widget-2" className="widget-container latest_listings">
                <h3 className="widget-title-footer">Latest Listings</h3>

                <div itemscope itemtype="http://schema.org/Product" className="listing_wrapper col-md-12 property_unit_v1  property_flex " data-org="12" data-listid="137">
                  <div className="property_listing " data-link="./properties/huge-sunny-villa-east-side/">
                    <div className="listing-unit-img-wrapper">
                      <a href="./properties/huge-sunny-villa-east-side/index.html">
                        <img itemprop="image" src="./wp-content/uploads/2018/08/9-1-1-1-400x314.jpg" className="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />
                      </a>
                      <div className="price_unit_wrapper"></div>
                    </div>

                    <div className="title-container">
                      <div className="category_name">
                        <a itemprop="url" href="./properties/huge-sunny-villa-east-side/index.html" className="listing_title_unit">
                          <span itemprop="name">Huge Sunny Villa &#8211; East Side </span>
                        </a>
                      </div>

                      <div className="category_tagline">
                        <a href="./area/east-side/index.html" rel="tag">
                          East Side
                        </a>
                        ,{' '}
                      </div>

                      <div className="price_unit">
                        € 500<span className="pernight"> /night</span>{' '}
                      </div>
                    </div>
                  </div>
                </div>

                <div itemscope itemtype="http://schema.org/Product" className="listing_wrapper col-md-12 property_unit_v1  property_flex " data-org="12" data-listid="119">
                  <div className="property_listing " data-link="./properties/beautiful-cabin-simple-price/">
                    <div className="listing-unit-img-wrapper">
                      <a href="./properties/beautiful-cabin-simple-price/index.html">
                        <img itemprop="image" src="./wp-content/uploads/2018/08/4-1-1-1-scaled-1-400x314.jpg" className="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />
                      </a>
                      <div className="price_unit_wrapper"></div>
                    </div>

                    <div className="title-container">
                      <div className="category_name">
                        <a itemprop="url" href="./properties/beautiful-cabin-simple-price/index.html" className="listing_title_unit">
                          <span itemprop="name">Beautiful Cabin, Simple Price </span>
                        </a>
                      </div>

                      <div className="category_tagline">
                        <a href="./area/brightwood/index.html" rel="tag">
                          Brightwood
                        </a>
                        ,{' '}
                        <a href="./city/philadelphia/index.html" rel="tag">
                          Philadelphia
                        </a>{' '}
                      </div>

                      <div className="price_unit">
                        € 64<span className="pernight"> /night</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div itemscope itemtype="http://schema.org/Product" className="listing_wrapper col-md-12 property_unit_v1  property_flex " data-org="12" data-listid="115">
                  <div className="property_listing " data-link="./properties/victorian-bed-breakfast/">
                    <div className="listing-unit-img-wrapper">
                      <a href="./properties/victorian-bed-breakfast/index.html">
                        <img itemprop="image" src="./wp-content/uploads/2018/08/3-1-1-400x314.jpg" className="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />
                      </a>
                      <div className="price_unit_wrapper"></div>
                    </div>

                    <div className="title-container">
                      <div className="category_name">
                        <a itemprop="url" href="./properties/victorian-bed-breakfast/index.html" className="listing_title_unit">
                          <span itemprop="name">Victorian Bed &#038; Breakfast </span>
                        </a>
                      </div>

                      <div className="category_tagline">
                        <a href="./area/mattapan/index.html" rel="tag">
                          Mattapan
                        </a>
                        ,
                        <a href="./city/boston/index.html" rel="tag">
                          Boston
                        </a>
                      </div>

                      <div className="price_unit">
                        € 65<span className="pernight"> /night</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="latest_listings"> </div>
              </li>{' '}
            </ul>
          </div>
          {/* <!-- #third .widget-area --> */}
        </div>
        {/* <!-- #footer-widget-area --> */}

        <div className="sub_footer">
          <div className="sub_footer_content ">
            <span className="copyright">Copyright 2019 | WP Estate. All Rights Reserved. </span>

            <div className="subfooter_menu"></div>
          </div>
        </div>
      </footer>
      {/* <!-- #colophon --> */}

      <a href="#" className="backtop ">
        <i className="fas fa-chevron-up"></i>
      </a>

      {/* <!-- end className container --> */}

      <div className="social_share_wrapper social_share_half_map_on_right">
        <a className="social_share share_facebook_side" href="https://www.facebook.com/wpestate" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>

        <a className="social_share share_twiter_side" href="https://twitter.com/WPESTATE" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>

        <a className="social_share share_linkedin_side" href="#" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a className="social_share share_pinterest_side" href="#" target="_blank">
          <i className="fab fa-pinterest-p"></i>
        </a>

        <a className="social_share share_instagram_side" href="#" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>

        <a className="social_share share_youtube_side" href="#" target="_blank">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* <!-- end website wrapper --> */}

      {/* <!-- Modal --> */}
      <div className="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                &times;
              </button>
              <h2 className="modal-title_big">
                Log in or Sign up to continue
                <h4 className="modal-title" id="myModalLabel">
                  Please fill in the log in or register forms
                </h4>
              </h2>
            </div>

            <div className="modal-body">
              <div id="ajax_login_div" className="">
                <div className="login_form" id="login-div">
                  <div className="loginalert" id="login_message_area"></div>

                  <div className="loginrow">
                    <input type="text" className="form-control" name="log" id="login_user" placeholder="Username" size="20" />
                  </div>

                  <div className="loginrow">
                    <input type="password" className="form-control" name="pwd" placeholder="Password" id="login_pwd" size="20" />
                  </div>

                  <input type="hidden" name="loginpop" id="loginpop" value="0" />
                  <input type="hidden" id="security-login" name="security-login" value="4bd21394d1-1638969710" />

                  <button id="wp-login-but" className="wpb_button  wpb_btn-info  wpb_regularsize   wpestate_vc_button  vc_button" data-mixval="1745">
                    Login
                  </button>
                  <div className="navigation_links">
                    <a href="#" id="reveal_register">
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
                {/* <!-- end login links--> */}
              </div>
              {/* <!-- /.ajax_login_div --> */}

              <div id="ajax_register_div" className="">
                <div className="login_form shortcode-login">
                  <div className="loginalert" id="register_message_area"></div>

                  <div className="loginrow">
                    <input type="text" name="user_login_register" id="user_login_register" className="form-control" placeholder="Username" size="20" />
                  </div>
                  <div className="loginrow">
                    <input type="text" name="user_email_register" id="user_email_register" className="form-control" placeholder="Email" size="20" />
                  </div>
                  <div className="acc_radio">
                    <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                    <div className="radiolabel" for="acctype0">
                      I only want to book
                    </div>
                    <br />
                    <input type="radio" name="acc_type" id="acctype1" value="0" required />
                    <div classNameName="radiolabel" for="acctype1">
                      I want to rent my property
                    </div>
                  </div>
                  <input type="checkbox" name="terms" id="user_terms_register_sh" />
                  <label id="user_terms_register_sh_label" for="user_terms_register_sh">
                    I agree with{' '}
                    <a href="./terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">
                      terms &amp; conditions
                    </a>{' '}
                  </label>
                  <button id="wp-submit-register" classNameName="wpb_button  wpb_btn-info  wpb_btn-small wpestate_vc_button  vc_button">
                    Create an account
                  </button>
                  <p id="reg_passmail">*A password will be e-mailed to you</p>
                  <input type="hidden" id="security-register" name="security-register" value="5719a91e9e-1638969710" />
                </div>
                <div id="reveal_login">
                  <a href="#">Already a member? Sign in!</a>
                </div>
                <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" />
                <input type="hidden" name="_wp_http_referer" value="/" />
              </div>

              <div className="login_form" id="forgot-pass-div_mod">
                <div className="loginalert" id="forgot_pass_area_shortcode"></div>
                <div className="loginrow">
                  <input type="text" className="form-control forgot_email_mod" name="forgot_email" id="forgot_email_mod" placeholder="Enter Your Email Address" size="20" />
                </div>
                <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" />
                <input type="hidden" name="_wp_http_referer" value="/" />
                <input type="hidden" id="postid" value="0" />
                <button className="wpb_button  wpb_btn-info  wpb_regularsize wpestate_vc_button  vc_button" id="wp-forgot-but_mod" name="forgot">
                  Reset Password
                </button>

                <a href="#" id="return_login_mod">
                  Return to Login
                </a>
              </div>
            </div>
            {/* <!-- /.modal-content --> */}
          </div>
          {/* <!-- /.modal-dialog --> */}
        </div>
        {/* <!-- /.modal --> */}
      </div>
      {/* <!-- /.login model --> */}
      <input type="hidden" id="wprentals_ajax_filtering" value="c7f2599346" />
      <input type="hidden" id="wpestate_ajax_log_reg" value="36cd982787" />
    </div>
  );
}
