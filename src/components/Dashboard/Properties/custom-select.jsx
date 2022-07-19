import React from "react";
import Select, { components } from "react-select";


const CustomSelect2 = ({ name,options }) => {
    return (
      <div>
      
      
      <Select 
      name={name}

      options={options} />
      
      </div>
    );
  };
  export default CustomSelect2;