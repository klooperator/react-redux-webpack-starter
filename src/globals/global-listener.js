const {
LOGIN_CHECK,
LOGIN_SUCCESS,
LOGIN_REQUEST,
LOGIN_FAILURE,
FETCHING_USER_DATA,
LOGOUT_REQUEST,
BOX_CHANGED
} = require('./global-constants').default;

import wrapper, {
    login, 
    getInitData,
    getCurrentUser,
    nop,logout,
    getAllBoxes,
    getCurrentBox,
    walletUserTransactions,
    typesSearchAll,
    getFullAttributes_full
} from '../api'
import {
    aGenericFail,
    aLoginFailure, 
    aLoginSuccess,
    aFetchUserData,
    aLoggedInWithData,
    aLoggedOutState,
    aLogoutSuccess,
    aLogoutFailure,
    aSetCurrentUser,
    aSetBoxes,
    aSetCurrentBox,
    aSetWallet
} from './global-actions'

function test(){
    return getInitData();
}

/**
 * This function must either return (exit unconditionaly) OR dispatch an action that will change state to something that will not trigger this function again. 
 * High probability you will stuck in infinite loop here !!! 
 * @param {redux store} store - a store to listen to 
 */
export default function storeListener(store){

    console.log('___LISTENER START _____' + store.getState()['global'].get('currentState'));
    switch (store.getState()['global'].get('currentState')){
        case LOGIN_CHECK:
            /*console.log(typeof aLoginFailure());
            console.log('debug end');*/
            wrapper(nop(), aLoginSuccess, aLoggedOutState, store.dispatch);
            break;
        case LOGIN_REQUEST:
            wrapper(login('icevis@3plus.hr', 'demozipato'), aLoginSuccess, aLoginFailure, store.dispatch);
            break;
        case LOGIN_SUCCESS:
            store.dispatch(aFetchUserData());
            break;
        case FETCHING_USER_DATA:
            /*getInitData(aLoggedInWithData,aLoggedInWithData, store.dispatch); */
            let r = store.getState()['global'].get('repeater');
            r.addPromise(getCurrentUser, aSetCurrentUser, aGenericFail, store.dispatch, 0, true);
            r.addPromise(getAllBoxes, aSetBoxes, aGenericFail, store.dispatch, 0, true);
            r.addPromise(getCurrentBox, aSetCurrentBox, aGenericFail, store.dispatch, 0, true);
            r.addPromise(walletUserTransactions, aSetWallet, aGenericFail, store.dispatch, 0, true);
            break;
        case LOGOUT_REQUEST:
            wrapper(logout(), aLogoutSuccess, aLogoutFailure, store.dispatch);
            break;
        case BOX_CHANGED:
            getInitData(aLoggedInWithData,aLoggedInWithData, store.dispatch); 
            break;
        default:
            return
    }
    /*console.log('___LISTENER END _____');*/

}