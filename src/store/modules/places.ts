import placeService from '../../services/place.service';


export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters: {
        items: (state: PlacesState) => state.items,
    },
    actions: {
        async getItems({commit}: { commit: ({}) => void }) {
            const places = await placeService.getPlaces();
            commit({type: 'setPlaces', places});
        },
    },
    mutations: {
        setPlaces(state: PlacesState, {places}: {places: Place[]}) {
            state.items = places;
        },
    },
};
