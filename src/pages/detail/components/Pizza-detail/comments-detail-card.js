import React from 'react';

export function CommentsDetailCard({ text, date, score }) {
    return (
        <div >
            <div>{score}</div>
            <div>{date}</div>
            <div>{text}</div>
        </div>

    )
}