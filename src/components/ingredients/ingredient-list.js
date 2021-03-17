import React from 'react';
import { IngredientCard } from './ingredient-card';
import css from './ingredient-list.module.css';

export function IngredientList(props) {
    return (
        <section className={css.section}>
            <h2>Todos los Ingredientes</h2>
            <ul className={css.list}>
                {props.ingredients.map((ingredient) => {
                    return (
                        <li key={ingredient.id}>
                            <IngredientCard {...ingredient} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}