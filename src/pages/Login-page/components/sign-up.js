import React from 'react';
import { Button,Form } from '../../../components/'
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
                <Form action="/login/google" method="POST">
                    <Button className={css.google}>
                        <div className={css.google_content}>
                            <img alt="" src="/assets/google-icon.svg" />
                        Google
                    </div>
                    </Button>
                </Form>
            </section>
            <section >
                <h2 className={css.h2}>¿Aún no estás registrado?</h2>
                <a className={css.register} href="/signup">Registrarme</a>
            </section>
        </>


    )
}