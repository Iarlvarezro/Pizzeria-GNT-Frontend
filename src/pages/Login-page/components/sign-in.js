import React from 'react';
import { Input, Button } from '../../../components/'

export function SignIn() {
    return (
        <section>
            <div>
                <h1>Inicia sesión</h1>
                <h2>Y pide tu pizza favorita</h2>
            </div>
            <div>
                <Input placeholder="Nombre" />
                <Input placeholder="Contraseña" />
                <Input label="Recordarme" type="checkbox" />
                <div>¿Olvidaste tus datos?</div>
                <Button>Empezar Pedido</Button>
            </div>
        </section>

    )
}