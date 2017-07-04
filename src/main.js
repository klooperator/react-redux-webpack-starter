import React from 'react'
import ReactDOM from 'react-dom'
import configureStore  from './globals/storeInit'
import { Provider } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
/*import { browserHistory } from 'react-router'*/
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux'
import App from './components/index'

const store = configureStore();
/*console.log(store);
console.log(createBrowserHistory());*/
const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('main')
)
