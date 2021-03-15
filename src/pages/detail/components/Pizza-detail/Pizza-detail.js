import React from 'react';
import { CommentsDetailList } from './comments-detail-list';
import {IngredientsDetailList} from './ingredients-detail-list';


export function PizzaDetail({pizza}) {
    const {name, price, ingredients, comments} = pizza;
    return (
        <section>
            <div>Aquí aparecería una imagen</div>
            <h3>{name}</h3>
            <div>Aquí debería ir una descripción de la pizza</div>
            <div>{price}</div>
            <IngredientsDetailList ingredients = {ingredients}/>
            <CommentsDetailList comments = {comments} />
        </section>

    )

}