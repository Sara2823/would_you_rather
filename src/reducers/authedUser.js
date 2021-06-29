import {LOGIN, LOGOUT} from "../actions/authedUser";

export default function login(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                authenticated: action.authenticated,
                authedUser: action.authedUser
            };
        case LOGOUT:
            return {
                ...state,
                authenticated: action.authenticated,
                authedUser: action.authedUser
            };
        default:
            return state;
    }
}