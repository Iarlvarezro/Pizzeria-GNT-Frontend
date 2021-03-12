import React from 'react';
import { Page, Button, Input } from '../../components'
import { IngredientList } from './components/ingredient-list'
import '../../styles'
import css from './index.module.css'

export default function Ing({ ingredients }) {
    return (
        <Page>
            <h1 className={'visually-hidden'}>Ingredients</h1>
            <main className={css.ingbody}>
                <section>
                    <h2 className={css.title}>Todos los Ingredientes</h2>
                    <IngredientList  ingredients={ingredients} />
                        
                </section>
                <section>
                    <h2 className={css.title}>Crea un Nuevo Ingrediente</h2>
                    {/*Poner dentro de un formulario*/}
                    <Input label="Añade un nombre" placeholder="Nombre" />
                    <Input label="Añade un precio" placeholder="00.00.00€" />
                    <Button name="Crear nuevo Ingrediente" className={css.buttonadd}/>
                    {/*Poner dentro de un formulario*/}
                </section>
            </main>
        </Page>
    )
}


