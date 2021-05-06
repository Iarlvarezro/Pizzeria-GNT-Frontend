import React from 'react';
import { Input, Button, Form, FormGroup, FormControl, VALIDATORS,useForm } from '../../../components/';
import {apiCall} from '../../../api/api-call'
import {UserService} from '../../../services/user-service-client'
import css from './sign-in.module.css'

export function SignIn() {
    const frm = new FormGroup({
        'email':new FormControl(),
        'password':new FormControl()
    })
    const {register, handlerSubmit} = useForm(frm)
    const submit = async (data)=>{
       const {location} = await apiCall(UserService.login,data);
       window.location.replace(location);
    }
    return (
        <section className={css.section}>
            <h2 className={css.h2}>Y pide tu pizza favorita</h2>
            <Form onSubmit={handlerSubmit(submit)}>
                <Input placeholder="Email" ref={register(frm.email)} />
                <Input type="password" placeholder="Contraseña" ref={register(frm.password)} />
                <Button className={css.button} type="submit">Empezar Pedido</Button>
            </Form>
        </section>

    )
}