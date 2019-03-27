import deviceService from "../../services/device.service";

export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters: {
        items: (state: DevicesState) => state.items,
    },
    actions: {
        async getItems({commit}: {commit: ({}) => void}) {
            const devices = await deviceService.getDevices();
            commit({type: 'setDevices', devices});
        },
    },
    mutations: {
        setDevices(state: DevicesState, {devices}: {devices: Device[]}) {
            state.items = devices;
        },
    },
};
