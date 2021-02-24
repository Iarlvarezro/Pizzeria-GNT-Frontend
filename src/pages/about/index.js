import React from 'react';
import {Page} from '../../components'
import css from './index.module.css';
import '../../styles';


function Clock(props){
    const [date, setDate] = React.useState(new Date());
    React.useEffect(()=> {
        const interval = setInterval(() => setDate(new Date()), props.interval);
        return () => clearInterval(interval);
    }, [props.interval]);

    // React.useEffect(()=> {
    //     // connectedCallback
    //     return function(){ // disconnectedCallback }
    // }, [])
    // Todos los datos de los que dependa el efecto, sean de props o de useState,
    // tiene que ir como dependencia
    return <div>{date.toUTCString()}</div>;
}

// quiero un contandor que empiece en 2 de 3 en 3
// y otro que empiece en 5 de 4 en 4
function Counter(props) {
    const [count, setCount] = React.useState(props.initialValue);
    function increment(){
        setCount(count + props.step);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>click</button>
        </div>
    );
}

function Item(props){
    return <li>{props.children}</li>
}

export default function About({foo}){
    const elValorDelId = 'foo';
    function onClick(ev){
        alert(`hello ${ev.type}`)
    }
    function renderItem(count){
        if(count > 1){
            return <span>{count} items</span>
        }
        return <span>{count} item</span>
    }
    function renderCondicional(condicion){
        if(condicion){
            return (
                <span>
                    hola
                </span>
            );
        }
        return null;
    }
    const count = 1;
    const items = [1,2,3,4,5]
    return (
        <Page>
            <main>
                <h1 onClick={onClick} id={elValorDelId} className={css.about}>About {foo}</h1>
                {/* {count > 1 && <span>{count} items</span> || <span>{count} item</span>}
                {count > 1 ? <span>{count} items</span> : <span>{count} item</span>} */}
                {renderItem(count)}
                {/* {renderCondicional(true)} */}
                {renderCondicional(false)}
                <ul>
                    {items.map((item, i) => {
                        return <Item key={i}><span>{item}</span></Item>
                    })}
                </ul>
                <Counter initialValue={2} step={3}/>
                <Counter initialValue={4} step={8}/>
                <Clock interval={5000}/>
            </main> 
        </Page>
    );
}
About.route = '/about';
About.getData = async function(){
    return {foo: 12};
}
