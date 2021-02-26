import React from 'react';
import { Page, Butt, Input } from '../../components';
/*import { IngList } from '../Addpizza/components/inglist/ing-list'*/
import { ComentList } from '../detail/components/comentlist'
import { AddComent } from './components/addcoment'
import '../../styles';
import css from './index.module.css'

export default function Detail({ coments, ingredients }) {
    return (
        <Page>
            <div className={css.body}>
                <div>Nombre de la Pizza</div>
                <div>Descripcion</div>
                <div>Precio</div>
                {/*
            <IngList ingredients={ingredients}/>
            */}
                <div className={css.buttonadd}>
                    <Butt name="Añadir al carrito" />
                </div>
                <h2>Comentarios:</h2>
                <ComentList coments={coments} />
                {/*Input de comentarios y un desplegable para score*/}
                <AddComent />
            </div>
        </Page>
    )
}

Detail.route = '/detail'



Detail.getData = async function (URLSearchParams, query) {
    const response = await fetch('http://localhost:3000/comments');
    return {
        coments: await response.json()
    }
}
/*Detail.getData = async function (URLSearchParams, query) {
    const response = await fetch('http://localhost:3000/ingredients');
    return {
        ingredients: await response.json()
    }

}*/