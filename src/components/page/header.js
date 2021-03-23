import React from 'react';
import { MenuButton } from './menu-button';
import css from './header.module.css';

export function Header({open}){
    return (
        <header className={css.header + " on-small"}>
            <MenuButton onClick={open}/>
            <img className={css.logo} src="/assets/logo-responsive.svg" />
            <img src="/assets/icono-carrito.svg"/>
        </header>
    )
}