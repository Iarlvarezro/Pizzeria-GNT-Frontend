import React from 'react' 
import {Input, Butt} from '../../../components'
import css from './addcomment.module.css'


export function AddComment (){
    return (
        <div className={css.addcomment}>
            <div>Añade tu Comentario</div>
            <div>{/*TODO Dropdown items*/}</div>
            <div>
                <Input placeholder="Añade tu comentario"/>
            </div>
            <div className={css.buttonadd}>
                <Butt name="añadir" />
            </div>
        </div>
    )
}