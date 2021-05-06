import React from 'react'
import { Button, Form, FormGroup,FormControl,VALIDATORS,useForm } from '../../../../components'
import {TextArea} from './textarea'
import { SelectForm } from './select-form/select-form'
import {apiCall} from '../../../../api/api-call'
import {PizzaService} from '../../../../services/pizza-service'
import css from './addcomment.module.css'


export function AddComment({id}) {
    const frm = new FormGroup({
        'id':new FormControl(),
        'text':new FormControl(),
        'score': new FormControl()
    })
    const {register,handlerSubmit} = useForm(frm);
    const submit = async (data)=>{
        await apiCall(PizzaService.addComment,data);
    }
    return (
        <section className={css.list}>
            <h2>Añade tu Comentario</h2>
            <Form onSubmit={handlerSubmit(submit)}>
                <input type="hidden" value={id} ref={register(frm.id)}/>
                <SelectForm ref={register(frm.score)}/>
                <TextArea ref={register(frm.text)} />
                <Button className="fill_width" type="submit">Añadir</Button>
            </Form>
        </section>
    )
}