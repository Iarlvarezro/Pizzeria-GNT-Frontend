import React from 'react';
import {Button} from '../../../../components/button/button'
import css from './card.module.css'

export function PizzaCard({name, img, prize}){
    return(
        <div className={css.card}>
            <div>{img}</div>
            <div>{name}</div>
            <div>{prize}</div>
            <Button name="Añadir al carro" />
        <div>
            <Button name="Ver más" />
        </div>
            
        </div>
    )
}