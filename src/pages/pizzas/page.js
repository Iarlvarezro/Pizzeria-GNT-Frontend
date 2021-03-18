import Pizzas from "./index";
import {PizzaService} from "../../services/pizza-service"

Pizzas.route = '/pizzas'
Pizzas.getData = async function (params, query) {
    return PizzaService.getAll();
}

export default Pizzas;