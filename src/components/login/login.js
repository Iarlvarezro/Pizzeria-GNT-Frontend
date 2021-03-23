import React from 'react';
import css from './login.module.css';


export function Login({ children }) {
    return (
        <div className={css.page}>
            <div className={css.menu + ' on-big'}>
                <div className={css.icono}><img alt="" width="200" height="330" src="/assets/logo-signup.svg" /></div>
            </div>
            <main className={css.main}>
                {children}
            </main>
        </div>
    )
}