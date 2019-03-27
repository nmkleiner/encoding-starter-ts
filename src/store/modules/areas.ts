import areaService from '../../services/area.service';

interface State {
    items: Area[];
}
interface Area {
    img: string;
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
        async getItems({commit}: {commit: ({}) => void}) {
            const areas = await areaService.getAreas();
            commit({type: 'setAreas', areas});
        },
    },
    mutations: {
        setAreas(state: State, {areas}: { areas: Area[] }) {
            state.items = areas;
        },
    },
};
