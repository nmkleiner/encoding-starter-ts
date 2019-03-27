import targets from './targets';


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
        togglePanel(state: TargetPanelState ) {
            state.isOpen = !state.isOpen;
        },
    },
    modules: {
        targets,
    },
};
