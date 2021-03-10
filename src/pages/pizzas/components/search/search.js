import React from 'react';
import {Input, Form} from '../../../../components';
import css from './search.module.css'

export function Search() {
        return (
            <Form>
                <Input className={css.busca} placeholder="Busca tu pizza favorita" />
                <Input className={css.filtra} placeholder="Filtrar" />
                <Input className={css.ordenar} placeholder="Ordenar" />
            </Form> 
        )
}
