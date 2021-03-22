import React from 'react';
import css from './backdrop.module.css';
import { PageService } from './page-service';

export function Backdrop(){
    function onClick(){
       PageService.close();
    }
    return <div id="backdrop" onClick={onClick} className={css.backdrop} hidden></div>
}