import actions from './actions';
import mutations from './mutations';

const state = {
    allPrisonHouses: [],
    pagedPrisonHouses: { content: [] },
    prisonHouse: {}
};

export default {
    state,
    actions,
    mutations
};
