import areaService from '../../services/area.service';


export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters: {
        items: (state: AreasState ) => state.items,
    },
    actions: {
        async getItems({commit}: {commit: ({}) => void}) {
            const areas = await areaService.getAreas();
            commit({type: 'setAreas', areas});
        },
    },
    mutations: {
        setAreas(state: AreasState , {areas}: { areas: Area[] }) {
            state.items = areas;
        },
    },
};
