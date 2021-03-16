import React from 'react';
import css from './textarea.module.css';

export function TextArea() {
    return(
     <textarea placeholder="Añade tu comentario" className={css.textarea}></textarea>
    )
}