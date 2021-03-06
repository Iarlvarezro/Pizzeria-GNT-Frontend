import React, { Children } from 'react';
import css from './button.module.css';



export function Butt(props) {
    const {name, ...restProps} = props;
    return (
        <button className = {css.button}>{name}</button>
    )
}