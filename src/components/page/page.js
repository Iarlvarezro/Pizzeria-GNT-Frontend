import React from 'react';
import css from './page.module.css';

export function Page({children}){
    return (
        <div className={css.page}>
            <div className={css.menu + ' on-big'}>
                <div>Icono</div>
                <nav>
                    <ul>
                        <li><a className={css.link} href="/Pizzas">Carta</a></li>
                        <li><a className={css.link} href="/AddPizzas">Añadir pizza</a></li>
                        <li><a className={css.link} href="/ingredients">Ingredientes</a></li>
                    </ul>
                </nav>
                <div>
                    <div>Carrito</div>
                    <div><a className={css.link} href="/">Usuario</a></div>
                    <div><a className={css.link} href="/sign">Registro</a></div>
                </div>
            </div>
            <main>
               {children}
            </main>
        </div>
    )
}