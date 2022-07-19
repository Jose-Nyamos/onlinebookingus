import React from 'react';
import axios from 'axios';
import { withRouter,Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import Topbar from '../Dashboard/Topbar';

class RoomPage extends React.Component {
 constructor(props) {
  super(props);

  const params = new URLSearchParams(this.props.location.search);
  const hotel_id = params.get('hotel_id');
  const date_in = params.get('date_in');
  const date_out = params.get('date_out');
  const city = params.get('city');
  const guestNumber = params.get('guest_number');

  this.state = {
   hotel: {},
   rooms: {},
   hotel_id,
   date_in,
   date_out,
   city,
   totalPrice: 0,
   guest_number: guestNumber,
   verifyCheckout: false,
   verifyRooms: false,
   verifyGuests: false
  };

  this.totalPrice = 0;
 }

 Checkout = (event) => {
  let total = 0;
  let totalCapacity = 0;
  this.setState({
   verifyRooms: false,
   verifyGuests: false
  });

  this.state.rooms.results.map((eachRoomResult, index) => (total = total + eachRoomResult.desired_quantity));

  this.state.rooms.results.map((eachRoomResult, index) => (totalCapacity = totalCapacity + eachRoomResult.desired_quantity * eachRoomResult.capacity));

  if (total * 1 === 0) {
   this.setState({
    verifyRooms: true
   });
  }

  if (totalCapacity < this.state.guest_number) {
   this.setState({
    verifyGuests: true
   });
  }

  if (total > 0 && totalCapacity >= this.state.guest_number) {
   // console.log(JSON.stringify(this.state.rooms))

   const rooms = JSON.stringify(this.state.rooms);
   const hotel_id = this.state.hotel_id.toString();
   const date_in = this.state.date_in.toString();
   const date_out = this.state.date_out.toString();
   const totalPrice = this.totalPrice.toString();
   const guest_number = this.state.guest_number.toString();
   const city = this.state.city.toString();
   const country = this.state.hotel.results[0].country.toString();
   const state = this.state.hotel.results[0].state.toString();
   const address = this.state.hotel.results[0].address.toString();

   this.props.history.push({
    pathname: `/Checkout`,
    state: {
     rooms,
     date_in,
     date_out,
     hotel_id,
     totalPrice,
     guest_number,
     city,
     country,
     state,
     address
    }
   });
  }
 };

 async componentDidMount() {
  const roomSearchQuery = `/api/search/hotels/${this.state.hotel_id}/?date_in=${this.state.date_in}&date_out=${this.state.date_out}`;
  const hotelSearchQuery = `/api/search/hotels?city=${this.state.city}&date_in=${this.state.date_in}&date_out=${this.state.date_out}&hotel_id=${this.state.hotel_id}`;

  const rooms = (await axios.get(roomSearchQuery)).data;
  const hotel = (await axios.get(hotelSearchQuery)).data;
  rooms.results.forEach((eachRoomResult, index) => {
   rooms.results[index].desired_quantity = 0;
  });
  this.setState({
   rooms,
   hotel
  });
 }

 handleEachRoomQuantity = (event) => {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  let resultArray = this.state.rooms.results;
  resultArray[name].desired_quantity = value;

  this.setState({
   rooms: {
    ...this.state.rooms,
    results: resultArray
   },
   verifyRooms: false,
   verifyGuests: false
  });
 };

 handleRoomPrice() {
  this.totalPrice = 0;
  this.state.rooms.results.map((eachRoomResult, index) => (this.totalPrice = this.totalPrice + eachRoomResult.price * eachRoomResult.desired_quantity));

  return this.totalPrice;
 }

 createAvailableRooms(index) {
  let options = [];
  for (let i = 0; i <= this.state.rooms.results[index.index].quantity; i++) {
   options.push(<option key={i}>{i}</option>);
  }

  return options;
 }

 render() {
  if (!this.state.hotel.results) {
   return <div className="hotel-search-container"> Loading </div>;
  } else {
   const imageURLS = this.state.hotel.results[0].images;
   let imageArray = [];
   if (imageURLS) {
    imageArray = imageURLS.split(',');
   }


   const roomPage = (
      
	<div itemscope itemtype="http://schema.org/RentAction" class="content_wrapper listing_wrapper row">

<div class="container main_wrapper  wide  ">
    <div class="master_header master_ wide master_header_wide_yes hover_type_5">
     <div class="mobile_header ">
      <div class="mobile-trigger">
       <i class="fas fa-bars"></i>
      </div>
      <div class="mobile-logo">
       <a href="https://onlinebookingus.com">
        <img src="https://onlinebookingus.com/wp-content/uploads/2019/03/cropped-Color-logo-no-background-2.png" class="img-responsive retina_ready" alt="logo" />{' '}
       </a>
      </div>
      <div class="mobile-trigger-user">
       <i class="fas fa-user-circle"></i>
      </div>
     </div>

     <div class="header_wrapper header_type1 header_align_left header_wide_yes">
      <div class="header_wrapper_inside">
       <div class="logo">
        <a href="https://onlinebookingus.com">
         <img src="https://onlinebookingus.com/wp-content/uploads/2019/03/cropped-Color-logo-no-background-1.png" class="img-responsive retina_ready" alt="logo" />
        </a>
       </div>

       <div class="user_menu" id="user_menu_u">
        <div class="signuplink" id="topbarlogin">
         Login
        </div>
        <div class="signuplink" id="topbarregister">
         Sign Up
        </div>
        <a href="https://onlinebookingus.com/add-new-listing/" id="submit_action">
         Submit Property
        </a>
       </div>

       <nav id="access">
        <ul id="menu-main-1" class="menu">
         <li id="menu-item-19193" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home no-megamenu   ">
          <a class="menu-item-link" href="https://onlinebookingus.com/">
           Home
          </a>
         </li>
         <li id="menu-item-19167" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children no-megamenu   ">
          <a class="menu-item-link" href="https://onlinebookingus.com/properties-list-standard/">
           Property List
          </a>
          <ul class="  sub-menu ">
           <li id="menu-item-19168" class="menu-item menu-item-type-post_type menu-item-object-page   ">
            <a class="menu-item-link" href="https://onlinebookingus.com/advanced-search/">
             Advanced Search
            </a>
           </li>
          </ul>
         </li>
         <li id="menu-item-19171" class="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-has-children no-megamenu   ">
          <a class="menu-item-link" href="https://onlinebookingus.com/blog-list/">
           Blog List
          </a>
          <ul class="  sub-menu ">
           <li id="menu-item-19198" class="menu-item menu-item-type-post_type menu-item-object-post   ">
            <a class="menu-item-link" href="https://onlinebookingus.com/what-guests-want-to-know/">
             What Guests Want to Know
            </a>
           </li>
           <li id="menu-item-19199" class="menu-item menu-item-type-post_type menu-item-object-post   ">
            <a class="menu-item-link" href="https://onlinebookingus.com/how-to-be-a-great-host/">
             How to be a Great Host for Renters
            </a>
           </li>
          </ul>
         </li>
         <li id="menu-item-19172" class="menu-item menu-item-type-post_type menu-item-object-page no-megamenu   ">
          <a class="menu-item-link" href="https://onlinebookingus.com/favorite-listings/">
           Favorite Listings
          </a>
         </li>
        </ul>{' '}
       </nav>
       {/* <!-- #access --> */}
      </div>
     </div>
    </div>


    <div class="property_menu_wrapper_hidden prop_menu_search_stick_no" style={{ display: 'none' }}>
     <div class="property_menu_wrapper_insider">
      <a class="property_menu_item" href="#listing_description">
       Description
      </a>
      <a class="property_menu_item" href="#listing_price">
       Price
      </a>
      <a class="property_menu_item" href="#listing_details">
       Details
      </a>
      <a class="property_menu_item" href="#listing_ammenities">
       Amenities
      </a>
      <a class="property_menu_item" href="#listing_calendar">
       Availability
      </a>

      <a class="property_menu_item" href="#yelp_details">
       Yelp
      </a>

      <a class="property_menu_item" href="#listing_reviews">
       Reviews
      </a>
      <a class="property_menu_item" href="#listing_owner">
       Owner
      </a>
      <a class="property_menu_item" href="#google_map_on_list">
       Map
      </a>
     </div>
    </div>

    <div itemscope="" itemtype="http://schema.org/RentAction" class="content_wrapper listing_wrapper  row ">
    
    
     <div class="listing_main_image header_masonry panel-body imagebody imagebody_new" id="">
      <div class="property_status_wrapper">
       <div class="property_status status_verified">verified</div>
      </div>
      <div class="col-md-6 image_gallery lightbox_trigger special_border" data-slider-no="1" style={{ backgroundImage: 'url(https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/27b76e69-ddf5-4575-b28d-7dbf74000498.jpg?resize=1170%2C921&amp;ssl=1)' }}>
       {' '}
       <div class="img_listings_overlay">

       </div>
      </div>
      <div class="col-md-3 image_gallery   special_border_top  " data-slider-no="2" style={{ backgroundImage: 'url(https://onlinebookingus.com/wp-content/uploads/2022/06/dc1a14f4-1c83-434f-93d9-cf194681f6da.jpg)' }}>
       {' '}
       <div class="img_listings_overlay"></div>{' '}
      </div>
      <div class="col-md-3 image_gallery   special_border_top  " data-slider-no="3" style={{ backgroundImage: 'url(https://onlinebookingus.com/wp-content/uploads/2022/06/722c3ea9-e5f0-4b4e-9e44-54b375c9905a.jpg)' }}>
       <div class="img_listings_overlay img_listings_overlay_last"></div>
       <span class="img_listings_mes">See all 4 photos</span>
      </div>
     </div>{' '}
     
     <div class="hidden_photos hidden_type3">
      <a href="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/27b76e69-ddf5-4575-b28d-7dbf74000498.jpg?resize=1170%2C921&amp;ssl=1" rel="data-fancybox-thumb" data-fancybox="website_rental_gallery" title="featured image" data-caption="featured image" class="fancybox-thumb prettygalery listing_main_image">
       <img src="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/27b76e69-ddf5-4575-b28d-7dbf74000498.jpg?resize=1170%2C921&amp;ssl=1" data-original="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/27b76e69-ddf5-4575-b28d-7dbf74000498.jpg?resize=1170%2C921&amp;ssl=1" alt="featured image" class="img-responsive " />
      </a>{' '}
      <a href="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/dc1a14f4-1c83-434f-93d9-cf194681f6da.jpg?resize=1600%2C790&amp;ssl=1" rel="data-fancybox-thumb" data-fancybox="website_rental_gallery" title="" data-caption="" class="fancybox-thumb prettygalery listing_main_image">
       <img src="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/dc1a14f4-1c83-434f-93d9-cf194681f6da.jpg?resize=1600%2C790&amp;ssl=1" data-original="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/dc1a14f4-1c83-434f-93d9-cf194681f6da.jpg?resize=1600%2C790&amp;ssl=1" alt="" class="img-responsive " />
      </a>{' '}
      <a href="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/ed604b81-30ea-476d-81ee-f05427c0cf3d.jpg?resize=937%2C790&amp;ssl=1" rel="data-fancybox-thumb" data-fancybox="website_rental_gallery" title="" data-caption="" class="fancybox-thumb prettygalery listing_main_image">
       <img src="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/ed604b81-30ea-476d-81ee-f05427c0cf3d.jpg?resize=937%2C790&amp;ssl=1" data-original="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/ed604b81-30ea-476d-81ee-f05427c0cf3d.jpg?resize=937%2C790&amp;ssl=1" alt="" class="img-responsive " />
      </a>{' '}
      <a href="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/d969e38d-717d-4fd4-8cb7-af51927234ff.jpg?resize=1200%2C790&amp;ssl=1" rel="data-fancybox-thumb" data-fancybox="website_rental_gallery" title="" data-caption="" class="fancybox-thumb prettygalery listing_main_image">
       <img src="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/d969e38d-717d-4fd4-8cb7-af51927234ff.jpg?resize=1200%2C790&amp;ssl=1" data-original="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/d969e38d-717d-4fd4-8cb7-af51927234ff.jpg?resize=1200%2C790&amp;ssl=1" alt="" class="img-responsive " />
      </a>{' '}
      <a href="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/722c3ea9-e5f0-4b4e-9e44-54b375c9905a.jpg?resize=1600%2C790&amp;ssl=1" rel="data-fancybox-thumb" data-fancybox="website_rental_gallery" title="" data-caption="" class="fancybox-thumb prettygalery listing_main_image">
       <img src="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/722c3ea9-e5f0-4b4e-9e44-54b375c9905a.jpg?resize=1600%2C790&amp;ssl=1" data-original="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/722c3ea9-e5f0-4b4e-9e44-54b375c9905a.jpg?resize=1600%2C790&amp;ssl=1" alt="" class="img-responsive " />
      </a>
     </div>
     <div class="row content-fixed-listing listing_type_3">
      <div class=" col-md-8  ">
       <span class="entry-title listing_loader_title">Your search results</span>
       <div class="loader-inner ball-pulse" id="internal-loader">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
       </div>

       <div id="listing_ajax_container"></div>
       <div class="single-content listing-content">
        <div class="booking_form_mobile"></div>
        <div class="property_categs ">
         <div class="category_wrapper ">
          <h1 itemprop="name" class="entry-title ">
           <span class="property_ratings listing_slider"></span>
           {this.state.hotel.results[0].address}, {this.state.hotel.results[0].city}, {this.state.hotel.results[0].state}, {this.state.hotel.results[0].zipcode}{' '}          </h1>

          <div class="category_details_wrapper">
           <div class="actions_icon category_details_wrapper_icon">
            <a href="https://onlinebookingus.com/action/entire-home/" rel="tag">
             Entire home
            </a>{' '}
            <span class="property_header_separator">|</span>
           </div>
           <div class="schema_div_noshow" itemprop="actionStatus">
            Entire home
           </div>
           <div class="types_icon category_details_wrapper_icon">
            <a href="https://onlinebookingus.com/listings/apartment/" rel="tag">
             Apartment
            </a>
            <span class="property_header_separator">|</span>
           </div>
           <div class="schema_div_noshow" itemprop="additionalType">
            Apartment
           </div>
           <div class="no_link_details category_details_wrapper_icon guest_header_icon">3 Guests</div>
           <span class="property_header_separator">|</span>
           <span class="no_link_details category_details_wrapper_icon bedrooms_header_icon">1 Bedroom</span>
           <span class="property_header_separator">|</span>
          </div>
         </div>

         <div id="listing_description_type3">
          <h4 id="listing_description" class="panel-title-description">
           Listing Description
          </h4>
          <div itemprop="description" id="listing_description_content" class="panel-body">
           <p>
           {this.state.hotel.results[0].description}
           </p>
          </div>{' '}
         </div>
        </div>
        {/* <!-- property images   -->    */}
        <div class="panel-wrapper imagebody_wrapper">
         <div class="panel-body video-body"></div>
        </div>
        <div class="panel-wrapper" id="listing_price">
         <a class="panel-title" data-toggle="collapse" data-parent="#accordion_prop_addr" href="#collapseOne">
          {' '}
          <span class="panel-title-arrow"></span>Price Info
         </a>
         <div id="collapseOne" class="panel-collapse collapse in">
          <div class="panel-body panel-body-border" itemprop="priceSpecification">
           <div class="listing_detail list_detail_prop_price_per_night col-md-6">
            <span class="item_head">Price per night:</span> $ 150{' '}
           </div>
           <div class="listing_detail list_detail_prop_price_cleaning_fee col-md-6">
            <span class="item_head">Cleaning Fee:</span> $ 200 Single Fee
           </div>
           <div class="listing_detail list_detail_prop_price_min_nights col-md-6">
            <span class="item_head">Minimum no of nights:</span> 30
           </div>
           <div class="listing_detail list_detail_prop_book_starts col-md-6">
            <span class="item_head">Security deposit:</span> $ 1,000
           </div>
          </div>
         </div>
        </div>
        <div class="panel-wrapper">
         {/* <!-- property address   --> */}
         <a class="panel-title" data-toggle="collapse" data-parent="#accordion_prop_sleepibg" href="#collapseSleep">
          {' '}
          <span class="panel-title-arrow"></span>Sleeping Situation
         </a>

         <div id="collapseSleep" class="panel-collapse collapse in">
          <div class="panel-body panel-body-border">
           <div class="wpestate_front_bedrooms_wrapper">
            <div class="wpestate_front_bedrooms">
             <strong>Bedroom 1</strong>
             <div class="">1 Queen Bed</div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div class="panel-wrapper">
         {/* <!-- property address   --> */}
         <a class="panel-title" data-toggle="collapse" data-parent="#accordion_prop_addr" href="#collapseTwo">
          {' '}
          <span class="panel-title-arrow"></span>Address
         </a>

         <div id="collapseTwo" class="panel-collapse collapse in">
          <div class="panel-body panel-body-border">
           <div class="listing_detail list_detail_prop_address col-md-6">
            <span class="item_head">Address:</span> Exact location information is provided after a booking is confirmed.
           </div>
           <div class="listing_detail list_detail_prop_city col-md-6">
            <span class="item_head">City:</span>{' '}
            <a href="https://onlinebookingus.com/city/edgewater/" rel="tag">
             Edgewater
            </a>
           </div>
           <div class="listing_detail list_detail_prop_area col-md-6">
            <span class="item_head">Area:</span>{' '}
            <a href="https://onlinebookingus.com/area/manhattan/" rel="tag">
             Manhattan
            </a>
            ,{' '}
            <a href="https://onlinebookingus.com/area/united-states/" rel="tag">
             United states
            </a>
           </div>
           <div class="listing_detail list_detail_prop_state col-md-6">
            <span class="item_head">State:</span> NJ
           </div>
           <div class="listing_detail list_detail_prop_zip col-md-6">
            <span class="item_head">Zip:</span> 07020
           </div>
           <div class="listing_detail list_detail_prop_contry col-md-6">
            <span class="item_head">Country:</span> United States
           </div>
          </div>
         </div>
        </div>
        {/* <!-- property details   --> */}
        <div class="panel-wrapper">
         <a class="panel-title" id="listing_details" data-toggle="collapse" data-parent="#accordion_prop_addr" href="#collapseTree">
          <span class="panel-title-arrow"></span>Details
         </a>
         <div id="collapseTree" class="panel-collapse collapse in">
          <div class="panel-body panel-body-border">
           <div class="listing_detail list_detail_prop_status col-md-6">
            <span class="item_head">Property Status:</span> verified
           </div>
           <div class="listing_detail list_detail_prop_id col-md-6">
            <span class="item_head">Property ID: </span> 20296
           </div>
           <div class="listing_detail list_detail_prop_bedrooms col-md-6">
            <span class="item_head">Bedrooms:</span> 1
           </div>
           <div class="listing_detail list_detail_prop_bathrooms col-md-6">
            <span class="item_head">Bathrooms:</span> 1
           </div>
           <div class="listing_detail list_detail_prop_check-in_hour col-md-6">
            <span class="item_head">Check-in Hour:</span> 3pm
           </div>
           <div class="listing_detail list_detail_prop_check-out_hour col-md-6">
            <span class="item_head">Check-Out Hour:</span> 11am
           </div>
           <div class="listing_detail list_detail_prop_breakfast_included col-md-6">
            <span class="item_head">Breakfast Included:</span> No
           </div>
           <div class="listing_detail list_detail_prop_late_check-in col-md-6">
            <span class="item_head">Late Check-in:</span> Yes
           </div>
           <div class="listing_detail list_detail_prop_cancellation_policy col-md-6">
            <span class="item_head">Cancellation Policy:</span> Strict ( 60 days before check-in: 100% refund Less than 60 days: no refund)
           </div>
          </div>
         </div>
        </div>{' '}
        <div class="panel-wrapper features_wrapper">
         <a class="panel-title" id="listing_ammenities" data-toggle="collapse" data-parent="#accordion_prop_addr" href="#collapseFour">
          <span class="panel-title-arrow"></span>Features
         </a>
         <div id="collapseFour" class="panel-collapse collapse in">
          <div class="panel-body panel-body-border">
           <div class="listing_detail col-md-12 feature_block_Amenities ">
            <div class="feature_chapter_name col-md-12">Amenities</div>
            <div class="listing_detail col-md-6">       
             Wheelchair Accessible
            </div>
           </div>
          </div>
         </div>
        </div>
        {/* <!-- property termd   --> */}
        <div class="panel-wrapper">
         <a class="panel-title" data-toggle="collapse" data-parent="#accordion_prop_terns" href="#collapseTerms">
          {' '}
          <span class="panel-title-arrow"></span>Terms and Conditions
         </a>

         <div id="collapseTerms" class="panel-collapse collapse in">
          <div class="panel-body panel-body-border">
           <div class="listing_detail  col-md-6 smoking_allowed  not_present  ">
            {' '}
            <i class="fas fa-times"></i> Smoking Allowed
           </div>
           <div class="listing_detail  col-md-6 pets_allowed  not_present  ">
            {' '}
            <i class="fas fa-times"></i> Pets Allowed
           </div>
           <div class="listing_detail  col-md-6 party_allowed  not_present  ">
            {' '}
            <i class="fas fa-times"></i> Party Allowed
           </div>
           <div class="listing_detail  col-md-6 children_allowed ">
            {' '}
            <i class="fas fa-check checkon"></i>Children Allowed
           </div>
          </div>
         </div>
        </div>{' '}
        <div class="panel-wrapper yelp_wrapper">
         <a class="panel-title" id="yelp_details" data-toggle="collapse" data-parent="#yelp_details" href="#collapseFive">
          <span class="panel-title-arrow"></span>What's Nearby
         </a>
         <div id="collapseFive" class="panel-collapse collapse in">
          <div class="panel-body panel-body-border">
           <div class="yelp_bussines_wrapper">
            <div class="yelp_icon">
             <i class="fas fa-female"></i>
            </div>{' '}
            <h4 class="yelp_category">Beauty &amp; Spas</h4>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">Marlene Meyerson JCC Manhattan</h5> <span class="yelp_unit_distance"> (3.52 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_4.png" alt="Marlene Meyerson JCC Manhattan" />
            </div>
           </div>
           <div class="yelp_bussines_wrapper">
            <div class="yelp_icon">
             <i class="fas fa-utensils"></i>
            </div>{' '}
            <h4 class="yelp_category">Restaurants</h4>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">Terravita</h5> <span class="yelp_unit_distance"> (0.4 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_4_half.png" alt="Terravita" />
            </div>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">Jack's Lobster Shack</h5> <span class="yelp_unit_distance"> (0.1 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_4.png" alt="Jack's Lobster Shack" />
            </div>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">De Novo Edgewater</h5> <span class="yelp_unit_distance"> (0.34 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_4.png" alt="De Novo Edgewater" />
            </div>
           </div>
           <div class="yelp_bussines_wrapper">
            <div class="yelp_icon">
             <i class="fas fa-shopping-bag"></i>
            </div>{' '}
            <h4 class="yelp_category">Shopping</h4>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">Little Japan</h5> <span class="yelp_unit_distance"> (1.11 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_4.png" alt="Little Japan" />
            </div>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">The Shops at Hudson Lights</h5> <span class="yelp_unit_distance"> (1.36 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_2_half.png" alt="The Shops at Hudson Lights" />
            </div>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">Boutique Luxe</h5> <span class="yelp_unit_distance"> (1.34 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_5.png" alt="Boutique Luxe" />
            </div>
           </div>
           <div class="yelp_bussines_wrapper">
            <div class="yelp_icon">
             <i class="fas fa-bus-alt"></i>
            </div>{' '}
            <h4 class="yelp_category">Transportation</h4>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">Precision NY Chauffeur &amp; Airport Transportation Service</h5> <span class="yelp_unit_distance"> (5.03 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_5.png" alt="Precision NY Chauffeur &amp; Airport Transportation Service" />
            </div>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">NJ Premier Car Service</h5> <span class="yelp_unit_distance"> (6.35 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_5.png" alt="NJ Premier Car Service" />
            </div>
            <div class="yelp_unit">
             <h5 class="yelp_unit_name">Sanway Auto Transport</h5> <span class="yelp_unit_distance"> (8.4 miles)</span>
             <img class="yelp_stars" src="https://onlinebookingus.com/wp-content/themes/wprentals/img/yelp_small/small_5.png" alt="Sanway Auto Transport" />
            </div>
           </div>
          </div>
         </div>
        </div>
        <div class="property_page_container boxed_calendar">
         <h3 class="panel-title" id="listing_calendar">
          Availability
         </h3>
         <div class="all-front-calendars">
          <div id="calendar-next">
           <i class="fas fa-chevron-right"></i>
          </div>
          <div id="calendar-prev">
           <i class="fas fa-chevron-left"></i>
          </div>
          <div class="separator"></div>
          <div class="booking-calendar-wrapper" data-mno="1">
           <div class="month-title"> June 2022 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="2" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_past" data-curent-date="1654041600">
               1
              </td>
              <td class="calendar-free has_past" data-curent-date="1654128000">
               2
              </td>
              <td class="calendar-free has_past" data-curent-date="1654214400">
               3
              </td>
              <td class="calendar-free has_past" data-curent-date="1654300800">
               4
              </td>
              <td class="calendar-free has_past" data-curent-date="1654387200">
               5
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_past" data-curent-date="1654473600">
               6
              </td>
              <td class="calendar-free has_past" data-curent-date="1654560000">
               7
              </td>
              <td class="calendar-free has_past" data-curent-date="1654646400">
               8
              </td>
              <td class="calendar-free has_past" data-curent-date="1654732800">
               9
              </td>
              <td class="calendar-free has_past" data-curent-date="1654819200">
               10
              </td>
              <td class="calendar-free has_past" data-curent-date="1654905600">
               11
              </td>
              <td class="calendar-free has_past" data-curent-date="1654992000">
               12
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_past" data-curent-date="1655078400">
               13
              </td>
              <td class="calendar-free has_past" data-curent-date="1655164800">
               14
              </td>
              <td class="calendar-free has_past" data-curent-date="1655251200">
               15
              </td>
              <td class="calendar-free has_past" data-curent-date="1655337600">
               16
              </td>
              <td class="calendar-free has_past" data-curent-date="1655424000">
               17
              </td>
              <td class="calendar-free has_past" data-curent-date="1655510400">
               18
              </td>
              <td class="calendar-free has_past" data-curent-date="1655596800">
               19
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_past" data-curent-date="1655683200">
               20
              </td>
              <td class="calendar-free has_past" data-curent-date="1655769600">
               21
              </td>
              <td class="calendar-free has_past" data-curent-date="1655856000">
               22
              </td>
              <td class="calendar-free has_past" data-curent-date="1655942400">
               23
              </td>
              <td class="calendar-today has_future " data-curent-date="1656028800">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1656115200">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1656201600">
               26
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1656288000">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1656374400">
               28
              </td>
              <td class="calendar-free has_future" data-curent-date="1656460800">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1656547200">
               30
              </td>
              <td class="pad" colspan="3">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="2">
           <div class="month-title"> July 2022 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="4" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_future" data-curent-date="1656633600">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1656720000">
               2
              </td>
              <td class="calendar-free has_future" data-curent-date="1656806400">
               3
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1656892800">
               4
              </td>
              <td class="calendar-free has_future" data-curent-date="1656979200">
               5
              </td>
              <td class="calendar-free has_future" data-curent-date="1657065600">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1657152000">
               7
              </td>
              <td class="calendar-free has_future" data-curent-date="1657238400">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1657324800">
               9
              </td>
              <td class="calendar-free has_future" data-curent-date="1657411200">
               10
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1657497600">
               11
              </td>
              <td class="calendar-free has_future" data-curent-date="1657584000">
               12
              </td>
              <td class="calendar-free has_future" data-curent-date="1657670400">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1657756800">
               14
              </td>
              <td class="calendar-free has_future" data-curent-date="1657843200">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1657929600">
               16
              </td>
              <td class="calendar-free has_future" data-curent-date="1658016000">
               17
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1658102400">
               18
              </td>
              <td class="calendar-free has_future" data-curent-date="1658188800">
               19
              </td>
              <td class="calendar-free has_future" data-curent-date="1658275200">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1658361600">
               21
              </td>
              <td class="calendar-free has_future" data-curent-date="1658448000">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1658534400">
               23
              </td>
              <td class="calendar-free has_future" data-curent-date="1658620800">
               24
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1658707200">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1658793600">
               26
              </td>
              <td class="calendar-free has_future" data-curent-date="1658880000">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1658966400">
               28
              </td>
              <td class="calendar-free has_future" data-curent-date="1659052800">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1659139200">
               30
              </td>
              <td class="calendar-free has_future" data-curent-date="1659225600">
               31
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="3" style={{ display: 'none' }}>
           <div class="month-title"> August 2022 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1659312000">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1659398400">
               2
              </td>
              <td class="calendar-free has_future" data-curent-date="1659484800">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1659571200">
               4
              </td>
              <td class="calendar-free has_future" data-curent-date="1659657600">
               5
              </td>
              <td class="calendar-free has_future" data-curent-date="1659744000">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1659830400">
               7
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1659916800">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1660003200">
               9
              </td>
              <td class="calendar-free has_future" data-curent-date="1660089600">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1660176000">
               11
              </td>
              <td class="calendar-free has_future" data-curent-date="1660262400">
               12
              </td>
              <td class="calendar-free has_future" data-curent-date="1660348800">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1660435200">
               14
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1660521600">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1660608000">
               16
              </td>
              <td class="calendar-free has_future" data-curent-date="1660694400">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1660780800">
               18
              </td>
              <td class="calendar-free has_future" data-curent-date="1660867200">
               19
              </td>
              <td class="calendar-free has_future" data-curent-date="1660953600">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1661040000">
               21
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1661126400">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1661212800">
               23
              </td>
              <td class="calendar-free has_future" data-curent-date="1661299200">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1661385600">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1661472000">
               26
              </td>
              <td class="calendar-free has_future" data-curent-date="1661558400">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1661644800">
               28
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1661731200">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1661817600">
               30
              </td>
              <td class="calendar-free has_future" data-curent-date="1661904000">
               31
              </td>
              <td class="pad" colspan="4">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="4" style={{ display: 'none' }}>
           <div class="month-title"> September 2022 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="3" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_future" data-curent-date="1661990400">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1662076800">
               2
              </td>
              <td class="calendar-free has_future" data-curent-date="1662163200">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1662249600">
               4
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1662336000">
               5
              </td>
              <td class="calendar-free has_future" data-curent-date="1662422400">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1662508800">
               7
              </td>
              <td class="calendar-free has_future" data-curent-date="1662595200">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1662681600">
               9
              </td>
              <td class="calendar-free has_future" data-curent-date="1662768000">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1662854400">
               11
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1662940800">
               12
              </td>
              <td class="calendar-free has_future" data-curent-date="1663027200">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1663113600">
               14
              </td>
              <td class="calendar-free has_future" data-curent-date="1663200000">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1663286400">
               16
              </td>
              <td class="calendar-free has_future" data-curent-date="1663372800">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1663459200">
               18
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1663545600">
               19
              </td>
              <td class="calendar-free has_future" data-curent-date="1663632000">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1663718400">
               21
              </td>
              <td class="calendar-free has_future" data-curent-date="1663804800">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1663891200">
               23
              </td>
              <td class="calendar-free has_future" data-curent-date="1663977600">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1664064000">
               25
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1664150400">
               26
              </td>
              <td class="calendar-free has_future" data-curent-date="1664236800">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1664323200">
               28
              </td>
              <td class="calendar-free has_future" data-curent-date="1664409600">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1664496000">
               30
              </td>
              <td class="pad" colspan="2">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="5" style={{ display: 'none' }}>
           <div class="month-title"> October 2022 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="5" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_future" data-curent-date="1664582400">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1664668800">
               2
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1664755200">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1664841600">
               4
              </td>
              <td class="calendar-free has_future" data-curent-date="1664928000">
               5
              </td>
              <td class="calendar-free has_future" data-curent-date="1665014400">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1665100800">
               7
              </td>
              <td class="calendar-free has_future" data-curent-date="1665187200">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1665273600">
               9
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1665360000">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1665446400">
               11
              </td>
              <td class="calendar-free has_future" data-curent-date="1665532800">
               12
              </td>
              <td class="calendar-free has_future" data-curent-date="1665619200">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1665705600">
               14
              </td>
              <td class="calendar-free has_future" data-curent-date="1665792000">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1665878400">
               16
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1665964800">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1666051200">
               18
              </td>
              <td class="calendar-free has_future" data-curent-date="1666137600">
               19
              </td>
              <td class="calendar-free has_future" data-curent-date="1666224000">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1666310400">
               21
              </td>
              <td class="calendar-free has_future" data-curent-date="1666396800">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1666483200">
               23
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1666569600">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1666656000">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1666742400">
               26
              </td>
              <td class="calendar-free has_future" data-curent-date="1666828800">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1666915200">
               28
              </td>
              <td class="calendar-free has_future" data-curent-date="1667001600">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1667088000">
               30
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1667174400">
               31
              </td>
              <td class="pad" colspan="6">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="6" style={{ display: 'none' }}>
           <div class="month-title"> November 2022 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="1" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_future" data-curent-date="1667260800">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1667347200">
               2
              </td>
              <td class="calendar-free has_future" data-curent-date="1667433600">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1667520000">
               4
              </td>
              <td class="calendar-free has_future" data-curent-date="1667606400">
               5
              </td>
              <td class="calendar-free has_future" data-curent-date="1667692800">
               6
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1667779200">
               7
              </td>
              <td class="calendar-free has_future" data-curent-date="1667865600">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1667952000">
               9
              </td>
              <td class="calendar-free has_future" data-curent-date="1668038400">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1668124800">
               11
              </td>
              <td class="calendar-free has_future" data-curent-date="1668211200">
               12
              </td>
              <td class="calendar-free has_future" data-curent-date="1668297600">
               13
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1668384000">
               14
              </td>
              <td class="calendar-free has_future" data-curent-date="1668470400">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1668556800">
               16
              </td>
              <td class="calendar-free has_future" data-curent-date="1668643200">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1668729600">
               18
              </td>
              <td class="calendar-free has_future" data-curent-date="1668816000">
               19
              </td>
              <td class="calendar-free has_future" data-curent-date="1668902400">
               20
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1668988800">
               21
              </td>
              <td class="calendar-free has_future" data-curent-date="1669075200">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1669161600">
               23
              </td>
              <td class="calendar-free has_future" data-curent-date="1669248000">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1669334400">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1669420800">
               26
              </td>
              <td class="calendar-free has_future" data-curent-date="1669507200">
               27
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1669593600">
               28
              </td>
              <td class="calendar-free has_future" data-curent-date="1669680000">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1669766400">
               30
              </td>
              <td class="pad" colspan="4">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="7" style={{ display: 'none' }}>
           <div class="month-title"> December 2022 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="3" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_future" data-curent-date="1669852800">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1669939200">
               2
              </td>
              <td class="calendar-free has_future" data-curent-date="1670025600">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1670112000">
               4
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1670198400">
               5
              </td>
              <td class="calendar-free has_future" data-curent-date="1670284800">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1670371200">
               7
              </td>
              <td class="calendar-free has_future" data-curent-date="1670457600">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1670544000">
               9
              </td>
              <td class="calendar-free has_future" data-curent-date="1670630400">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1670716800">
               11
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1670803200">
               12
              </td>
              <td class="calendar-free has_future" data-curent-date="1670889600">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1670976000">
               14
              </td>
              <td class="calendar-free has_future" data-curent-date="1671062400">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1671148800">
               16
              </td>
              <td class="calendar-free has_future" data-curent-date="1671235200">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1671321600">
               18
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1671408000">
               19
              </td>
              <td class="calendar-free has_future" data-curent-date="1671494400">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1671580800">
               21
              </td>
              <td class="calendar-free has_future" data-curent-date="1671667200">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1671753600">
               23
              </td>
              <td class="calendar-free has_future" data-curent-date="1671840000">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1671926400">
               25
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1672012800">
               26
              </td>
              <td class="calendar-free has_future" data-curent-date="1672099200">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1672185600">
               28
              </td>
              <td class="calendar-free has_future" data-curent-date="1672272000">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1672358400">
               30
              </td>
              <td class="calendar-free has_future" data-curent-date="1672444800">
               31
              </td>
              <td class="pad" colspan="1">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="8" style={{ display: 'none' }}>
           <div class="month-title"> January 2023 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="6" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_future" data-curent-date="1672531200">
               1
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1672617600">
               2
              </td>
              <td class="calendar-free has_future" data-curent-date="1672704000">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1672790400">
               4
              </td>
              <td class="calendar-free has_future" data-curent-date="1672876800">
               5
              </td>
              <td class="calendar-free has_future" data-curent-date="1672963200">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1673049600">
               7
              </td>
              <td class="calendar-free has_future" data-curent-date="1673136000">
               8
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1673222400">
               9
              </td>
              <td class="calendar-free has_future" data-curent-date="1673308800">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1673395200">
               11
              </td>
              <td class="calendar-free has_future" data-curent-date="1673481600">
               12
              </td>
              <td class="calendar-free has_future" data-curent-date="1673568000">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1673654400">
               14
              </td>
              <td class="calendar-free has_future" data-curent-date="1673740800">
               15
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1673827200">
               16
              </td>
              <td class="calendar-free has_future" data-curent-date="1673913600">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1674000000">
               18
              </td>
              <td class="calendar-free has_future" data-curent-date="1674086400">
               19
              </td>
              <td class="calendar-free has_future" data-curent-date="1674172800">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1674259200">
               21
              </td>
              <td class="calendar-free has_future" data-curent-date="1674345600">
               22
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1674432000">
               23
              </td>
              <td class="calendar-free has_future" data-curent-date="1674518400">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1674604800">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1674691200">
               26
              </td>
              <td class="calendar-free has_future" data-curent-date="1674777600">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1674864000">
               28
              </td>
              <td class="calendar-free has_future" data-curent-date="1674950400">
               29
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1675036800">
               30
              </td>
              <td class="calendar-free has_future" data-curent-date="1675123200">
               31
              </td>
              <td class="pad" colspan="5">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="9" style={{ display: 'none' }}>
           <div class="month-title"> February 2023 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="2" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_future" data-curent-date="1675209600">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1675296000">
               2
              </td>
              <td class="calendar-free has_future" data-curent-date="1675382400">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1675468800">
               4
              </td>
              <td class="calendar-free has_future" data-curent-date="1675555200">
               5
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1675641600">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1675728000">
               7
              </td>
              <td class="calendar-free has_future" data-curent-date="1675814400">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1675900800">
               9
              </td>
              <td class="calendar-free has_future" data-curent-date="1675987200">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1676073600">
               11
              </td>
              <td class="calendar-free has_future" data-curent-date="1676160000">
               12
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1676246400">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1676332800">
               14
              </td>
              <td class="calendar-free has_future" data-curent-date="1676419200">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1676505600">
               16
              </td>
              <td class="calendar-free has_future" data-curent-date="1676592000">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1676678400">
               18
              </td>
              <td class="calendar-free has_future" data-curent-date="1676764800">
               19
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1676851200">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1676937600">
               21
              </td>
              <td class="calendar-free has_future" data-curent-date="1677024000">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1677110400">
               23
              </td>
              <td class="calendar-free has_future" data-curent-date="1677196800">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1677283200">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1677369600">
               26
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1677456000">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1677542400">
               28
              </td>
              <td class="pad" colspan="5">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="10" style={{ display: 'none' }}>
           <div class="month-title"> March 2023 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="2" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_future" data-curent-date="1677628800">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1677715200">
               2
              </td>
              <td class="calendar-free has_future" data-curent-date="1677801600">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1677888000">
               4
              </td>
              <td class="calendar-free has_future" data-curent-date="1677974400">
               5
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1678060800">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1678147200">
               7
              </td>
              <td class="calendar-free has_future" data-curent-date="1678233600">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1678320000">
               9
              </td>
              <td class="calendar-free has_future" data-curent-date="1678406400">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1678492800">
               11
              </td>
              <td class="calendar-free has_future" data-curent-date="1678579200">
               12
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1678665600">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1678752000">
               14
              </td>
              <td class="calendar-free has_future" data-curent-date="1678838400">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1678924800">
               16
              </td>
              <td class="calendar-free has_future" data-curent-date="1679011200">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1679097600">
               18
              </td>
              <td class="calendar-free has_future" data-curent-date="1679184000">
               19
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1679270400">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1679356800">
               21
              </td>
              <td class="calendar-free has_future" data-curent-date="1679443200">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1679529600">
               23
              </td>
              <td class="calendar-free has_future" data-curent-date="1679616000">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1679702400">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1679788800">
               26
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1679875200">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1679961600">
               28
              </td>
              <td class="calendar-free has_future" data-curent-date="1680048000">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1680134400">
               30
              </td>
              <td class="calendar-free has_future" data-curent-date="1680220800">
               31
              </td>
              <td class="pad" colspan="2">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="11" style={{ display: 'none' }}>
           <div class="month-title"> April 2023 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td colspan="5" class="pad">
               &nbsp;
              </td>
              <td class="calendar-free has_future" data-curent-date="1680307200">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1680393600">
               2
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1680480000">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1680566400">
               4
              </td>
              <td class="calendar-free has_future" data-curent-date="1680652800">
               5
              </td>
              <td class="calendar-free has_future" data-curent-date="1680739200">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1680825600">
               7
              </td>
              <td class="calendar-free has_future" data-curent-date="1680912000">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1680998400">
               9
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1681084800">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1681171200">
               11
              </td>
              <td class="calendar-free has_future" data-curent-date="1681257600">
               12
              </td>
              <td class="calendar-free has_future" data-curent-date="1681344000">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1681430400">
               14
              </td>
              <td class="calendar-free has_future" data-curent-date="1681516800">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1681603200">
               16
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1681689600">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1681776000">
               18
              </td>
              <td class="calendar-free has_future" data-curent-date="1681862400">
               19
              </td>
              <td class="calendar-free has_future" data-curent-date="1681948800">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1682035200">
               21
              </td>
              <td class="calendar-free has_future" data-curent-date="1682121600">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1682208000">
               23
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1682294400">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1682380800">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1682467200">
               26
              </td>
              <td class="calendar-free has_future" data-curent-date="1682553600">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1682640000">
               28
              </td>
              <td class="calendar-free has_future" data-curent-date="1682726400">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1682812800">
               30
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="booking-calendar-wrapper" data-mno="12" style={{ display: 'none' }}>
           <div class="month-title"> May 2023 </div>
           <table class="wp-calendar booking-calendar">
            <thead>
             <tr>
              <th scope="col" title="Monday">
               M
              </th>
              <th scope="col" title="Tuesday">
               T
              </th>
              <th scope="col" title="Wednesday">
               W
              </th>
              <th scope="col" title="Thursday">
               T
              </th>
              <th scope="col" title="Friday">
               F
              </th>
              <th scope="col" title="Saturday">
               S
              </th>
              <th scope="col" title="Sunday">
               S
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1682899200">
               1
              </td>
              <td class="calendar-free has_future" data-curent-date="1682985600">
               2
              </td>
              <td class="calendar-free has_future" data-curent-date="1683072000">
               3
              </td>
              <td class="calendar-free has_future" data-curent-date="1683158400">
               4
              </td>
              <td class="calendar-free has_future" data-curent-date="1683244800">
               5
              </td>
              <td class="calendar-free has_future" data-curent-date="1683331200">
               6
              </td>
              <td class="calendar-free has_future" data-curent-date="1683417600">
               7
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1683504000">
               8
              </td>
              <td class="calendar-free has_future" data-curent-date="1683590400">
               9
              </td>
              <td class="calendar-free has_future" data-curent-date="1683676800">
               10
              </td>
              <td class="calendar-free has_future" data-curent-date="1683763200">
               11
              </td>
              <td class="calendar-free has_future" data-curent-date="1683849600">
               12
              </td>
              <td class="calendar-free has_future" data-curent-date="1683936000">
               13
              </td>
              <td class="calendar-free has_future" data-curent-date="1684022400">
               14
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1684108800">
               15
              </td>
              <td class="calendar-free has_future" data-curent-date="1684195200">
               16
              </td>
              <td class="calendar-free has_future" data-curent-date="1684281600">
               17
              </td>
              <td class="calendar-free has_future" data-curent-date="1684368000">
               18
              </td>
              <td class="calendar-free has_future" data-curent-date="1684454400">
               19
              </td>
              <td class="calendar-free has_future" data-curent-date="1684540800">
               20
              </td>
              <td class="calendar-free has_future" data-curent-date="1684627200">
               21
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1684713600">
               22
              </td>
              <td class="calendar-free has_future" data-curent-date="1684800000">
               23
              </td>
              <td class="calendar-free has_future" data-curent-date="1684886400">
               24
              </td>
              <td class="calendar-free has_future" data-curent-date="1684972800">
               25
              </td>
              <td class="calendar-free has_future" data-curent-date="1685059200">
               26
              </td>
              <td class="calendar-free has_future" data-curent-date="1685145600">
               27
              </td>
              <td class="calendar-free has_future" data-curent-date="1685232000">
               28
              </td>
             </tr>
             <tr>
              <td class="calendar-free has_future" data-curent-date="1685318400">
               29
              </td>
              <td class="calendar-free has_future" data-curent-date="1685404800">
               30
              </td>
              <td class="calendar-free has_future" data-curent-date="1685491200">
               31
              </td>
              <td class="pad" colspan="4">
               &nbsp;
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <div class="calendar-legend">
           <div class="calendar-legend-past"></div> <span> past</span>
           <div class="calendar-legend-today"></div> <span> today</span>
           <div class="calendar-legend-reserved"></div> <span> booked</span>
          </div>
         </div>
        </div>
       </div>
       {/* <!-- end single content --> */}
      </div>
      {/* <!-- end 8col container--> */}

      <div class="clearfix visible-xs"></div>
      <div
       class=" 
        col-md-4  
        widget-area-sidebar listingsidebar listing_type_3"
       id="primary"
       style={{ marginTop: '393.562px' }}>
       <div itemprop="price" class="listing_main_image_price">
        $ 150<span class="pernight_label"> per night</span>
       </div>

       <div class="booking_form_request is_shortcode0 col-md-4 " id="booking_form_request">
        <div id="booking_form_request_mess" style={{ display: 'none' }}></div>
        <div id="booking_form_mobile_close">×</div>

        <h3>Book Now</h3>

        <div class="has_calendar calendar_icon">
         <input type="text" id="start_date" placeholder="Check-in" class="form-control calendar_icon" size="40" name="start_date" value="" readonly="readonly" />
        </div>

        <div class=" has_calendar calendar_icon">
         <input type="text" id="end_date" placeholder="Check-Out" class="form-control calendar_icon" size="40" name="end_date" value="" />
        </div>

        <div class=" has_calendar guest_icon ">
         <div class="dropdown form-control">
          <div data-toggle="dropdown" id="booking_guest_no_wrapper" class="filter_menu_trigger" data-value="5" aria-expanded="false">
           5 guests<span class="caret caret_filter"></span>
          </div>

          <input type="hidden" name="booking_guest_no" value="" />
          <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="booking_guest_no_wrapper" id="booking_guest_no_wrapper_list">
           <li role="presentation" data-value="1">
            1 guest
           </li>
           <li role="presentation" data-value="2">
            2 guests
           </li>
           <li role="presentation" data-value="3">
            3 guests
           </li>
           <li role="presentation" data-value="4">
            4 guests
           </li>
           <li role="presentation" data-value="5">
            5 guests
           </li>
           <li role="presentation" data-value="6">
            6 guests
           </li>
           <li role="presentation" data-value="7">
            7 guests
           </li>
           <li role="presentation" data-value="8">
            8 guests
           </li>
           <li role="presentation" data-value="9">
            9 guests
           </li>
           <li role="presentation" data-value="10">
            10 guests
           </li>
           <li role="presentation" data-value="11">
            11 guests
           </li>
           <li role="presentation" data-value="12">
            12 guests
           </li>
           <li role="presentation" data-value="13">
            13 guests
           </li>
           <li role="presentation" data-value="14">
            14 guests
           </li>
           <li role="presentation" data-value="15">
            15 guests
           </li>{' '}
          </ul>
         </div>
        </div>
        <div class="space_extra_opt">
         <input type="hidden" id="extra_options_key" value="" />
        </div>

        <div class="show_cost_form" id="show_cost_form">
         <div class="cost_row">
          <div class="cost_explanation">$ 150 x 31 nights</div>
          <div class="cost_value">$ 4,650</div>
         </div>

         <div class="cost_row">
          <div class="cost_explanation">Cleaning Fee</div>
          <div class="cost_value cleaning_fee_value" data_cleaning_fee="200">
           $ 200
          </div>
         </div>
         <div class="cost_row">
          <div class="cost_explanation">Security Deposit (*refundable)</div>
          <div class="cost_value">$ 1,000</div>
         </div>
         <div class="cost_row" id="total_cost_row">
          <div class="cost_explanation">
           <strong>TOTAL</strong>
          </div>
          <div class="cost_value" data_total_price="5850">
           $ 5,850
          </div>
         </div>
        </div>
        <p class="full_form " id="add_costs_here"></p>
        <input type="hidden" id="listing_edit" name="listing_edit" value="20296" />

        <div class="submit_booking_front_wrapper">
         {' '}
         <input type="submit" id="submit_booking_front" data-maxguest="3" data-overload="0" data-guestfromone="0" class="wpb_btn-info wpb_btn-small wpestate_vc_button  vc_button" value="Book Now" />
         <input type="hidden" id="security-register-booking_front" name="security-register-booking_front" value="5e473468d7" />
         <input type="hidden" name="_wp_http_referer" value="/properties/111050403/" />
        </div>

        <div class="third-form-wrapper">
         <div class="col-md-6 reservation_buttons">
          <div id="add_favorites" class=" isnotfavorite" data-postid="20296">
           Add to Favorites{' '}
          </div>
         </div>

         <div class="col-md-6 reservation_buttons">
          <div id="contact_host" class="col-md-6" data-postid="">
           Contact Owner{' '}
          </div>
         </div>
        </div>

        <div class="prop_social">
         <span class="prop_social_share">Share</span>
         <a href="http://www.facebook.com/sharer.php?u=https://onlinebookingus.com/properties/111050403/&amp;t=nice+1Br+apt+in+nj+near+manhattan+111050403" target="_blank" class="share_facebook">
          <i class="fab fa-facebook-f"></i>
         </a>
         <a href="http://twitter.com/home?status=nice+1Br+apt+in+nj+near+manhattan+111050403+https%3A%2F%2Fonlinebookingus.com%2Fproperties%2F111050403%2F" class="share_tweet" target="_blank">
          <i class="fab fa-twitter"></i>
         </a>
         <a href="mailto:email@email.com?subject=nice+1Br+apt+in+nj+near+manhattan+111050403&amp;body=https%3A%2F%2Fonlinebookingus.com%2Fproperties%2F111050403%2F" class="share_email" target="_blank">
          <i class="far fa-envelope"></i>
         </a>
         <a href="http://pinterest.com/pin/create/button/?url=https://onlinebookingus.com/properties/111050403/&amp;media=https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/27b76e69-ddf5-4575-b28d-7dbf74000498.jpg?resize=1200%2C790&amp;ssl=1&amp;description=nice+1Br+apt+in+nj+near+manhattan+111050403" target="_blank" class="share_pinterest">
          {' '}
          <i class="fab fa-pinterest-p fa-2"></i>{' '}
         </a>
        </div>
       </div>

       {/* <!-- begin sidebar --> */}

       <ul class="xoxo listingsidebar">
        <li id="search-6" class="widget-container widget_search">
         <form method="get" id="searchform" action="https://onlinebookingus.com/">
          <input type="hidden" id="wpestate_search_form_nonce" name="wpestate_search_form_nonce" value="1adc95efcd" />
          <input type="hidden" name="_wp_http_referer" value="/properties/111050403/" /> <input type="text" class="form-control" name="s" id="s" placeholder="Search" />
          <button class="search_form_but">
           {' '}
           <i class="fas fa-search"></i>{' '}
          </button>
         </form>
        </li>
        <li id="recent-posts-1" class="widget-container widget_recent_entries">
         <h3 class="widget-title-sidebar">Recent Posts</h3>
         <ul>
          <li>
           <a href="https://onlinebookingus.com/what-guests-want-to-know/">What Guests Want to Know</a>
          </li>
          <li>
           <a href="https://onlinebookingus.com/how-to-be-a-great-host/">How to be a Great Host for Renters</a>
          </li>
          <li>
           <a href="https://onlinebookingus.com/offering-a-welcoming-space/">Offering a Full Welcoming Space</a>
          </li>
          <li>
           <a href="https://onlinebookingus.com/10-best-september-vacations/">10 Best September Vacations</a>
          </li>
          <li>
           <a href="https://onlinebookingus.com/5-best-budget-vacations/">5 Best Budget Vacations</a>
          </li>
         </ul>
        </li>
        <li id="twitter_timeline-3" class="widget-container widget_twitter_timeline">
         <a class="twitter-timeline twitter-timeline-error" data-lang="EN" data-partner="jetpack" data-widget-id="" href="https://twitter.com/" data-twitter-extracted-i1656069379996550845="true">
          My Tweets
         </a>
        </li>{' '}
       </ul>
       {/* <!-- end sidebar -->  */}
      </div>
     </div>
     <div class="full_width_row">
      <div class="owner-page-wrapper">
       <div class="owner-wrapper  content-fixed-listing row" id="listing_owner">
        <div class="col-md-2 agentpic-wrapper verified">
         <div class="owner_listing_image " style={{ backgroundImage: 'url(https://onlinebookingus.com/wp-content/uploads/2021/02/A5C8EBE6-CF84-4B90-8179-21B0F9619C96-400x314.jpeg)' }}>
          <span class="verified_userid">
           <i class="fas fa-check-circle" aria-hidden="true"></i> Verified
          </span>{' '}
         </div>
        </div>

        <div class="col-md-10 agentpic-wrapper">
         <h3 itemprop="agent">Rabih Ch</h3>

         <div id="contact_me_long" class=" owner_read_more " data-postid="20296">
          Contact Owner
         </div>
        </div>
       </div>
      </div>

      <div class="google_map_on_list_wrapper">
       <div id="gmapzoomplus"></div>
       <div id="gmapzoomminus"></div>
       <div id="gmapstreet"></div>
       <div class="google_map_poi_marker">
        <div class="google_poi" id="transport">
         <img src="https://onlinebookingus.com/wp-content/themes/wprentals/css/css-images/poi/transport_icon.png" class="dashboad-tooltip" data-placement="right" data-original-title="Transport" />
        </div>
        <div class="google_poi" id="supermarkets">
         <img src="https://onlinebookingus.com/wp-content/themes/wprentals/css/css-images/poi/supermarkets_icon.png" class="dashboad-tooltip" data-placement="right" data-original-title="Supermarkets" />
        </div>
        <div class="google_poi" id="schools">
         <img src="https://onlinebookingus.com/wp-content/themes/wprentals/css/css-images/poi/schools_icon.png" class="dashboad-tooltip" data-placement="right" data-original-title="Schools" />
        </div>
        <div class="google_poi" id="restaurant">
         <img src="https://onlinebookingus.com/wp-content/themes/wprentals/css/css-images/poi/restaurant_icon.png" class="dashboad-tooltip" data-placement="right" data-original-title="Restaurants" />
        </div>
        <div class="google_poi" id="pharma">
         <img src="https://onlinebookingus.com/wp-content/themes/wprentals/css/css-images/poi/pharma_icon.png" class="dashboad-tooltip" data-placement="right" data-original-title="Pharmacies" />
        </div>
        <div class="google_poi" id="hospitals">
         <img src="https://onlinebookingus.com/wp-content/themes/wprentals/css/css-images/poi/hospitals_icon.png" class="dashboad-tooltip" data-placement="right" data-original-title="Hospitals" />
        </div>
       </div>
      </div>

      <div class="similar_listings_wrapper">
       <div class="similar_listings">
        <h3 class="agent_listings_title_similar">Similar Listings</h3>
        <div class="similar_listings_wrapper_flex">
         <div itemscope="" itemtype="http://schema.org/Product" class="listing_wrapper col-md-4  property_unit_v1  property_flex " data-org="3" data-listid="20340">
          <div class="property_listing " data-link="https://onlinebookingus.com/properties/111050301/">
           <div class="listing-unit-img-wrapper">
            <a href="https://onlinebookingus.com/properties/111050301/">
             <img itemprop="image" src="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/83048f41-db70-46bc-8b8d-f0d793265055.jpg?resize=400%2C314&amp;ssl=1" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />
            </a>
            <div class="price_unit_wrapper"> </div>
            <div class="price_unit">
             $ 150<span class="pernight"> /night</span>
            </div>
           </div>

           <div class="featured_div">featured</div>
           <div class="property_status_wrapper">
            <div class="property_status status_verified">verified</div>
           </div>
           <div class="title-container">
            <div class="price_unit">
             $ 150<span class="pernight"> /night</span>{' '}
            </div>

            <div class="rating_placeholder"></div>

            <div class="owner_thumb"></div>

            <div class="category_name">
             <a itemprop="url" href="https://onlinebookingus.com/properties/111050301/" class="listing_title_unit">
              <span itemprop="name">nice 1Br apt in nj near manhattan 111050301 </span>
             </a>
             <div class="category_tagline map_icon">
              <a href="https://onlinebookingus.com/area/manhattan/" rel="tag">
               Manhattan
              </a>
              ,{' '}
              <a href="https://onlinebookingus.com/area/united-states/" rel="tag">
               United states
              </a>
              ,{' '}
              <a href="https://onlinebookingus.com/city/edgewater/" rel="tag">
               Edgewater
              </a>{' '}
             </div>

             <div class="category_tagline actions_icon">
              <a href="https://onlinebookingus.com/listings/apartment/" rel="tag">
               Apartment
              </a>{' '}
              /{' '}
              <a href="https://onlinebookingus.com/action/entire-home/" rel="tag">
               Entire home
              </a>{' '}
             </div>
            </div>

            <div class="property_unit_action">
             <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="20340">
              <i class="fas fa-heart"></i>
             </span>
            </div>
           </div>
          </div>
         </div>

         <div itemscope="" itemtype="http://schema.org/Product" class="listing_wrapper col-md-4  property_unit_v1  property_flex " data-org="3" data-listid="20320">
          <div class="property_listing " data-link="https://onlinebookingus.com/properties/221050302/">
           <div class="listing-unit-img-wrapper">
            <a href="https://onlinebookingus.com/properties/221050302/">
             <img itemprop="image" src="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/1a1c73a7-f18a-4ac8-99f9-bc0eabfca6b6.jpg?resize=400%2C314&amp;ssl=1" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />
            </a>
            <div class="price_unit_wrapper"> </div>
            <div class="price_unit">
             $ 200<span class="pernight"> /night</span>
            </div>
           </div>

           <div class="property_status_wrapper">
            <div class="property_status status_verified">verified</div>
           </div>
           <div class="title-container">
            <div class="price_unit">
             $ 200<span class="pernight"> /night</span>{' '}
            </div>

            <div class="rating_placeholder"></div>

            <div class="owner_thumb"></div>

            <div class="category_name">
             <a itemprop="url" href="https://onlinebookingus.com/properties/221050302/" class="listing_title_unit">
              <span itemprop="name">nice 2br apt in nj near manhattan 221050302 </span>
             </a>
             <div class="category_tagline map_icon">
              <a href="https://onlinebookingus.com/area/manhattan/" rel="tag">
               Manhattan
              </a>
              ,{' '}
              <a href="https://onlinebookingus.com/area/united-states/" rel="tag">
               United states
              </a>
              ,{' '}
              <a href="https://onlinebookingus.com/city/edgewater/" rel="tag">
               Edgewater
              </a>{' '}
             </div>

             <div class="category_tagline actions_icon">
              <a href="https://onlinebookingus.com/listings/apartment/" rel="tag">
               Apartment
              </a>{' '}
              /{' '}
              <a href="https://onlinebookingus.com/action/entire-home/" rel="tag">
               Entire home
              </a>{' '}
             </div>
            </div>

            <div class="property_unit_action">
             <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="20320">
              <i class="fas fa-heart"></i>
             </span>
            </div>
           </div>
          </div>
         </div>

         <div itemscope="" itemtype="http://schema.org/Product" class="listing_wrapper col-md-4  property_unit_v1  property_flex " data-org="3" data-listid="20297">
          <div class="property_listing " data-link="https://onlinebookingus.com/properties/221050502/">
           <div class="listing-unit-img-wrapper">
            <a href="https://onlinebookingus.com/properties/221050502/">
             <img itemprop="image" src="https://i0.wp.com/onlinebookingus.com/wp-content/uploads/2022/06/6ddd02b4-8595-446d-8dc1-507703c131b3.jpg?resize=400%2C314&amp;ssl=1" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />
            </a>
            <div class="price_unit_wrapper"> </div>
            <div class="price_unit">
             $ 185<span class="pernight"> /night</span>
            </div>
           </div>

           <div class="property_status_wrapper">
            <div class="property_status status_verified">verified</div>
           </div>
           <div class="title-container">
            <div class="price_unit">
             $ 185<span class="pernight"> /night</span>{' '}
            </div>

            <div class="rating_placeholder"></div>

            <div class="owner_thumb"></div>

            <div class="category_name">
             <a itemprop="url" href="https://onlinebookingus.com/properties/221050502/" class="listing_title_unit">
              <span itemprop="name">nice 2br apt in nj near manhattan 221050502 </span>
             </a>
             <div class="category_tagline map_icon">
              <a href="https://onlinebookingus.com/area/manhattan/" rel="tag">
               Manhattan
              </a>
              ,{' '}
              <a href="https://onlinebookingus.com/area/united-states/" rel="tag">
               United states
              </a>
              ,{' '}
              <a href="https://onlinebookingus.com/city/edgewater/" rel="tag">
               Edgewater
              </a>{' '}
             </div>

             <div class="category_tagline actions_icon">
              <a href="https://onlinebookingus.com/listings/apartment/" rel="tag">
               Apartment
              </a>{' '}
              /{' '}
              <a href="https://onlinebookingus.com/action/entire-home/" rel="tag">
               Entire home
              </a>{' '}
             </div>
            </div>

            <div class="property_unit_action">
             <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="20297">
              <i class="fas fa-heart"></i>
             </span>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    {/* <!-- end content_wrapper started in header or full_width_row from prop list --> */}

    <footer id="colophon" class="  footer_back_repeat  ">
     <div id="footer-widget-area" class="row  wide_footer "></div>
     {/* <!-- #footer-widget-area --> */}

     <div class="sub_footer">
      <div class="sub_footer_content  wide_footer ">
       <span class="copyright">Copyright 2019 | Online Booking US. All Rights Reserved. </span>

       <div class="subfooter_menu">
        <div class="menu-footer-container">
         <ul id="menu-footer" class="menu">
          <li id="menu-item-19178" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-19178">
           <a href="https://onlinebookingus.com/gdpr-terms-conditions/">GDPR Terms &amp; Conditions</a>
          </li>
          <li id="menu-item-19179" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19179">
           <a href="https://onlinebookingus.com/terms-and-conditions/">Terms and Conditions</a>
          </li>
          <li id="menu-item-19180" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19180">
           <a href="https://onlinebookingus.com/contact/">Contact</a>
          </li>
          <li id="menu-item-19181" class="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-19181">
           <a href="https://onlinebookingus.com/blog-list/">Blog List</a>
          </li>
          <li id="menu-item-19182" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19182">
           <a href="https://onlinebookingus.com/advanced-search/">Advanced Search</a>
          </li>
          <li id="menu-item-19183" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-19183">
           <a href="https://onlinebookingus.com/what-guests-want-to-know/">What Guests Want to Know</a>
          </li>
         </ul>
        </div>{' '}
       </div>
      </div>
     </div>
    </footer>
    {/* <!-- #colophon --> */}

    <a href="#" class="backtop">
     <i class="fas fa-chevron-up"></i>
    </a>
    <div id="book_per_hour_wrapper">
     <div class="book_per_hour_back"></div>
     <div id="book_per_hour">
      <div id="book_per_hour_close">x</div>
      <div id="book_per_hour_calendar"></div>
      <div id="book_per_hour_footer_toolbar">
       <button id="per_hour_cancel" class="wpb_btn-info wpb_btn-small wpestate_vc_button  vc_button">
        Cancel{' '}
       </button>
       <button id="per_hour_ok" class="wpb_btn-info wpb_btn-small wpestate_vc_button  vc_button">
        Ok{' '}
       </button>
      </div>
     </div>
    </div>
   </div>
	<div itemscope itemtype="http://schema.org/RentAction" class="row content-fixed-listing listing_type_1">
	
   <div class="col-md-8">
    <div className="room-page-container">
     <div className="room-page-rooms-container">
      <div>
	  <div id="listing_ajax_container"></div>

       {this.state.rooms.results.length > 0 ? (
  
          <div className="container">
           <div className="custom-row mb-5">
            <div className="col-md-12">
             <div className="block-3 d-md-flex room-page-hotel-description">
              {/* <div className="col-md-4 text">
               <ul className="specs">
                <li>
                 {' '}
                 {this.state.hotel.results[0].address}, {this.state.hotel.results[0].city}, {this.state.hotel.results[0].state}, {this.state.hotel.results[0].zipcode}{' '}
                </li>
                <li> {this.state.hotel.results[0].phone_number}</li>
                <li>
                 {' '}
                 <sup>{this.state.hotel.results[0].description}</sup>
                </li>
                <li style={{ color: '#38af7b' }}> {this.state.hotel.results[0].amenities}</li>
               </ul>
              </div> */}

              {/* <div className="col-md-8 room-page-image" style={{ backgroundImage: `url(${imageArray[0]})` }}></div> */}
             </div>
            </div>
           </div>
        



         <div class="listing_main_image header_masonry panel-body imagebody imagebody_new" id="">
          {this.state.rooms.results.map((eachRoomResult, index) => {
           return (
            
     									<div className="col-lg-4 mb-5" key={index}>
															<div className="block-44">
																<div className="room-page-image">
																<img src={eachRoomResult.images} alt="Placeholder" />
																</div>
																<div className="text">
																	<h2 className="heading">{eachRoomResult.bed_type} Size Room</h2>
																	<div className="price"><sup className="room-page-room-price">$</sup><span className="room-page-room-price">{eachRoomResult.price.toFixed(2)}</span><sub>/per night</sub></div>
																	<ul className="specs">
																		<li><strong>Amenities:</strong> Closet with hangers, HD flat-screen TV, Telephone</li>
																		<li><strong>Capacity Per Room:</strong> {eachRoomResult.capacity}</li>
																		{/*<li><strong>Bed Number:</strong> {eachRoomResult.bed_number} </li>*/}

																		{/*<a href="#child4">{eachRoomResult.room_number}</a>*/}
																	</ul>

																	<div >
																		<strong># Of Rooms </strong>
																		<select className="room-page-room-quantity-dropdown" type="text" name={index} list="numbers" value={eachRoomResult.THIS_IS_A_PLACEHOLDER} onChange={this.handleEachRoomQuantity}>
																			{this.createAvailableRooms({ index })}
																		</select>
																	</div>
																	{/*<p><a href="#" className="btn btn-primary py-3 px-5">Read More</a></p>*/}

																</div>
															</div>
														</div>         

           );
          })}
         </div>
        </div>
       ) : (

        <div>no result</div>
       )}

       <hr></hr>
       {/*
									<FormGroup className="form-inline ">
										<div className="col-lg-12 input-group custom-row home-date">
											<div className="input-group-append">
												<div className="check-in-icon input-group-text"><i className="fa fa-calendar"></i></div>
											</div>
											<DateRangePicker
												startDate={this.state.searchParams.date_in} // momentPropTypes.momentObj or null,
												startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
												endDate={this.state.searchParams.date_out} // momentPropTypes.momentObj or null,
												endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
												onDatesChange={({ startDate, endDate }) =>
													this.setState(prevState => ({
														searchParams: {
															...prevState.searchParams,
															date_in: startDate,
															date_out: endDate
														}
													}))
												} // PropTypes.func.isRequired,
												focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
												onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
											/>
										</div>

									</FormGroup>

									*/}

       <div className="room-page-checkout-guest-information custom-row">
        <div className="col-lg-4">
         <strong className="py-3"> Guest: </strong>
         <p>{this.state.guest_number}</p>
        </div>
        <div className="col-lg-4">
         <strong> Date In: </strong>
         <p>{this.state.date_in}</p>
        </div>
        <div className="col-lg-4">
         <strong> Date Out: </strong>
         <p>{this.state.date_out}</p>
        </div>

      {/*
               <Table hover borderless>
                  <thead>
                     <tr>
                        <th>Guests</th>
                        <th>Date In</th>
                        <th>Date Out</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>{this.state.guest_number}</td>
                        <td>{this.state.date_in}</td>
                        <td>{this.state.date_out}</td>
                     </tr>
                  </tbody>
               </Table>
            */}
       </div>

       <div className="room-page-checkout-description">
        <Table hover borderless>
         <thead>
          <tr>
           <th>Room Type</th>
           <th>Capacity</th>
           <th>Price</th>
           <th>Quantity</th>
           <th>Total</th>
          </tr>
         </thead>

         {
          <tbody>
           {this.state.rooms.results.map((eachRoomResult, index) => {
            if (eachRoomResult.desired_quantity > 0) {
             return (
              <tr key={index}>
               <td>{eachRoomResult.bed_type}</td>
               <td>{eachRoomResult.capacity}</td>
               <td>${eachRoomResult.price.toFixed(2)}</td>
               <td>{eachRoomResult.desired_quantity} </td>
               <td>$ {(eachRoomResult.desired_quantity * eachRoomResult.price).toFixed(2)}</td>
              </tr>
             );
            } else {
             return <tr key={index}></tr>;
            }
           })}
           <tr className="hr-row">
            <td>
             <hr></hr>{' '}
            </td>
            <td>
             <hr></hr>{' '}
            </td>
            <td>
             <hr></hr>{' '}
            </td>
            <td>
             <hr></hr>{' '}
            </td>
            <td>
             <hr></hr>{' '}
            </td>
           </tr>
           <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>
             <strong> Estimated Total Per Night</strong>
            </td>
            <td> $ {this.handleRoomPrice().toFixed(2)}</td>
           </tr>
          </tbody>
         }
        </Table>
       </div>

       {this.state.verifyCheckout ? <div className="room-page-verify-checkout"> Unable to checkout </div> : null}
       {this.state.verifyRooms ? <div className="room-page-verify-checkout"> Please select a room </div> : null}
       {this.state.verifyGuests ? <div className="room-page-verify-checkout"> Please select enough rooms to accomodate all guests </div> : null}
       {localStorage.accesstoken ? null : <p style={{ color: '#f977a1' }}>Please login to proceed to check out</p>}
       <Button disabled={!localStorage.accesstoken || parseInt(this.handleRoomPrice()) === 0} className="home-submit-button btn btn-primary py-3 px-5 mb-5" onClick={this.Checkout.bind(this)}>
        Checkout
       </Button>
      </div>
     </div>
    </div>
	</div>
	</div>
	</div>
   );

   return (
    <div>

<div class="website-wrapper is_header_type1 is_search_type1 topbar_show_mobile_no" id="all_wrapper">
    <div class="container main_wrapper wide">
     <Topbar />
      {/* {Linkpages} */}

     {roomPage}
	 </div>
	 </div>
    </div>
   );
  }
 }
}

export default withRouter(RoomPage);
