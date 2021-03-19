import React from 'react';
import { Input, Button, Form, FormGroup, FormControl, VALIDATORS,useForm } from '../../../components/';
import {apiCall} from '../../../api/api-call'
import {UserService} from '../../../services/user-service'
import css from './sign-in.module.css'

export function SignIn() {
    const frm = new FormGroup({
        'email':new FormControl(),
        'password':new FormControl()
    })
    const {register, handlerSubmit} = useForm(frm)
    const submit = async (data)=>{
        await apiCall(UserService.login,data)
    }
    return (
        <section className={css.section}>
            <h1>Inicia sesión</h1>
            <h2>Y pide tu pizza favorita</h2>
            <Form onSubmit={handlerSubmit(submit)}>
                <Input placeholder="Email" ref={register(frm.email)} />
                <Input type="password" placeholder="Contraseña" ref={register(frm.password)} />
                <Input type="checkbox" label="Recordarme" />
                <p>¿Olvidaste tus datos?</p>
                <Button type="submit">Empezar Pedido</Button>
            </Form>
        </section>

    )
}