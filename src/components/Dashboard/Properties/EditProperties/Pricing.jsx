import React, { useState, useEffect } from 'react';
import { Link, useHistory,useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';


import {Helmet} from 'react-helmet'

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import currencies from "../../Properties/utils/commonCurrency.json";


const Pricing = () => {

    let {id}=useParams()


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

  const [pricing_id, setPricing_id] = useState(0);

  const [inputFrom, setInputFrom] = useState(0);


  const [currencyFrom, setCurrencyFrom] = useState("USD");

    const [value, setValue] = useState('');



    const [visible, setVisible] = useState(false);

    const [wkdPricing, setWkdPricing] = useState(false);

    const [secFee, setsecFee] = useState(false);


    const [showResults, setShowResults] = useState(false);

    const history = useHistory();


    


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


    useEffect(()=>{

        axios.get(`https://onlinebookingus-app-test.herokuapp.com/propertyprices/byPropertyId/${id}`).then((response) => {
            //setpropertyList(response.data);
            // setBedrooms(response.data.bedrooms)
            setPrice(response.data.price)
            setCleaningFee(response.data.cleaning_fee)
            setCurrencyCode(response.data.currency_code)
            setWeeklyDiscount(response.data.weekly_discount)
            setPropertyId(response.data.PropertyId)
            setWeekendPrice(response.data.weekend_price)
            setMonthlyDiscount(response.data.monthly_discount)
      
      
            setWeekendPrice(response.data.weekend_price)

            setPricing_id(response.data.id)
      
            console.log("THE PRICING ID IS "+pricing_id)
      
          });
      
      },[]);



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
      
        axios.put(`https://onlinebookingus-app-test.herokuapp.com/propertyprices/updatePricing/${id}`, data).then((response) => {
      
      
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
    <div>
    <Helmet>
    <link rel="stylesheet" href="/dist-assets/css/themes/lite-purple.min.css" />
    <link rel="stylesheet" href="/dist-assets/css/plugins/perfect-scrollbar.min.css" />

    </Helmet>
    <div class='app-admin-wrap layout-sidebar-large'>
        <Topbar />
        <Sidebar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
            <div class="row">
								<div class="col-4">
									<h3>
                                 List Your Spacing	
									<small>List your space</small>
									</h3>

								</div>
								<div class="col-5"></div>

								<div class="col-2">
									<div class="float-lg-right">
									<ol class='breadcrumb'>
										<li>
											<Link to='/dashboard'>
												<i class='fa fa-dashboard'></i> Home
											</Link>
										</li>
							        </ol>

									</div>
									
								

								</div>

							</div>
                            <div className="row">
                            <div class="col-md-4 mb-4">
                            <div class="card text-left">
                                <div class="card-body">
                                    <h4 class="card-title mb-2">PROPERTY SETTINGS</h4>
                                    <div class="list-group">
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/basicdetails/${id}`)} type="button">Basic</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/description/${id}`)} type="button">Description</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/location/${id}`)} type="button">Location</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/amenitylist/${id}`)} type="button">Amenities</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/photos/${id}`)} type="button">Photos</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/pricing/${id}`)} type="button">Pricing</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push(`/bookinglist/${id}`)} type="button">Booking</button>
                                    <button class="list-group-item list-group-item-action" onClick ={() => history.push("#")} type="button">Calendar</button>
                    

                                    </div>
                                </div>
                            </div>                           
                        </div>
            <div className="col-md-8">
            <div class="card p-4">        
            <div className="form-group">

            <div class="form-group col-6">
            <label for="formGroupExampleInput">Night Price</label>
            <input type="number" class="form-control" 
             onChange={(event) => {
              setPrice(event.target.value);
            }} 

            value={price}
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

            value={weekly_discount}
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

            value={monthly_discount}
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
      
    </div>
    
    <ToastContainer />
                
            </div>
        

                    <div class="row p-4">
                        <div class="col-md-2 col-sm-6 col-xs-6 l-pad-none text-left">
                            <Link data-prevent-default="" to="/amenitylist" class="btn btn-large btn-primary">Back</Link>
                        </div>
                         <div className="col-8"></div>
                        <div class="col-md-2 float-right">
                        {!isLoading && <button type="submit" onClick={AddPropertyPrice} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>
    
      }
      {isLoading &&
        <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
      }
                        </div>
                    
                    </div>
                    </div>

                                </div>

                            </div>
                   

        

              
    
              </div>
             </div>
        </div>

        <Helmet>
        <script src="/dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
        <script src="/dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
        <script src="/dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
        <script src="/dist-assets/js/scripts/script.min.js"></script>
        <script src="/dist-assets/js/scripts/sidebar.large.script.min.js"></script>
        <script src="/dist-assets/js/scripts/sidebar.script.min.js"></script>
        <script src="/dist-assets/js/plugins/echarts.min.js"></script>
        <script src="/dist-assets/js/scripts/echart.options.min.js"></script>
        <script src="/dist-assets/js/scripts/dashboard.v1.script.min.js"></script>
      </Helmet>
    </div>
  )
}

export default Pricing
