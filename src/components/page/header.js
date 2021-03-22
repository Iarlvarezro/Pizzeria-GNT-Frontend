import React from 'react';
import { MenuButton } from './menu-button';
import css from './header.module.css';

export function Header({open}){
    return (
        <header className={css.header + " on-small"}>
            <MenuButton onClick={open}/>
            <span>Logo</span>
            <span>L</span>
            <span>C</span>
        </header>
    )
}