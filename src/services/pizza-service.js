import {urlApi, authorize, api, resolveUrl} from '../api/api';

export class PizzaService{
    static async getAll(query){
        const url = resolveUrl('pizzas', urlApi, query);
        const pizzas = await api(url).get()
        return {
            pizzas
        }
    }
    static async edit(id){
        const url = resolveUrl(`pizzas/$(id)`, urlApi, query);
        const pizza = await api(url).get(url, authorize)
        return {
            pizza
        }
    }
    static async get(id){
        const url = resolveUrl(`pizzas/${id}`, urlApi, )
    }
}
//TO DO: La parte necesaria para obtener los usuarios cuando estén implementados (en un nuevo archivo: customer.js)