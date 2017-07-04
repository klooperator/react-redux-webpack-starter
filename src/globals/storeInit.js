import { createStore, compose,applyMiddleware } from 'redux'
import {responsiveStoreEnhancer} from 'redux-responsive'
import rootReducer,{rootInitState} from './root-reducer'
import thunk from 'redux-thunk'

export default function configureStore() {
  const store = createStore(
    rootReducer, 
    rootInitState(), 
      compose(
        /*applyMiddleware(thunk),*/
        responsiveStoreEnhancer,
        window.devToolsExtension ? window.devToolsExtension() : f => f)
        )
  
  /*if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        var nextRootReducer = require('../reducers').default
        store.replaceReducer(nextRootReducer)
      })
    }
  }*/
  
  return store
}
