import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from 'common/reducer'
import App from './app'

const devTools = window.devToolsExtension && window.devToolsExtension()
// create a store with enhancers:
//  - thunk: to have an ability to return functions from actions, not just plain objects
//  - devTools: to help development of redux app
const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), devTools))

// mount react app to the DOM node
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
