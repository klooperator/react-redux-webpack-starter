/*
 /$$           /$$   /$$                       /$$                 /$$              
|__/          |__/  | $$                      | $$                | $$              
 /$$ /$$$$$$$  /$$ /$$$$$$          /$$$$$$$ /$$$$$$    /$$$$$$  /$$$$$$    /$$$$$$ 
| $$| $$__  $$| $$|_  $$_/         /$$_____/|_  $$_/   |____  $$|_  $$_/   /$$__  $$
| $$| $$  \ $$| $$  | $$          |  $$$$$$   | $$      /$$$$$$$  | $$    | $$$$$$$$
| $$| $$  | $$| $$  | $$ /$$       \____  $$  | $$ /$$ /$$__  $$  | $$ /$$| $$_____/
| $$| $$  | $$| $$  |  $$$$/       /$$$$$$$/  |  $$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$
|__/|__/  |__/|__/   \___/        |_______/    \___/   \_______/   \___/   \_______/                   
                                                                                  */
import {Record} from 'immutable'

export const initStateGlobal = Record({
    currentUser: null,
    showState: true,
    currentState: null,
    store: null,
    ruote: null,
    form:null,
    isFetching:false,
    repeater: null
});


/*
                           /$$                                                /$$$$$$                                 /$$$ /$$$  
                          | $$                                               /$$__  $$                               /$$_/|_  $$ 
  /$$$$$$   /$$$$$$   /$$$$$$$ /$$   /$$  /$$$$$$$  /$$$$$$   /$$$$$$       | $$  \__//$$   /$$ /$$$$$$$   /$$$$$$$ /$$/    \  $$
 /$$__  $$ /$$__  $$ /$$__  $$| $$  | $$ /$$_____/ /$$__  $$ /$$__  $$      | $$$$   | $$  | $$| $$__  $$ /$$_____/| $$      | $$
| $$  \__/| $$$$$$$$| $$  | $$| $$  | $$| $$      | $$$$$$$$| $$  \__/      | $$_/   | $$  | $$| $$  \ $$| $$      | $$      | $$
| $$      | $$_____/| $$  | $$| $$  | $$| $$      | $$_____/| $$            | $$     | $$  | $$| $$  | $$| $$      |  $$     /$$/
| $$      |  $$$$$$$|  $$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$            | $$     |  $$$$$$/| $$  | $$|  $$$$$$$ \  $$$ /$$$/ 
|__/       \_______/ \_______/ \______/  \_______/ \_______/|__/            |__/      \______/ |__/  |__/ \_______/  \___/|___/ */

const {
ADD_REPEATER,
SET_FORM_TYPE,
LOGGED_OUT,
LOGIN_CHECK,
FETCHING_USER_DATA,
LOGIN_REQUEST,
SET_USER,SET_BOXES,SET_CURRENT_BOX,SET_WALLET,
LOGIN_SUCCESS,
LOGIN_FAILURE,
LOGGED_IN,
LOGOUT_REQUEST,
LOGOUT_SUCCESS,
LOGOUT_FAILURE,
BOX_CHANGED,
ADMIN_PAGE,
} = require('./global-constants').default;
/*const {
SET_FORM_TYPE,
SET_FORM_VALUES,
CLEAR_FORMS,
FORM_LOGIN,
FORM_FORGOT,
FORM_REGISTER,
} = require('./global-constants').default*/


