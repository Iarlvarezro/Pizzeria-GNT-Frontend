import React from 'react';

import css from './input.module.css'

export function Input(props) {
    const {label, ...restProp} = props;
    return(
        <div className={css.formControl}>
            <label className={css.label}>{label}</label>
            <input {...restProp} className={css.input}/>
        </div>
    )
    
}



