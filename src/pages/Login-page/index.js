import React from 'react';
import { Login } from '../../components'
import {SignIn} from './components/sign-in'
import {SignUp} from './components/sign-up'
// import css from './index.module.css'
import '../../styles';


export default function LoginPage() {
    return (
        <Login>
            <main>
                <SignIn />
                <SignUp />
                <h2><a href="/Pizzas">Carta</a></h2>
            </main>
        </Login>
    )
}

