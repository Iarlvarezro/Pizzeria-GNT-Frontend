import React from 'react';
import { Page,Input, Form, FormControl,FormGroup,useForm } from '../../components'
import { AddImage } from './components/add-image';
import { AddIngredients } from './components/add-ingredients';
import {PizzaService} from '../../services/pizza-service';
import {apiCall} from '../../api/api'
import '../../styles';
import css from './index.module.css'

export default function AddPizzas({ ingredients }) {

    const frm = new FormGroup({
        'name': new FormControl(),
        'image': new FormControl(),
        'ingredients': new FormControl(),
        'description': new FormControl()
    });
    const {register,handlerSubmit} = useForm(frm)
    const submit= async (data)=>{
        const res = await apiCall(PizzaService.add,data);
        location.href = `/pizzas/${res.pizza.id}`;
    }

    return (
        <Page>
            <section className={css.addbody}>
                <h1 className="visually-hidden">Añadir una pizza</h1>
                <Form onSubmit={handlerSubmit(submit)} >
                    <AddImage register={frm.image}/>
                    <Input className={css.input} label="Añade un nombre" placeholder="Pizza" ref={register(frm.name)}/>
                    <Input className={css.input} label="Descripción" placeholder="Descripción..." ref={register(frm.description)}/>
                    <AddIngredients ingredients={ingredients} control={frm.ingredients} />
                </Form>
            </section>
        </Page> 
    )
}
