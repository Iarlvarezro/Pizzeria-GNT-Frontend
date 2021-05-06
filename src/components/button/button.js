import React from 'react';
import css from './button.module.css';



export function Button(props) {
    const {children, className='', ...restProps} = props;
    return (
        <button className = {css.button + ' ' + className} {...restProps}>{children}</button>
    )
}