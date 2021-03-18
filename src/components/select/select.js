import React from 'react';
import css from './select.module.css'

export function Select(props) {
    return (
            <select name="Selecciona un ingrediente" className={css.select}>
                {props.ingredients.map((option) => {
                    return (
                            <option key={option.id} value={option.name}>{`${option.name} ${option.price} €`}</option>
                    )
                })
                }
            </select>
    )
            
}