import React from 'react';
import { CommentsDetailList } from './comments-detail/comments-detail-list';
import { IngredientsDetailList } from './ingredients-detail/ingredients-detail-list';
import { PizzaInformation } from './pizza-information/pizza-information'



export function PizzaDetail({ pizza }) {
    const { ingredients, comments } = pizza;
    return (
        <section>
            <PizzaInformation pizza={pizza} />
            <IngredientsDetailList ingredients={ingredients} />
            <CommentsDetailList comments={comments} />
        </section>

    )

}