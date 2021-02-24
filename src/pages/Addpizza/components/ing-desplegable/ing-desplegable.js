import React from 'react';

export function DesplIng(props) {
    return(
        <select>
            <option value="ingredientes" key="ingredientes">Selecciona un ingrediente</option>
            {props.ingredients.map((ing) => {
                return (
                    <option key={ing.id} value={ing.name}>
                       {ing.name} {ing.prize}
                    </option>
                )
            })}
        </select>
    )

}
