import React from 'react';
import {Butt} from '../../../../components/button/button'
import css from './card.module.css'

export function PizzaCard({name, img, prize}){
    return(
        <div className={css.card}>
            <div>{img}</div>
            <div>{name}</div>
            <div>{prize}</div>
            <Butt name="Añadir al carro" />
        <div>
            <Butt name="Ver más" />
        </div>
            
        </div>
    )
}