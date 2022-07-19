import React, { useCallback,useState,useEffect,useContext } from 'react'

import {useHistory, useParams } from "react-router-dom"

import axios from "axios";

import { Helmet } from 'react-helmet';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { DateRangePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './style.css';

function BookingDetailsStep() {

    let { id } = useParams();

    const [proId, setproId] = useState("");
    const [booking_type, setBooking_type] = useState("");
    const [minimum_stay, setMinimum_stay] = useState("");
    const [minimum_stay_seasonal, setMinimumStaySeasonal] = useState("");
    const [cancellation, setCancellation] = useState("");

    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  



    const data = {
        booking_type: booking_type,
        minimum_stay:minimum_stay,
        minimum_stay_seasonal: minimum_stay_seasonal,
        cancellation : cancellation
       
    }
    const [isLoading,setLoading]=useState(false);


    const handleDatesChange = ({ startDate, endDate }) => {
      setStartDate(startDate);
      setEndDate(endDate);
    };


    
  const AddBookingDetails = () => {
    setLoading(true);

    axios.put(`https://onlinebookingus-app-test.herokuapp.com/property/updatepropbooking/${id}`, data).then((response) => {


          console.log("BOOKING UPDATES MANAGED"+response.data)


          setTimeout(() => {
            setLoading(false);
            toast.info('Information Added successfully');
            // navigate.push('/add-property');
        }, 2000);
     
    });
  };
    return (
      <div className="form-group">


      

          <div class="multisteps-form__content">
            <input class="multisteps-form__input form-control" type="hidden" value={id} onChange={(event) => {
                setproId(event.target.value);
            }} placeholder="bedrooms" />

            <div class="form-row mt-4">
            <div class="form-group col-6">
           
        <label for="formGroupExampleInput">Booking Type</label>

            <select id="booking_type"  class="custom-select mr-sm-2" name="bed_type" 
            onChange={(event) => {
                setBooking_type(event.target.value);
              }}
            
             >

            <option value=''> </option>
            <option value='Review each request'>Review each request</option>
            <option value='Review each request'>Guest book instantly</option>

            </select>
            </div>

          </div>
            <div class="form-row mt-4">
             

              <div class="form-group col-6">
        <label for="formGroupExampleInput">Minimum Stay</label>
        <input class="multisteps-form__input form-control" name="minimum_stay"

                  onChange={(event) => {
                    setMinimum_stay(event.target.value);
                  }}

                  type="number" placeholder="minimum_stay" />
        </div>



        </div>


        <div class="form-row mt-4">
        <div class="form-group col-6">
        <h5>Seasonal Requirements</h5>
        <label for="formGroupExampleInput">From - To</label>

        
        <DateRangePicker
        class="form-control"
        startDate={startDate}
        startDateId="tata-start-date"
        endDate={endDate}
        endDateId="tata-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
      />
    </div>

    </div>




    <div class="form-row mt-4">
    
    <div class="form-group col-6">
  
    <label for="formGroupExampleInput">Minimum Stay</label>
    <input class=" form-control" name="minimum_stay_seasonal"

              onChange={(event) => {
                setMinimumStaySeasonal(event.target.value);
              }}

              type="number" placeholder="minimum_stay_seasonal" />
    </div>
    
    
    </div>




        
     
	



         

            

            <div class="form-row mt-4">
              <div class="col-12 col-sm-6">

              <div class="form-check">

              <input type="radio" name="policy_id" value="Flexible"  onChange={(event) => {
                setCancellation(event.target.value);
              }} id="Flexible" /> <label> Flexible </label>

              </div>
              <div class="form-check">
              <input type="radio" name="policy_id" value="Moderate"  onChange={(event) => {
                setCancellation(event.target.value);
              }} id="Flexible" /> <label> Moderate </label>
              </div>
              <div class="form-check">
              <input type="radio" name="policy_id"  onChange={(event) => {
                setCancellation(event.target.value);
              }} value="Flexible or Non-refundable" id="Flexible" /> <label> Flexible or Non-refundable </label>

              </div>

              <div class="form-check">

              <input type="radio" name="policy_id" onChange={(event) => {
                setCancellation(event.target.value);
              }} value="Moderate or Non-refundable" id="Moderate or Non-refundable" /> <label> Moderate or Non-refundable </label>
              </div>
              </div>

            </div>
            <div class="button-row form-group col-6 d-flex mt-4">
              {!isLoading && <button type="submit" onClick={AddBookingDetails} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>

              }
              {isLoading &&
                <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
              }
            </div>
            <ToastContainer />
          </div>
        
    


    
        </div>
    )
}

export default BookingDetailsStep
