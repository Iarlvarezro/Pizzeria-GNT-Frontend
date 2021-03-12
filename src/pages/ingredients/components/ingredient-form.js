import React from 'react';
import {Input, Button} from '../../../components';

export function IngredientForm() {
    return(
        <section>
            <h2>Crear nuevo ingrediente:</h2>
            <form>
                <Input label="Añadir nombre" placeholder="nombre"/>
                <Input label="Añadir precio" placeholder="precio"/>
                <Button>Crear nuevo ingrediente</Button>
            </form>
        </section>
        
    )
}