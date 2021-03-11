import React from 'react';
import { Page, Button, Input } from '../../components'
import { Listing } from './components/listing'
import '../../styles'
import css from './index.module.css'

export default function Ing({ ingredients }) {
    return (
        <Page>
            <div className={css.ingbody}>
                <div>
                    <h2 className={css.title}>Todos los Ingredientes</h2>
                        <Listing ingredients={ingredients} /> {/*Crear un nuevo componente que pinte la lista de ingredientes */}
                </div>
                <div>
                    <h2 className={css.title}>Crea un Nuevo Ingrediente</h2>
                    <h3>Añade un nombre</h3>
                    <Input placeholder="Nombre" />
                    <h3>Añade un precio</h3>
                    <Input placeholder="00.00.00€" />
                    
                    <Button name="Crear nuevo Ingrediente" className={css.buttonadd}/>
                    
                </div>
            </div>
        </Page>
    )
}


