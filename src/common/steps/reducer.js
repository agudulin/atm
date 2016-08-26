import { WELCOME_STEP } from './'
import { CHANGE_STEP } from './actions'

const initialState = {
  step: WELCOME_STEP
}

export default (state = initialState, action) => {
  const updateState = {
    [CHANGE_STEP]: ({ step }) => Object.assign({}, state, { step })
  }[action.type]

  if (typeof updateState === 'function') return updateState(action.payload)

  return state
}
