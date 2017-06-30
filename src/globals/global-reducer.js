import {Record} from 'immutable'

export const initStateGlobal = ()=>{
 const globalRecord = ({
  currentUser: null,
  showState: true,
  currentState: null,
  store: null
    });
 return globalRecord
}

export function globalReducer(state = initStateGlobal(), action){
    console.log('global reducer');
    switch(action.type){
        default:
        console.log('gr def');
        console.log(state);
        return state;
    }
}