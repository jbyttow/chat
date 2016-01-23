import { RECEIVE_APP_STATE } from '../constants/ActionTypes'

const initialState = {
  commands: {}
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_APP_STATE:
      return Object.assign({}, state, {
        commands: action.commands
      })
    default:
      return state
  }
}
