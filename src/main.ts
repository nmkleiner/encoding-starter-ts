import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './assets/styles/_app.scss';
import VeeValidate, {ValidationProvider, ValidationObserver} from 'vee-validate';

Vue.config.productionTip = false;

Vue.directive('visible', (el, binding) => {
    const value = binding.value;

    if (!value) {
        el.style.visibility = 'hidden';
    } else {
        el.style.visibility = 'visible';
    }
});

Vue.use(VeeValidate);
// @ts-ignore
Vue.component('ValidationProvider', ValidationProvider);
// @ts-ignore
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
