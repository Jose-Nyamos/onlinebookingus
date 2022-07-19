import React, { useCallback,useState,useEffect,useContext } from 'react'


import Axios from 'axios';


import * as Yup from 'yup';
import {useHistory, useParams } from "react-router-dom"
import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const userData = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "Arti" },
  { name: "rahul" }
];


function AmenitiesStep() {
  let { id } = useParams();
  
   
  const [property_id, setProperty_id] = useState(`${id}`);

  const [amenities,setAmenities]=useState([]);


  const [amenitiesList, setAmenitiesList] = useState([]);

  const [peopleInfo, setPeopleInfo] = useState([]);


  const [users, setUsers] = useState([]);


  const [nmx, setNms] = useState(0);
  const [total, setTotal] = useState(0);
  

 const [isChecked, setChecked] = useState(null);

 const [value, setValue] = useState([]);

 const [state, setState] = useState({
  hooks: true
})


const [checkedState, setCheckedState] = useState(
  new Array(amenities.length).fill(false)
);

  

  const [isLoading,setLoading]=useState(false);


 


















  function handleChange2(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }






  // function handleChange(evt) {
  //   const value =
  //     evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
  //   setAmenities({
  //     ...amenities,
  //     [evt.target.name]: value
  //   });
  // }


 const  handleInputChange=(event) =>{
    const target = event.target;
    var value = target.value;
    if(target.checked){
      amenities[value] = value;
      // setAmenities(amenities[value] = value)
     
    }else{
      amenities.splice(value, 1);
      // setAmenities( amenities.splice(value, 1))
    
    }
    console.log("SELECTED AMENITIES"+ amenities)
    }


  const toggleHandler = (item) => () => {
    setAmenities((state) => ({
      ...state,
      [item.id]: state[item.id]
        ? null
        : {
            id: item.id,
            title: item.title
          }
    }));
  };


  useEffect(()=>{

    Axios.get("https://onlinebookingus-app-test.herokuapp.com/amenities/getAmenities").then((response) => {
        setAmenitiesList(response.data);
        setAmenities(response.data);
      });

},[]);



const handleOnChange = (position) => {
  const updatedCheckedState = checkedState.map((item, id) =>
    id === position ? !item : item,



   

  );

  setCheckedState(updatedCheckedState);


  const testT = updatedCheckedState.reduce(
    (currentState, id) => {
      if (currentState === true) {
        console.log("The current State is "+currentState);
         console.log("TOPPINGS INDEX "+checkedState);

        // console.log("ITEM NAME "+toppings[index].name);

        // setValue([...value,toppings[index].name]);

        return testT;

      }
      return testT;
    },
    0
  );
 

 
  console.log("Checked State "+position);

 // console.log("Title  "+id);


  setValue([...value,position]);

  let arr=amenities.map((amenity) => value[amenity.id]);


  console.log("MY ARRAY"+value);
 
 
 // arr.push(position);

  

  console.log("ARRAY IN JSON fORM "+JSON.stringify(value));

  
};


useEffect(() => {
  

  setAmenities(
    amenities.map(d => {
      return {
        select: false,
        title: d.title
        
      };
    })
  );

  
  let arr = [];
    for (var key in amenities) {
      if(amenities[key] === true) {
        arr.push(key);
      }
    }
    console.log("MY Array"+arr);

}, []);




const AddAmenitiesDetails = () => {



 // let arr=value.map((amenity) => amenity.id);
   
    let data = {
      amenities: value.toString()
    };



  setLoading(true);

  Axios.put(`https://onlinebookingus-app-test.herokuapp.com/property/updateamenities/${id}`, data).then((response) => {


        console.log("UPDATES MANAGED IS "+response.data);

        console.log("PASSED DATA IS "+data)


        setTimeout(() => {
          setLoading(false);
          toast.info('Information Added successfully');
          // navigate.push('/add-property');
      }, 1500);
   
  });
};






const testUsers = () => {

 // console.log("My Amenities"+amenities);

  console.log("MY USERS"+users);

  console.log("JSON DATA"+JSON.stringify(users));

  let arr = users.map((user) => user.name);

  console.log("USERS ARRAY"+arr);


  let arr_2=amenities.map((amenity) => amenity.id);


  console.log("AMENITIES LIST ARRAY"+arr_2);

  console.log("AMENITIES LIST ARRAY"+arr_2);

  var newArray = arr_2.toString();
console.log("TO STRING"+newArray); 

console.log("MY ARRAY"+value);



 


}


    return (
      <div className="form-group">

        <div class="multisteps-form__panel  shadow p-4 rounded bg-white js-active" data-animation="scaleIn">
              
                <div class="multisteps-form__content">
                 


                  <div class="form-row mt-4">
               
                  <div class="col-8 col-sm-6">
                  {amenities.map((d,key) => {
                    return (
                      <div class="form-check">

                      <input
                      type="checkbox"
                      id={`custom-checkbox-${d.id}`}
                      name={d.title}
                      value={d.title}
                      checked={checkedState[d.id]}
                      onChange={() => handleOnChange(d.id)}
                    />
                      
                      <label class="form-check-label" for="defaultCheck1">
                       {d.title}
                      </label>
                    
                    </div>

                    );
                  })}
                  </div>


 
                 
                </div>

              
                 
                  <div class="button-row d-flex mt-4">
                   {/*<button class="btn btn-primary ml-auto js-btn-next" onClick={testUsers} type="button" title="Save">Save</button>*/}

                    {!isLoading && <button type="submit" onClick={AddAmenitiesDetails} class="btn btn-primary ml-auto js-btn-next" title="Save" >Save</button>
      
                  } 
                  {isLoading &&
                     <button type="submit" class="btn btn-success ml-auto js-btn-next" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                  }
                    
                  </div>
                </div>
              </div>

            
        </div>
    )
}

export default AmenitiesStep
