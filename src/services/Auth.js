import axios from 'axios';

// API endpoint URL
const url = 'http://test.ansppb.an.gov.ng/api/';

// Authentication methods
export default {
    login(credentials) {
        return axios
            .post(url + 'auth/login/staff', credentials)
            .then(response => response.data);
    },
    signUp(credentials) {
        return axios
            .post(url + 'sign-up/', credentials)
            .then(response => response.data);
    },
    getSecretContent() {
        return axios.get(url + '/').then(response => response.data);
    }
};