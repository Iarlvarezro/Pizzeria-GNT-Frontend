import Ingredients from './index'
import {IngredientService} from '../../services/ingredient-service'
import {authorize} from '../../util/autorize'

Ingredients.route = '/ingredients'
Ingredients.getData = async function (params, query) {
    return IngredientService.getAll();
}
Ingredients.middelwares = [authorize]
export default Ingredients;