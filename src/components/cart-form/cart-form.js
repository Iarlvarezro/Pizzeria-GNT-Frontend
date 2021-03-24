import React from 'react';
import {Form} from '../../components/form/form'
import {Button} from '../../components/button/button'
import {FormGroup,FormControl} from '../../components/controls/controls'
import {useForm} from '../../components/useForm/useForm'
import css from './cart-form.module.css';


export function CartForm({pizza, className}) {
    const frm = new FormGroup({
        'pizza_id':new FormControl()
    })
    const {handlerSubmit,register} = useForm(frm);
    const submit = async (data)=>{
        console.log(data)
    }
    return (
        <Form onSubmit={handlerSubmit(submit)}> 
            
            <input type="hidden" value={pizza.id} ref={register(frm.pizza_id)}></input>
            <Button className={className + ' fill_width'} >Añadir al carrito</Button>
            
        </Form>
    )
}
