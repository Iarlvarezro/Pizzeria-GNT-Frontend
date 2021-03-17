import React from 'react';
import { Input, Login, Button } from '../../components'
import css from './index.module.css'
import '../../styles';

export default function SignUp() {
    return (
        <Login>
            <section className={css.signup}>
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
                        <Button name="Empezar pedido" />
                    </div>
                </div>
            </section>
        </Login>
    )
}
