import React from 'react';
import { Input, Button } from '../../../components/';
import css from './sign-in.module.css'

export function SignIn() {
    return (
        <section className={css.section}>
                <h1>Inicia sesión</h1>
                <h2>Y pide tu pizza favorita</h2>
                <Input placeholder="Nombre" />
                <Input placeholder="Contraseña" />
                <Input type="checkbox" label="Recordarme"/>
                <p>¿Olvidaste tus datos?</p>
                <Button><a className={css.anchor} href="/Pizzas">Empezar Pedido</a></Button>
        </section>

    )
}