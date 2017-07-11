const {
ADD_REPEATER,
GENERIC_FAIL,
LOGIN_CHECK,
SET_USER,SET_BOXES,SET_CURRENT_BOX,SET_WALLET,
LOGGED_OUT,
LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAILURE,
FETCHING_USER_DATA,
LOGGED_IN,
LOGOUT_REQUEST,
LOGOUT_SUCCESS,
LOGOUT_FAILURE,
BOX_CHANGED,
ADMIN_PAGE,
} = require('./global-constants').default;

export function aGenericFail(){
    return {type:GENERIC_FAIL}
}

export function addRepeaterToStore(repeater){
    return{
        type: ADD_REPEATER,
        payload: repeater
    }
}

export function aLoginCheck(json){
    return {
        type: LOGIN_CHECK,
    }
}

export function aLoggedOutState(json){
    return {
        type: LOGGED_OUT,
    }
}

export function aLogOut(){
    return {
        type: LOGOUT_REQUEST,
    }
}

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

export function aLogoutSuccess(){
    return {
        type: LOGOUT_SUCCESS,
    }
}

export function aLogoutFail(){
    return {
        type: LOGOUT_FAILURE,
    }
}

export function aBoxChange(newBox){
    return {
        type: BOX_CHANGED,
        payload: newBox
    }
}

export function aAdminPage(){
    return{
        type: ADMIN_PAGE
    }
}
/*/////////////*/

export function aSetCurrentUser(json){
    return{
        type: SET_USER,
        payload:json
    }
}

export function aSetBoxes(json){
    return{
        type: SET_BOXES,
        payload:json
    }
}

export function aSetCurrentBox(json){
    return{
        type: SET_CURRENT_BOX,
        payload:json
    }
}

export function aSetWallet(json){
    return{
        type: SET_WALLET,
        payload:json
    }
}

