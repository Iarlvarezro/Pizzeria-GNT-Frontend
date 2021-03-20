import {api,urlClientUser,resolveUrl} from '../api/api'
export class UserService{
    static async add(user){
       const url = resolveUrl('/users',urlClientUser)
       return await api(url).post(user)
    }
    static async login(user){
        const url = resolveUrl('/login',urlClientUser)
        return await api(url).post(user)   
    }
}