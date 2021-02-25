import React from 'react' 
import {Input, Butt} from '../../../components'
import css from './addcoment.module.css'


export function AddComent (){
    return (
        <div className={css.addcoment}>
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