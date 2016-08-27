import {
  WELCOME_STEP
} from './steps'
import {
  CHANGE_STEP,
  CHANGE_STEP_BACK,
  UPDATE_CASH_WITHDRAWAL,
  UPDATE_PIN,
  SHOW_SPINNER
} from './actions'

const initialState = {
  cashAmount: 0,
  error: null,
  pin: '',
  step: WELCOME_STEP,
  stepsBack: []
}

export default (state = initialState, action) => {
  const updateState = {
    [CHANGE_STEP]: ({ step, error }) => {
      const stepsBack = (state.step === step)
        ? state.stepsBack
        : [...state.stepsBack, state.step]

      return Object.assign({}, state, {
        error,
        step,
        stepsBack,
        spinner: false
      })
    },
    [CHANGE_STEP_BACK]: () => {
      const step = state.stepsBack[state.stepsBack.length - 1]
      const stepsBack = state.stepsBack.slice(0, -1)

      return Object.assign({}, state, {
        error: null,
        step,
        stepsBack,
        spinner: false
      })
    },
    [UPDATE_CASH_WITHDRAWAL]: ({ cashAmount }) => (
      Object.assign({}, state, { cashAmount })
    ),
    [UPDATE_PIN]: ({ pin }) => (
      Object.assign({}, state, { pin })
    ),
    [SHOW_SPINNER]: () => (
      Object.assign({}, state, { spinner: true })
    )
  }[action.type]

  if (typeof updateState === 'function') return updateState(action.payload)

  return state
}
