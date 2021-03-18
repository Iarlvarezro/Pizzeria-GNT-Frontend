import React from 'react';
import css from './anchor.module.css';

export function Anchor(props){
    const {name} = props;
    return (
        <section className={css.button}>
             <input type="hidden" value={props.id}></input>
             <a >{name}</a>
        </section>
       
    )
}