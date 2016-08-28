import {
  ENTER_PIN_STEP,
  GOODBYE_STEP,
  WITHDRAWAL_STEP,
  WITHDRAWAL_OTHER_AMOUNT_STEP
} from './steps'

export const CHANGE_STEP = 'CHANGE_STEP'
export const CHANGE_STEP_BACK = 'CHANGE_STEP_BACK'
export const UPDATE_PIN = 'UPDATE_PIN'
export const UPDATE_CASH_WITHDRAWAL = 'UPDATE_CASH_WITHDRAWAL'
export const SHOW_SPINNER = 'SHOW_SPINNER'

const DEFAULT_PASSWORD = '1234'

const randomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}
const fakeHardwareDelay = (fn, ms) => (
  window.setTimeout(fn, ms || parseInt(randomInt(500, 800)))
)

const showSpinner = () => ({
  type: SHOW_SPINNER,
  payload: {}
})

export const changeStep = (step) => (dispatch) => {
  dispatch(showSpinner())

  fakeHardwareDelay(() => dispatch({
    type: CHANGE_STEP,
    payload: { step }
  }))
}

export const changeStepBack = () => (dispatch) => {
  dispatch(showSpinner())

  fakeHardwareDelay(() => dispatch({
    type: CHANGE_STEP_BACK,
    payload: {}
  }))
}

export const checkPin = (pin) => (dispatch) => {
  dispatch(showSpinner())

  if (pin !== DEFAULT_PASSWORD) {
    fakeHardwareDelay(() => dispatch({
      type: CHANGE_STEP,
      payload: { error: 'Incorrect PIN', step: ENTER_PIN_STEP }
    }))
  } else {
    fakeHardwareDelay(() => dispatch({
      type: CHANGE_STEP,
      payload: { step: WITHDRAWAL_STEP }
    }))
  }
}

export const updatePin = (pin) => ({
  type: UPDATE_PIN,
  payload: { pin }
})

export const updateCashWithdrawal = (cashAmount) => ({
  type: UPDATE_CASH_WITHDRAWAL,
  payload: { cashAmount }
})

export const checkCashAmount = (cashAmount) => (dispatch) => {
  dispatch(showSpinner())

  if (cashAmount <= 0 || cashAmount % 10 !== 0) {
    fakeHardwareDelay(() => dispatch({
      type: CHANGE_STEP,
      payload: {
        error: 'Incorrect amount of money. Correct: 10, 20, 30, etc.',
        step: WITHDRAWAL_OTHER_AMOUNT_STEP
      }
    }))
  } else {
    fakeHardwareDelay(() => dispatch({
      cashAmount,
      type: CHANGE_STEP,
      payload: { step: GOODBYE_STEP }
    }), 1500)
  }
}
