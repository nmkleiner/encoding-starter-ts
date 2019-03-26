import targetService from "../../services/target.service";

export default {
    namespaced: true,
    state: {
        items: [],
        filter: ''
    },
    getters: {
        items: (state) => state.items
            .filter(item => item.title.toLowerCase().includes(state.filter.toLowerCase()))
            .sort((item1, item2) => item2.active - item1.active)

    },
    actions: {
        async getItems({commit}) {
            const targets = await targetService.getTargets()
            commit({type: 'setTargets', targets})
        },
        filter({commit}, {filter}) {
            commit({type: 'setFilter', filter})
        }
    },
    mutations: {
        setTargets(state, {targets}) {
            state.items = targets
        },
        setFilter(state, {filter}) {
            state.filter = filter
        }
    },
}