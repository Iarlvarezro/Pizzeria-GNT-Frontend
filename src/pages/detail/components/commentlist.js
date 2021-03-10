import React from 'react';
import {CommentCard} from './commentcard';


export function CommentList(props){
    return (
        <ul>
            {props.comments.map((comment) =>{
                return (
                    <li key={comment.id}>
                        <CommentCard {...comment} />
                    </li>
                )
            })}
        </ul>
    )

}