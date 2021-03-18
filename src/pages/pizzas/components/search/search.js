import React from 'react';
import {Input, Form} from '../../../../components';
import css from './search.module.css'

export function Search() {
        return (
            <Form className={css.search}>
                <Input  placeholder="Busca tu pizza favorita" />
                <Input  placeholder="Ordenar" />
            </Form> 
        )
}
