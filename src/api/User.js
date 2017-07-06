'use strict'

import 'whatwg-fetch'
import {server} from './Utils'
var sha1 = require('sha-1')

export function init(){
    return fetch(server + '/user/init', {
        credentials: 'same-origin',    
    })
}

export function login(username, password, serial, nonce){
    /*console.log(init())*/
    return Promise.race([
            init().then(response=>{
            if(response.ok)return response.json();
            else throw 'fail';
        }).then(json=>{
            let token = sha1(json.nonce + sha1(password));
            return fetch(server + '/user/login' + '?username=' + username + '&token=' + token + '&serial=' + serial, {credentials: 'same-origin',})
        }).catch(e =>{
            return Promise.resolve({ok:false})
        })
        ]
    )  
}

export function logout(){
    return fetch(server + '/user/logout', {
        credentials: 'same-origin',    
    })
}

export function nop(){
    return fetch(server + '/user/nop', {
        credentials: 'same-origin',    
    })
}

/**
 * TODO:
 * register
 * restore
 * verify
*/