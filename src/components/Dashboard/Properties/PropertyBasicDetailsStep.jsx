import React, { useCallback,useState,useEffect,useContext } from 'react'

import './style.css';

import {useHistory, useParams } from "react-router-dom"

import axios from "axios";

import { Helmet } from 'react-helmet';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import './stepperStyles.css';

import './main.scss';

function PropertyBasicDetailsStep() {

    let { id } = useParams();

    const [propId, setPropId] = useState(`${id}`);
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [beds, setBeds] = useState("");
    const [bed_type, setbed_type] = useState("");


      var names = [1,2,3,4,5,6,7,8,9,10,11,12];

      var prop_bathrooms = [0.5,1.5,2,2.5,3,,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8];



    const data = {
        bedrooms: bedrooms,
        bathrooms:bathrooms,
        beds: beds,
        bed_type: bed_type
       
    }
    const [isLoading,setLoading]=useState(false);


    
  const AddBasicDetails = () => {
    setLoading(true);

    axios.put(`https://onlinebookingus-app-test.herokuapp.com/property/update/${id}`, data).then((response) => {


         console.log("UPDATES MANAGED IS "+response.data)


          setTimeout(() => {
            setLoading(false);
            toast.info('Information Added successfully');
            // navigate.push('/add-property');
        }, 2000);
     
    }).catch((error) => {
        console.warn('Not good man :('+error);
    });
    
  };


  return (

    <div className="form-group">


        <div class="multisteps-form__panel shadow p-4 rounded bg-white js-active" data-animation="scaleIn">
                
                <div class="multisteps-form__content">

                <input class="multisteps-form__input form-control" type="text" value={id} onChange={(event) => {
                    setPropId(event.target.value);
              }} placeholder="id" />
               
                  
                
                  <div class="form-row mt-4">
                  <div class="form-group col-md-6">
                  <label for="inputState">Bedrooms</label>
                  <select id="inputState"

                  onChange={(event) => {
                    setBedrooms(event.target.value);
                  }}
                  
                  class="custom-select mr-sm-2"
                 >
                    <option selected>Choose...</option>
                    {names.map(function(name, index){
                   
                      return <option value={ index }>{name}</option>;
                    })}
                   
                  </select>
                </div>
                   
                    <div class="form-group col-md-6">
                    <label for="inputState">Bathrooms</label>
                    <select id="inputState"

                    onChange={(event) => {
                      setBathrooms(event.target.value);
                    }}
                    
                    class="custom-select mr-sm-2"
                   >
                      <option selected>Choose...</option>
                      {prop_bathrooms.map(function(name, index){
                     
                        return <option value={ index }>{name}</option>;
                      })}
                     
                    </select>
                  </div>
                    
                   
                  </div>
                  <div class="form-row mt-4">


                  <div class="form-group col-md-6">
                    <label for="inputState">Beds</label>
                    <select id="inputState"

                    onChange={(event) => {
                      setBeds(event.target.value);
                    }}
                    
                    class="custom-select mr-sm-2"
                   >
                      <option selected>Choose...</option>
                      {names.map(function(name, index){
                     
                        return <option value={ index }>{name}</option>;
                      })}
                     
                    </select>
                  </div>

                  
                    <div class="col-12 col-sm-6 mt-4 mt-sm-0">
                    <select id="basics-select-bed_type" name="bed_type" 
                    onChange={(event) => {
                        setbed_type(event.target.value);
                      }}
                    
                    multiple="multiple" data-saving="basics1"  class="form-control" required>

                    <option value=''> </option>
              <option value='Queen'>Queen</option>
              <option value='King'>King</option>


                    </select>
                    </div>
                  </div>
               
                  <div class="button-row d-flex mt-4">
            
                  {!isLoading && <button type="submit" onClick={AddBasicDetails} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>

                } 
                {isLoading &&
                   <button type="submit" class="btn btn-primary ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-spinner fa-spin"></i>Saving Infor</button>
                }
                  
                  </div>
                </div>
                <ToastContainer />
              </div>

       
        </div>





  )
  
}

export default PropertyBasicDetailsStep;
