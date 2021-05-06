import React from 'react';
import css from './anchor.module.css';

export function Anchor({href, text}){

    return (
             <a className={css.anchor} href={href}>{text}</a>
    )
}