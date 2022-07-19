import React from 'react'
import GuestTopBar from './GuestTopBar'
import Sidebar from './Sidebar'
import {Link,useParams} from  'react-router-dom';

function MyListingGuest() {
  return (
    <div>

    <div class='text-left'>


    <div class='app-admin-wrap layout-sidebar-large'>
          <Sidebar/>

          <GuestTopBar/>
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
            <section class='content-header'>
							<div class="row">
								<div class="col-4">
									<h3>
										User Profile
										<small>Update Profile</small>
									</h3>

								</div>
								<div class="col-5"></div>

								<div class="col-2">
									<div class="float-lg-right">
									<ol class='breadcrumb'>
										<li>
											<Link to='/dashboard'>
                      <i class="i-Home1">Home</i>
                                          
											</Link>
										</li>
							        </ol>

									</div>
									
								

								</div>

							</div>
							
						
						</section>
            <div class="card text-left">
            <section class="ml-6">


      <div class="card">
            <div class="card-body">

            <div class="box-header with-border">
              <h4 class="box-title">Amenitie Add Form</h4>
            </div>
            <br />
            {/* <!-- form start --> */} 
           
            <div class="box-body">

                       
                   
                               
            </div>
            {/* <!-- /.box-body --> */}
           
       </div>
       </div>
      
   
     
      {/* <!-- /.row --> */}
    </section>


            </div>


     

          </div>
       </div>
       </div>
       
    
</div>
    
    
    
    
    </div>
  )
}

export default MyListingGuest