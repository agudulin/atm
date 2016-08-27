import { WELCOME_STEP, WITHDRAWAL_STEP, GOODBYE_STEP } from './steps'
import {
  CHANGE_STEP,
  CHECK_PIN,
  CHECK_CASH_AMOUNT,
  UPDATE_CASH_WITHDRAWAL,
  UPDATE_PIN
} from './actions'

const initialState = {
  cashAmount: 0,
  error: null,
  pin: '',
  step: WELCOME_STEP
}

export default (state = initialState, action) => {
  const updateState = {
    [CHANGE_STEP]: ({ step }) => (
      Object.assign({}, state, { step })
    ),
    [CHECK_PIN]: ({ pin }) => {
      if (pin !== '1234') {
        return Object.assign({}, state, { error: 'Incorrect PIN' })
      }

      return Object.assign({}, state, { error: null, step: WITHDRAWAL_STEP })
    },
    [CHECK_CASH_AMOUNT]: ({ cashAmount }) => {
      if (cashAmount <= 0 || cashAmount % 10 !== 0) {
        return Object.assign({}, state, { error: 'Incorrect amount of money' })
      }

      return Object.assign({}, state, { cashAmount, error: null, step: GOODBYE_STEP })
    },
    [UPDATE_CASH_WITHDRAWAL]: ({ cashAmount }) => (
      Object.assign({}, state, { cashAmount })
    ),
    [UPDATE_PIN]: ({ pin }) => (
      Object.assign({}, state, { pin })
    )
  }[action.type]

  if (typeof updateState === 'function') return updateState(action.payload)

  return state
}
