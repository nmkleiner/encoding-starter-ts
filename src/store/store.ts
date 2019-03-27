import Vue from 'vue';
import Vuex from 'vuex';

import containers from './modules/containers';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        containers,
        users,
    },
});
