import React from 'react';
import css from './page.module.css';

export function Page({children}){
    return (
        <div className={css.page}>
            <div className={css.menu + ' on-big'}>
                <div>Icono</div>
                <nav>
                    <ul>
                        <li><a className={css.link} href="/">Carta</a></li>
                        <li><a className={css.link} href="/pizza/add">Añadir pizza</a></li>
                        <li><a className={css.link} href="/ingredients">Ingredientes</a></li>
                    </ul>
                </nav>
                <div>
                    <div>Carrito</div>
                    <div>Usuario</div>
                </div>
            </div>
            <main>
               {children}
            </main>
        </div>
    )
}