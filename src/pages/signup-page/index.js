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
        await apiCall(UserService.add,data)
    }
    return (
        <Login>
            <section className={css.signup}>
                <div>
                    <h1>¿Quieres registrarte?</h1>
                </div>
                <div className={css.signup}>
                    <div>
                        <Form onSubmit={handlerSubmit(submit)}>
                            <Input placeholder="Tu email"  ref={register(frm.email)} />
                            <div>
                                <Input placeholder="Nombre" ref={register(frm.name)}/>
                            </div>
                            <Input placeholder="Apellidos"  ref={register(frm.surname)} />
                            <div>
                                <Input type="password" placeholder="Password"  ref={register(frm.password)} />
                            </div>
                            <Input label="He leido y acepto la Política de Privacidad" type="checkbox" />
                            <Input label="Si, acepto recibir comunicaciones comerciales y ofertas personalizadas según mi perfil" type="checkbox" />
                            <Button type="submit">Enviar</Button>
                        </Form>
                    </div>
                </div>
            </section>
        </Login>
    )
}
