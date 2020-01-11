import { BehaviorSubject } from 'rxjs';

import { handleResponse } from '../_helpers/handle-response';
import { authHeader } from '../_helpers/auth-header';

const currentTokenSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentToken')));

export const authenticationService = {
    login,
    logout,
    signup,
    edit,
    currentToken: currentTokenSubject.asObservable(),
    get currentTokenValue () { return currentTokenSubject.value }
};

function login(login, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password })
    };

    return fetch(`https://fis-api-gateway.herokuapp.com/api/v1/authenticate`, requestOptions)
        .then(handleResponse)
        .then(token => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentToken', JSON.stringify(token));
            currentTokenSubject.next(token);

            return token;
        });
}

function signup(login, password, email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password, email })
    };

    return fetch(`https://fis-api-gateway.herokuapp.com/api/v1/user`, requestOptions)
        .then(handleResponse);
}

function edit(newPassword, newEmail) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), ...{ 'Content-Type': 'application/json' }},
        body: JSON.stringify({ newPassword, newEmail })
    };

    return fetch(`https://fis-api-gateway.herokuapp.com/api/v1/user`, requestOptions)
        .then(handleResponse);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentToken');
    currentTokenSubject.next(null);
}