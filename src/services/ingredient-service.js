import {urlApi, authorize, api, resolveUrl} from '../api/api';

export class IngredientService {
    static async getAll() {
        const url = resolveUrl('ingredients', urlApi);
        const ingredients = await api(url).get();
        return {
            ingredients
        }
    }

    static async create(data) {

    }

    static async remove(id) {

    }
}