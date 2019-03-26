const axios = require('axios');

export default class apiService {
    constructor() {
        this.url = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';
        this.TOKEN = 'TOKEN';
        this.USER = 'USER';
    }
    getUrl() {
        return this.url;
    }
    getToken() {
        return JSON.parse(localStorage.getItem(this.TOKEN));
    }
    getUserID() {
        return JSON.parse(localStorage.getItem(this.USER)).email;
    }
    getJwtOptions() {
        return {issuer: 'compie', subject: 'game of thrones', audience: this.getUserID()};
    }
    axios() {
        return axios;
    }

}