// TO DO: El código necesario para obtener los comentarios
import {urlApi, api, resolveUrl} from '../api/api'

export class CommentService {
    static async getAll() {
        const url = resolveUrl('comments', urlApi);
        const comments = await api(url).get()
        return {
            comments
        }
    }
}