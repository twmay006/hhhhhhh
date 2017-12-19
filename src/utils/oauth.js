export default {
    config(axios) {
        axios.interceptors.request.use(
            config => {
                config.baseURL = 'http://10.10.10.140:8080/cid-development/';
                config.withCredentials = true;
                const tokenStorage = localStorage.getItem('TOKEN');
                if (tokenStorage) {
                    const token = JSON.parse(tokenStorage);
                    config.headers.Authorization = `Bearer ${token.access_token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            });
    }
};
