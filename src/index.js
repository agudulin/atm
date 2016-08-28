import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from 'common/reducer'
import App from './app'

const enhancers = [applyMiddleware(thunk)]
if (window.devToolsExtension) {
  enhancers.push(window.devToolsExtension())
}
// create a store with enhancers:
//  - thunk: to have an ability to return functions from actions, not just plain objects
//  - devTools: to help with development of redux app
const store = createStore(rootReducer, {}, compose(...enhancers))

// mount react app to the DOM node
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
