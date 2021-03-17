import React from 'react';
import css from './add-price.module.css'

export function AddPrice() {
    return (
        <section>
            <h2>Añade un precio</h2>
            <input className={css.input} placeholder="Precio"></input>
        </section>
    )
}