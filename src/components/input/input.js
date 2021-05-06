import React from 'react';

import css from './input.module.css'

function Control(props,ref) {
    const {label, ...restProp} = props;
    if (!label) {
        return (
            <div className={css.formControl}>
            <input {...restProp} className={css.input} ref={ref}/>
        </div>
        )
    } else {
        return(
        <div className={css.formControl}>
            <label className={css.label}>{label}</label>
            <input {...restProp} className={css.input} ref={ref}/>
        </div>
        )
    }

    
}

const Input = React.forwardRef(Control)
export {
    Input
}


