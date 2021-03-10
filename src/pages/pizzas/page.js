import Pizzas from "./index";

Pizzas.route = '/'
Pizzas.getData = async function (params, query) {
    const response = await fetch('http://localhost:3000/pizzas');
    return { pizzas: await response.json() }
}

export default Pizzas;