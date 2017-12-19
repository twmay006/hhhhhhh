import Vue from 'vue';
import Router from 'vue-router';
import { routes } from '../application';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: routes
});
