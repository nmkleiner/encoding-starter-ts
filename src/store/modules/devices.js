import deviceService from "../../services/device.service";

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
            const devices = await deviceService.getDevices()
            commit({type: 'setDevices', devices})
        }
    },
    mutations: {
        setDevices(state, {devices}) {
            state.items = devices
        }
    }
}