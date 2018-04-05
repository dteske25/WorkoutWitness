import * as types from './types';
import 'isomorphic-fetch';

export function UserCreateAction(data) {
    return {
        type: types.USER_CREATE,
        data
    };
}

export function UserLogInAction(data) {
    return {
        type: types.USER_LOGIN,
        data
    };
}

export function UserLogOutAction() {
    return {
        type: types.USER_LOGOUT
    };
}

export function logInUser(username, password) {
    return dispatch => {
        fetch('/api/auth/login', {
            method: 'post',
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ username, password })
        });
    };
}

export function createUser(username, email, firstName, lastName, password) {
    return dispatch => {
        fetch('/api/auth/register', {
            method: 'post',
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                username,
                "EmailAddress": email,
                firstName,
                lastName,
                password
            })
        });
    };
}

export function logoutUser(token) {
    return dispatch => {
        fetch('/api/auth/logout', {
            method: 'post',
        });
    }
}