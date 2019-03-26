import targets from "./targets";

export default {
    namespaced: true,
    state: {
        isOpen: false
    },
    actions: {
        togglePanel({commit}) {
            commit({type: 'togglePanel'})
        },
        getItems({dispatch}) {
            dispatch('targets/getItems')
        },
    },
    mutations: {
        togglePanel(state) {
            state.isOpen = !state.isOpen
        }
    },
    modules: {
        targets
    }
}