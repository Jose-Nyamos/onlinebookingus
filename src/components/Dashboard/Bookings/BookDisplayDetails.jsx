import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Helmet } from 'react-helmet';
import BookDetails from './BookDetails';

export default function BookDisplayDetails() {

return (
<div>
    
<div class="text-left">
    
      
        <div class="app-admin-wrap layout-sidebar-large">
        <Helmet>
	<link href="/dist-assets/css/themes/lite-purple.min.css" rel="stylesheet" />
    <link href="/dist-assets/css/plugins/perfect-scrollbar.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/dist-assets/css/plugins/datatables.min.css" />
	<script src="dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
    <script src="dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
    <script src="dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="dist-assets/js/scripts/script.min.js"></script>
    <script src="dist-assets/js/scripts/sidebar.large.script.min.js"></script>
    <script src="dist-assets/js/plugins/datatables.min.js"></script>
    <script src="dist-assets/js/scripts/datatables.script.min.js"></script>
    <script src="cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <script src="dist-assets/js/plugins/quill.min.js"></script>
    <script src="dist-assets/js/scripts/quill.script.min.js"></script>
			
	</Helmet>
        <Topbar />
          <Sidebar />
          <BookDetails />
          </div>
         </div>

</div>
);
}