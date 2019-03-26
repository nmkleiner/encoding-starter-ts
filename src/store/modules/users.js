// import userService from "../../services/user.service";

export default {
    namespaced: true,
    state: {
        loggedInUser: {}
    },
    actions: {
    },
    mutations: {
        setLoggedIUser(state, user) {
            state.loggedInUser = user
        }
    },
}