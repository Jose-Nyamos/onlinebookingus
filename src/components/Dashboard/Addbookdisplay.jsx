import React from 'react';
// import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import { Helmet } from 'react-helmet';
import Addbooking from './Bookings/Addbooking';
// import GreenLoader from '../../../../../assets/images/greenloader.gif'

export default function Addbookdisplay() {

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
          <link rel="stylesheet" href="front/js/ninja/ninja-slider.css"/>
          <link rel="stylesheet" href="front/css/bootstrap-slider.css"/>
          <link rel="stylesheet" href="front/css/jquery.sidr.dark.css"/>
          <link rel="stylesheet" href="front/anything/css/anythingslider.css"/>
          <link rel="stylesheet" href="front/anything/css/theme-metallic.css"/>
          <link rel="stylesheet" href="front/anything/css/theme-minimalist-round.css"/>
          <link rel="stylesheet" href="front/anything/css/theme-minimalist-square.css"/>
          <link rel="stylesheet" href="front/anything/css/theme-construction.css"/>
          <link rel="stylesheet" href="front/anything/css/theme-cs-portfolio.css"/>
          <link rel="stylesheet" href="front/plugins/intl-tel-input-13.0.0/build/css/intlTelInput.css"/>
          <link rel="stylesheet" href="backend/plugins/select2/select2.min.css'"/>
          <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" />
          <link href="https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css" rel="stylesheet" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js"></script>
          <script src="https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min.js"></script> 
          <script src="front/plugins/intl-tel-input-13.0.0/build/js/intlTelInput.js" type="text/javascript"></script>
         <script src="front/js/isValidPhoneNumber.js" type="text/javascript"></script>
        </Helmet>
      
        <div class="app-admin-wrap layout-sidebar-large">
        <Topbar />
          <Sidebar />
        <Addbooking/>
          </div>
         </div>

</div>
);
}