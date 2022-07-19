import React, { useCallback,useState,useEffect,useContext } from 'react'

import './style.css';

import {useHistory, useParams } from "react-router-dom"

import axios from "axios";

import { Helmet } from 'react-helmet';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './stepperStyles.css';





export default function PropertyDescriptionStep() {

  let { id } = useParams();
  
   
  const [property_id, setProperty_id] = useState(`${id}`);
  const [name, setName] = useState("");
  const [private_name, setPrivate_name] = useState("");
  const [summary, setSummary] = useState("");

  const [url_name, setUrlName] = useState("");

  var names = ['Mbatha','Brian','Nour'];
 


  const data = {
      name: name,
      private_name:private_name,
      url_name:url_name 
  }

  const data_desc = {
    property_id:property_id,
    summary:summary
   
}

 
  const [isLoading,setLoading]=useState(false);


  
const AddPropertyDescription = () => {
  setLoading(true);

  axios.put(`https://onlinebookingus-app-test.herokuapp.com/property/updatepropnames/${id}`, data).then((response) => {


        console.log("UPDATES MANAGED IS "+response)



        setTimeout(() => {
          setLoading(false);
          toast.info('Information Added successfully');
          // navigate.push('/add-property');
      }, 3000);
   
  });


 


  axios.post("http://localhost:3001/propdescription",data_desc).then((response)=>{

    console.log("PROPERTY DESCRIPTION ADDED ",response);

   // navigate("/dashboard");
  
   
}).catch((error) => {
    console.warn('Not good man :(');
});


  
};
    return (
      <div className="form-group">

          <div class="multisteps-form__panel shadow p-4 rounded bg-white js-active" data-animation="scaleIn">

            <div class="multisteps-form__content">
              <input class="multisteps-form__input form-control" type="hidden" value={id} onChange={(event) => {
                setProperty_id(event.target.value);
              }} placeholder="bedrooms" />
              <div class="form-row mt-4">


              <div class="form-group col-md-6">
              <label for="inputAddress2">Property Name</label>
              <input type="text" class="form-control"  onChange={(event) => {
                setName(event.target.value);
              }}
               id="inputAddress2" placeholder="Property Name"/>
            </div>
                



                

                <div class="form-group col-md-6">
                <label for="inputAddress2">Private Name</label>
                <input type="text" class="form-control"  onChange={(event) => {
                  setPrivate_name(event.target.value);
                }}
                 id="inputAddress2" placeholder="private name"/>
              </div>
                 
               
              </div>

              <div class="form-row mt-4">
              <div class="form-group col-md-6">
              <label for="inputAddress2">Property url</label>
              <input type="text" class="form-control"  onChange={(event) => {
                setUrlName(event.target.value);
              }}
               id="inputAddress2" placeholder="property url"/>
            </div>
                <div class="col-12 col-sm-6">

                  <textarea cols={10} rows={10} class="multisteps-form__textarea form-control" onChange={(event) => {
                    setSummary(event.target.value);
                  }} placeholder="Summary">


                  </textarea>
                </div>

              </div>
              <div class="button-row d-flex mt-4">
                {!isLoading && <button type="submit" onClick={AddPropertyDescription} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>

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
