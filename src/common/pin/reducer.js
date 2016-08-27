import { CHANGE_PIN } from './actions'

const initialState = {
  pin: ''
}

export default (state = initialState, action) => {
  const updateState = {
    [CHANGE_PIN]: ({ pin }) => Object.assign({}, state, { pin })
  }[action.type]

  if (typeof updateState === 'function') return updateState(action.payload)

  return state
}
