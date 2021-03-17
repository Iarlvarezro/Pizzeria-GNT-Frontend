import React from 'react';
import { CommentsDetailCard } from './comments-detail-card'
import css from './comments-detail-list.module.css'

export function CommentsDetailList({comments}) {
    return (
        <section className={css.list}>
            <h2>Comentarios</h2>
            <ul>
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <CommentsDetailCard {...comment} />
                        </li>
                    )
                })}
            </ul>
        </section>
        
    )
}