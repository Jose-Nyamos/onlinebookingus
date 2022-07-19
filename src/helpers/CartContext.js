
import { createContext, useContext, useReducer, useState } from "react";


const Cart=createContext()


export const CartContext = ({ children }) => {

    const{bookedproperties,setBookedProperties}=useState([])




    return (
        <Cart.Provider value={{bookedproperties,setBookedProperties}}>
          {
            children
          }
        </Cart.Provider>
      );

}

export default Context;