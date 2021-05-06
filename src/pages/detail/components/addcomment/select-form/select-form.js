import React from 'react';
import css from './select-form.module.css'

export function Control(props,ref) {
    return (
        <select className={css.select + ' fill_width'} ref={ref} defaultValue="5">
            <option value="1">1 estrella</option>
            <option value="2">2 estellas</option>
            <option value="3">3 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="5">5 estrellas</option>
        </select>
    )
}

const SelectForm = React.forwardRef(Control)
export {
 SelectForm
}