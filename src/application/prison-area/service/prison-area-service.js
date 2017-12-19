import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/prison-areas/${id}`).then(response => {
            return response.data;
        });
    },
    getAll() {
        return axios.get(`api/prison-areas/all`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/prison-areas`, { params: params }).then(response => {
            return response.data;
        });
    },
    add(prisonArea) {
        return axios.post('api/prison-areas', prisonArea);
    },
    update(prisonArea) {
        return axios.put(`api/prison-areas/${prisonArea.id}`, prisonArea);
    },
    delete(id) {
        return axios.delete(`api/prison-areas/${id}`);
    }
};
