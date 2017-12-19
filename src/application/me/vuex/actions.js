import * as types from './mutation-types';
import { default as userService } from '../service/user-service';

export default {
    getMyProfile({ commit, state }) {
        return userService.getMyProfile().then(userProfile => {
            commit(types.SET_USER_PROFILE, userProfile);
        });
    },
    updateMyProfile({ commit, state }) {
        return userService.updateMyProfile(state.userProfile);
    },
    updateMyPassword({ commit }, userPassword) {
        return userService.updateMyPassword(userPassword);
    }
};
