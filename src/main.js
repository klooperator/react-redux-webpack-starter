import React from 'react'
import ReactDOM from 'react-dom'
import configureStore  from './globals/storeInit'
import { Provider } from 'react-redux'
import Router from 'react-router'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Main from './components/index'

const store = configureStore();
console.log(store);
console.log(store.getState());
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route name="Home" path="/" component={Main}>
            <IndexRoute name="Home" component={Main}></IndexRoute>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
