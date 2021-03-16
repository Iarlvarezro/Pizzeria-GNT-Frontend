import React from 'react';
import css from './ingredients-detail-card.module.css';

export function IngredientsDetailCard({ name }) {
    return (
        <div className={css.card}>{name}</div>
    )
}