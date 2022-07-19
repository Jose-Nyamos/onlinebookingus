import React from 'react'

import {Route, Redirect} from 'react-router-dom'

import { useContext } from 'react';

import { AuthContext } from './helpers/AuthContext'

function ProtectedRoutes({status:status,component: Component,...rest}) {
  const {authState} = useContext(AuthContext);

  status=authState.status


  return (
    <Route
    {...rest}
    render={(props) => status === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
  />
  )
}

export default ProtectedRoutes


//  return (
//     <Route
//     {...rest}
//     render={(props) =>{

//       if(authState){
//         return <Component/>;
//       }
//       else{
//         return (
//           <Redirect to={{pathname: '/', state: {from: props.location} }} />
//         );
//       }
//       }}

//       />
//      );