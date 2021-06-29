import {_getUser} from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function receiveAuthLogin(user) {
    return {
        type: LOGIN,
        authenticated: true,
        authedUser: user
    }
}

export function receiveAuthLogout() {
    return {
        type: LOGOUT,
        authenticated: null,
        authedUser: null
    }
}

export function handleLogin(id) {
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