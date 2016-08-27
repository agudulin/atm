export const CHANGE_STEP = 'CHANGE_STEP'
export const CHECK_PIN = 'CHECK_PIN'

export const changeStep = (step) => ({
  type: CHANGE_STEP,
  payload: { step }
})

export const checkPin = (pin) => ({
  type: CHECK_PIN,
  payload: { pin }
})
