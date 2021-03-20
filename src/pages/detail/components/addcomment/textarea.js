import React from 'react';
import css from './textarea.module.css';

export function Control(props,ref) {
    return(
     <textarea ref={ref} placeholder="Añade tu comentario" className={css.textarea}></textarea>
    )
}

const TextArea = React.forwardRef(Control)
export {
 TextArea 
}