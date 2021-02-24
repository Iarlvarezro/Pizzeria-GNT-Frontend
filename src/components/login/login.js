import React from 'react';
import css from './login.module.css';


export function Login({ children }) {
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