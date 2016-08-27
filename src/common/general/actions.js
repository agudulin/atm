import { IN_PROGRESS_STEP } from './steps'

export const CHANGE_STEP = 'CHANGE_STEP'
export const CHECK_PIN = 'CHECK_PIN'
export const UPDATE_PIN = 'UPDATE_PIN'
export const UPDATE_CASH_WITHDRAWAL = 'UPDATE_CASH_WITHDRAWAL'
export const CHECK_CASH_AMOUNT = 'CHECK_CASH_AMOUNT'

const randomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}
const fakeHardwareDelay = (fn, ms) => (
  window.setTimeout(fn, ms || parseInt(randomInt(500, 800)))
)

const showSpinner = () => ({
  type: CHANGE_STEP,
  payload: { step: IN_PROGRESS_STEP }
})

export const changeStep = (step) => (dispatch) => {
  dispatch(showSpinner())

  fakeHardwareDelay(() => dispatch({
    type: CHANGE_STEP,
    payload: { step }
  }))
}

export const checkPin = (pin) => (dispatch) => {
  dispatch(showSpinner())

  fakeHardwareDelay(() => dispatch({
    type: CHECK_PIN,
    payload: { pin }
  }))
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

  fakeHardwareDelay(() => dispatch({
    type: CHECK_CASH_AMOUNT,
    payload: { cashAmount }
  }), 1500)
}
