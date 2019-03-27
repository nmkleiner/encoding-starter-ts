import places from './places';
import areas from './areas';
import devices from './devices';

interface State {
    isPanelOpen: boolean;
    theme: string;
    filter: string;
}

export default {
    namespaced: true,
    state: {
        isPanelOpen: true,
        theme: 'places',
        filter: '',
    },
    getters: {
// @ts-ignore
        items: (state: State) => state[state.theme].items
            .filter((item: {title: string, description: string}) => item.title.toLowerCase().includes(state.filter) ||
                item.description.toLowerCase().includes(state.filter)),
    },
    actions: {
        setTheme({commit, state}: {commit: ({}) => void, state: State}, {theme}: {theme: string}) {
            if (theme === 'burger') {
                state.isPanelOpen ?
                    commit({type: 'closePanel'})
                    :
                    commit({type: 'openPanel'});
            } else {
                commit({type: 'openPanel'});
                commit({type: 'setTheme', theme});
            }
        },
        getItems({dispatch}: {dispatch: ({}) => void}) {
            dispatch('places/getItems');
            dispatch('areas/getItems');
            dispatch('devices/getItems');
        },
        filter({commit}: {commit: ({}) => void}, {filter}: {filter: string}) {
            commit({type: 'setFilter', filter});
        }
    },
    mutations: {
        setTheme(state: State, {theme}: {theme: string}) {
            state.theme = theme;
        },
        setFilter(state: State, {filter}: {filter: string}) {
            state.filter = filter;
        },
        closePanel(state: State) {
            state.isPanelOpen = false;
        },
        openPanel(state: State) {
            state.isPanelOpen = true;
        },
    },
    modules: {
        places,
        areas,
        devices,
    },
};
