import Ing from './index'
import {IngredientService} from '../../services/ingredient-service'


Ing.route = '/ingredients'
Ing.getData = async function (params, query) {
    return IngredientService.getAll();
}



export default Ing;