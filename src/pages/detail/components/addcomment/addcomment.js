import React from 'react'
import { Button, Form } from '../../../../components'
import {TextArea} from './textarea'
import { SelectForm } from './select-form/select-form'
import css from './addcomment.module.css'


export function AddComment({id}) {
    return (
        <section className={css.list}>
            <h2>Añade tu Comentario</h2>
            <Form>
                <input type="hidden" value={id}/>
                <SelectForm />
                <TextArea />
                <Button>Añadir</Button>
            </Form>
        </section>
    )
}