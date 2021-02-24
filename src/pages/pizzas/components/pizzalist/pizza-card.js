import React from 'react';
import {Butt} from '../../../../components/button/button'
import css from './card.module.css'

export function PizzaCard({name, img, price}){
    return(
        <div className={css.card}>
            <div>{img}</div>
            <div>{name}</div>
            <div>{price}</div>
            <Butt name="Añadir al carro" />
            <Butt name="Ver más" />
        </div>
    )
}