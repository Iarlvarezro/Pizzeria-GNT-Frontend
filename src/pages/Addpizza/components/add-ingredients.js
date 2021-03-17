import React from 'react';
import { Dropdown, IngredientList, Button } from '../../../components'

export function AddIngredients({ingredients}) {
    return (
        <section>
            <h2>Añade los ingredientes</h2>
            <Dropdown options={ingredients} />
            <IngredientList ingredients={ingredients} />
            <Button>Añadir pizza a la carta</Button>
        </section>
    )
}