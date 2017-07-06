import { combineReducers } from 'redux'
import {global,initStateGlobal} from './global-reducer'
import { responsiveStateReducer } from 'redux-responsive'
import { routerReducer as routing } from 'react-router-redux'
import {form,initStateGlobal as initForm} from '../components/Forms/formReducer'

/*
 /$$           /$$   /$$                       /$$                 /$$              
|__/          |__/  | $$                      | $$                | $$              
 /$$ /$$$$$$$  /$$ /$$$$$$          /$$$$$$$ /$$$$$$    /$$$$$$  /$$$$$$    /$$$$$$ 
| $$| $$__  $$| $$|_  $$_/         /$$_____/|_  $$_/   |____  $$|_  $$_/   /$$__  $$
| $$| $$  \ $$| $$  | $$          |  $$$$$$   | $$      /$$$$$$$  | $$    | $$$$$$$$
| $$| $$  | $$| $$  | $$ /$$       \____  $$  | $$ /$$ /$$__  $$  | $$ /$$| $$_____/
| $$| $$  | $$| $$  |  $$$$/       /$$$$$$$/  |  $$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$
|__/|__/  |__/|__/   \___/        |_______/    \___/   \_______/   \___/   \_______/
                                                                                    
                                                                                    
                                                                                  */
export function rootInitState(){
    return({
        global: new initStateGlobal(),
        form:new initForm()
    });
}

/*
                           /$$                                                /$$$$$$                                 /$$$ /$$$  
                          | $$                                               /$$__  $$                               /$$_/|_  $$ 
  /$$$$$$   /$$$$$$   /$$$$$$$ /$$   /$$  /$$$$$$$  /$$$$$$   /$$$$$$       | $$  \__//$$   /$$ /$$$$$$$   /$$$$$$$ /$$/    \  $$
 /$$__  $$ /$$__  $$ /$$__  $$| $$  | $$ /$$_____/ /$$__  $$ /$$__  $$      | $$$$   | $$  | $$| $$__  $$ /$$_____/| $$      | $$
| $$  \__/| $$$$$$$$| $$  | $$| $$  | $$| $$      | $$$$$$$$| $$  \__/      | $$_/   | $$  | $$| $$  \ $$| $$      | $$      | $$
| $$      | $$_____/| $$  | $$| $$  | $$| $$      | $$_____/| $$            | $$     | $$  | $$| $$  | $$| $$      |  $$     /$$/
| $$      |  $$$$$$$|  $$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$            | $$     |  $$$$$$/| $$  | $$|  $$$$$$$ \  $$$ /$$$/ 
|__/       \_______/ \_______/ \______/  \_______/ \_______/|__/            |__/      \______/ |__/  |__/ \_______/  \___/|___/ */

export const rootReducer = combineReducers({
    global,
    routing,
    form,
    browser: responsiveStateReducer
}); 
export default rootReducer;