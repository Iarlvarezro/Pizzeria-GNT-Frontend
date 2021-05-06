import React from 'react';
import { Select, IngredientList } from '../../../components'

export function AddIngredients({ingredients, control}) {
    const [selectedIngredients, setSelectedIngredients] = React.useState([]);
    function addIngredient(ev){
        const id = ev.target.value;
        const ing = ingredients.find((ing) => ing.id === id);
        if(!selectedIngredients.includes(ing)){
            selectedIngredients.push(ing);
        }
        setSelectedIngredients([...selectedIngredients]);
        control.value = selectedIngredients.map((ing) => ing.id);
    }
    return (
        <div>
            <Select onChange={addIngredient} ingredients={ingredients} /> 
            {Boolean(selectedIngredients.length) && <IngredientList ingredients={selectedIngredients} />}
        </div>
    )
}