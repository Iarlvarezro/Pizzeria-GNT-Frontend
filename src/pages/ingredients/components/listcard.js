import React from 'react';
import {Input} from '../../../components/input/input'

export function Carding({name, price}) {
    return(
        <Input type="text" disabled value={`${name} (${price} €)`} />
    )
}