export function global(state = initStateGlobal, action){
    /*s*/
    /*console.log(state)*/
    /*console.log(action);*/
    let newState;
    switch(action.type){
        case ADD_REPEATER:
            console.log(action.payload)
            newState = state.withMutations(s=>{
                s.set('repeater', action.payload);
            });
            return newState
        case SET_FORM_TYPE:
            newState = state.withMutations(s=>{
                s.set('form', action.payload);
            });
            return newState
        case LOGIN_CHECK:
            newState = state.merge({isFetching: true, currentState:LOGIN_CHECK});
            return newState;
/*                     /$$     /$$   /$$                               /$$$$$$$              /$$              
                      | $$    | $$  | $$                              | $$__  $$            | $$              
  /$$$$$$$  /$$$$$$  /$$$$$$  | $$  | $$  /$$$$$$$  /$$$$$$   /$$$$$$ | $$  \ $$  /$$$$$$  /$$$$$$    /$$$$$$ 
 /$$_____/ /$$__  $$|_  $$_/  | $$  | $$ /$$_____/ /$$__  $$ /$$__  $$| $$  | $$ |____  $$|_  $$_/   |____  $$
|  $$$$$$ | $$$$$$$$  | $$    | $$  | $$|  $$$$$$ | $$$$$$$$| $$  \__/| $$  | $$  /$$$$$$$  | $$      /$$$$$$$
 \____  $$| $$_____/  | $$ /$$| $$  | $$ \____  $$| $$_____/| $$      | $$  | $$ /$$__  $$  | $$ /$$ /$$__  $$
 /$$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$$$/ /$$$$$$$/|  $$$$$$$| $$      | $$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$
|_______/  \_______/   \___/   \______/ |_______/  \_______/|__/      |_______/  \_______/   \___/   \_______/*/
        case SET_USER:
            newState = state.withMutations(s=>{
                s.setIn(['currentUser','data'],action.payload);
                s.set('isFetching', false);
                s.set('currentState', LOGGED_IN);
                s.set('ruote', '/');
            });
            return newState
        case SET_BOXES:
            newState = state.withMutations(s=>{
                s.setIn(['currentUser','boxes'],action.payload);
                s.set('currentState', SET_BOXES);
            });
            return newState
        case SET_CURRENT_BOX:
            newState = state.withMutations(s=>{
                s.setIn(['currentUser','currentBox'],action.payload);
                s.set('currentState', SET_CURRENT_BOX);
            });
            return newState
        case SET_WALLET:
            newState = state.withMutations(s=>{
                s.setIn(['currentUser','wallet'],action.payload);
                s.set('currentState', SET_WALLET);
            });
            return newState
/**************************************************************************************************************/
        case LOGGED_OUT:
            newState = state.merge({isFetching: false, currentState:LOGGED_OUT, ruote:'/login'});
            return newState;
        case LOGIN_REQUEST:
            newState = state.merge({isFetching: true, currentState:LOGIN_REQUEST});
            return newState;
        case LOGIN_SUCCESS:
            let sessionId;
            if(action.payload.jsessionid)sessionId = action.payload.jsessionid;
            else sessionId = 'no'
            newState = state.merge({isFetching: true, ruote:'/', currentState:LOGIN_SUCCESS, currentUser:{sessionId:sessionId}});
            return newState;
        case LOGIN_FAILURE:
            newState = state.merge({isFetching: false, currentState:LOGIN_FAILURE});
            return newState;
        case FETCHING_USER_DATA:
            newState = state.merge({isFetching: true, currentState:FETCHING_USER_DATA});
            return newState;
        case LOGGED_IN:
            /*console.log('00000 REDUCER 000000');*/
            if(action.payload)console.log(action);
            /*else console.log('PQPQPQPQPQPQPQPQPQPQPQPQQPQP');*/
            /*console.log(state.toJS());*/
            /*if(action.payload)newState = state.withMutations(s=>{
                s.set('isFetching', false);
                s.set('currentState', LOGGED_IN);
                s.set('ruote', '/')
                s.setIn(['currentUser','data'],action.payload.currentUser);
                s.setIn(['currentUser','boxes'],action.payload.userBoxes);
                s.setIn(['currentUser','currentBox'],action.payload.currentBox);
                s.setIn(['currentUser','wallet'],action.payload.wallet);
                s.setIn(['currentUser','attributesFull'],action.payload.attributesFull);
                s.setIn(['currentUser','typesAll'],action.payload.typesAll);
            });
            else newState = state.merge({isFetching: false, currentState:LOGGED_IN, ruote:'/'});
            console.log('_____ REDUCER ______');
            return newState;*/
        case LOGOUT_REQUEST:
            newState = state.withMutations(s=>{
                s.set('isFetching', true);
                s.set('currentState', LOGOUT_REQUEST);
            });
            return newState
        case LOGOUT_SUCCESS:
            newState = state.merge({isFetching: false, currentState:LOGGED_OUT, ruote:'/login'});
            return newState;
        case LOGOUT_FAILURE:
            newState = state.withMutations(s=>{
                s.set('isFetching', false);
                s.set('currentState', LOGOUT_FAILURE);
            });
            return newState;

        case BOX_CHANGED:
            newState = state.withMutations(s=>{
                s.set('currentState', FETCHING_USER_DATA);
                s.setIn(['currentUser','currentBox'],action.payload);
            });
            return newState;

        case ADMIN_PAGE:
            newState = state.withMutations(s=>{
                s.set('currentState', ADMIN_PAGE);
                s.set('ruote','/admin');
            });
            return newState;



        default:
            return state;
    }
}