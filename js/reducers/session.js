import { USER_LOGIN } from '../constants/ActionTypes'

const initialState = {
  currentUser: null
}

export default function session(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return Object.assign({}, state, {
        currentUser: action.user
      })
    default:
      return state
  }
}
