'use strict'

import 'whatwg-fetch'
import {server} from './Utils'

export function walletUser(){
    return fetch(server + '/wallet', {
        credentials: 'same-origin',    
    })
}

export function walletBox(){
    return fetch(server + '/wallet/box', {
        credentials: 'same-origin',    
    })
}

export function walletBoxSerial(serial){
    return fetch(server + '/wallet/box/' + serial, {
        credentials: 'same-origin',    
    })
}

export function walletUserTransactions(){
    return fetch(server + '/wallet/transactions?order=DESC', {
        credentials: 'same-origin',    
    })
}