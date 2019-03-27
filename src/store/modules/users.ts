// import userService from "../../services/user.service";
interface State {
    loggedInUser: object
}
export default {
    namespaced: true,
    state: {
        loggedInUser: {},
    },
    actions: {},
    mutations: {

        setLoggedIUser(state: State, user: object) {
            state.loggedInUser = user;
        },
    },
};
