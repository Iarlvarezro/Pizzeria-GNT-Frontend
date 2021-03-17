import React from 'react';
import css from './add-name.module.css'

export function AddName() {
    return (
        <section>
            <h2>Añade un nombre</h2>
            <input className={css.input} placeholder="Nombre"></input>
        </section>
    )
}