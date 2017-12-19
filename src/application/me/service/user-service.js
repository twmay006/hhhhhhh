import axios from 'axios';

export default {
    getMyProfile() {
        return axios.get('api/users/me').then(response => {
            return response.data;
        });
    },
    updateMyProfile(userProfile) {
        return axios.put('api/users/me', userProfile);
    },
    updateMyPassword(userPassword) {
        return axios.put('api/users/me/password', userPassword);
    }
};
