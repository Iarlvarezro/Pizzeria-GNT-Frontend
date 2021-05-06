import React from 'react';
import css from './select.module.css'

// TODO: esto no es un wrapper, solo sirve para ingredients

export function Select(props) {
    return (
        <div >
            <label className={css.label} htmlFor="ingredients-select">Añade los ingredientes</label>
            <select id="ingredients-select" name="Selecciona un ingrediente" className={css.select} onChange={props.onChange}>
                {props.ingredients.map((option) => {
                    return (
                            <option key={option.id} value={option.id}>{`${option.name} ${option.price} €`}</option>
                    )
                })
                }
            </select>
            </div>
    )
            
}