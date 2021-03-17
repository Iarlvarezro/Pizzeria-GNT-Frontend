import React from 'react';

import css from './comments-detail-card.module.css';

export function CommentsDetailCard({ text, score, date }) {
    return (
        <section className={css.detailcard}>
            <div>Nombre de User:</div>
            <div className={css.scortxt}>Puntuación : {score}</div>
            <div>{text}</div>
            <div>{date}</div>
        </section>

    )
}