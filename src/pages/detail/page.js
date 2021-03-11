import { PizzaService } from '../../services/pizza-service';
import { CommentService } from '../../services/comment-service';
import Detail from './index';


Detail.route = `/pizzas/:id`
Detail.getData = async function ({ id }) {
    return PizzaService.edit(id);
}
Detail.getData = async(params,query)=>{
    return CommentService .getAll(); 
}

export default Detail;