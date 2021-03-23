import React from 'react';
import {Input, Form} from '../../../../components';
import css from './search.module.css'

export function Search({onSubmit, query}) {
        return (
            <Form className={css.search} onSubmit={onSubmit} >
                <Input name="name" defaultValue={query.name} placeholder="Busca tu pizza favorita" />
                <button type="submit" className="visually-hidden">Buscar</button>
            </Form> 
        )
}
