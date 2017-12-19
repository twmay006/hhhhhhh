import actions from './actions';
import mutations from './mutations';

const state = {
    pagedTenants: { content: [] },
    tenant: {}
};

export default {
    state,
    actions,
    mutations
};
