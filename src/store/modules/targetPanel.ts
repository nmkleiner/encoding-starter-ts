import targets from './targets';

interface State {
    isOpen: boolean;
}

export default {
    namespaced: true,
    state: {
        isOpen: false,
    },
    actions: {
        togglePanel({commit}: { commit: ({}) => void }) {
            commit({type: 'togglePanel'});
        },
        getItems({dispatch}: { dispatch: ({}) => void }) {
            dispatch('targets/getItems');
        },
    },
    mutations: {
        togglePanel(state: State) {
            state.isOpen = !state.isOpen;
        },
    },
    modules: {
        targets,
    },
};
