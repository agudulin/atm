import { combineReducers } from 'redux'

import steps from './steps/reducer'
import pin from './pin/reducer'

const rootReducer = combineReducers({
  pin,
  steps
})

export default rootReducer
