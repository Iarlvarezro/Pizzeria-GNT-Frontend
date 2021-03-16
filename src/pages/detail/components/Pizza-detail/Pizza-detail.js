import React from 'react';
import { CommentsDetailList } from './comments-detail/comments-detail-list';
import { IngredientsDetailList } from './ingredients-detail/ingredients-detail-list';
import { PizzaInformation } from './pizza-information/pizza-information'
import { CartForm } from '../../../../components';



export function PizzaDetail({ pizza }) {
    const { ingredients, comments } = pizza;
    return (
        <section>
            <PizzaInformation pizza={pizza} />
            <IngredientsDetailList ingredients={ingredients} />
            <CartForm  pizza={pizza}/>
            <CommentsDetailList comments={comments} />
        </section>
    )
}