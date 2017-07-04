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
    form:null
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

import {
SET_FORM_TYPE,
SET_FORM_VALUES,
CLEAR_FORMS,
FORM_LOGIN,
FORM_FORGOT,
FORM_REGISTER,
} from './global-constants'
/*const {
SET_FORM_TYPE,
SET_FORM_VALUES,
CLEAR_FORMS,
FORM_LOGIN,
FORM_FORGOT,
FORM_REGISTER,
} = require('./global-constants').default*/


export function global(state = initStateGlobal, action){
    switch(action.type){
        case SET_FORM_TYPE:
            console.log('global reducer');
            console.log(state);
            console.log(action);
            state.form = action.value;
            return state;
        default:
        return state;
    }
}