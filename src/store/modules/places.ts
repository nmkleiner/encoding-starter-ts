import placeService from '../../services/place.service';

interface State {
    items: Place[];
}

interface Place {
    title: string;
    description: string;
}

export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters: {
        items: (state: State) => state.items,
    },
    actions: {
        async getItems({commit}: { commit: ({}) => void }) {
            const places = await placeService.getPlaces();
            commit({type: 'setPlaces', places});
        },
    },
    mutations: {
        setPlaces(state: State, {places}: {places: Place[]}) {
            state.items = places;
        },
    },
};
