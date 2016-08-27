export const CHANGE_STEP = 'CHANGE_STEP'
export const CHECK_PIN = 'CHECK_PIN'
export const UPDATE_PIN = 'UPDATE_PIN'
export const UPDATE_CASH_WITHDRAWAL = 'UPDATE_CASH_WITHDRAWAL'
export const CHECK_CASH_AMOUNT = 'CHECK_CASH_AMOUNT'

export const changeStep = (step) => ({
  type: CHANGE_STEP,
  payload: { step }
})

export const checkPin = (pin) => ({
  type: CHECK_PIN,
  payload: { pin }
})

export const updatePin = (pin) => ({
  type: UPDATE_PIN,
  payload: { pin }
})

export const updateCashWithdrawal = (cashAmount) => ({
  type: UPDATE_CASH_WITHDRAWAL,
  payload: { cashAmount }
})

export const checkCashAmount = (cashAmount) => ({
  type: CHECK_CASH_AMOUNT,
  payload: { cashAmount }
})
