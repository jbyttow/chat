import { ADD_MESSAGE, RECEIVE_MESSAGES } from '../constants/ActionTypes'

// eventually separate out into further reducers
const initialState = {
  conversation: [],
  messages: [],
  users: []
}

export const getMessage = (state, id) => {
  return state[id]
}

export const getUsername = (state, id) => {
  return state[id].name
}

export default function chat(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {text: action.message, imageUrl: action.imageUrl}
        ],
        conversation: [
          ...state.conversation,
          {
            message: {id: state.messages.length},
            user: {id: action.userId}
          },
        ]
      })
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, {
        conversation: action.conversation,
        messages: action.messages,
        users: action.users
      })
    default:
      return state
  }
}
