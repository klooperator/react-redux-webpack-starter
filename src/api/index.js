'use strict'
export * from './Box'
export * from './Contacts'
export * from './User'
export * from './Users'
export * from './Utils'

import {getCurrentUser} from './Users'
import {getAllBoxes} from './Box'

export default function apiWrapper(apiCallFuncPromise, successAction, failureAction, dispatch){
    console.log('w___r__a__p__e__r');
    apiCallFuncPromise.then(response =>{
        console.log(response);
        if(response.ok)return response.json();
        else throw 'something is wrong';
    }).then(json => {
        console.log('wrapper final json::::::');
        console.log(json);
        dispatch(successAction(json));
    }).catch(e => {console.log(e);failureAction(e)})
}


export function getInitData(successAction, failureAction, dispatch){
    return Promise.all([getCurrentUser(),getAllBoxes()])
    .then(values => {
        console.log('all promises resolved');
        console.log(values);
        return Promise.all([values[0].json(), values[1].json()]);
    }).then(values=>{
        console.log('all promises resolved again');
        console.log(values);
        let finalJson = {currentUser:values[0], userBoxes:values[1],ok:true};
        /*return Promise.resolve(finalJson);*/
        dispatch(successAction(finalJson));
    })
}