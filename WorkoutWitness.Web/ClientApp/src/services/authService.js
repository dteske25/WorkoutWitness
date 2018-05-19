import * as helpers from './fetchHelpers';

export function Login({username, password}){
    return helpers.Post('/api/auth/login', {username, password});
}

export function Register({firstName, lastName, username, emailAddress, password}){
    return helpers.Post('/api/auth/register', {firstName, lastName, username, emailAddress, password})
}

export function Logout(){
    return helpers.Post('/api/auth/logout');
}