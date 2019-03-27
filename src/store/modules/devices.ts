import deviceService from "../../services/device.service";

interface State {
    items: Device[];
}
interface Device {
    icon: string;
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
            const devices = await deviceService.getDevices();
            commit({type: 'setDevices', devices});
        },
    },
    mutations: {
        setDevices(state: State, {devices}: {devices: Device[]}) {
            state.items = devices;
        },
    },
};
