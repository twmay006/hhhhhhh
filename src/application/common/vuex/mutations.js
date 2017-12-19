import * as types from './mutation-types';

export default {
    [types.SET_COLLAPSED](state) {
        state.collapsed = !state.collapsed;
    }
};
