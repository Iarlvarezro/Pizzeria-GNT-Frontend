import React from 'react';
import { Input, Login, Button } from '../../components'
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
                <Button name="Empezar pedido" />
            </div>
            <div>
                <p>o con tus RRSS</p>
                <Button name="Google" />
            </div>
            <div>
                <h2>¿Aún no estás registrado?</h2>
                <Button name="Registrarme"/>
            </div>
        </Login>
    )
}

