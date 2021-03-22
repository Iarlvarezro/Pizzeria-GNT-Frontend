import {api,urlUser,resolveUrl} from '../api/api'
export class UserService{
    static async add(user){
       const url = resolveUrl('/users',urlUser)
       return await api(url).post(user)
    }
    static async login(user){
        const url = resolveUrl('/login',urlUser)
        return await api(url).post(user)   
    }
    static async loginGoogle(user){
        const url = resolveUrl('/login/google',urlUser)
        return await api(url).post(user)   
    }
    static async logout(sesion){
        const url = resolveUrl(`/logout/${session}`,urlUser)
        return await api(url).post('')   
    }
}