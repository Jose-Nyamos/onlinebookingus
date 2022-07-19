import React from 'react'

import Select from 'react-select';

export default ({onChange,options,value,className})=>{

    const defaulValue=(options,value)=>{
        return options ? options.find(option=>option.value===value):""
    }
    return (
        <div className={className}>
        <Select

        name='host_id'

        value={defaulValue(options,value)}
        onchange={value=>onChange(value)}
        options={options}

        />
        
        </div>
    )
}