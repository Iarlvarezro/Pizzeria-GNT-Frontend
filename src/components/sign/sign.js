import React from 'react';
import css from './sign.module.css';


export function Sign({ children }) {
    return (
        <div className={css.page}>
            <div className={css.menu + ' on-big'}>
                <div className={css.icono}>Icono</div>
            </div>
            <main className={css.main}>
                {children}
            </main>
        </div>
    )
}