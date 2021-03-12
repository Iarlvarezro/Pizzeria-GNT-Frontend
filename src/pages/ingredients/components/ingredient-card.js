import React from 'react';

import css from './ingredient-card.module.css';

export function IngredientCard({name, price}) {
    return(
        <div className={css.card}>{`${name} (${price} €)`}</div>
    )
}