import React from 'react';
import {Page} from '../../components'
import '../../styles';
import css from './index.module.css';
export default function Home(){
    return <Page>
        <h1 className={css.home}>Home</h1>
        <input type="date"></input>
        </Page>
}

