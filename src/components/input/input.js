import React from 'react';

import css from './input.module.css'

export function Input(props) {
    const {label, ...restProp} = props;
    return(
        <div>
            <label>{label}</label>
            <input {...restProp}/>
        </div>
    )
    
}



