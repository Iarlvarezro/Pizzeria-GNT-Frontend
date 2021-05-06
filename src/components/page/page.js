import React from 'react';
import { Header } from './header.js';
import {Menu} from './menu.js'
import {Backdrop} from './backdrop.js'
import css from './page.module.css';
export function Page({children}){
    return (
        <div className={css.page + ' mobile'}>
            <Header/>
            <Menu />
            <Backdrop />
            <main>
               {children}
            </main>
        </div>
    )
}