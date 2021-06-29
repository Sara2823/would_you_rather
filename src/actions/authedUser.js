import {_getUser} from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const AUTH_LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTH_LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function receiveAuthLogin(user) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        authenticated: true,
        authedUser: user
    }
}

export function receiveAuthLogout() {
    return {
        type: AUTH_LOGOUT_SUCCESS,
        authenticated: null,
        authedUser: null
    }
}

export function handleLoginUser(id) {
    return (dispatch) => {
        dispatch(showLoading());
        _getUser(id).then((user) => {
            dispatch(receiveAuthLogin(user));
            dispatch(hideLoading());
        });
    };
}

export function handleLogoutUser() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(receiveAuthLogout());
        dispatch(hideLoading());
    }
}