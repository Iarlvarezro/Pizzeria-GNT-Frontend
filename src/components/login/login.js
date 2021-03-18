import React from 'react';
import css from './login.module.css';


export function Login({ children }) {
    return (
        <div className={css.page}>
            <div className={css.menu + ' on-big'}>
                <div className={css.icono}><img src="https://cdn.zeplin.io/60201cf094ec8f114297ae4e/assets/082191d2-6d83-4db3-b3e5-fe726d0e1c23.svg" /></div>
            </div>
            <main className={css.main}>
                {children}
            </main>
        </div>
    )
}