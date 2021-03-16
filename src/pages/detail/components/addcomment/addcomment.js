import React from 'react'
import { Button, Dropdown } from '../../../../components'
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

export function AddComment() {
    return (
        <section className={css.list}>
            <h3>Añade tu Comentario</h3>
            <Dropdown options={score} />
            <textarea placeholder="Añade tu comentario" className={css.textarea}></textarea>
            <Button>Añadir</Button>
        </section>
    )
}