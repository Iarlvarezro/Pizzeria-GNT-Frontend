import {UserService} from '../services/user-service'
import express from 'express'
class UserController{
    static async login(req,res){
        const user = await UserService.login(req.body)
    }
    static async register(req,res){
        const user = await UserService.add(req.body);
    }
}
export function registerController(app){
    app.post('/login',express.json(),UserController.login)
    app.post('/users',express.json(),UserController.register)
}