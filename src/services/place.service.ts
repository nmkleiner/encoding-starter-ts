import ApiService from './apiService';

const apiService = new ApiService();

export default {
    getPlaces,
    query,
};

const token = apiService.getToken();
const options = apiService.getJwtOptions();


async function getPlaces() {
    const places = await apiService.axios().post(`${apiService.getUrl()}places`,
        {token, options});
    return places.data;
}


async function query(filter: string) {
    console.log('query',filter);
    const places = await apiService.axios().post(`${apiService.getUrl()}places`,
        {token, options, filter});
    return places.data;
}
