import { IngredientService } from "../../services/ingredient-service";
import AddPizzas from "./index"

AddPizzas.route = '/AddPizzas';
AddPizzas.getData = async function (params, query) {
    return IngredientService.getAll();
}

export default AddPizzas;
