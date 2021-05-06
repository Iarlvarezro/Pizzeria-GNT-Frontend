import Pizzas from "./index";
import {PizzaService} from "../../services/pizza-service"

Pizzas.route = '/'
Pizzas.getData = async function (params, query) {
    return {
        ...(await PizzaService.getAll(query)),
        query
    }
}

export default Pizzas;