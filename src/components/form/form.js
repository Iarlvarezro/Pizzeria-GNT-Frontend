import React from 'react';

export function Form(props){
    const {children, ...restProp} = props;
    return (
        <form {...restProp}>{children}</form>
    )
}