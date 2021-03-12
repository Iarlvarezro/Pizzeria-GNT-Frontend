import React from 'react';
import css from './button.module.css';



export function Button(props) {
    const {children, ...restProps} = props;
    return (
        <button className = {css.button} {...restProps}>{children}</button>
    )
}