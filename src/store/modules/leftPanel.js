import places from "./places";
import areas from "./areas";
import devices from "./devices";

export default {
    namespaced: true,
    state: {
        isPanelOpen: true,
        theme: 'places',
        filter: ''
    },
    getters: {
        items: (state) => state[state.theme].items
            .filter(item => item.title.toLowerCase().includes(state.filter) ||
                item.text.toLowerCase().includes(state.filter)
            ),
    },
    actions: {
        setTheme({commit, state}, {theme}) {
            if (theme === 'burger') {
                state.isPanelOpen ?
                    commit({type: 'closePanel'})
                    :
                    commit({type: 'openPanel'})
            } else {
                commit({type: 'openPanel'})
                commit({type: 'setTheme', theme})
            }
        },
        getItems({dispatch}) {
            dispatch('places/getItems')
            dispatch('areas/getItems')
            dispatch('devices/getItems')
        },
        filter({commit}, {filter}) {
            commit({type: 'setFilter', filter})
        }
    },
    mutations: {
        setTheme(state, {theme}) {
            state.theme = theme
        },
        setFilter(state, {filter}) {
            state.filter = filter
        },
        closePanel(state) {
            state.isPanelOpen = false
        },
        openPanel(state) {
            state.isPanelOpen = true
        }
    },
    modules: {
        places,
        areas,
        devices,
    }
}