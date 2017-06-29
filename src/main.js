import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './containers/index.js'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import first_Reducer from './reducers/first_Reducer.js'

const rootReducer = combineReducers( {first_Reducer} )
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
