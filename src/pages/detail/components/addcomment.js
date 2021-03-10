import React from 'react' 
import {Input, Butt, Dropdown} from '../../../components'
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
        label:"3",
    },
    {
        value: 4,
        label:"4",
    },
    {
        value: 5,
        label:"5",
    }
]

export function AddComment() {
    return (
        <div className={css.addcomment}>
            <div>Añade tu Comentario</div>
            <Dropdown score = {options}/>
            <div>
                <Input placeholder="Añade tu comentario"/>
            </div>
            <div className={css.buttonadd}>
                <Butt name="añadir" />
            </div>
        </div>
    )
}