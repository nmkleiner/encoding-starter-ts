import ApiService from './apiService'
const apiService = new ApiService();

export default {
    getDevices
}

const token = apiService.getToken()
const options= apiService.getJwtOptions()


async function getDevices() {
    const devices = await apiService.axios().post(`${apiService.getUrl()}devices`,
        {token, options});
    return devices.data
}