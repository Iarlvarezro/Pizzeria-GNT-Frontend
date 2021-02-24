import React from 'react';
import {Form, Input, Butt, Page} from '../../components'
import {DesplIng} from './components/ing-desplegable/ing-desplegable'
import {IngList} from './components/inglist/ing-list'
import '../../styles';
// import css from './index.module.css'

export default function AddPizzas({ingredients}) {
    return (
        <Page>
            <Form >
                    <h3>Añade una imagen</h3>
                    <Butt name="Subir imagen"/>   
            </Form>
            <Form >
                    <h3>Añade un nombre</h3>
                    <Input placeholder= "Nombre" /> 
            </Form>
            <Form >
                    <h3>Añade un precio</h3>
                    <Input placeholder= "Precio" /> 
            </Form>
            <Form>
                    <h3>Añade los ingredientes</h3>
                    <DesplIng ingredients = {ingredients} />
                    <IngList ingredients = {ingredients} />
                    <Butt name= "Añadir pizza a la carta"/>
            </Form>
        </Page>
    )
}
AddPizzas.route = '/AddPizzas'
AddPizzas.getData = async function (params, query) {
    const response = await fetch('http://localhost:3000/ingredients');
    return { ingredients: await response.json() }
}