import React from 'react'
import {Carding} from './listcard'

export function Listing(props) {
    return(
        <ul>
            {props.ingredients.map((ing) => {
                return (
                    <li key={ing.id}>
                       <Carding {...ing} />
                    </li>
                )
            })}
        </ul>
    )
 }