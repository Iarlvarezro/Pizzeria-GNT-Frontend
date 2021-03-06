import React from 'react';
import { Input, Sign, Butt } from '../../components'
import css from './index.module.css'
import '../../styles';

export default function SignUp() {
    return (
        <Login>
            <div className={css.signup}>

                <div>
                    <h1>¿Quieres registrarte?</h1>
                </div>
                <div className={css.signup}>
                    <div>
                        <Input placeholder="Tu email" />
                        <div>
                            <Input placeholder="Nombre" />
                        </div>
                        <Input placeholder="Apellidos" />
                        <div>
                            <Input placeholder="Password" />
                        </div>
                        <Input label="He leido y acepto la Política de Privacidad" type="checkbox" />
                        <Input label="Si, acepto recibir comunicaciones comerciales y ofertas personalizadas según mi perfil" type="checkbox" />
                        <Butt name="Empezar pedido" />
                    </div>
                </div>

            </div>
        </Login>
    )
}

SignUp.route = '/sign'
SignUp.getData = async function (params, query) {
    const response = await fetch('http://localhost:3000/sign');
    return { sign: await response.json() }
}