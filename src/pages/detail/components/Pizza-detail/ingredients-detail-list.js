import React from 'react';
import { IngredientsDetailCard } from './ingredients-detail-card';
import { Button } from '../../../../components/button/button';
import css from './ingredients-detail-list.module.css';


export function IngredientsDetailList({ingredients}) {
    return (
        <section>
            <h3>Ingredientes</h3>
            <ul className={css.list}>
                {ingredients.map((ingredient) => {
                    return (
                        <li key={ingredient.id}>
                            <IngredientsDetailCard {...ingredient} />
                        </li>
                    )
                })}
            </ul>
            <Button>Añadir al carrito</Button>
        </section>
    )
}