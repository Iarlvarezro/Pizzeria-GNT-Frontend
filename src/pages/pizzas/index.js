import React from 'react';
import { Page } from '../../components'
import { Search } from './components/search/search'
import '../../styles';
import { PizzaList } from './components/pizzalist/pizza-list';
import css from './index.module.css'

export default function Pizzas({pizzas}) {
    return (
        <Page>
            <Search className={css.buscador} />
            <PizzaList pizzas = {pizzas} />
        </Page>
    )
}

