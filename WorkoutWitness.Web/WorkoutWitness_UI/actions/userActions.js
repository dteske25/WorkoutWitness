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
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ username, password })
        }).then(response => response.json()).then(data => {
            console.log(data);
        });
    };
}

export function createUser(username, email, firstName, lastName, password) {
    return dispatch => {
        fetch('/api/auth/register', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                username,
                email,
                firstName,
                lastName,
                password
            })
        }).then(response => response.json()).then(data => {
            console.log(data);
        });
    };
}