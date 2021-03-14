import React from 'react';
import { CommentsDetailCard } from './comments-detail-card'
import { IngredientsDetailCard } from './ingredients-detail-card'
import { rounding } from '../../../../components/utils/Rounding'
import { Button } from '../../../../components/button/button'

export function PizzaDetail(props) {
    return (
        <section>
            <div>Imagen</div>
            <h3>{props.pizza.name}</h3>
            <div>Aquí debería ir una descripción de la pizza</div>
            <div>{rounding(props.pizza.price)}</div>

            <h3>Ingredientes</h3>
            <ul >
                {props.pizza.ingredients.map((ingredient) => {
                    return (
                        <li key={ingredient.id}>
                            <IngredientsDetailCard {...ingredient} />
                        </li>
                    )
                })}
            </ul>
            <Button>Añadir al carrito</Button>

            <h3>Comentarios</h3>
            <ul>
                {props.pizza.comments.map((comment) => {
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