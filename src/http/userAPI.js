import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode'

export const register = async (email, password) => {
    const {data} = await $host.post('/api/auth/register', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} =  await $host.post('/api/auth/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const auth = async () => {
    const {data} = await $authHost.get('/api/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}