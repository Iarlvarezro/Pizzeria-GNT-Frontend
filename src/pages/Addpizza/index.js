import React from 'react';
import { Page } from '../../components'
import { AddImage } from './components/add-image';
import { AddName } from './components/add-name';
import { AddPrice } from './components/add-price';
import { AddIngredients } from './components/add-ingredients';
import '../../styles';
import css from './index.module.css'

export default function AddPizzas({ ingredients }) {
    return (
        <Page>
            <section className={css.addbody}>
                <h1 className="visually-hidden">Añadir una pizza</h1>
                <AddImage />
                <AddName />
                <AddPrice />
                <AddIngredients ingredients={ingredients} />
            </section>
        </Page>
    )
}
