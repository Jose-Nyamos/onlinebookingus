import React from 'react';
import { withRouter } from 'react-router-dom'

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './CSS/react_dates_overrides.css'; //NEEDED in order to OVERRIDE css styling of _datepicker.css

import { HotelSearchFunction, extractFromAddress } from '../Utility/HotelSearchFunction'
import Autocomplete from "../Utility/Autocomplete";

// import homeImage from './Images/homeImage14.jpeg';
import {
	Form, FormGroup
} from 'reactstrap'
import { homeFilterData } from '../Utility/DataForMenu'
import {Helmet} from 'react-helmet'



class SearchHome extends React.Component {

	constructor() {
		super();
		this.state = {
			fullAddress: '',
			streetAddress: '',
			city: '',
			state: '',
			latitude: '',
			longitude: '',
			date_in: null,
			date_out: null,
			adult: 0,
			children: 0,
			focusedInput: null,
			guest_number: 0,
			place: {},
			checkbox: {
			}
		};
	}

	componentDidMount() {
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleCheckBox = (event) => {
		const name = event.target.name
		this.setState(prevState => ({
			checkbox: {
				...prevState.checkbox,
				[name]: !prevState.checkbox[name]
			}
		}))
	}

	adultIncrement = () => {
		// console.log("yay");
		var value = parseInt(document.getElementById('adult').value, 10);

		value++;
		// console.log(value);

		document.getElementById('adult').value = value;
		var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10)


		this.setState({
			adult: value,
			guest_number: guest_number

		})

	}

	adultDecrement = () => {
		// console.log("yay");
		var value = parseInt(document.getElementById('adult').value, 10);

		if (value !== 0) {
			value--;
		}
		// console.log(value);

		document.getElementById('adult').value = value;
		var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10)


