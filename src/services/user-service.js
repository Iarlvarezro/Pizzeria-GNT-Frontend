import {api,urlUser,resolveUrl} from '../api/api'
export class UserService{
    static async add(user){
       const url = resolveUrl('/users',urlUser)
       return await api(url).post(user)
    }
    static async login(user){
        return await api('/api/v1').post(user)   
    }
}