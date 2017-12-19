import * as types from './mutation-types';
import { default as tenantService } from '../service/tenant-service';

export default {
    getTenant({ commit, state }, id) {
        return tenantService.get(id).then(tenant => {
            commit(types.SET_TENANT, tenant);
        });
    },
    getPagedTenants({ commit, state }, params) {
        return tenantService.getPaged(params).then(tenants => {
            commit(types.SET_PAGED_TENANTS, tenants);
        });
    },
    addPrisonTenant({ commit, state }) {
        return tenantService.addPrisonTenant(state.tenant);
    },
    updatePrisonTenant({ commit, state }) {
        return tenantService.updatePrisonTenant(state.tenant);
    },
    deleteTenant({ commit }, id) {
        return tenantService.delete(id);
    }
};
