import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import SignupPage from "./views/SignupPage.vue";

const RadarPage = () => import('./views/RadarPage.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'radar-page',
      component: RadarPage,
    },
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup-page',
      component: SignupPage
    },
    {
      path: '*', redirect: {name: 'radar-page'}
    }
  ]
})
