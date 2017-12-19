import Vue from 'vue';
import Vuex from 'vuex';
import { vuex } from '../application';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: vuex,
    strict: debug
});
