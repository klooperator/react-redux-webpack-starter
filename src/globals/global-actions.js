const {
LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAILURE,
FETCHING_USER_DATA,
LOGGED_IN,
} = require('./global-constants').default;

export function aLoginRequest(username, password){
    return {
        type: LOGIN_REQUEST,
        payload: {
            username: username,
            password: password
        }
    }
}

export function aLoginFailure(){
    return {
        type: LOGIN_FAILURE,
    }
}

export function aLoginSuccess(json){
    return {
        type: LOGIN_SUCCESS,
        payload: json
    }
}

export function aFetchUserData(json){
    return {
        type: FETCHING_USER_DATA,
    }
}

export function aLoggedInWithData(json){
    return {
        type: LOGGED_IN,
        payload:json
    }
}