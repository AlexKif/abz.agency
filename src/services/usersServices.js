import axios from 'axios';

const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const usersServices = {
    getUser,
    getAllUsers,
    getPosition,
    addUser,
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

function getPosition() {
    return axios.get(`${baseURL}/positions`).then(res => res.data)
}

function getUserToken() {
    return axios.get(`${baseURL}/token`).then(res => res.data)
}

function addUser({email, name, phone, photo, position}) {

    const formData = new FormData();

    formData.append('position_id', position);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', photo[0]);

    return getUserToken().then(res => {
        return axios.post(`${baseURL}/users`, formData, {headers: {'Token': res.token}}).then(res => res.data)
    });
}
