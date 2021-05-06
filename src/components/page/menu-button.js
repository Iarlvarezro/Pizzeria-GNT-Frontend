import React from 'react';
import css from './menu-button.module.css';
import { PageService } from './page-service';

export function MenuButton(){
    function onClick(){
        PageService.open();
    }
    return (
        <button className={css.button} onClick={onClick}>
            <img className={css.image} width="16" height="16" src="/assets/menu-button.svg"></img>
            <span className="visually-hidden">Menu</span>
        </button>
    )
}
