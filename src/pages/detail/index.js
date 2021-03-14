import React from 'react';
import { Page } from '../../components';
import { PizzaDetail } from './components/Pizza-detail/Pizza-detail'
import { AddComment } from './components/addcomment'
import '../../styles';
import css from './index.module.css'

export default function Detail({ pizza }) {
    return (
        <Page>
            <main className={css.main}>
                <h1 className={css.hidden}>Detalles</h1>
                <PizzaDetail pizza={pizza} />
                <AddComment />
            </main>
        </Page>
    )
}