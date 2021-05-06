import React from 'react';
import { Input, Login, Button, Form, FormGroup, FormControl, useForm, VALIDATORS } from '../../components'
import css from './index.module.css'
import {UserService} from '../../services/user-service-client'
import {apiCall} from '../../api/api'
import '../../styles';

export default function SignUp() {
    const frm = new FormGroup({
        'email': new FormControl(),
        'name': new FormControl(),
        'surname': new FormControl(),
        'password': new FormControl()
    });
    const { handlerSubmit, register } = useForm(frm)
    const submit = async (data)=>{
       const {location} = await apiCall(UserService.add,data)
       window.location.replace(location)
    }
    return (
        <Login>
            <section className={css.signup}>
                <h1>¿Quieres registrarte?</h1>
                <div className={css.signup}>
                        <Form onSubmit={handlerSubmit(submit)}>
                            <Input placeholder="Tu email"  ref={register(frm.email)} />
                            <Input placeholder="Nombre" ref={register(frm.name)}/>
                            <Input placeholder="Apellidos"  ref={register(frm.surname)} />
                            <Input type="password" placeholder="Password"  ref={register(frm.password)} />
                            <Button className={css.button} type="submit">Enviar</Button>
                        </Form>
                </div>
            </section>
        </Login>
    )
}
