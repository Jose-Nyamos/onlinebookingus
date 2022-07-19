import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { HotelSearchFunction, extractFromAddress } from '../Utility/HotelSearchFunction';
import Autocomplete from '../Utility/Autocomplete';

import { FormGroup, Table, Pagination, PaginationLink, PaginationItem } from 'reactstrap';

import './CSS/map_autocomplete_overrides.css';
import './CSS/react_dates_overrides.css'; //NEEDED in order to OVERRIDE css styling of _datepicker.css
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

import { sortByDropDownData } from '../Utility/DataForMenu';
import AmenityFilterDropdown from './Components/AmenityFilterDropdown';
import { defaultMarkerImageBaseURL, selectedMarkerImageBaseURL } from './mapMarker';
import { Helmet } from 'react-helmet';

class FindProperty extends React.Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(this.props.location.search);
    const city = params.get('city');
    const dateIn = params.get('date_in');
    const dateOut = params.get('date_out');
    const longitude = params.get('longitude');
    const latitude = params.get('latitude');
    const adult = params.get('adult');
    const children = params.get('children');
    const guest_number = params.get('guest_number');
    const sortBy = params.get('sortBy');
    const state = params.get('state');
    let amenities = '';
    let selectedOption = [];
    if (params.get('amenities') && params.get('amenities') !== '') {
      amenities = params.get('amenities');
      const ifarray = amenities.split(',');
      if (ifarray.constructor === Array) {
        ifarray.forEach((amenity) => {
          const amenityobj = {};
          amenityobj.value = amenity;
          amenityobj.label = amenity;
          selectedOption.push(amenityobj);
        });
      }
    }

    this.state = {
      hotels: [{}],
      searchClickedToggle: false,
      sortBySelectedToggle: false,
      searchParams: {
        city,
        latitude,
        longitude,
        state,
        date_in: moment(dateIn, 'YYYY-MM-DD'),
        date_out: moment(dateOut, 'YYYY-MM-DD'),
        amenities
      },
      sortBy,
      hotel_id: 0,
      fullAddress: '',
      streetAddress: '',
      adult,
      children,
      guest_number,
      focusedInput: null,
      place: {},
      selectedOption
    };
  }

  convertSelectedOption = () => {
    let amenities = '';

    this.state.selectedOption.forEach((option, index) => {
      amenities += option.label;
      if (index !== this.state.selectedOption.length - 1) amenities += ',';
    });

    this.setState((prevState) => ({
      searchParams: {
        ...prevState.searchParams,
        amenities
      }
    }));
  };

  handleFilterDropdown = (selectedOption) => {
    this.setState({ selectedOption }, () => this.convertSelectedOption());
  };

  async componentDidMount() {
    await this.fetchSearchResult();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchSearchResult();
    }
  }

  showPlaceDetails(place) {
    let geoDetail = JSON.stringify(place.geometry.location, null, 2).replace(/['"]+/g, '');
    const latitude = geoDetail.substring(geoDetail.lastIndexOf('lat:') + 'lat: '.length, geoDetail.lastIndexOf(','));
    const longitude = geoDetail.substring(geoDetail.lastIndexOf('lng:') + 'lng: '.length, geoDetail.lastIndexOf('}'));

    const fullAddress = JSON.stringify(place.formatted_address, null, 2).replace(/['"]+/g, '');

    let address = JSON.stringify(place.adr_address, null, 2).replace(/['"]+/g, '');
    address = address.replace(/(\r\n|\n|\r)/gm, '');

    const streetAddress = extractFromAddress(address);
    const city = extractFromAddress(address, 'city');
    const state = extractFromAddress(address, 'state');

    this.setState((prevState) => ({
      searchParams: {
        ...prevState.searchParams,
        city,
        state,
        latitude,
        longitude
      },
      fullAddress,
      streetAddress,
      place
    }));
  }

  fetchSearchResult() {
    const queryCall = '/api/search/hotels' + this.props.location.search;

    const params = new URLSearchParams(this.props.location.search);
    const sortBy = params.get('sortBy');
    if (!sortBy) {
      this.setState({ sortBy: '' });
    }

    axios
      .get(queryCall)
      .then((result) => {
        this.setState({
          hotels: result.data
        });
      })
      .then(() => {
        this.loadGoogleMap();
      });
  }

  loadGoogleMap() {
    const params = new URLSearchParams(this.props.location.search);
    const latitude = parseFloat(params.get('latitude'));
    const longitude = parseFloat(params.get('longitude'));

    const googleMap = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: latitude, lng: longitude },
      zoom: 14
    });

    // bounding box for map
    var bounds = new window.google.maps.LatLngBounds();
    //bounds.extend(new window.google.maps.LatLng(latitude, longitude))

    window.googleMap = googleMap;
    // display each hotel's information window when clicking the marker
    const infoWindow = new window.google.maps.InfoWindow();
    window.infoWindow = infoWindow;
    window.markers = [];
    this.state.hotels.results.forEach((eachHotel, index) => {
      const imageURL = this.getHotelSearchResultImages(eachHotel.images);
      //const imageURL = this.getHotelSearchResultImages(eachHotel.images).split(",")[0]
      //^^ FOR DAVID
      const hotelInfo = `

									<img src=${imageURL} style="max-width: 100%; max-height: 100%; padding-bottom: 10px"/>
									<a href="" style="padding-top:1vh; text-align:center;"><h5>${eachHotel.name}</h5></a>
									<div style="font-weight: 425;"> ${eachHotel.address}</div>
									<div style="font-weight: 425; padding-bottom: 8px;">${eachHotel.city}, ${eachHotel.state}</div>
									<p style="text-align: center"> <img src="http://www.stickpng.com/assets/images/5a4525cd546ddca7e1fcbc84.png" alt="phone"style="width: 12px; height: 12px" /> &nbsp;${eachHotel.phone_number}</p>
									<p style="font-size: 1.2em; font-weight:500"> <img src="https://static.thenounproject.com/png/18095-200.png" alt="price" style="width: 25px; height: 25px" /> ${eachHotel.min_price.toFixed(2)} ~ ${eachHotel.max_price.toFixed(2)}</p>



								`;

      var defaultMarkerImage = defaultMarkerImageBaseURL + '' + (index + 1);
      var selectedMarkerImage = selectedMarkerImageBaseURL + '' + (index + 1);

      // display each hotel's marker along with index number
      const googleMapMarker = new window.google.maps.Marker({
        position: {
          lat: parseFloat(eachHotel.latitude),
          lng: parseFloat(eachHotel.longitude)
        },
        map: window.googleMap,
        title: eachHotel.name,
        icon: defaultMarkerImage
      });

      // https://stackoverflow.com/questions/15719951/auto-center-map-with-multiple-markers-in-google-maps-api-v3
      // https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds.extend
      // https://stackoverflow.com/questions/2437683/google-maps-api-v3-can-i-setzoom-after-fitbounds

      // add marker position to boundingbox
      bounds.extend(new window.google.maps.LatLng(eachHotel.latitude, eachHotel.longitude));
      window.googleMap.fitBounds(bounds);
      window.google.maps.event.addListenerOnce(googleMap, 'idle', () => {
        if (googleMap.getZoom() > 16) googleMap.setZoom(16);
        window.markers.push(googleMapMarker);
      });

      // action listener to open information window when clicking marker
      googleMapMarker.addListener('click', () => {
        var center = new window.google.maps.LatLng(eachHotel.latitude, eachHotel.longitude);
        window.googleMap.panTo(center);
        window.markers.forEach((eachMarker, index) => {
          eachMarker.setIcon(defaultMarkerImageBaseURL + (index + 1));
          eachMarker.setAnimation(null);
        });
        // window.markers[index].setAnimation(window.google.maps.Animation.BOUNCE)
        window.markers[index].setIcon(selectedMarkerImage);
        setTimeout(() => {
          window.markers[index].setAnimation();
        }, 750);
        window.infoWindow.setContent(hotelInfo);
        window.infoWindow.open(window.googleMap, googleMapMarker);
        window.infoWindow.setOptions({ maxWidth: 250 });
      });
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  adultIncrement = () => {
    // console.log("yay");
    var value = parseInt(document.getElementById('adult').value, 10);

    value++;
    // console.log(value);

    document.getElementById('adult').value = value;
    var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10);

    this.setState({
      adult: value,
      guest_number: guest_number
    });
  };

  adultDecrement = () => {
    // console.log("yay");
    var value = parseInt(document.getElementById('adult').value, 10);

    if (value !== 0) {
      value--;
    }
    // console.log(value);

    document.getElementById('adult').value = value;
    var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10);

    this.setState({
      adult: value,
      guest_number: guest_number
    });
  };

  childrenIncrement = () => {
    // console.log("yay");
    var value = parseInt(document.getElementById('children').value, 10);

    value++;
    // console.log(value);

    document.getElementById('children').value = value;
    var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10);

    this.setState({
      children: value,
      guest_number: guest_number
    });
  };

  childrenDecrement = () => {
    // console.log("yay");
    var value = parseInt(document.getElementById('children').value, 10);

    if (value !== 0) {
      value--;
    }
    // console.log(value);

    document.getElementById('children').value = value;
    var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10);

    this.setState({
      children: value,
      guest_number: guest_number
    });
  };

  getHotelSearchResult = (event) => {
    event.preventDefault();

    const params = new URLSearchParams(this.props.location.search);
    const sortBy = params.get('sortBy');

    let additionalClause = '';
    if (event.target.name && event.target.name === 'sortBy') {
      additionalClause = `&sortBy=${event.target.value}`;
      this.setState({ [event.target.name]: event.target.value });
    }

    if (event.target.name && event.target.name === 'pagination') {
      additionalClause = `&pageNumber=${event.target.value}`;
      if (sortBy && sortBy !== '') {
        additionalClause = additionalClause + `&sortBy=${sortBy}`;
      }
    }

    if (this.state.searchParams.amenities) additionalClause += `&amenities=${this.state.searchParams.amenities}`;

    let searchParams = Object.assign({}, this.state.searchParams);
    searchParams.date_in = searchParams.date_in.format('YYYY-MM-DD');
    searchParams.date_out = searchParams.date_out.format('YYYY-MM-DD');

    HotelSearchFunction(searchParams).then(() => {
      const queryString = `latitude=${searchParams.latitude}&longitude=${searchParams.longitude}` + `&date_in=${searchParams.date_in}&date_out=${searchParams.date_out}` + `&adult=${this.state.adult}&children=${this.state.children}` + `&guest_number=${this.state.guest_number}&full_address=${this.state.fullAddress}` + `&street_address=${this.state.streetAddress}&city=${searchParams.city}` + `&state=${searchParams.state}` + `${additionalClause}`;

      this.props.history.push({
        pathname: `/findproperty`,
        search: `?${queryString}`
      });
    });
  };

  roomSearch = (item) => (event) => {
    const params = new URLSearchParams(this.props.location.search);
    const date_in = params.get('date_in');
    const date_out = params.get('date_out');
    const guest_number = params.get('guest_number');
    const city = params.get('city');

    const queryString = `?date_in=${date_in}&date_out=${date_out}&guest_number=${guest_number}&hotel_id=${item.hotel_id}&city=${city}`;

    this.props.history.push({
      pathname: `/RoomPage`,
      search: `${queryString}`
    });
  };

  generatePageNumbers() {
    let pageNumbers = [];
    const params = new URLSearchParams(this.props.location.search);
    let pageNumber = parseInt(params.get('pageNumber'));
    if (!pageNumber) {
      pageNumber = 0;
    }
    let activeFlag = false;

    if (this.state.hotels.results && this.state.hotels.results.length > 0) {
      for (let i = 0; i < this.state.hotels.totalResultCount / 10; i++) {
        activeFlag = pageNumber === i ? true : false;
        pageNumbers.push(
          <PaginationItem active={activeFlag} key={i}>
            <PaginationLink name="pagination" onClick={this.getHotelSearchResult} key={i} value={i}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }
    return pageNumbers;
  }

  moveMap(lat, lng, index) {
    var center = new window.google.maps.LatLng(lat, lng);
    window.googleMap.panTo(center);
    window.markers.forEach((eachMarker, i) => {
      if (eachMarker) {
        if (i === index) {
          eachMarker.setIcon(selectedMarkerImageBaseURL + (index + 1));
          eachMarker.setZIndex(12);
          eachMarker.setAnimation(window.google.maps.Animation.BOUNCE);
        } else {
          eachMarker.setIcon(defaultMarkerImageBaseURL + (i + 1));
          eachMarker.setZIndex(0);
          eachMarker.setAnimation(null);
        }
      }
    });
  }

  getHotelSearchResultImages(images) {
    let arraychecker = [];
    if (images && images.constructor === Array) {
      arraychecker = images.split(',');
      return arraychecker[0];
    }
    return images;
  }

  render() {
    if (this.state.hotels.results === undefined) {
      return <div> Loading...</div>;
    }

    const searchBar = (
      <div>
        <hr className="hotel-search-hr-bottom"></hr>
        <FormGroup className="form-inline hotel-search-inputs">
          <div className="col-lg-3 input-group room-page-location">
            <div className="input-group-append">
              <div className="location-input-icon input-group-text">
                <i className="fa fa-search"></i>
              </div>
            </div>
            <Autocomplete onPlaceChanged={this.showPlaceDetails.bind(this)} />
          </div>

          <div className="col-lg-4 field-icon-wrap input-group room-page-search-date custom-row">
            <div className="input-group-append">
              <div className="check-in-icon input-group-text">
                <i className="fa fa-calendar"></i>
              </div>
            </div>
            <div className="room-page-date-check-wrap">
              <DateRangePicker
                startDate={this.state.searchParams.date_in} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.searchParams.date_out} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState((prevState) => ({
                    searchParams: {
                      ...prevState.searchParams,
                      date_in: startDate,
                      date_out: endDate
                    }
                  }))
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
            </div>
          </div>

          <div className=" col-lg-2 input-group menu-container room-page-guest-container">
            <div className="col-lg-12 hotel-search-menu-item">
              <div className="hotelsearch-dropdown">{this.state.guest_number}&nbsp;Guests</div>
              <ul className="hotelsearch-dropdown-list-style">
                <li>
                  <div className="form-inline home-adults-container">
                    <div className="col-lg-3 home-adults">Adults</div>

                    <div className="col-lg-9 home-increments">
                      <i className="fa fa-minus home-guest-icon-increment" type="button" value="Decrement Value" onClick={this.adultDecrement}></i>
                      <input readOnly className="home-guest-input" name="adult" type="text" id="adult" value={this.state.adult} onChange={this.handleChange} />
                      <i className="fa fa-plus home-guest-icon-decrement" type="button" value="Increment Value" onClick={this.adultIncrement} />
                    </div>
                  </div>

                  <div className="form-inline home-children-container">
                    <div className="col-lg-3 home-children">Children</div>

                    <div className="col-lg-9 home-increments">
                      <i className="fa fa-minus home-guest-icon-increment" type="button" value="Decrement Value" onClick={this.childrenDecrement}></i>
                      <input readOnly className="home-guest-input" name="children" type="text" id="children" value={this.state.children} onChange={this.handleChange} />
                      <i className="fa fa-plus home-guest-icon-decrement" type="button" value="Increment Value" onClick={this.childrenIncrement} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 home-submit-button-container">
            <AmenityFilterDropdown value={this.state.selectedOption} handleFilterDropdown={this.handleFilterDropdown} />
          </div>
          <div className="col-lg-1 home-submit-button-container">
            <button onClick={this.getHotelSearchResult} className="p-2 submit-button btn btn-danger my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
        </FormGroup>
        <hr className="hotel-search-hr-bottom"></hr>
      </div>
    );

    const pagination = (
      <div className="hotel-search-pagination">
        <Pagination>{this.generatePageNumbers()}</Pagination>
      </div>
    );
	const sortByDropdown = (
		<select name="sortBy" onChange={this.getHotelSearchResult} value={this.state.sortBy}>
		  <option value="" disabled hidden>
			Sort By
		  </option>
		  {sortByDropDownData.map((each, key) => {
			return <option key={key} value={each.value} label={each.label}></option>;
		  })}
		</select>
	  );
  
	  const HotelTable = (
		  <div id="listing_ajax_container" class="ajax-map" itemscope="" itemtype="http://schema.org/ItemList">
		  <span id="scrollhere"></span>
  
		  {this.state.hotels.results.map((eachHotelResult, index) => {
			const imageURL = this.getHotelSearchResultImages(eachHotelResult.images);
  
			return (
			  <div key={index} onClick={this.roomSearch(eachHotelResult)} onMouseEnter={() => this.moveMap(eachHotelResult.latitude, eachHotelResult.longitude, index)} style={{ cursor: 'pointer' }} itemscope="" itemtype="http://schema.org/Product" class="listing_wrapper col-md-6 property_unit_v1  property_flex " data-org="4" data-listid="19802">
				<div class="property_listing " data-link="https://onlinebookingus.com/properties/very-bright-and-nice-1-bedroom-with-fantastic-view-11103/">
				  <div class="listing-unit-img-wrapper">
					<a>
					  {/* <img itemprop="image" src="https://onlinebookingus.com/wp-content/uploads/2021/10/A4EA04BB-54A8-4EF2-9231-7729DE1CD39B-400x314.jpeg?crop=1" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" />/ */}
					  <img class="b-lazy img-responsive wp-post-image lazy-hidden" src={imageURL} alt="logo" />
					</a>
  
					<div class="price_unit_wrapper"> </div>
					<div class="price_unit">
					  ${eachHotelResult.max_price.toFixed(2)}
					  <span class="pernight"> /night</span>
					</div>
				  </div>
  
				  <div class="featured_div">featured</div>
				  <div class="property_status_wrapper"></div>
				  <div class="title-container">
					<div class="price_unit">
					  {/* ${eachHotelResult.min_price.toFixed(2)} &nbsp;-&nbsp;  */}${eachHotelResult.max_price.toFixed(2)}
					  <span class="pernight"> /night</span>{' '}
					</div>
  
					{/* <div class="rating_placeholder"></div> */}
  
					<div class="owner_thumb"></div>
  
					<div class="category_name">
					  <a itemprop="url" href="https://onlinebookingus.com/properties/very-bright-and-nice-1-bedroom-with-fantastic-view-11103/" class="listing_title_unit">
						<span itemprop="name">
							{/* {eachHotelResult.description} */}
							A place to be
							</span>
					  </a>
					  <div class="category_tagline map_icon">
						<a rel="tag">&nbsp; {eachHotelResult.city}</a>
					  </div>
  
					  <div class="category_tagline actions_icon">
						<a href="https://onlinebookingus.com/listings/apartment/" rel="tag">
						  Apartment
						</a>
						/
						<a href="https://onlinebookingus.com/action/entire-home/" rel="tag">
						  Entire home
						</a>
					  </div>
					</div>
  
					<div class="property_unit_action">
					  <span class="icon-fav icon-fav-off" data-original-title="add to favorites" data-postid="19802">
						<i class="fas fa-heart"></i>
					  </span>
					</div>
					{eachHotelResult.amenities}
				  </div>
				</div>
			  </div>
			);
		  })}
		</div>
	  );
  
	  const ResultTable = (
		<div >
		  <div class="adv_extended_options_text">
			<div className="col-lg-1">{sortByDropdown}</div>
		  </div>
  
		  <div className="hotel-search-table-container">
					  {HotelTable}
				  </div>
		  {this.state.hotels.results.length > 0 ? pagination : ''}
		</div>
	  );

    const searchdetails = (
      <div>
		  <div className="row">

  <div className="col-md-7">
        <div id="google_map_prop_list_sidebar" class="half_header_type1">
          <div class="col-md-12">
            <div class="card-body">
              <div id="advanced_search_map_list">
                <div class="advanced_search_map_list_container">
                  <div class="col-md-12 radius_wrap">
                    <Autocomplete id="geolocation_search" onChange={this.getHotelSearchResult} class="form-control pac-target-input" placeholder="Location" autocomplete="off" onPlaceChanged={this.showPlaceDetails.bind(this)} />
                  </div>

                  <div class="advanced_search_map_list_container_trigger">
                    <div class=" advanced_search_form_wrapper" data-postid="4">
                      <form>
                        <div class=" col-md-8 Location  ">
                          <i class="custom_icon_class_icon fas fa-map-marker"></i>
                          <input type="text" id="search_locationhalf" class="form-control pac-target-input" name="search_location" placeholder="Where do you want to go ?" value="New York, NY, USA" autocomplete="off" />
                        </div>
                        <div class=" col-md-4 Guests  ">
                          <i class="custom_icon_class_icon fas fa-user"></i>
                          <div class="dropdown custom_icon_class  form-control ">
                            <div data-toggle="dropdown" id="guest_no_toogle" class=" filter_menu_trigger  " data-value="2">
                              2<span class="caret  caret_filter "></span>
                            </div>
                            <input type="hidden" name="guest_no" id="guest_no" />
                            <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="guest_no_toogle">
                              <li role="presentation" data-value="all">
                                Guests
                              </li>
                              <li data-value="1" value="1">
                                1
                              </li>
                              <li data-value="2" value="2">
                                2
                              </li>
                              <li data-value="3" value="3">
                                3
                              </li>
                              <li data-value="4" value="4">
                                4
                              </li>
                              <li data-value="5" value="5">
                                5
                              </li>
                              <li data-value="6" value="6">
                                6
                              </li>
                              <li data-value="7" value="7">
                                7
                              </li>
                              <li data-value="8" value="8">
                                8
                              </li>
                              <li data-value="9" value="9">
                                9
                              </li>
                              <li data-value="10" value="10">
                                10
                              </li>
                              <li data-value="11" value="11">
                                11
                              </li>
                              <li data-value="12" value="12">
                                12
                              </li>
                              <li data-value="13" value="13">
                                13
                              </li>
                              <li data-value="14" value="14">
                                14
                              </li>
                              <li data-value="15" value="15">
                                15
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class=" col-md-4 Check-In  ">
                          <i class="custom_icon_class_icon fas fa-calendar-alt"></i>
                          <input type="text" id="check_in" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="04-07-2022" readonly="readonly" />
                        </div>
                        <div class=" col-md-4 Check-Out  ">
                          <i class="custom_icon_class_icon fas fa-calendar-alt"></i>
                          <input type="text" id="check_out" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="05-03-2022" />
                        </div>
                        <div class=" col-md-4 Type  ">
                          <i class="custom_icon_class_icon fas fa-home"></i>
                          <div class="dropdown custom_icon_class  form-control ">
                            <div data-toggle="dropdown" id="property_category_toogle" class=" filter_menu_trigger  " data-value="">
                              All Types
                              <span class="caret  caret_filter "></span>
                            </div>
                            <input type="hidden" name="property_category" id="property_category" value="" />
                            <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="property_category_toogle">
                              <li role="presentation" data-value="all">
                                All Types
                              </li>
                              <li role="presentation" data-value="apartment">
                                Apartment (16)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class=" col-md-4 Category  ">
                          <i class="custom_icon_class_icon fas fa-home"></i>
                          <div class="dropdown custom_icon_class  form-control ">
                            <div data-toggle="dropdown" id="property_action_category_toogle" class=" filter_menu_trigger  " data-value="">
                              All Size <span class="caret  caret_filter "></span>
                            </div>
                            <input type="hidden" name="property_action_category" id="property_action_category" value="" />
                            <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="property_action_category_toogle">
                              <li role="presentation" data-value="all">
                                All Sizes
                              </li>
                              <li role="presentation" data-value="entire-home">
                                Entire Home (16)
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class=" col-md-8 Bedrooms  ">
                          <i class="custom_icon_class_icon fas fa-bed"></i>
                          <input type="text" id="search_locationhalf" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="New York, NY, USA" />
                        </div>

                        <div class=" col-md-8 Bathrooms">
                          &nbsp;&nbsp; <i class="custom_icon_class_icon fas fa-bath"></i>
                           <Autocomplete onChange={this.getHotelSearchResult} onPlaceChanged={this.showPlaceDetails.bind(this)} />
                        </div>

                  
                          <input name="submit" type="submit" onClick={this.getHotelSearchResult} class="advanced_search_submit_button " value="Search" />

                        <div class="adv_extended_options_text">More Search Options</div>
                        <div class="extended_search_check_wrapper" style={{ display: 'none' }}>
                          <span class="adv_extended_close_button" style={{ display: 'none' }}>
                            <i class="fas fa-times"></i>
                          </span>
                          <div class="extended_search_checker">
                            <input type="checkbox" data-label-search="check-in-check-out-in-person" id="check-in-check-out-in-personadv" name="check-in-check-out-in-person" value="1" />
                            <label for="check-in-check-out-in-personadv">Check-in/Check-out in Person</label>
                          </div>
                          <div class="extended_search_checker">
                            <input type="checkbox" data-label-search="elevator-in-building" id="elevator-in-buildingadv" name="elevator-in-building" value="1" />
                            <label for="elevator-in-buildingadv">Elevator in Building</label>
                          </div>
                          <div class="extended_search_checker">
                            <input type="checkbox" data-label-search="free-parking-on-premises" id="free-parking-on-premisesadv" name="free-parking-on-premises" value="1" />
                            <label for="free-parking-on-premisesadv">Free Parking on Premises</label>
                          </div>
                          <div class="extended_search_checker">
                            <input type="checkbox" data-label-search="pool" id="pooladv" name="pool" value="1" />
                            <label for="pooladv">Pool</label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

             
					<div class="loader-inner ball-pulse" id="listing_loader" style={{ display: 'none' }}>
					<div class="double-bounce1"></div>
					<div class="double-bounce2"></div>
					</div>

				</div>
				</div>
				{this.state.hotels.results.length > 0 ? ResultTable : NoResultTable}

			</div>
        </div>
		</div>

		<div className="col-md-5">
			  <div id="map">
			  
			  </div>
		</div>

      </div>
	


	  </div>
    );

 

    const navbar = (
      <div class="container main_wrapper  wide  ">
        <div class="master_header master_  wide  google_map_list_header master_header_wide_yes hover_type_5">
          <div class="mobile_header  is_half_map ">
            <div class="mobile-trigger">
              <i class="fas fa-bars"></i>
            </div>
            <div class="mobile-logo">
              <a href="https://onlinebookingus.com">
                <img src="https://onlinebookingus.com/wp-content/uploads/2019/03/cropped-Color-logo-no-background-2.png" class="img-responsive retina_ready" alt="logo" />
              </a>
            </div>
            <div class="mobile-trigger-user">
              <i class="fas fa-user-circle"></i>
            </div>
          </div>

          <div class="header_wrapper   is_half_map  header_type1 header_align_left header_wide_yes">
            <div class="header_wrapper_inside">
              <div class="logo">
                <a href="/">
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

              <div class="mobilewrapper">
                <div class="snap-drawers">
                  {/* <!-- Left Sidebar--> */}
                  <div class="snap-drawer snap-drawer-left">
                    <div class="mobilemenu-close">
                      <i class="fas fa-times"></i>
                    </div>
                    <ul id="menu-main" class="mobilex-menu">
                      <li id="menu-item-19193" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-19193">
                        <a href="https://onlinebookingus.com/">Home</a>
                      </li>
                      <li id="menu-item-19167" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-19167">
                        <a href="https://onlinebookingus.com/properties-list-standard/">Property List</a>
                        <ul class="sub-menu">
                          <li id="menu-item-19168" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item menu-item-19168">
                            <a href="https://onlinebookingus.com/advanced-search/" aria-current="page">
                              Advanced Search
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-19171" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-19171">
                        <a href="https://onlinebookingus.com/blog-list/">Blog List</a>
                        <ul class="sub-menu">
                          <li id="menu-item-19198" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-19198">
                            <a href="https://onlinebookingus.com/what-guests-want-to-know/">What Guests Want to Know</a>
                          </li>
                          <li id="menu-item-19199" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-19199">
                            <a href="https://onlinebookingus.com/how-to-be-a-great-host/">How to be a Great Host for Renters</a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-19172" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19172">
                        <a href="https://onlinebookingus.com/favorite-listings/">Favorite Listings</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="mobilewrapper-user">
                <div class="snap-drawers">
                  {/* <!-- Right Sidebar--> */}
                  <div class="snap-drawer snap-drawer-right">
                    <div class="mobilemenu-close-user">
                      <i class="fas fa-times"></i>
                    </div>

                    <div class="login_sidebar_mobile">
                      <h3 class="widget-title-sidebar" id="login-div-title-mobile">
                        Login
                      </h3>
                      <div class="login_form" id="login-div-mobile">
                        <div class="loginalert" id="login_message_area_wd_mobile"></div>
                        <input type="text" class="form-control" name="log" id="login_user_wd_mobile" placeholder="Username" />
                        <input type="password" class="form-control" name="pwd" id="login_pwd_wd_mobile" placeholder="Password" />
                        <input type="hidden" name="loginpop" id="loginpop_mobile" value="0" />
                        <input type="hidden" id="security-login-mobile" name="security-login-mobile" value="268d790cf6-1650994107" />
                        <button class="wpb_button  wpb_btn-info  wpb_regularsize   wpestate_vc_button  vc_button" id="wp-login-but-wd-mobile">
                          Login
                        </button>
                        <div class="login-links">
                          <a href="#" id="widget_register_mobile">
                            Need an account? Register here!
                          </a>
                          <a href="#" id="forgot_pass_widget_mobile">
                            Forgot Password?
                          </a>
                        </div>{' '}
                        <div class="wpestate_social_login" id="facebooklogin_mb" data-social="facebook">
                          <i class="fab fa-facebook-f"></i> Login with Facebook
                        </div>
                        <div class="wpestate_social_login" id="googlelogin_mb" data-social="google">
                          <i class="fab fa-google"></i>Login with Google
                        </div>
                        {/* <input type="hidden" class="wpestate_social_login_nonce" value="d5f377c9a8" /`?/?:
									?:>#
									:>#
									:p#P:~:P#~`> */}
                      </div>

                      <h3 class="widget-title-sidebar" id="register-div-title-mobile">
                        Register
                      </h3>
                      <div class="login_form" id="register-div-mobile">
                        <div class="loginalert" id="register_message_area_wd_mobile"></div>
                        <input type="text" name="user_login_register" id="user_login_register_wd_mobile" class="form-control" placeholder="Username" />
                        <input type="text" name="user_email_register" id="user_email_register_wd_mobile" class="form-control" placeholder="Email" />
                        <input type="password" name="user_password" id="user_password_wd_mobile" class="form-control" placeholder="Password" size="20" />
                        <input type="password" name="user_password_retype" id="user_password_retype_wd_mobile" class="form-control" placeholder="Retype Password" size="20" />
                        <div class="acc_radio">
                          <input type="radio" name="acc_type" id="acctype0" value="1" checked="" required="" />
                          <div class="radiolabel" for="acctype0">
                            I only want to book
                          </div>
                          <br />
                          <input type="radio" name="acc_type" id="acctype1" value="0" required="" />
                          <div class="radiolabel" for="acctype1">
                            I want to rent my property
                          </div>
                        </div>
                        <input type="checkbox" name="terms" id="user_terms_register_wd_mobile" />
                        <label id="user_terms_register_wd_label_mobile" for="user_terms_register_wd_mobile">
                          I agree with{' '}
                          <a href="https://onlinebookingus.com/terms-and-conditions/" target="_blank" id="user_terms_register_topbar_link">
                            terms &amp; conditions
                          </a>{' '}
                        </label>
                        <input type="hidden" id="security-register-mobile" name="security-register-mobile" value="0f2c805285-1650994107" />
                        <div
                          id="mobile_register_menu"
                          style={{
                            float: 'left',
                            transform: 'scale(0.77)',
                            webkitTransform: 'scale(0.77)',
                            transformOrigin: '0 0',
                            webkitTransformOrigin: '0 0',
                            marginTop: '10px'
                          }}
                        >
                          <div>
                            <iframe src="https://www.google.com/recaptcha/api/fallback?k=6Lf4OlwaAAAAAFZQ4GgBERSiMImH5_5gh1achni3&amp;hl=en&amp;v=QENb_qRrX0-mQMyENQjD6Fuj&amp;t=40366" frameborder="0" scrolling="no" style={{ width: '302px', height: '422px' }}></iframe>
                            <div
                              style={{
                                margin: '-4px 0px 0px',
                                padding: '0px',
                                background: 'rgb(249, 249, 249)',
                                border: '1px solid rgb(193, 193, 193)',
                                borderRadius: '3px',
                                height: '60px',
                                width: '300px'
                              }}
                            >
                              <textarea
                                id="g-recaptcha-response-1"
                                name="g-recaptcha-response"
                                class="g-recaptcha-response"
                                style={{
                                  width: '250px',
                                  height: '40px',
                                  border: '1px solid rgb(193, 193, 193)',
                                  margin: '10px 25px',
                                  padding: '0px',
                                  resize: 'none',
                                  display: 'block'
                                }}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <button class="wpb_button  wpb_btn-info  wpb_regularsize  wpestate_vc_button  vc_button" id="wp-submit-register_wd_mobile">
                          Register
                        </button>
                        <div class="login-links">
                          <a href="#" id="widget_login_sw_mobile">
                            Back to Login
                          </a>
                        </div>
                        <div class="login-links"></div>
                        {/* <!-- end login links-->  */}
                      </div>
                    </div>

                    <div id="mobile_forgot_wrapper">
                      <h3 class="widget-title-sidebar" id="forgot-div-title_mobile">
                        Reset Password
                      </h3>
                      <div class="login_form" id="forgot-pass-div_mobile">
                        <div class="loginalert" id="forgot_pass_area_shortcode_wd_mobile"></div>
                        <div class="loginrow">
                          <input type="text" class="form-control" name="forgot_email" id="forgot_email_mobile" placeholder="Enter Your Email Address" size="20" />
                        </div>
                        <input type="hidden" id="security-login-forgot_wd_mobile" name="security-login-forgot_wd_mobile" value="7f3fba334d" />
                        <input type="hidden" name="_wp_http_referer" value="/advanced-search/" />
                        <input type="hidden" id="postid" value="0" />
                        <button class="wpb_btn-info wpb_regularsize wpestate_vc_button  vc_button" id="wp-forgot-but_mobile" name="forgot">
                          Reset Password
                        </button>
                        <div class="login-links shortlog">
                          <a href="#" id="return_login_shortcode_mobile">
                            Return to Login
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav id="access">
                <ul id="menu-main-1" class="menu">
                  <li id="menu-item-19193" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home no-megamenu   ">
                    <a class="menu-item-link" href="https://onlinebookingus.com/">
                      Home
                    </a>
                  </li>
                  <li id="menu-item-19167" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children no-megamenu   ">
                    <a class="menu-item-link" href="https://onlinebookingus.com/properties-list-standard/">
                      Property List
                    </a>
                    <ul class="  sub-menu ">
                      <li id="menu-item-19168" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item   ">
                        <a class="menu-item-link" href="https://onlinebookingus.com/advanced-search/">
                          Advanced Search
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-19171" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children no-megamenu   ">
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
                </ul>
              </nav>
              {/* <!-- #access --> */}
            </div>
          </div>
        </div>
      </div>
    );

    const NoResultTable = <div className="col-lg-6 hotel-search-first-column">No Result</div>;

    const hotelSearchResult = (
      <div>
        {navbar}
        <br />
        <br />
        <br />

        {searchdetails}

{/* 
		<div class="social_share_wrapper social_share_half_map_on_right">
			<a class="social_share share_facebook_side" href="https://www.facebook.com/onlinebookingus/" target="_blank"><i class="fab fa-facebook-f"></i></a>

			<a class="social_share share_twiter_side" href="https://twitter.com/onlinebookingus" target="_blank"><i class="fab fa-twitter"></i></a>

			<a class="social_share share_google_side" href="https://photos.google.com/album/AF1QipNTrgjk-GHx09KSfJHSCCfZ7PuzNEOEqLrwrBtw" target="_blank"><i class="fab fa-google-plus-g"></i></a>

			<a class="social_share share_linkedin_side" href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>

			<a class="social_share share_pinterest_side" href="#" target="_blank"><i class="fab fa-pinterest-p"></i></a>

			<a class="social_share share_instagram_side" href="#" target="_blank"><i class="fab fa-instagram"></i></a>

			<a class="social_share share_youtube_side" href="#" target="_blank"><i class="fab fa-youtube"></i></a>

		</div> */}


      </div>
    );

    return (
      <div>
        <div className="hotel-search-container">{hotelSearchResult}</div>
      </div>
    );
  }
}

export default withRouter(FindProperty);
