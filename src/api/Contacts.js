'use strict'

import 'whatwg-fetch'
import {server} from './Utils'


export function getAllContacts(){
    return fetch(server + '/contacts', {
        credentials: 'same-origin',
        method: 'GET',
    })
}

export function createNewContact(contactJson){
    return fetch(server + '/contacts', {
        credentials: 'same-origin',
        method: 'Post',
    })
}
