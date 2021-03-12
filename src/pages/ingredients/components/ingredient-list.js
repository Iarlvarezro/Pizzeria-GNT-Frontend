import React from 'react';
import {IngredientCard} from './ingredient-card';
import css from './listing.module.css';

export function IngredientList(props) {
    return(
        <ul className={css.list}>
            {props.ingredients.map((ing) => {
                return (
                    <li className={css.ilist} key={ing.id}>
                       <IngredientCard {...ing} />
                    </li>
                )
            })}
        </ul>
    )
 }