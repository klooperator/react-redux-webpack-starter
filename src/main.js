import React from 'react'
import ReactDOM from 'react-dom'
import configureStore  from './globals/storeInit'
import { Provider } from 'react-redux'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>Hello</div>
  </Provider>,
  document.getElementById('main')
)
