import axios from 'axios';

const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const usersServices = {
    getUser,
    getAllUsers
};

function getUser(id) {
    return axios.get(`${baseURL}/users/${id}`).then(res => {
        return res.data
    })
}

function getAllUsers(page, count) {
    return axios.get(`${baseURL}/users/?page=${page}&count=${count}`).then(res => {
        return res.data
    })
}