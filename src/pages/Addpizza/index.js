import React from 'react';
import { Input, Page, Button, Dropdown } from '../../components'
import { IngList } from './components/inglist/ing-list'
import '../../styles';
import css from './index.module.css'

export default function AddPizzas({ ingredients }) {
    return (
        <Page>
            <div className={css.addbody}>
                <div>
                    <h3>Añade una imagen</h3>
                    <Button name="Subir imagen" />
                </div>
                <div>
                    <h3>Añade un nombre</h3>

                    <Input placeholder="Nombre" />
                </div>
                <div>
                    <h3>Añade un precio</h3>
                    <Input placeholder="Precio" />
                </div>
                <div>
                    <h3>Añade los ingredientes</h3>
                    <Dropdown options={ingredients} />
                    <IngList ingredients={ingredients} />
                    <Button name="Añadir pizza a la carta" />
                </div>
            </div>
        </Page>
    )
}
