import React from 'react';
import { Page, Butt } from '../../components';
import { IngList } from '../Addpizza/components/inglist/ing-list'
import { CommentList } from '../detail/components/commentlist'
import { AddComment } from './components/addcomment'
import '../../styles';
import css from './index.module.css'

export default function Detail({ pizza }) {
    const { ingredients, comments } = pizza
    return (
        <Page>
            <main className={css.main}>
                <h1 className={css.hidden}>Detalles</h1>
                {/*TODO: Recibir lista de pizzas y pintarlas*/}

                <IngList ingredients={ingredients} />
                    <Butt name="Añadir al carrito" />
                <h2>Comentarios:</h2>
                <CommentList comments={comments} />
                <AddComment />
            </main>

        </Page>
    )
}