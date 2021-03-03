import React from 'react';
import { Page, Butt } from '../../components';
// import { IngList } from '../Addpizza/components/inglist/ing-list'
// import { CommentList } from '../detail/components/commentlist'
// import { PizzaList } from '../pizzas/components/pizzalist/pizza-list'
import { AddComment } from './components/addcomment'
import '../../styles';
import css from './index.module.css'

export default function Detail({ pizza }) {
    const { ingredients, comments} = pizza
    return (
        <Page>
<<<<<<< HEAD
            <div className={css.body}>
                {/* <PizzaList  {...pizzas}/> */}
                {/* <IngList ingredients={ingredients} /> */}

=======
            <div className={css.detbody}>
                <div>Nombre de la Pizza</div>
                <div>Descripcion</div>
                <div>Precio</div>
                {/*
            <IngList ingredients={ingredients}/>
            */}
>>>>>>> 776f0b01ba93928a9d59a6b5b330e9daeb42bb30
                <div className={css.buttonadd}>
                    <Butt name="Añadir al carrito" />
                </div>
                <h2>Comentarios:</h2>
                {/* <CommentList comments={comments} /> */}
                {/*Input de comentarios y un desplegable para score*/}
                <AddComment />
            </div>
        </Page>
    )
}

Detail.route = `/pizzas/:id`
Detail.getData = async function ({ id }) {
    const response = await fetch(`http://localhost:3000/pizzas/${id}`);
    return {
        pizza: await response.json()
    }
}
