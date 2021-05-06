import { UserService } from '../services/user-service'
import fs from 'fs'
import express from 'express'
import { resolveUrl } from '../api/api'
let googleData
class UserController {
    static async login(req, res) {
        const session = await UserService.login(req.body)
        res.cookie('session', session.id, {
            httpOnly: true, // xss
            // secure: true // mitm
        });
        res.json({location: '/'})
    }
    static async register(req, res) {
        const session = await UserService.add(req.body);
        res.cookie('session', session.id, {
            httpOnly: true, // xss
            // secure: true // mitm
        });
        res.json({location: '/'})
    }
    static async googleRegister(_, res) {
        if (!googleData) {
            googleData = JSON.parse(fs.readFileSync(process.env.GOOGLE_AUTH))
        }
        const { client_id, auth_uri, redirect_uri } = googleData;
        const url = resolveUrl("", auth_uri, {
            client_id,
            redirect_uri,
            response_type: 'code',
            scope: 'openid profile email'
        })
        res.redirect(url);
    }
    static async google(req, res) {
        const { code } = req.query;
        const { token_uri, client_id, client_secret, redirect_uri } = googleData
        const url = resolveUrl('', token_uri, {
            code,
            client_id,
            client_secret,
            redirect_uri,
            grant_type: 'authorization_code'
        })

        const response = await fetch(url, {
            method: 'POST',
            'Content-Type': 'application/x-www-form-urlencoded'
        })

        const { access_token, token_type } = await response.json()
        const userResponse = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
            method: 'GET',
            headers: {
                authorization: `${token_type} ${access_token}`
            }
        })
        const user = await userResponse.json()
        const { email, family_name, given_name } = user;
        const userDto = {
            email,
            name: given_name,
            surname: family_name
        }
        const session = await UserService.loginGoogle(userDto);
        res.cookie('session', session.id, {
            httpOnly: true, // xss
            // secure: true // mitm
        });
        res.redirect('/');
    }
    static async logout(req, res) {
        await UserService.logout(req.params.id);
        res.clearCookie('session');
        res.redirect('/');
    }
}
export function registerController(app) {
    app.post('/login', express.json(), UserController.login)
    app.post('/users', express.json(), UserController.register)
    app.post('/login/google', UserController.googleRegister)
    app.get('/login/google', UserController.google)
    app.post('/logout/:id',UserController.logout)
}