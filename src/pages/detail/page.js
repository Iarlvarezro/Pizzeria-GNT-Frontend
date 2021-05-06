import { PizzaService } from '../../services/pizza-service';
import Detail from './index';

Detail.route = `/pizzas/:id`
Detail.getData = async function ({ id }) {
    return PizzaService.get(id);
}

export default Detail;