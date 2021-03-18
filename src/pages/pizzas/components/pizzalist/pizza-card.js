import React from 'react';
import { Anchor, Image, CartForm } from '../../../../components/'
import css from './pizza-card.module.css'

export function PizzaCard(pizza) {
    const { name, price, image } = pizza;
    return (
        <article >
            <Image public_id={image.public_id} small={200} big={400} width={16} height={9} />
            <div className={css.card}>
                <h2>{name}</h2>
                <p>{`${price} €`}</p>
                <div className={css.buttoncontainer}>
                    <CartForm pizza={pizza} />
                    <Anchor pizza={pizza} name="Ver más" />
                </div>
            </div>
        </article>
    )
}