import React from 'react';
import { Input, Page, Button, Dropdown } from '../../components'
import { IngList } from './components/inglist/ing-list'
import '../../styles';
import css from './index.module.css'

export default function AddPizzas({ ingredients }) {
    return (
        <Page>
            <main className={css.addbody}>
                <div>
                    <h3>Añade una imagen</h3>
                    <Button>Subir imagen</Button>
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
                    <Button>Añadir pizza a la carta</Button>
                </div>
            </main>
        </Page>
    )
}
