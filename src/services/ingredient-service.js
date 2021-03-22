import {urlApi, authorize, api, resolveUrl} from '../api/api';

export class IngredientService {
    static async getAll() {
        const url = resolveUrl('ingredients', urlApi);
        const ingredients = await api(url).get(authorize());
        return {
            ingredients
        }
    }

    static async create(data) {
        const url = resolveUrl('ingredients', urlApi);
        return await api(url).post(data,authorize())
    }

    static async remove(id) {
        const url = resolveUrl(`ingredients/${id}`, urlApi);
        return await api(url).delete(authorize());
    }
}