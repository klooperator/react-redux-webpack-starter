'use strict'

import 'whatwg-fetch'
import {server} from './Utils'


export function getCurrentUser(){
    console.log(server + '/users/current');
    return fetch(server + '/users/current', {
        credentials: 'same-origin',
        method: 'GET',
    })
}

export function getAllUsers(){
    return fetch(server + '/users', {
        credentials: 'same-origin',
        method: 'GET',
    })
}

export function roleStatus(role){
    return fetch(server + '/users/roles/' + role + '/count', {
        credentials: 'same-origin',
        method: 'GET',
    })
}

export function boxUser(id){
    return fetch(server + '/users/' + id + '/boxUser', {
        credentials: 'same-origin',
        method: 'GET',
    })
}


/**
 * TODO:
 * POST /users/
 * PUT /users/members
 * PUT /users/{id}
 * PUT /users/{id}/modify
 * DELETE /users/{id}
*/

/*
 /$$$$$$  /$$                   /$$                                    /$$     /$$                              
 /$$__  $$| $$                  | $$                                   | $$    |__/                              
| $$  \ $$| $$$$$$$   /$$$$$$$ /$$$$$$    /$$$$$$  /$$$$$$   /$$$$$$$ /$$$$$$   /$$  /$$$$$$  /$$$$$$$   /$$$$$$$
| $$$$$$$$| $$__  $$ /$$_____/|_  $$_/   /$$__  $$|____  $$ /$$_____/|_  $$_/  | $$ /$$__  $$| $$__  $$ /$$_____/
| $$__  $$| $$  \ $$|  $$$$$$   | $$    | $$  \__/ /$$$$$$$| $$        | $$    | $$| $$  \ $$| $$  \ $$|  $$$$$$ 
| $$  | $$| $$  | $$ \____  $$  | $$ /$$| $$      /$$__  $$| $$        | $$ /$$| $$| $$  | $$| $$  | $$ \____  $$
| $$  | $$| $$$$$$$/ /$$$$$$$/  |  $$$$/| $$     |  $$$$$$$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$ /$$$$$$$/
|__/  |__/|_______/ |_______/    \___/  |__/      \_______/ \_______/   \___/  |__/ \______/ |__/  |__/|_______/ */

