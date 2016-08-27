export const CHANGE_PIN = 'CHANGE_PIN'

export const changePin = (pin) => ({
  type: CHANGE_PIN,
  payload: { pin }
})
