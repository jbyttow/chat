import * as types from '../constants/ActionTypes'
import clientApi from '../api/session'

function setCurrentUser(user) {
  return {
    type: types.USER_LOGIN,
    user: user
  }
}

export function signIn(name) {
  return dispatch => {
    clientApi.signIn(user => {
      dispatch(setCurrentUser(user))
    })
  }
}
