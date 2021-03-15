import React from 'react';
import { BreadCrumb, Page } from '../../components';
import { PizzaDetail } from './components/Pizza-detail/pizza-detail'
import { AddComment } from './components/addcomment'
import '../../styles';
import css from './index.module.css'

export default function Detail({ pizza }) {
    const {name} = pizza;
    const items = [{
        text: "Carta",
        url: "/"
    }, {
        text: name
    }]

    return (
        <Page>
            <main className={css.main}>
                <h1 className="visually-hidden">Detalles</h1>
                <BreadCrumb items={items} />
                <PizzaDetail pizza={pizza} />
                <AddComment />
            </main>
        </Page>
    )
}