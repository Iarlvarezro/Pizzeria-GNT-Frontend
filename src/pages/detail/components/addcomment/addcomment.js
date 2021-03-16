import React from 'react'
import { Button, Dropdown, Form } from '../../../../components'
import {TextArea} from './textarea'
import css from './addcomment.module.css'
const score = [
    {
        value: 1,
        label: "1",
    },
    {
        value: 2,
        label: "2",
    },
    {
        value: 3,
        label: "3",
    },
    {
        value: 4,
        label: "4",
    },
    {
        value: 5,
        label: "5",
    }
]

export function AddComment({id}) {
    return (
        <section className={css.list}>
            <h3>Añade tu Comentario</h3>
            <Form>
                <input type="hidden" value={id}/>
                <Dropdown options={score} />
                {/*TODO: crear wrapper */}
                <TextArea />
                <Button>Añadir</Button>
            </Form>
        </section>
    )
}