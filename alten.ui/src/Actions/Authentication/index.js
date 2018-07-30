import axios from 'axios';
import * as types from '../actionTypes';
import * as services from '../../Services/servicesURL';

function AuthUser(authUser) {
    return {
        type: types.AUTH_USER,
        payload: authUser
    }
}

export function signinUser({ username, password }) {
    return function (dispatch) {

        var request = axios.post(services.LOGIN_URL,
            {
                UserName: username,
                Password: password
            }).then(response => {
                if (response.data != null) {
                    dispatch(AuthUser({ isAuth: true, data: response.data }));
                }
            });
    }
}

export function logOut() {
    return function (dispatch) {
        dispatch(AuthUser({ isAuth: false, data: {} }));
    }
}