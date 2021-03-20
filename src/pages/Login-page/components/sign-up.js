import React from 'react';
import { Button, Anchor } from '../../../components/'
import css from './sign-up.module.css'

export function SignUp() {
    return (
        <>
            <section>
                <div className={css.rss}>
                    <div className={css.rss_separator}></div>
                    <h2 className={css.h2}>o con tus RRSS</h2>
                    <div className={css.rss_separator}></div>
                </div>
                
                <Button className={css.google}>
                    <div className={css.google_content}>
                        <img src="/assets/google-icon.svg" />
                        Google
                    </div>
                </Button>
            </section>
            <section >
                <h2 className={css.h2}>¿Aún no estás registrado?</h2>
                <a className={css.register} href="/signup">Registrarme</a>
            </section>
        </>


    )
}