import * as types from './mutation-types';

export default {
    [types.SET_TENANT](state, tenant) {
        state.tenant = tenant;
    },
    [types.UPDATE_TENANT](state, tenant) {
        Object.assign(state.tenant, tenant);
    },
    [types.SET_PAGED_TENANTS](state, pagedTenants) {
        state.pagedTenants = pagedTenants;
    }
};
