import * as types from '../constants/ActionTypes'
import clientApi from '../api/app'

function receiveAppState(appState) {
  return {
    type: types.RECEIVE_APP_STATE,
    commands: appState.commands
  }
}

export function fetchAppState() {
  return dispatch => {
    clientApi.getAppState(appState => {
      dispatch(receiveAppState(appState))
    })
  }
}
