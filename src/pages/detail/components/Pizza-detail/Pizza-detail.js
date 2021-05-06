import React from 'react';
import { CommentsDetailList } from './comments-detail/comments-detail-list';
import { IngredientList, CartForm } from '../../../../components';
import { PizzaInformation } from './pizza-information/pizza-information'



export function PizzaDetail({ pizza }) {
    const { ingredients, comments } = pizza;
    return (
        <section>
            <PizzaInformation pizza={pizza} />
            <IngredientList ingredients={ingredients} />
            <CartForm  pizza={pizza}/>
            <CommentsDetailList comments={comments} />
        </section>
    )
}