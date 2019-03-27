// import userService from "../../services/user.service";

export default {
    namespaced: true,
    state: {
        loggedInUser: {},
    },
    actions: {},
    mutations: {

        setLoggedIUser(state: UsersState, user: object) {
            state.loggedInUser = user;
        },
    },
};
