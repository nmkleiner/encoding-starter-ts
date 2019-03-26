import ApiService from './apiService'
const apiService = new ApiService();

export default {
    getTargets
}

const token = apiService.getToken()
const options= apiService.getJwtOptions()


async function getTargets() {
    const targets = await apiService.axios().post(`${apiService.getUrl()}targets`,
        {token, options});
    return targets.data
}