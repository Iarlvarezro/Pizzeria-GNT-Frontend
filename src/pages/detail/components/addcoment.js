import React from 'react' 
import {Input, Butt} from '../../../components'
import css from './addcoment.module.css'


export function AddComent (){
    return (
        <div className={css.addcoment}>

            <div><h2>Añade tu Comentario</h2></div>
            <div>
                Selecciona una Puntuacion
                {/*TODO Dropdown items*/}</div>
            <div>
                <textarea>
                    <Input placeholder="Añade tu comentario"/>
                </textarea>
            </div>
            <div className={css.buttonadd}>
                <Butt name="añadir"/>
            </div>

        </div>
    )
}