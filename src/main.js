import Vue from 'vue';
import app from './app';
import router from './router';
import store from './store/';
import ElementUI from 'element-ui';
import axios from 'axios';
import { default as oauth } from './utils/oauth';
import { default as errorHandler } from './utils/error-handler';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/style.scss';
import './assets/fonts/iconfont.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

oauth.config(axios);
errorHandler.config(axios, store, router);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<app/>',
    components: { app }
});
