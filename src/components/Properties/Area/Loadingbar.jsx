import React,{useRef,useState,useEffect } from 'react';

import LoadingBar from 'react-top-loading-bar';

function Loadingbar() {

    const ref = useRef(null);

    useEffect(()=>{

        ref.current.continuousStart();
    
    },[]);
    
  return(

    <div>


    <LoadingBar color="#f11946" ref={ref} shadow={true} />
                 
                  
    
    
    </div>

  );
  
}

export default Loadingbar;
