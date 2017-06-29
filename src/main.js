import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './containers/index.js'
import { createStore } from 'react-redux'

const store = createStore(todoApp)



ReactDOM.render(
 <Provider store={store}>
 <App />
</Provider>,
  document.getElementById('main')
)
