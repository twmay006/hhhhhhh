export default {
    config(axios, store, router) {
        axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            store.dispatch('logout');
                            router.replace({
                                path: 'login',
                                query: { redirect: router.currentRoute.fullPath }
                            });
                            break;
                        case 403:
                            // TODO:跳转到403页面
                            break;
                        case 404:
                            // TODO:跳转到404页面
                            break;
                        case 500:
                            // TODO:跳转到错误页面
                            break;
                    }
                }
                return Promise.reject(error);
            });
    }
};
