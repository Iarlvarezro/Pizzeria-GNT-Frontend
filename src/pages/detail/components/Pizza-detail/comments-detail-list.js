import React from 'react';
import { CommentsDetailCard } from './comments-detail-card'

export function CommentsDetailList({comments}) {
    return (
        <section>
            <h3>Comentarios</h3>
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