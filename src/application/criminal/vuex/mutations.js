import * as types from './mutation-types';

export default {
    [types.SET_CRIMINAL](state, criminal) {
        state.criminal = criminal;
    },
    [types.UPDATE_CRIMINAL](state, criminal) {
        Object.assign(state.criminal, criminal);
    },
    [types.SET_PAGED_CRIMINALS](state, pagedTenants) {
        state.pagedTenants = pagedTenants;
    }
};
