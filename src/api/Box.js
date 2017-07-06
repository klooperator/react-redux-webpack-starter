'use strict'

import 'whatwg-fetch'
import {server} from './Utils'

export function getCurrentBox(){
    return fetch(server + '/box/current', {
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