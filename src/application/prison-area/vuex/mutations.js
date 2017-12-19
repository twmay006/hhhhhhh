import * as types from './mutation-types';

export default {
    [types.SET_PRISON_AREA](state, prisonArea) {
        state.prisonArea = prisonArea;
    },
    [types.UPDATE_PRISON_AREA](state, prisonArea) {
        Object.assign(state.prisonArea, prisonArea);
    },
    [types.SET_ALL_PRISON_AREAS](state, allPrisonAreas) {
        state.allPrisonAreas = allPrisonAreas;
    },
    [types.SET_PAGED_PRISON_AREAS](state, pagedPrisonAreas) {
        state.pagedPrisonAreas = pagedPrisonAreas;
    }
};
