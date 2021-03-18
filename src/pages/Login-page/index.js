import React from 'react';
import { Login } from '../../components'
import {SignIn} from './components/sign-in'
import {SignUp} from './components/sign-up'
// import css from './index.module.css'
import '../../styles';


export default function LoginPage() {
    return (
        <Login>
            <section>
                <SignIn />
                <SignUp />
            </section>
        </Login>
    )
}

