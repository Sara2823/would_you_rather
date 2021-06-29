import {AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS} from "../actions/authedUser";

export default function login(state = {}, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: action.authenticated,
                authedUser: action.authedUser
            };
        case AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                authenticated: action.authenticated,
                authedUser: action.authedUser
            };
        default:
            return state;
    }
}