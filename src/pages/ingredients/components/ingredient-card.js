import React from 'react';

import css from './listcard.module.css';


export function IngredientCard({name, price}) {
    return(
        <div className={css.card}>{`${name} (${price} €)`}</div>
    )
}