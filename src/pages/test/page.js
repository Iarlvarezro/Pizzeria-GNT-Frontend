import Test from './index'

Test.route = '/test';
Test.getData = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return {todos: await res.json()};
}

export default Test;