import React,{useEffect} from 'react';


import Sidebar from './Sidebar';
import Topbar from '../../Topbar';

import { Helmet } from 'react-helmet';
import ProfileInfo from './ProfileInfo';
import GuestTopBar from './GuestTopBar';
import PaymentsForm from './PaymentsForm';
import DisplayGuestBooking from './DisplayGuestBooking';

import { Widget,addResponseMessage  } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

export default function GuestBooking() {

  useEffect(() => {
    addResponseMessage('Hi! Welcome to corporate Home US.This is our live support.In case you have any issue with booking, reach us on +13473227069');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // // Now send the message throught the backend API
    // addResponseMessage(newMessage);
  };

    return (
        <div>
        <div class="text-left">
        <Helmet>
          <link rel="stylesheet" href="dist-assets/css/plugins/perfect-scrollbar.min.css" />
          <link rel="stylesheet" href="dist-assets/css/themes/lite-purple.min.css" />
          <link rel="stylesheet" href="dist-assets/js/scripts/script.min.js" />
          {/* <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900" rel="stylesheet" /> */}
          <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous" />
          <script type="text/javascript" src="dist-assets/js/scripts/script.min.js" />
          <script type="text/javascript" src="dist-assets/js/scripts/sidebar.large.script.min.js" />
          <script type="text/javascript" src="dist-assets/js/scripts/dashboard.v2.script.min.js" />
          <script type="text/javascript" src="dist-assets/js/plugins/datatables.min.js" />
          <script type="text/javascript" src="dist-assets/js/scripts/sidebar.large.script.min.js" />
          <script type="text/javascript" src="dist-assets/js/plugins/echarts.min.js" />
          <script type="text/javascript" src="dist-assets/js/scripts/echart.options.min.js" />
          <script type="text/javascript" src="dist-assets/js/plugins/datatables.min.js" />
          <script type="text/javascript" src="dist-assets/js/plugins/jquery-3.3.1.min.js" />
          <script type="text/javascript" src="dist-assets/js/plugins/bootstrap.bundle.min.js" />
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/perfect-scrollbar/1.5.3/perfect-scrollbar.min.js" />
        </Helmet>
      
        <div class="app-admin-wrap layout-sidebar-large">
          <GuestTopBar/>
          <Sidebar />
        <DisplayGuestBooking/>
        <Widget 

        handleNewUserMessage={handleNewUserMessage}
      
        title="Live customer support"
        subtitle="24/7 customer support"
        
      
        />
        </div>
       
      </div>
            
        </div>
    )
}
