const axios = require('axios');

export default class ApiService {
    private url: string = '';
    private TOKEN: string = '';
    private USER: string = ';';

    constructor() {
        this.url = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';
        this.TOKEN = 'TOKEN';
        this.USER = 'USER';
    }

    public getUrl() {
        return this.url;
    }

    public getToken() {
        // @ts-ignore
        return JSON.parse(localStorage.getItem(this.TOKEN));
    }

    public getUserID() {
        // @ts-ignore
        const user: {email}= JSON.parse(localStorage.getItem(this.USER));
        if (user) {
            return user.email;
        }
    }

    public getJwtOptions() {
        return {issuer: 'compie', subject: 'game of thrones', audience: this.getUserID()};
    }

    public axios() {
        return axios;
    }
}

