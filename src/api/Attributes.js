'use strict'

import 'whatwg-fetch'
import {server} from './Utils'

export function getFullAttributes(network,device,endpoint,clusterEndpoint,definition,config,room,icons,value,parent,children,full,type){
    return fetch(server + '/attributes/full?' + 
                            'network='+ network.toString() +
                            '&device=' + device.toString() +
                            '&endpoint=' + endpoint.toString() +
                            '&clusterEndpoint=' + clusterEndpoint.toString() +
                            '&definition=' + definition.toString() +
                            '&config=' + config.toString() +
                            '&room=' +room.toString() +
                            '&icons=' + icons.toString() +
                            '&value=' + value.toString() +
                            '&parent=' + parent.toString() +
                            '&children=' + children.toString() +
                            '&full=' + full.toString() +
                            '&type=' + type.toString()
    , {
        credentials: 'same-origin',
        method: 'get'
    })
}

/*
/$$                 /$$                                        
| $$                | $$                                        
| $$$$$$$   /$$$$$$ | $$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$
| $$__  $$ /$$__  $$| $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$_____/
| $$  \ $$| $$$$$$$$| $$| $$  \ $$| $$$$$$$$| $$  \__/|  $$$$$$ 
| $$  | $$| $$_____/| $$| $$  | $$| $$_____/| $$       \____  $$
| $$  | $$|  $$$$$$$| $$| $$$$$$$/|  $$$$$$$| $$       /$$$$$$$/
|__/  |__/ \_______/|__/| $$____/  \_______/|__/      |_______/ 
                        | $$                                    
                        | $$                                    
                        |__/                                    */

export function getFullAttributes_full(){
    return getFullAttributes(false, false, false, false, false, false, false, false, false, false, false, true, false);
}