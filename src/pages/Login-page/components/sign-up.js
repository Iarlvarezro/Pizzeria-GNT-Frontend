import React from 'react';
import { Button, Anchor } from '../../../components/'
import css from './sign-up.module.css'

export function SignUp() {
    return (
        <section>
                <p>o con tus RRSS</p>
                <a href="" className={css.google}><img src="https://cdn.zeplin.io/60201cf094ec8f114297ae4e/assets/fd595958-70bc-436e-865a-c1a2167da966.svg" />oogle</a>
                <h2>¿Aún no estás registrado?</h2>
                <Button>Registrarme</Button>
        </section>
        
    )
}