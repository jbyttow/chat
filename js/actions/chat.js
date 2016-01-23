import * as types from '../constants/ActionTypes'
import * as commands from '../constants/SupportedCommands'
import clientApi from '../api/chat'
import { getCommand } from '../reducers'

const receiveMessages = (messages) => {
  return {
    type: types.RECEIVE_MESSAGES,
    conversation: messages.data,
    messages: messages.includes
      .filter(i => i.type === 'message')
      .reduce((messages, m) => {
        messages[m.id] = {
          text: m.text
        }
        return messages
      }, []),
    users: messages.includes
      .filter(i => i.type === 'user')
      .reduce((users, u) => {
        users[u.id] = {
          name: u.name
        }
        return users
      }, [])
  }
}

export function fetchMessages() {
  return dispatch => {
    clientApi.getMessages(messages => {
      dispatch(receiveMessages(messages))
    })
  }
}

export function sendMessage(message, userId, imageUrl='') {
  return {
    type: types.ADD_MESSAGE,
    message: message,
    imageUrl: imageUrl,
    userId: userId
  }
}
