import React, { useCallback,useState,useEffect,useContext,useMemo} from 'react'

import axios from 'axios';

import {useHistory, useParams } from "react-router-dom"
import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import currencies from "./utils/commonCurrency.json";




function PropertyPricingStep() {

  let { id } = useParams();

   
  const [PropertyId, setPropertyId] = useState(`${id}`);
  const [cleaning_fee, setCleaningFee] = useState(0);
  const [guest_after, setGuestAfter] = useState(0);
  const [guest_fee, setGuestFee] = useState(0);
  const [security_fee, setSecurityFee] = useState(0);


  const [price, setPrice] = useState(0);
  const [weekend_price, setWeekendPrice] = useState(0);
  const [weekly_discount, setWeeklyDiscount] = useState(0);
  const [monthly_discount, setMonthlyDiscount] = useState(0);
  const [currency_code, setCurrencyCode] = useState("USD");

  const [inputFrom, setInputFrom] = useState(0);


  const [currencyFrom, setCurrencyFrom] = useState("USD");

    const [value, setValue] = useState('');



    const [visible, setVisible] = useState(false);

    const [wkdPricing, setWkdPricing] = useState(false);

    const [secFee, setsecFee] = useState(false);


    const [showResults, setShowResults] = useState(false);


    


    const data = {
      PropertyId:PropertyId,
      cleaning_fee:cleaning_fee,
      guest_after:guest_after,
      guest_fee:guest_fee,
      security_fee:security_fee,
      price:price,
  
  
      weekend_price:weekend_price,
      weekly_discount:weekly_discount,
      monthly_discount:monthly_discount,
      currency_code:currency_code
    }
  
    
    const [isLoading,setLoading]=useState(false);



    const handleSelectFrom = (event) => {
      const { value } = event.target;
      setCurrencyFrom(value);
      setCurrencyCode(value);
    };

    const changeHandler = value => {
        setValue(value)
      }


      const AddPropertyPrice = () => {
        setLoading(true);
      
        axios.post(`https://onlinebookingus-app-test.herokuapp.com/propertyprices`, data).then((response) => {
      
      
              console.log("PROPERTY DETAILS ADDED "+response)
      
      
      
              setTimeout(() => {
                setLoading(false);
                toast.info('Information added successfully');
                // navigate.push('/add-property');
            }, 3000);
         
        }).catch((error) => {
          console.warn('Not good man :('+error);
      });
      
        
      };


      const Results = () => (
        <div id="results" className="search-results">
          Some Results
        </div>
      )


     const handleGuestFee =()=> {
      setShowResults({
        showResults: !showResults
        })
      }


      const handleChange=()=> {
        setVisible({
          visible: !visible
          })
        }


        const handleWkdPrice =()=> {
          setWkdPricing({
            wkdPricing: !wkdPricing
            })
          }


          const handleSecFee =()=> {
            setsecFee({
              secFee: !secFee
              })
            }
  


      const content = visible
      ? <div class="form-group col-6">
      
      <input type="text" data-extras="true" id="price-cleaning" 
       name="cleaning_fee" class="form-control" 

       onChange={(event) => {
        setCleaningFee(event.target.value);
      }}
       
       data-saving="additional-saving"/>
      
      </div>
      : null;


      const additional_guest_content = showResults
      ? <div class="form-row mt-4">
      <div class="form-group col-3">
      <label for="formGroupExampleInput">*</label>
      <input type="text" data-extras="true" id="price-cleaning" 
       name="add_guests" class="form-control"
       
       onChange={(event) => {
        setGuestFee(event.target.value);
      }}
       
       data-saving="additional-saving"/>

       </div>

       <div class="form-group col-3">

       <label for="formGroupExampleInput">For Each Guest Afetr</label>

       <input type="number" data-extras="true" id="price-cleaning" 
       name="add_guests" class="form-control" 

       onChange={(event) => {
        setGuestAfter(event.target.value);
      }}
       
      />

      </div>
      
      </div>
      : null;


      const security_deposit_content = secFee
      ? <div class="form-group col-6">
      
      <input type="text" data-extras="true" id="price-cleaning" 
       name="cleaning_fee" class="form-control" 

       onChange={(event) => {
        setSecurityFee(event.target.value);
      }}
       
       data-saving="additional-saving"/>
      
      </div>
      : null;

      const weekend_prising_content = wkdPricing
      ? <div class="form-group col-6">
      
      <input type="text" data-extras="true" id="price-cleaning" 
       name="cleaning_fee" class="form-control" 

       onChange={(event) => {
        setWeekendPrice(event.target.value);
      }}
       
       data-saving="additional-saving"/>
      
      </div>
      : null;


    return (
        <div className="form-group">

        <div class="form-group col-6">
        <label for="formGroupExampleInput">Night Price</label>
        <input type="number" class="form-control" 
         onChange={(event) => {
          setPrice(event.target.value);
        }} 
        id="formGroupExampleInput"
         placeholder="Enter Price per night"
         />
        </div>
  <div class="form-group col-6">
    <label for="exampleFormControlSelect1">Currency</label>
  
    <select class="form-control"  onChange={handleSelectFrom} value={currency_code}>
    {Object.keys(currencies).map((currency, index) => (
      <option value={currency} key={index}>
        {currency} - {currencies[currency].name}
      </option>
    ))}
  </select>


  </div>
 


  <hr class="row-space-top-6 row-space-5 set-long-term-prices"/>
  <div class="col-8">
  <h5>Long Term Prices</h5>
 
     
     <div class="form-group col-6">
        <label for="formGroupExampleInput">Weekly Discount Percent (%)</label>
        <input type="number" class="form-control" 
         onChange={(event) => {
          setWeeklyDiscount(event.target.value);
        }} 
        id="formGroupExampleInput"
         placeholder="Enter Price per night"
         />
        </div>


        <div class="form-group col-6">
        <label for="formGroupExampleInput">Monthly Discount Percent (%)</label>
        <input type="number" class="form-control" 
         onChange={(event) => {
          setMonthlyDiscount(event.target.value);
        }} 
        id="formGroupExampleInput"
         placeholder="Enter Price per night"
         />
        </div>


 
  

 
</div>

<hr class="row-space-top-6 row-space-5 set-long-term-prices"/>



 
  <div class="form-group col-8">
  <h5>Additional Pricing Options</h5>
  
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" checked={visible } 
  onChange={handleChange }
   id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Cleaning fee
  </label>

  { content }
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value=""
  checked={showResults } 
  onChange={handleGuestFee}
  id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
  Additional guests
  </label>

  { additional_guest_content }
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value=""



checked={secFee } 
onChange={handleSecFee}
id="flexCheckDefault"
/>
<label class="form-check-label"
  for="flexCheckDefault">
Security deposit
</label>

{ security_deposit_content }
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox"
checked={wkdPricing } 
onChange={handleWkdPrice}

value="" id="flexCheckChecked" />
<label class="form-check-label" for="flexCheckChecked">
Weekend pricing
</label>
{ weekend_prising_content }
</div>
  </div>
  <div class="button-row form-group col-6 d-flex mt-4">
  {!isLoading && <button type="submit" onClick={AddPropertyPrice} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>

  }
  {isLoading &&
    <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
  }
</div>

<ToastContainer />
            
        </div>
    )
}

export default PropertyPricingStep
