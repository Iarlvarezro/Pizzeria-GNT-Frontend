import React from 'react';
import {Form} from '../../components/form/form'
import {Button} from '../../components/button/button'
// import css from './cart-form.module.css';

export function CartForm({pizza}) {
    return (
        <Form> 
            <input type="hidden" value={pizza.id}></input>
            <Button>Añadir al carrito</Button>
        </Form>
    )
}
