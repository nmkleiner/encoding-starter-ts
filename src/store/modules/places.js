import placeService from '../../services/place.service'

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        items: (state) => state.items
    },
    actions: {
        async getItems({commit}) {
            const places = await placeService.getPlaces()
            commit({type: 'setPlaces', places})
        }
    },
    mutations: {
        setPlaces(state, {places}) {
            state.items = places
        }
    },
}