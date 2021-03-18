import React from 'react';
import css from './page.module.css';

export function Page({children}){
    return (
        <div className={css.page + ' mobile'}>
            <div className={css.menu + ' on-big'}>
                <div><a href="/"><img className={css.icono} src="https://cdn.zeplin.io/60201cf094ec8f114297ae4e/assets/082191d2-6d83-4db3-b3e5-fe726d0e1c23.svg" /></a></div>
                <nav>
                    <ul>
                        <li><a className={css.link} href="/pizzas">Carta</a></li>
                        <li><a className={css.link} href="/addpizzas">Añadir pizza</a></li>
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