const {
LOGIN_CHECK,
LOGIN_SUCCESS,
LOGIN_REQUEST,
LOGIN_FAILURE,
FETCHING_USER_DATA,
LOGOUT_REQUEST,
} = require('./global-constants').default;

import wrapper, {
    login, 
    getInitData,
    getCurrentUser,
    nop,logout,
} from '../api'
import {
    aLoginFailure, 
    aLoginSuccess,
    aFetchUserData,
    aLoggedInWithData,
    aLoggedOutState,
    aLogoutSuccess,
    aLogoutFailure,
} from './global-actions'

/**
 * This function must either return (exit unconditionaly) OR dispatch an action that will change state to something that will not trigger this function again. 
 * High probability you will stuck in infinite loop here !!! 
 * @param {redux store} store - a store to listen to 
 */
export default function storeListener(store){
    /*console.log('___LISTENER START _____' + store.getState()['global'].get('currentState'));*/
    switch (store.getState()['global'].get('currentState')){
        case LOGIN_CHECK:
            wrapper(nop(), aLoginSuccess, aLoggedOutState, store.dispatch);
            break;
        case LOGIN_REQUEST:
            wrapper(login('dprpic@zipato.com', '535934pkh'), aLoginSuccess, aLoginFailure, store.dispatch);
            break;
        case LOGIN_SUCCESS:
            store.dispatch(aFetchUserData());
            break;
        case FETCHING_USER_DATA:
            getInitData(aLoggedInWithData,aLoggedInWithData, store.dispatch); 
            break;
        case LOGOUT_REQUEST:
            wrapper(logout(), aLogoutSuccess, aLogoutFailure, store.dispatch);
            break;
        default:
            return
    }
    /*console.log('___LISTENER END _____');*/

}