		this.setState({
			adult: value,
			guest_number: guest_number
		})

	}

	childrenIncrement = () => {
		// console.log("yay");
		var value = parseInt(document.getElementById('children').value, 10);

		value++;
		// console.log(value);

		document.getElementById('children').value = value;
		var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10)


		this.setState({
			children: value,
			guest_number: guest_number

		})

	}

	childrenDecrement = () => {
		// console.log("yay");
		var value = parseInt(document.getElementById('children').value, 10);

		if (value !== 0) {
			value--;
		}
		// console.log(value);


		document.getElementById('children').value = value;
		var guest_number = parseInt(document.getElementById('adult').value, 10) + parseInt(document.getElementById('children').value, 10)


		this.setState({
			children: value,
			guest_number: guest_number
		})

	}

	showPlaceDetails(place) {
		let geoDetail = JSON.stringify(place.geometry.location, null, 2).replace(/['"]+/g, '')
		const latitude = geoDetail.substring(geoDetail.lastIndexOf("lat:") + "lat: ".length, geoDetail.lastIndexOf(","))
		const longitude = geoDetail.substring(geoDetail.lastIndexOf("lng:") + "lng: ".length, geoDetail.lastIndexOf("}")).replace(/\s/g, '')

		const fullAddress = JSON.stringify(place.formatted_address, null, 2).replace(/['"]+/g, '')

		let address = JSON.stringify(place.adr_address, null, 2).replace(/['"]+/g, '')
		address = address.replace(/(\r\n|\n|\r)/gm, "")

		const streetAddress = extractFromAddress(address)
		const city = extractFromAddress(address, 'city')
		const state = extractFromAddress(address, 'state')

		this.setState(
			{
				latitude, longitude,
				fullAddress, streetAddress,
				city, state, place
			},

		)
	}

	search = (event) => {
		event.preventDefault()

		// convert true props of checkbox into array and join the array into a string
		const keys = Object.keys(this.state.checkbox)
		const filteredElements = keys.filter((key) => this.state.checkbox[key] === true)


		const temp_fields = {
			streetAddress: this.state.streetAddress,
			city: this.state.city,
			state: this.state.state,
			latitude: this.state.latitude,
			longitude: this.state.longitude,
			date_in: this.state.date_in.format('YYYY-MM-DD'),
			date_out: this.state.date_out.format('YYYY-MM-DD'),
			adult: this.state.adult,
			children: this.state.children,
			guest_number: this.state.guest_number,
		}

		HotelSearchFunction(temp_fields).then(response => {

			let queryString = `latitude=${temp_fields.latitude}&longitude=${temp_fields.longitude}`+
								`&date_in=${temp_fields.date_in}&date_out=${temp_fields.date_out}`+
								`&adult=${this.state.adult}&children=${this.state.children}`+
								`&guest_number=${this.state.guest_number}&full_address=${this.state.fullAddress}`+
								`&city=${temp_fields.city}&street_address=${temp_fields.streetAddress}`+
								`&state=${temp_fields.state}`+
								`&amenities=${filteredElements}`

			this.props.history.push({
				pathname: `/findproperty`,
				search: `?${queryString}`,
				
			})
		})
	}


	render() {

		const homeHeader = (

			<div class="search_wrapper type2 advpos_themeslider search_wr_newtype    with_search_form_float " id="search_wrapper" data-postid="18460">
			<div class="adv-2-header">Make a Reservation</div>
			<div class="adv-2-wrapper">
				</div>
				<div class="adv-search-2   adv_extended_class 18460 advanced_search_form_wrapper" data-postid="18460">
				  
						<form role="search" onSubmit={this.search}>
						<div class=" col-md-12 Where_do_you_want_to_go_? map_icon ">
						<Autocomplete onPlaceChanged={this.showPlaceDetails.bind(this)}/>
						</div>				  				        										


						<div class="col-md-12 Check-In calendar_icon">

						<DateRangePicker
						class="form-control"
						startDatePlaceholderText="check_in"
						startDate={this.state.date_in} // momentPropTypes.momentObj or null,
						startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
						endDatePlaceholderText="check_out"
						endDate={this.state.date_out} // momentPropTypes.momentObj or null,
						endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
						onDatesChange={({ startDate, endDate }) => this.setState({ date_in: startDate, date_out: endDate })} // PropTypes.func.isRequired,
						focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
						onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
						/>
						</div>
										
						<div class=" col-md-12 Guests guest_no_drop ">
						<div class="dropdown custom_icon_class  form-control ">
								<div data-toggle="dropdown" id="guest_no_toogle" class=" filter_menu_trigger  " data-value="">Guests
							<span class="caret  caret_filter "></span>
							</div> 
							<input type="hidden" name="guest_no" id="guest_no" value="" />
								<ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="guest_no_toogle">
									<li role="presentation" data-value="all">Guests</li>
									<li data-value="1" value="1">1</li>
									<li data-value="2" value="2">2</li>
									<li data-value="3" value="3">3</li>
									<li data-value="4" value="4">4</li>
									<li data-value="5" value="5">5</li>
									<li data-value="6" value="6">6</li>
									<li data-value="7" value="7">7</li>
									<li data-value="8" value="8">8</li>
									<li data-value="9" value="9">9</li>
									<li data-value="10" value="10">10</li>
									<li data-value="11" value="11">11</li>
									<li data-value="12" value="12">12</li>
									<li data-value="13" value="13">13</li>
									<li data-value="14" value="14">14</li>
									<li data-value="15" value="15">15</li>
								</ul>
							</div>
					</div>

{/* 
						<div class=" col-md-12 Guests guest_no_drop ">
						<div class="dropdown custom_icon_class  form-control ">
						<div data-toggle="dropdown" id="guest_no_toogle" class=" filter_menu_trigger  " data-value="">Guests
							<span class="caret  caret_filter "></span>
							</div> 

							<div className={this.state.guest_number === 0 ? "home-guest-dropdown col-lg-12 menu-box menu-item" : "home-guest-dropdown-filled col-lg-12 menu-box menu-item" }> {this.state.guest_number === 0 ? null : this.state.guest_number}&nbsp;guests
								<ul className="home-guest-dropdown-list-style">
											<li>
												<div className="form-inline home-adults-container">
													<div className="home-adults">
														Adults
													</div>

													<div className="home-increments">
														<i className="fa fa-minus home-guest-icon-increment" type="button" value="Decrement Value" onClick={this.adultDecrement}></i>
														<input readOnly className="home-guest-input" name="adult" type="text" id="adult" value={this.state.adult} onChange={this.handleChange} />
														<i className="fa fa-plus home-guest-icon-decrement" type="button" value="Increment Value" onClick={this.adultIncrement} />
													</div>
												</div>

												<div className="form-inline home-children-container">
													<div className="home-children">
														Children
													</div>

													<div className="home-increments">
														<i className="fa fa-minus home-guest-icon-increment" type="button" value="Decrement Value" onClick={this.childrenDecrement}></i>
														<input readOnly className="home-guest-input" name="children" type="text" id="children" value={this.state.children} onChange={this.handleChange} />
														<i className="fa fa-plus home-guest-icon-decrement" type="button" value="Increment Value" onClick={this.childrenIncrement} />
													</div>
												</div>
											</li>
										</ul>
									</div>
									</div>
									</div> */}


				  				          	<div className="col-md-12">
				  				            <button disabled={!this.state.city || !this.state.date_in || !this.state.date_out} class="advanced_search_submit_button " type="submit">Search</button>
				  				            </div>

									{/* <div className="input-labels-guide">Try "Las Vegas" or "New Orleans"</div> */}
				  				    {/* <div className="col-lg-12">
										<div className="form-checkboxes row home-checkboxes text-center">
											{homeFilterData.map((each, key) => {
												return <input className="col-lg-3 input-labels" type="checkbox" key={key} id={key + 123} name={each.name} label={each.label} value={each.value} onChange={this.handleCheckBox} />
											})}
										</div>
									</div> */}
						</form>
						</div>


			</div>
							
		);


		return (
			<div>

		
				{homeHeader}

			</div>
		);
	}
}

export default withRouter(SearchHome);
