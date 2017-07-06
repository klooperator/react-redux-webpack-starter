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
    ruote: '/',
    form:null,
    isFetching:false,
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
FETCHING_USER_DATA,
LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAILURE,
LOGGED_IN
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
    console.log('G___REDUCER___G  ' + action.type + ', in current state of: ');
    /*console.log(state)*/
    console.log(action);
    let newState;
    switch(action.type){
        case LOGIN_REQUEST:
            newState = state.merge({isFetching: true, currentState:LOGIN_REQUEST});
            return newState;
        case LOGIN_SUCCESS:
            let sessionId;
            if(action.payload.jsessionid)sessionId = action.payload.jsessionid;
            else sessionId = 'no'
            newState = state.merge({isFetching: true, currentState:LOGIN_SUCCESS, currentUser:{sessionId:sessionId}});
            return newState;
        case LOGIN_FAILURE:
            newState = state.merge({isFetching: false, currentState:LOGIN_FAILURE});
            return newState;
        case FETCHING_USER_DATA:
            newState = state.merge({isFetching: true, currentState:FETCHING_USER_DATA});
            return newState;
        case LOGGED_IN:
            if(action.payload)newState = state.withMutations(s=>{
                s.set('isFetching', false);
                s.set('currentState', LOGGED_IN);
                s.setIn(['currentUser','data'],action.payload.currentUser);
                s.setIn(['currentUser','boxes'],action.payload.userBoxes)
            });
            
            /*newState = state.merge({isFetching: false, currentState:LOGGED_IN, currentUser:{data:action.payload.currentUser, boxes:action.payload.userBoxes}});*/
            else newState = state.merge({isFetching: false, currentState:LOGGED_IN});
            return newState;
        default:
            return state;
    }
}