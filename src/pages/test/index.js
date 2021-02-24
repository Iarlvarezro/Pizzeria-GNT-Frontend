import React from 'react';
import css from './index.module.css'
export default function Test(props){
    return <div className={css.test}>{JSON.stringify(props.todos)}</div>
}

Test.route = '/test';
Test.getData = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return {todos: await res.json()};
}
