import * as types from '../constants/ActionTypes'
import * as commands from '../constants/SupportedCommands'
import { getCommand } from '../reducers'

export function sendMessage(message, userId, imageUrl='') {
  return {
    type: types.ADD_MESSAGE,
    message: message,
    imageUrl: imageUrl,
    userId: userId
  }
}

const fetchGiphy = (commandData, argument, userId) => {
  return dispatch => {
  fetch(`${commandData.url}${commandData.argumentPrefix}${argument}`)
    .then(response => response.json())
    .then(json => {
      if (json.data.length == 0) {
        //handle missed giphy returns
        return
      }
      dispatch(
        sendMessage(
          '',
          userId,
          json.data[0].images.downsized_large.url
        )
      )
    })
  }
}

const fetchCatBomb = (commandData, argument, userId) => {
  return dispatch => {
  fetch(`${commandData.url}${commandData.argumentPrefix}cat`)
    .then(response => response.json())
    .then(json => {
      json.data.map((imgData) => {
        dispatch(
          sendMessage(
            '',
            userId,
            imgData.images.downsized_large.url
          )
      )
      })
    })
  }
}

// should be handled server-side
const fetchCommand = (command, commandData, argument, userId) => {
  return dispatch => {
    switch (command.toUpperCase()) {
      case commands.GIPHY:
        return dispatch(fetchGiphy(commandData, argument, userId))
      case commands.CAT_BOMB:
        return dispatch(fetchCatBomb(commandData, argument, userId))
      default:
        return
    }
  }
}

export function sendCommand(command, argument, userId) {
  return (dispatch, getState) => {
    const state = getState()
    const commandData = getCommand(state, command)
    if (commandData) {
      return dispatch(fetchCommand(command, commandData, argument, userId))
    } else {
      console.log('handle missing commands')
    }
  }
}