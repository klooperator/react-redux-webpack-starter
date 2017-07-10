'use strict'
export * from './Box'
export * from './Contacts'
export * from './User'
export * from './Users'
export * from './Utils'
export * from './Wallet'

import {getCurrentUser} from './Users'
import {getAllBoxes,getCurrentBox} from './Box'
import {walletUserTransactions} from './Wallet'
import {typesSearchAll} from './Types'
import {getFullAttributes_full} from './Attributes'

export default function apiWrapper(apiCallFuncPromise, successAction, failureAction, dispatch){
    /*console.log('w___r__a__p__e__r');*/
    console.log(successAction());
    apiCallFuncPromise.then(response =>{
        /*console.log(response);*/
        if(response.ok)return response.json();
        else throw 'something is wrong';
    }).then(json => {
        /*console.log('wrapper final json::::::');
        console.log(json);*/
        dispatch(successAction(json));
    }).catch(e => {console.log(e);dispatch(failureAction(e))})
}


export function getInitData(successAction, failureAction, dispatch){
    return Promise.all([
        getCurrentUser(),
        getAllBoxes(),
        getCurrentBox(),
        walletUserTransactions(),
        getFullAttributes_full(),
        typesSearchAll(false, false, 'endpointType,room,master,templateId')
        ])
    .then(values => {
        /*console.log('all promises resolved');
        console.log(values);*/
        return Promise.all([values[0].json(), values[1].json(), values[2].json(), values[3].json(), values[4].json(), values[5].json()]);
    }).then(values=>{
        /*console.log('all promises resolved again');
        console.log(values);*/
        let finalJson = {currentUser:values[0], userBoxes:values[1], currentBox:values[2],wallet:values[3],attributesFull:values[4],typesAll:values[5], ok:true};
        /*return Promise.resolve(finalJson);*/
        dispatch(successAction(finalJson));
    })
}