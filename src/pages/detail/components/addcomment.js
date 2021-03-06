import React from 'react' 
import {Input, Butt} from '../../../components'
import css from './addcomment.module.css'


export function AddComment (){
    return (
<<<<<<< HEAD:src/pages/detail/components/addcomment.js
        <div className={css.addcomment}>
            <div>Añade tu Comentario</div>
            <div>{/*TODO Dropdown items*/}</div>
=======
        <div className={css.addcoment}>

            <div><h2>Añade tu Comentario</h2></div>
            <div>
                Selecciona una Puntuacion
                {/*TODO Dropdown items*/}</div>
>>>>>>> 776f0b01ba93928a9d59a6b5b330e9daeb42bb30:src/pages/detail/components/addcoment.js
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