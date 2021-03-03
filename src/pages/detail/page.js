import Detail from './index';


Detail.route = `/pizzas/:id`
Detail.getData = async function ({ id }) {
    const response = await fetch(`http://localhost:3000/pizzas/${id}`);
    return {
        pizza: await response.json()
    }
}

export default Detail;