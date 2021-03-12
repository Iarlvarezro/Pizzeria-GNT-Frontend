import React from 'react';
import {Input, Button} from '../../../components';

export function IngredientForm() {
    return(
        <section>
            <h2>Crea un nuevo ingrediente:</h2>
            <form>
                <Input label="Añade un nombre" placeholder="Nombre"/>
                <Input label="Añade un precio" placeholder="Precio"/>
                <Button>Crear nuevo ingrediente</Button>
            </form>
        </section>
        
    )
}