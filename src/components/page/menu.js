import React from 'react';
import css from './menu.module.css';
export function Menu(){
    return (
        <div className={css.menu + ' on-big'} id="pizza-menu">
        <div><a href="/"><img className={css.icono} src="/assets/menu-logo.svg" /></a></div>
        <nav>
            <ul>
                <li><a className={css.link} href="/">Carta</a></li>
                <li><a className={css.link} href="/addpizzas">Añadir pizza</a></li>
                <li><a className={css.link} href="/ingredients">Ingredientes</a></li>
            </ul>
        </nav>
        <div>
            <div>Carrito</div>
            <div><a className={css.link} href="/login">Login</a></div>
            <div><a className={css.link} href="/sign">Registro</a></div>
        </div>
    </div>
    )
}