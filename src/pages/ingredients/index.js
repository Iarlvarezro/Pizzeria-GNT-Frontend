import React from 'react';
import { Page } from '../../components'
import { IngredientList } from './components/ingredient-list'
import { IngredientForm } from './components/ingredient-form'
import '../../styles'

export default function Ing({ ingredients }) {
    return (
        <Page>
            <main>
                <h1 className="visually-hidden">Manejar Ingredientes</h1>
                <IngredientList ingredients={ingredients} />
                <IngredientForm />
            </main>
        </Page>
    )
}


