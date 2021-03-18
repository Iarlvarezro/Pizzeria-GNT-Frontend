import React from 'react'
import { PizzaCard } from './pizza-card'
import css from './pizza-list.module.css'

export function PizzaList(props) {
    return (
            <ul className={css.pizza}>
                {props.pizzas.map((pizza) => {
                    return (
                        <li key={pizza.id} className={css.box}>
                            <PizzaCard {...pizza} />
                        </li>
                    )
                })
                }
            </ul>
    )
}