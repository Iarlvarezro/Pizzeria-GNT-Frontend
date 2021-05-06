import { IngredientService } from "../../services/ingredient-service";
import AddPizzas from "./index"
import {authorize} from '../../util/autorize'

AddPizzas.route = '/AddPizzas';
AddPizzas.getData = async function (params, query) {
    return IngredientService.getAll();
}
AddPizzas.middelwares = [authorize]
export default AddPizzas;
