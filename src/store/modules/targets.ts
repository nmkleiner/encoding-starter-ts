import targetService from '../../services/target.service';

interface State {
    items: Item[];
    filter: string;
}

interface Item {
    title: string;
    active: boolean;
}

export default {
    namespaced: true,
    state: {
        items: [],
        filter: '',
    },
    getters: {
        items: (state: State) => state.items
            .filter((item) => item.title.toLowerCase().includes(state.filter.toLowerCase()))
            .sort((item1, item2) => +item2.active - +item1.active),
    },
    actions: {
        async getItems({commit}: { commit: ({}) => void }) {
            const targets = await targetService.getTargets();
            commit({type: 'setTargets', targets});
        },
        filter({commit}: { commit: ({}) => void }, {filter}: { filter: string }) {
            commit({type: 'setFilter', filter});
        },
    },
    mutations: {
        setTargets(state: State, {targets}: { targets: [] }) {
            state.items = targets;
        },
        setFilter(state: State, {filter}: { filter: string }) {
            state.filter = filter;
        },
    },
};

