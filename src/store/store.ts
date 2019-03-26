import Vue from 'vue'
import Vuex from 'vuex'

import containers from './modules/containers'
import leftPanel from './modules/leftPanel'
import targetPanel from './modules/targetPanel'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        containers,
        users
    }
})
