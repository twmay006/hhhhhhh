import * as types from './mutation-types';

export default {
    [types.SET_USER_PROFILE](state, userProfile) {
        state.userProfile = userProfile;
    },
    [types.UPDATE_USER_PROFILE](state, userProfile) {
        Object.assign(state.userProfile, userProfile);
    }
};
