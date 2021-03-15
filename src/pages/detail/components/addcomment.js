import React from 'react'
import { Input, Button, Dropdown } from '../../../components'
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
        <section className={css.addcomment}>
            <h3>Añade tu Comentario</h3>
            <Dropdown options={score} />
            <div>
                <Input placeholder="Añade tu comentario" />
            </div>
            <div className={css.buttonadd}>
                <Button>Añadir</Button>
            </div>
        </section>
    )
}