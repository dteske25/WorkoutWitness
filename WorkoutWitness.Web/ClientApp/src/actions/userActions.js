import * as helpers from './fetchHelpers';
import * as types from './actionTypes';

export function loginUserAction(data) {
  return { type: types.loginUser, data };
}

export function registerUserAction(data) {
  return { type: types.registerUser, data };
}

export function logoutUserAction() {
  return { type: types.logoutUser };
}

export function Login({ username, password }) {
  return dispatch => {
    return helpers.Post('/api/auth/login', { username, password })
      .then(response => response.json())
      .then(json => dispatch(loginUserAction(json)))
      .catch(err => console.error(err));
  }
}

export function Register({ firstName, lastName, username, emailAddress, password }) {
  return dispatch => {
    return helpers.Post('/api/auth/register', { firstName, lastName, username, emailAddress, password })
      .then(response => response.json())
      .then(json => dispatch(registerUserAction(json)))
      .catch(err => console.error(err));
  }
}

export function Logout() {
  return dispatch => {
    return helpers.Post('/api/auth/logout')
      .then(() => dispatch(logoutUserAction()))
      .catch(err => console.error(err));
  }
}