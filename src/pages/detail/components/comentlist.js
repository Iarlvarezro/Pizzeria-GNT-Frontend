import React from 'react';
import {ComentCard} from './comentcard';


export function ComentList(props){
    return (
        <ul>
            {props.coments.map((coment) =>{
                return (
                    <li key={coment.id}>
                        <ComentCard {...coment} />
                    </li>
                )
            })}
        </ul>
    )

}