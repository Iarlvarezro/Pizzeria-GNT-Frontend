import {urlApi, api, authorize, resolveUrl} from '../api/api';

export class IngredientService {
    static async getAll(access_token) {
        const url = resolveUrl('ingredients', urlApi);
        const ingredients = await api(url).get(access_token);
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