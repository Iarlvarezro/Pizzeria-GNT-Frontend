import React from 'react';
import { Input, Login, Butt } from '../../components'
// import css from './index.module.css'
import '../../styles';


export default function PageLogin() {
    return (
        <Login>
            <div>
                <h1>Inicia sesión</h1>
                <h2>Y pide tu pizza favorita</h2>
            </div>
            <div>
                <Input placeholder="Nombre" />
                <Input placeholder="Contraseña" />
                <Input label="Recordarme" type="checkbox" />
                <p>¿Olvidaste tus datos?</p>
                <Butt name="Empezar pedido" />
            </div>
            <div>
                <p>o con tus RRSS</p>
                <Butt name="Google" />
            </div>
            <div>
                <h2>¿Aún no estás registrado?</h2>
                <Butt name="Registrarme"/>
            </div>
        </Login>
    )
}

PageLogin.route = '/login'