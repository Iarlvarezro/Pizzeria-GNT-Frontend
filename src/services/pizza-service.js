import { urlApi, authorize, api, resolveUrl } from '../api/api';

export class PizzaService {
    static async getAll(query) {
        const url = resolveUrl('pizzas', urlApi, query);
        const pizzas = await api(url).get()
        return {
            pizzas
        }
    }
    static async add(data) {
        const url = resolveUrl('pizzas', urlApi);
        const pizza = await api(url).post(data,authorize())
        return {
            pizza
        }
    }
    static async edit(id) {
        const url = resolveUrl(`pizzas/$(id)`, urlApi);
        const pizza = await api(url).get(url, authorize)
        return {
            pizza
        }
    }
    static async get(id) {
        const url = resolveUrl(`pizzas/${id}`, urlApi);
        const pizza = await api(url).get()
        return {
            pizza
        }
    }
    static async addComment(comment){
        const {id} = comment;
        const url = resolveUrl(`pizzas/${id}/comments`, urlApi);
        return await api(url).post(comment)
    }
}
//TO DO: La parte necesaria para obtener los usuarios cuando estén implementados (en un nuevo archivo: customer.js)