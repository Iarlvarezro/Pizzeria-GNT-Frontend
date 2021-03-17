import React from 'react';
import css from './comments-detail-card.module.css';

export function CommentsDetailCard({ text, score, date }) {

    return (
        <section className={css.detailcard}>
            <p className={css.userdate}>Nombre de User:</p>
            <p className={css.userdate}>{new Intl.DateTimeFormat("es").format(new Date(date))}</p>
            <p className={css.scortxt}> Puntuación: {score}</p>
            <p className={css.text}>{text}</p>
        </section>

    )
}