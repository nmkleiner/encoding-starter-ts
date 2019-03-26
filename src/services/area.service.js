import ApiService from './apiService'
const apiService = new ApiService();

export default {
    getAreas
}

const token = apiService.getToken()
const options= apiService.getJwtOptions()


async function getAreas() {
    const areas = await apiService.axios().post(`${apiService.getUrl()}areas`,
        {token, options});
    return areas.data
}