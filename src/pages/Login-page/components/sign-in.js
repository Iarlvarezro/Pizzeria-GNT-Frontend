import React from 'react';
import { Input, Button } from '../../../components/'

export function SignIn() {
    return (
        <section>
                <h1>Inicia sesión</h1>
                <h2>Y pide tu pizza favorita</h2>
                <Input placeholder="Nombre" />
                <Input placeholder="Contraseña" />
                <Input label="Recordarme" type="checkbox" />
                <p>¿Olvidaste tus datos?</p>
                <Button><a href="/Pizzas">Empezar Pedido</a></Button>
        </section>

    )
}