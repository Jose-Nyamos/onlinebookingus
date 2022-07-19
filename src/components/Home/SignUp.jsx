import React from 'react';
import Content_2 from './Content/Content';
import Content_wrapper from './Content/Content_wrapper';
import Slider from './Content/Slider';
import Footer from './Footer/Footer';
import Modal from './Footer/Modal';
import Header from './Header/Header';
import Navbar from './Header/Navbar';
import Search from './Content/Search';
import Content from './Content/Content';
import Section_1 from './Content/Section_1';
import Section_2 from './Content/Section_2';
import SignupForm from './Content/SignupForm';


export default function SignUp() {
    return (
        <div>
      <body class="page-template-default page page-id-18460 wpb-js-composer js-comp-ver-6.5.0 vc_responsive elementor-default elementor-kit-19 elementor-page elementor-page-18460">
        <Header />
        <div class="website-wrapper is_transparent_header header_type1 is_search_type1 topbar_show_mobile_no" id="all_wrapper">
          <div class="container main_wrapper wide">
            <Navbar />
            <SignupForm />
            <Search />
            {/* <Content /> */}
            <div class="col-md-12">
              <div class="single-content">
                <div data-elementor-type="wp-post" data-elementor-id="18460" class="elementor elementor-18460" data-elementor-settings="[]">
                  <div class="elementor-inner">
                    <div class="elementor-section-wrap">
                      <Section_2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            <Modal />
          </div>
        </div>
      </body>
    </div>
    )
}
