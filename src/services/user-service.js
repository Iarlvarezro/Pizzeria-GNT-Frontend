import {api} from '../api/api'
export class UserService{
    static async add(user){
       return await api('/api/v1').post(user)
    }
    static async login(user){
        return await api('/api/v1').post(user)   
    }
}