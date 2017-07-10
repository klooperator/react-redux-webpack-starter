'use strict'

import 'whatwg-fetch'
import {server} from './Utils'

export function typesSearchAll(ts, hidden, x){
    return fetch(server + '/types/search/all?' +
                            'ts=' + ts.toString() +
                            '&hidden=' + hidden.toString() +
                            '&x=' + encodeURIComponent(x)
    , {
        credentials: 'same-origin',
        method: 'get'
    })
}