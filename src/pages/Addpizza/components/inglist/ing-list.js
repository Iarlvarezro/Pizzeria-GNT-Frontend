import React from 'react'
import {IngCard} from './ing-card'

export function IngList(props) {
    return(
        <ul>
            {props.ingredients.map((ing) => {
                return (
                    <li key={ing.id}>
                       <IngCard {...ing} />
                    </li>
                )
            })}
        </ul>
    )
 }