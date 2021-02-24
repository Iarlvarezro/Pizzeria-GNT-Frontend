import React from 'react';

export function Butt(props) {
    const {name, ...restProps} = props;
    return (
        <button {...restProps}>{name}</button>
    )
}