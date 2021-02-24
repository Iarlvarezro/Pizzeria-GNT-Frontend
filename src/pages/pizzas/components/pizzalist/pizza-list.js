import React from 'react'
import { PizzaCard } from './pizza-card'
import css from './pizza.module.css'

export function PizzaList(props) {
    return (
        <ul className={css.pizza}>
            {props.pizzas.map((pizza) => {
                return (
                    <li key={pizza.id}>
                        <PizzaCard {...pizza} />
                    </li>
                )
            })
            }
        </ul>

    )

}