import * as types from './mutation-types';
// import { default as menu } from '../service/menu-service';

export default {
    handleCollapse({ commit }) {
        commit(types.SET_COLLAPSED);
    }
};
