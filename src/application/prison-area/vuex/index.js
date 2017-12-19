import actions from './actions';
import mutations from './mutations';

const state = {
    allPrisonAreas: [],
    pagedPrisonAreas: { content: [] },
    prisonArea: {}
};

export default {
    state,
    actions,
    mutations
};
