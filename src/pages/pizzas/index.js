import React from 'react';
import { Page } from '../../components'
import { Search } from './components/search/search'
import '../../styles';
import { PizzaList } from './components/pizzalist/pizza-list';
import {resolveUrl} from '../../api/api';
import {PizzaService} from "../../services/pizza-service"
import css from './index.module.css'

export default function Pizzas(props) {
    const [pizzas, setPizzas] = React.useState(props.pizzas);
    async function updatePizzas(query){
        const response = await PizzaService.getAll(query);
        setPizzas(response.pizzas);
    }
    function updateUrl(query){
        const newUrl = resolveUrl('/', location, query);
        history.pushState(null, null, newUrl);
    }
    async function onSubmit(ev){
        ev.preventDefault();
        ev.stopPropagation();
        const {name} = ev.target.elements;
        const query = {
            name: name.value,
        };
        await updatePizzas(query);
        updateUrl(query);
    }

    return (
        <Page>
            <h1 className="visually-hidden">Carta de Pizzas</h1>
            <Search query={props.query} onSubmit={onSubmit} className={css.buscador} />
            {pizzas.length && <PizzaList pizzas={pizzas} /> || <div role="alert">No se han encontrado pizzas</div>}
        </Page>
    )
}

