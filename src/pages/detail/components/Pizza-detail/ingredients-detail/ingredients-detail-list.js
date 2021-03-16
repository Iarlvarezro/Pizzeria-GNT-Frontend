import React from 'react';
import { IngredientsDetailCard } from './ingredients-detail-card';

import css from './ingredients-detail-list.module.css';


export function IngredientsDetailList({ingredients}) {
    return (
        <section> {/*reutilizar el ingredient list */}
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
        </section>
    )
}