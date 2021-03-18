import React from 'react';
import {Form} from '../../components/form/form'
import css from './select.module.css'

export function Select(props) {
    const {children, ...restProp} = props;
    return (
            <select key={restProp} className={css.select}>
                {children.map((option) => {
                    return (
                        <option value={option.id}>{option.name, option.price}</option>
                    )
                })
                }
            </select>
    )
            
}