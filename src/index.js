import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './app'
import rootReducer from './reducers'

const devTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
