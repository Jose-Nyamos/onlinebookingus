
import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import GuestTopBar from './GuestTopBar';
import Sidebar from './Sidebar';

import { useContext } from 'react';

import { AuthContext } from '../../../../helpers/AuthContext'

import { Helmet } from 'react-helmet';

function DisplayFavorates() {

    const {authState} = useContext(AuthContext);
    const [amenities, setAmenities] = useState([]);
 
	useEffect(()=>{

        Axios.get("http://localhost:3001/amenities/getAmenities").then((response) => {
            setAmenities(response.data);
          });

    },[]);
  return (
    <div class='text-left'>

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



    <div class='app-admin-wrap layout-sidebar-large'>
      <Sidebar/>
        <GuestTopBar/>
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
    
            {/* <!-- ============ Body content start ============= --> */}
            <div class="main-content">
           
           
           
               
                <div class="card-body">
                    <ul class="nav nav-tabs profile-nav mb-4" id="profileTab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="timeline-tab" data-toggle="tab" href="#timeline" role="tab" aria-controls="timeline" aria-selected="true">Favorite Properties</a></li>
                       
                        <li class="nav-item"><a class="nav-link" id="friends-tab" data-toggle="tab" href="#friends" role="tab" aria-controls="friends" aria-selected="false">New Properties</a></li>
                        <li class="nav-item"><a class="nav-link" id="photos-tab" data-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="false">All Properties</a></li>
                    </ul>
                    <div class="tab-content" id="profileTabContent">
                        <div class="tab-pane fade active show" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                            <ul class="timeline clearfix">
                                <li class="timeline-line"></li>
                                <li class="timeline-item">
                                    <div class="timeline-badge"><i class="badge-icon bg-primary text-white i-Cloud-Picture"></i></div>
                                    <div class="timeline-card card">
                                        <div class="card-body">
                                            <div class="mb-1"><strong class="mr-1">Timothy Carlson</strong> added a new photo
                                                <p class="text-muted">3 hours ago</p>
                                            </div><img class="rounded mb-2" src="../../dist-assets/images/photo-wide-1.jpg" alt="" />
                                            <div class="mb-3"><a class="mr-1" href="#">Like</a><a href="#">Comment</a></div>
                                            <div class="input-group">
                                                <input class="form-control" type="text" placeholder="Write comment" aria-label="comment" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" id="button-comment1" type="button">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-badge"><img class="badge-img" src="../../dist-assets/images/faces/1.jpg" alt="" /></div>
                                    <div class="timeline-card card">
                                        <div class="card-body">
                                            <div class="mb-1"><strong class="mr-1">Timothy Carlson</strong> updated his sattus
                                                <p class="text-muted">16 hours ago</p>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta beatae illo illum iusto iste mollitia explicabo quam officia. Quas ullam, quisquam architecto aspernatur enim iure debitis dignissimos suscipit
                                                ipsa.
                                            </p>
                                            <div class="mb-3"><a class="mr-1" href="#">Like</a><a href="#">Comment</a></div>
                                            <div class="input-group">
                                                <input class="form-control" type="text" placeholder="Write comment" aria-label="comment" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" id="button-comment2" type="button">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="timeline clearfix">
                                <li class="timeline-line"></li>
                                <li class="timeline-group text-center">
                                    <button class="btn btn-icon-text btn-primary"><i class="i-Calendar-4"></i> 2018</button>
                                </li>
                            </ul>
                            <ul class="timeline clearfix">
                                <li class="timeline-line"></li>
                                <li class="timeline-item">
                                    <div class="timeline-badge"><i class="badge-icon bg-danger text-white i-Love-User"></i></div>
                                    <div class="timeline-card card">
                                        <div class="card-body">
                                            <div class="mb-1"><strong class="mr-1">New followers</strong>
                                                <p class="text-muted">2 days ago</p>
                                            </div>
                                            <p><a href="#">Henry krick</a> and 16 others followed you</p>
                                            <div class="mb-3"><a class="mr-1" href="#">Like</a><a href="#">Comment</a></div>
                                            <div class="input-group">
                                                <input class="form-control" type="text" placeholder="Write comment" aria-label="comment" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" id="button-comment3" type="button">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-badge"><i class="badge-icon bg-primary text-white i-Cloud-Picture"></i></div>
                                    <div class="timeline-card card">
                                        <div class="card-body">
                                            <div class="mb-1"><strong class="mr-1">Timothy Carlson</strong> added a new photo
                                                <p class="text-muted">2 days ago</p>
                                            </div><img class="rounded mb-2" src="../../dist-assets/images/photo-wide-2.jpg" alt="" />
                                            <div class="mb-3"><a class="mr-1" href="#">Like</a><a href="#">Comment</a></div>
                                            <div class="input-group">
                                                <input class="form-control" type="text" placeholder="Write comment" aria-label="comment" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" id="button-comment4" type="button">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="timeline clearfix">
                                <li class="timeline-line"></li>
                                <li class="timeline-group text-center">
                                    <button class="btn btn-icon-text btn-warning"><i class="i-Calendar-4"></i> Joined
                                        in 2013
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <h4>Personal Information</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi quam! Provident quis voluptate asperiores ullam, quidem odio pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla eos?
                                Cum non ex voluptate corporis id asperiores doloribus dignissimos blanditiis iusto qui repellendus deleniti aliquam, vel quae eligendi explicabo.
                            </p>
                            <hr />
                            <div class="row">
                                <div class="col-md-4 col-6">
                                    <div class="mb-4">
                                        <p class="text-primary mb-1"><i class="i-Calendar text-16 mr-1"></i> Birth Date</p><span>1 Jan, 1994</span>
                                    </div>
                                    <div class="mb-4">
                                        <p class="text-primary mb-1"><i class="i-Edit-Map text-16 mr-1"></i> Birth Place</p><span>Dhaka, DB</span>
                                    </div>
                                    <div class="mb-4">
                                        <p class="text-primary mb-1"><i class="i-Globe text-16 mr-1"></i> Lives In</p><span>Dhaka, DB</span>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6">
                                    <div class="mb-4">
                                        <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i> Gender</p><span>1 Jan, 1994</span>
                                    </div>
                                    <div class="mb-4">
                                        <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i> Email</p><span>example@ui-lib.com</span>
                                    </div>
                                    <div class="mb-4">
                                        <p class="text-primary mb-1"><i class="i-Cloud-Weather text-16 mr-1"></i> Website</p><span>www.ui-lib.com</span>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6">
                                    <div class="mb-4">
                                        <p class="text-primary mb-1"><i class="i-Face-Style-4 text-16 mr-1"></i> Profession</p><span>Digital Marketer</span>
                                    </div>
                                    <div class="mb-4">
                                        <p class="text-primary mb-1"><i class="i-Professor text-16 mr-1"></i> Experience</p><span>8 Years</span>
                                    </div>
                                    <div class="mb-4">
                                        <p class="text-primary mb-1"><i class="i-Home1 text-16 mr-1"></i> School</p><span>School of Digital Marketing</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h4>Other Info</h4>
                            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore labore reiciendis ab quo ducimus reprehenderit natus debitis, provident ad iure sed aut animi dolor incidunt voluptatem. Blanditiis, nobis aut.</p>
                            <div class="row">
                                <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Plane text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Travelling</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Camera text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Photography</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Car-3 text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Driving</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Gamepad-2 text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Gaming</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Music-Note-2 text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Music</p>
                                </div>
                                <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Shopping-Bag text-32 text-primary"></i>
                                    <p class="text-16 mt-1">Shopping</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="friends-tab">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="card card-profile-1 mb-4">
                                        <div class="card-body text-center">
                                            <div class="avatar box-shadow-2 mb-3"><img src="../../dist-assets/images/faces/16.jpg" alt="" /></div>
                                            <h5 class="m-0">Jassica Hike</h5>
                                            <p class="mt-0">UI/UX Designer</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                            <button class="btn btn-primary btn-rounded">Contact Jassica</button>
                                            <div class="card-socials-simple mt-4"><a href="#"><i class="i-Linkedin-2"></i></a><a href="#"><i class="i-Facebook-2"></i></a><a href="#"><i class="i-Twitter"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card card-profile-1 mb-4">
                                        <div class="card-body text-center">
                                            <div class="avatar box-shadow-2 mb-3"><img src="../../dist-assets/images/faces/2.jpg" alt="" /></div>
                                            <h5 class="m-0">Frank Powell</h5>
                                            <p class="mt-0">UI/UX Designer</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                            <button class="btn btn-primary btn-rounded">Contact Frank</button>
                                            <div class="card-socials-simple mt-4"><a href="#"><i class="i-Linkedin-2"></i></a><a href="#"><i class="i-Facebook-2"></i></a><a href="#"><i class="i-Twitter"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card card-profile-1 mb-4">
                                        <div class="card-body text-center">
                                            <div class="avatar box-shadow-2 mb-3"><img src="../../dist-assets/images/faces/3.jpg" alt="" /></div>
                                            <h5 class="m-0">Arthur Mendoza</h5>
                                            <p class="mt-0">UI/UX Designer</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                            <button class="btn btn-primary btn-rounded">Contact Arthur</button>
                                            <div class="card-socials-simple mt-4"><a href="#"><i class="i-Linkedin-2"></i></a><a href="#"><i class="i-Facebook-2"></i></a><a href="#"><i class="i-Twitter"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card card-profile-1 mb-4">
                                        <div class="card-body text-center">
                                            <div class="avatar box-shadow-2 mb-3"><img src="../../dist-assets/images/faces/4.jpg" alt="" /></div>
                                            <h5 class="m-0">Jacqueline Day</h5>
                                            <p class="mt-0">UI/UX Designer</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>
                                            <button class="btn btn-primary btn-rounded">Contact Jacqueline</button>
                                            <div class="card-socials-simple mt-4"><a href="#"><i class="i-Linkedin-2"></i></a><a href="#"><i class="i-Facebook-2"></i></a><a href="#"><i class="i-Twitter"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card text-white o-hidden mb-3"><img class="card-img" src="../../dist-assets/images/products/headphone-1.jpg" alt="" />
                                        <div class="card-img-overlay">
                                            <div class="p-1 text-left card-footer font-weight-light d-flex"><span class="mr-3 d-flex align-items-center"><i class="i-Speach-Bubble-6 mr-1"></i>12</span><span class="d-flex align-items-center"><i class="i-Calendar-4 mr-2"></i>03.12.2018</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-white o-hidden mb-3"><img class="card-img" src="../../dist-assets/images/products/headphone-2.jpg" alt="" />
                                        <div class="card-img-overlay">
                                            <div class="p-1 text-left card-footer font-weight-light d-flex"><span class="mr-3 d-flex align-items-center"><i class="i-Speach-Bubble-6 mr-1"></i>12</span><span class="d-flex align-items-center"><i class="i-Calendar-4 mr-2"></i>03.12.2018</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-white o-hidden mb-3"><img class="card-img" src="../../dist-assets/images/products/headphone-3.jpg" alt="" />
                                        <div class="card-img-overlay">
                                            <div class="p-1 text-left card-footer font-weight-light d-flex"><span class="mr-3 d-flex align-items-center"><i class="i-Speach-Bubble-6 mr-1"></i>12</span><span class="d-flex align-items-center"><i class="i-Calendar-4 mr-2"></i>03.12.2018</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-white o-hidden mb-3"><img class="card-img" src="../../dist-assets/images/products/iphone-1.jpg" alt="" />
                                        <div class="card-img-overlay">
                                            <div class="p-1 text-left card-footer font-weight-light d-flex"><span class="mr-3 d-flex align-items-center"><i class="i-Speach-Bubble-6 mr-1"></i>12</span><span class="d-flex align-items-center"><i class="i-Calendar-4 mr-2"></i>03.12.2018</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-white o-hidden mb-3"><img class="card-img" src="../../dist-assets/images/products/iphone-2.jpg" alt="" />
                                        <div class="card-img-overlay">
                                            <div class="p-1 text-left card-footer font-weight-light d-flex"><span class="mr-3 d-flex align-items-center"><i class="i-Speach-Bubble-6 mr-1"></i>12</span><span class="d-flex align-items-center"><i class="i-Calendar-4 mr-2"></i>03.12.2018</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-white o-hidden mb-3"><img class="card-img" src="../../dist-assets/images/products/watch-1.jpg" alt="" />
                                        <div class="card-img-overlay">
                                            <div class="p-1 text-left card-footer font-weight-light d-flex"><span class="mr-3 d-flex align-items-center"><i class="i-Speach-Bubble-6 mr-1"></i> 12</span><span class="d-flex align-items-center"><i class="i-Calendar-4 mr-2"></i>03.12.2018</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
        <div class="flex-grow-1"></div>
        <div class="app-footer">
            <div class="row">
                <div class="col-md-9">
                    <p><strong>Gull - Laravel + Bootstrap 4 admin template</strong></p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quis beatae officia saepe perferendis voluptatum minima eveniet voluptates dolorum, temporibus nisi maxime nesciunt totam repudiandae commodi sequi dolor quibusdam
                        <sunt></sunt>
                    </p>
                </div>
            </div>
            <div class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
                <a class="btn btn-primary text-white btn-rounded" href="https://themeforest.net/item/gull-bootstrap-laravel-admin-dashboard-template/23101970" target="_blank">Buy Gull HTML</a>
                <span class="flex-grow-1"></span>
                <div class="d-flex align-items-center">
                    <img class="logo" src="../../dist-assets/images/logo.png" alt=""/>
                    <div>
                        <p class="m-0">&copy; 2018 Gull HTML</p>
                        <p class="m-0">All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default DisplayFavorates