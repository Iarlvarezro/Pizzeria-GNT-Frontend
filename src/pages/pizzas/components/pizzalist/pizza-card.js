import React from 'react';
import { Button, Image, CartForm } from '../../../../components/'
import css from './card.module.css'

export function PizzaCard({ pizza }) {
    const {name, price, image} = pizza;
    return (
        <section className={css.card}>
            <Image public_id={image.public_id} small={400} big={800} width={16} height={9} />
            <div>{name}</div>
            <div>{price}</div>
            <CartForm pizza={pizza} />
            <Button>Ver más</Button>
        </section>
    )
}