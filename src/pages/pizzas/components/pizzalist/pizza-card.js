import React from 'react';
import {Button} from '../../../../components/button/button'
import css from './card.module.css'

export function PizzaCard({name, img, prize}){
    return(
        <div className={css.card}>
            <div>{img}</div>
            <div>{name}</div>
            <div>{prize}</div>
            <Button>Añadir al carro</Button>
        <div>
            <Button>Ver más</Button>
        </div>
            
        </div>
    )
}