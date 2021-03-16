import React from 'react';

export function CommentsDetailCard({ text, score }) {
    return (
        <section >
            <div>{score}</div>
            <div>{text}</div>
            {/*TODO: fecha*/}
        </section>

    )
}