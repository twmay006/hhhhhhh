import axios from 'axios';

export default {
    login(user) {
        var params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', user.username);
        params.append('password', user.password);
        return axios.post('oauth/token', params, {
            auth: {
                username: 'cid',
                password: '25d5e2e9b0ed47bbb9d4b82f4abc8c09'
            }
        }).then(response => {
            return response.data;
        });
    }
};
