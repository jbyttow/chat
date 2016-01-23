import { combineReducers } from 'redux'
import app from './app'
import chat, {getMessage, getUsername} from './chat'
import session from './session'

const getMergedConversation = (state) => {
  return state.conversation
    .reduce((messages, c) => {
      messages.push({
        user: getUsername(state.users, c.user.id),
        message: getMessage(state.messages, c.message.id)
      })
      return messages
    }, [])
}

// kill these and access reducer stores directly
export function getMessages(state) {
  return getMergedConversation(state.chat)
}

export function getUser(state) {
  return state.session.currentUser
}

export function getCommand(state, command) {
  return state.app.commands[command]
}

export default combineReducers({
  app,
  chat,
  session
})
