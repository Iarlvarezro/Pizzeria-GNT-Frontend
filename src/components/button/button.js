import React from 'react';
import css from './button.module.css';



export function Button(props) {
    const {name, ...restProps} = props;
    return (
        <button className = {css.button}>{name}</button>
    )
}