import React from 'react';
import { Input, Login, Butt } from '../../components'
// import css from './index.module.css'
import '../../styles';


export default function SignUp() {
    return (
        <Login>
            <div>
                <h1>¿Quieres registrarte?</h1>
            </div>
            <div>
                <Input placeholder="Tu email" />
                <Input placeholder="Nombre" />
                <Input placeholder="Apellidos" />
                <Input placeholder="Password" />
                <Input label="He leido y acepto la Política de Privacidad" type="checkbox" />
                <Input label="Si, acepto recibir comunicaciones comerciales y ofertas personalizadas según mi perfil" type="checkbox" />
                <Butt name="Empezar pedido" />
            </div>
        </Login>
    )
}

SignUp.route = '/sign-up'
