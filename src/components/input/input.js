import React from 'react';

export function Input(props) {
    const {label, ...restProp} = props;
    return(
        <div>
            <label>{label}</label>
            <input {...restProp}/>
        </div>
    )
    
}



