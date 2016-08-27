import { WELCOME_STEP, WITHDRAWAL_STEP } from './'
import { CHANGE_STEP, CHECK_PIN } from './actions'

const initialState = {
  step: WELCOME_STEP,
  error: null
}

export default (state = initialState, action) => {
  const updateState = {
    [CHANGE_STEP]: ({ step }) => Object.assign({}, state, { step }),
    [CHECK_PIN]: ({ pin }) => {
      if (pin === '1234') {
        return Object.assign({}, state, { error: null, step: WITHDRAWAL_STEP })
      } else {
        return Object.assign({}, state, { error: 'Incorrect PIN' })
      }
    }
  }[action.type]

  if (typeof updateState === 'function') return updateState(action.payload)

  return state
}
