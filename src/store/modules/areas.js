import areaService from "../../services/area.service";

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
            const areas = await areaService.getAreas()
            commit({type: 'setAreas', areas})
        }
    },
    mutations: {
        setAreas(state, {areas}) {
            state.items = areas
        }
    }
}