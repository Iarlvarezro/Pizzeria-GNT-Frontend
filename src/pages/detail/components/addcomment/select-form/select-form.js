import React from 'react';
import css from './select-form.module.css'

export function SelectForm() {
    return (
        <section>
            <select name="puntuación" id="puntuación "className={css.select}>
                <option>Selecciona una puntuación:</option>
                <option>1 estrella</option>
                <option>2 estrellas</option>
                <option>3 estrellas</option>
                <option>4 estrellas</option>
                <option>5 estrellas</option>
            </select>
        </section>
    )
}