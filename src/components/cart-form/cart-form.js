import React from 'react';
import {Form} from '../../components/form/form'
import {Button} from '../../components/button/button'
import css from './cart-form.module.css';

export function CartForm({pizza, className}) {
    return (
        <Form> 
            
            <input type="hidden" value={pizza.id}></input>
            <Button className={className} >Añadir al carrito</Button>
            
        </Form>
    )
}
