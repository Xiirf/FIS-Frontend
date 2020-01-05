import { authHeader } from '../_helpers/auth-header';
import { handleResponse } from '../_helpers/handle-response';

export const userService = {
    getAllUsers,
    getUser
};

function getUser() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`https://fis-api-gateway.herokuapp.com/api/v1/user`, requestOptions).then(handleResponse);
}

function getAllUsers() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`https://fis-api-gateway.herokuapp.com/api/v1/users`, requestOptions).then(handleResponse);
}