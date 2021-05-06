import React from 'react';
import { Anchor, Image, CartForm } from '../../../../components/'
import css from './pizza-card.module.css'

export function PizzaCard(pizza) {
    const { name, price, image, id } = pizza;
    const href = `/pizzas/${id}`
    return (
        <article >
            <Image className={css.img} public_id={image.public_id} small={200} big={400} width={16} height={9} />
            <div className={css.card}>
                <h2>{name}</h2>
                <p>{`${price} €`}</p>
                <div className={css.buttoncontainer}>
                    <CartForm className={css.button} pizza={pizza} />
                    <Anchor href={href} text="Ver más" />
                </div>
            </div>
        </article>
    )
}