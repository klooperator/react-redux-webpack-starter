import { combineReducers } from 'redux'
import {globalReducer,initStateGlobal} from './global-reducer'
import { responsiveStateReducer } from 'redux-responsive'

export function rootInitState(){
    return({
        global: new initStateGlobal(),
    });
}

const rootReducer = combineReducers({
    globalReducer, 
    browser: responsiveStateReducer
}); 
export default rootReducer;