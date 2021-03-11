// TO DO: El código necesario para obtener los comentarios
import {urlApi, api, resolveUrl} from '../api/api'

export class CommentService {
    static async getAll(query) {
        const url = resolveUrl('comments', urlApi, query);
        const comments = await api(url).get()
        return {
            comments
        }
    }
}