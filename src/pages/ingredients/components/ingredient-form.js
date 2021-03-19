import React from 'react';
import {Input, Button, Form, FormControl,FormGroup,useForm,VALIDATORS} from '../../../components';
import {apiCall} from '../../../api/api-call';
import {IngredientService} from '../../../services/ingredient-service'

export function IngredientForm() {
    const frm = new FormGroup({
        'name':new FormControl(),
        'price':new FormControl()
    });
    const {register,handlerSubmit} = useForm(frm)
    const submit= async (data)=>{
        await apiCall(IngredientService.create,data)
    }
    return(
        <section>
            <h2>Crea un nuevo ingrediente:</h2>
            <Form onSubmit={handlerSubmit(submit)}>
                <Input label="Añade un nombre" placeholder="Nombre" ref={register(frm.name)}/>
                <Input label="Añade un precio" placeholder="Precio" ref={register(frm.price)} />
                <Button type="submit">Crear nuevo ingrediente</Button>
            </Form>
        </section>
        
    )
}