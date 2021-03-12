import Ingredients from './index'
import {IngredientService} from '../../services/ingredient-service'


Ingredients.route = '/ingredients'
Ingredients.getData = async function (params, query) {
    return IngredientService.getAll();
}

export default Ingredients;