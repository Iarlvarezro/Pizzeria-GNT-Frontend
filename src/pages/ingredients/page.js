import Ingredients from './index'
import {IngredientService} from '../../services/ingredient-service'
import {authorize} from '../../util/autorize'
import {authorize as HeaderAutorize} from '../../api/api'

Ingredients.route = '/ingredients'
Ingredients.getData = async function (params,query,access_token) {
    return IngredientService.getAll(HeaderAutorize(access_token));
}
Ingredients.middelwares = [authorize]
export default Ingredients;