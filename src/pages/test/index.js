import React from 'react';
import {Page, Dropdown} from '../../components'
import css from './index.module.css'
export default function Test(){
    const options = [
        {
            value: 1,
            label: "algo",
            checked: true
        },
        {
            value: 2,
            label: "Something",
        },
        {
            value: 3,
            label:"asd",
            checked: true
        }
    ]
    return (
        <div>
            <Dropdown onChange={console.log} options = {options} />
        </div>
    ) 
}
 //   <div className={css.test}>{JSON.stringify(props.todos)}</div>  
Test.route = '/test';
Test.getData = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return {todos: await res.json()};
}
