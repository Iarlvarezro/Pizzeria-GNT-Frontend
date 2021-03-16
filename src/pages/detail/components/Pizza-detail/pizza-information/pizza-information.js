import React from 'react';
import { Image }from '../../../../../components';

export function PizzaInformation({ pizza }) {
    const { name, price, description, image } = pizza;
    return (
        <section>
            <Image public_id={image.public_id} small={400} big={800} width={16} height={9} />
            <h3>{name}</h3>
            <div>{description}</div>
            <div>{price}</div>
        </section>
    )
}