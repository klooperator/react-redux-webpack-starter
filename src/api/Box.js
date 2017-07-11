'use strict'

import 'whatwg-fetch'
import {server} from './Utils'

export function getCurrentBox(){
    return fetch(server + '/box', {
        credentials: 'same-origin',
        method: 'get'
    })
}

export function getAllBoxes(){
    return fetch(server + '/box/list', {
        credentials: 'same-origin',
        method: 'get'
    })
}

export function selectBox(serial){
    return fetch(server + '/box/select' + '?serial=' + serial, {
        credentials: 'same-origin',
        method: 'get',
    })
}

export function registerNewBox(serial){
    return fetch(server + '/box/register' + '?serial=' + serial , {
        credentials: 'same-origin',
        method: 'post',
    })
}