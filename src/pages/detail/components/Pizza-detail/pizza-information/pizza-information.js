import React from 'react';
import { Image }from '../../../../../components';
import css from './pizza-information.module.css'

export function PizzaInformation({ pizza }) {
    const { name, price, description, image } = pizza;
    return (
        <section>
            <Image public_id={image.public_id} small={400} big={800} width={16} height={9} />
            <h2>{name}</h2>
            <div className={css.description}>{description}</div>
            <div className={css.price}>{price} €</div>
        </section>
    )
}