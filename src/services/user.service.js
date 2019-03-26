const axios = require('axios');
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';

export default {
    login,
    signup,
    isLoggedIn
}
const USER = 'USER'
const TOKEN = 'TOKEN'

async function login(loginData) {
    const {email, password} = loginData;
    try {
        const res = await axios.post(`${BASE_URL}users/login`, {email, password});
        if (res.data && res.data.user.email) {
            localStorage.setItem(USER, JSON.stringify({email: res.data.user.email}));
            localStorage.setItem(TOKEN, JSON.stringify(res.data.token))
        }
        return res.data.user
    } catch (err) {
        const {message} = err.response.data
        if (message === 'email') {
            return {emailError: 'Unknown Email Address'}
        } else if (message === 'password') {
            return {passwordError: 'Password is incorrect'}
        }
    }
}


function isLoggedIn() {
    const user = JSON.parse(localStorage.getItem(USER));
    return !!user
}


async function signup(signupData) {
    try {
        const res = await axios.post(`${BASE_URL}users/signup`, signupData);
        if (res.data.email) {
            localStorage.setItem(USER, JSON.stringify({email: res.data.email}))
        }
        return res.data
    } catch (err) {
        const {message} = err.response.data
        if (message === 'email') {
            return {emailError: 'Email already registered'}
        } else if (message === 'username') {
            return {usernameError: 'username already in use'}
        }
    }
}
