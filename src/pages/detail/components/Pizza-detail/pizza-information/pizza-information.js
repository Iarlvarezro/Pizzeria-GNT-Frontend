import React from 'react';
import { Image }from '../../../../../components';

export function PizzaInformation({ pizza }) {
    const { name, price, description, image } = pizza;
    return (
        <section>
            <Image image={image} />
            <h3>{name}</h3>
            <div>{description}</div>
            <div>{price}</div>
        </section>
    )
}