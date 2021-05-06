import React from 'react';
import css from './menu.module.css';
export function Menu(){
    return (
        <nav className={css.menu + ' on-big'} id="pizza-menu">
                <div><a href="/"><img alt="" width="92" height="154" className={css.icono} src="/assets/menu-logo.svg" />
                    <span className="visually-hidden">Inicio</span>
                </a></div>
                <ul className={css.section}>
                    <li><a className={css.link} href="/">Carta</a></li>
                    <li><a className={css.link} href="/addpizzas">Añadir pizza</a></li>
                    <li><a className={css.link} href="/ingredients">Ingredientes</a></li>
                </ul>
                <ul className={css.section}>
                    <li>Carrito</li>
                    <li><a className={css.link} href="/login">Login</a></li>
                    <li><a className={css.link} href="/signup">Registro</a></li>
                </ul>
        </nav>
    )
}