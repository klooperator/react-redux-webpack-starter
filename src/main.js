import React from 'react'
import ReactDOM from 'react-dom'
import configureStore  from './globals/storeInit'
import { Provider } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
/*import { browserHistory } from 'react-router'*/
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux'
import App from './components/index'
import Repeater from './globals/Repeater/repeater'
import {addRepeaterToStore} from './globals/global-actions'

const store = configureStore();


import storeListener from './globals/global-listener'
store.subscribe(() => {storeListener(store)});


const history = syncHistoryWithStore(createBrowserHistory(), store);

let repeater = new Repeater(20);
/*repeater.addFunction(()=>{console.log('func1, no priority')});
repeater.addFunction(()=>{console.log('func2, priority 14')}, 22);
repeater.addFunction(()=>{console.log('func3, priority 5')}, 5);
repeater.addFunction(()=>{console.log('func5, this is also priority 5')}, 5);
repeater.addFunction(()=>{console.log('func4,priority 0')}, 0);
repeater.addFunction(()=>{console.log('func6, no priority')});
repeater.addFunction(()=>{console.log('func7, no priority')});
repeater.addFunction(()=>{console.log('func8,priority 1')}, 1);


repeater.addPopFunction(()=>{console.log('popfunc1, no priority')});
repeater.addPopFunction(()=>{console.log('popfunc2, priority 14')}, 22);
repeater.addPopFunction(()=>{console.log('popfunc3, priority 5')}, 5);
repeater.addPopFunction(()=>{console.log('popfunc4, this is also priority 5')}, 5);
repeater.addPopFunction(()=>{console.log('popfunc5,priority 0')}, 0);
repeater.addPopFunction(()=>{console.log('popfunc6, no priority')});
repeater.addPopFunction(()=>{console.log('popfunc7, no priority')});
repeater.addPopFunction(()=>{console.log('popfunc8,priority 1')}, 1);*/

/*repeater.execute();*/
repeater.start();


store.dispatch(addRepeaterToStore(repeater));


ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('main')
)
