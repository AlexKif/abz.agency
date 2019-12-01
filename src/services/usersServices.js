import axios from 'axios';

const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const usersServices = {
    getUser
};

function getUser(id) {
    return axios.get(`${baseURL}/users/${id}`).then(res => {
        return res.data
    })
}