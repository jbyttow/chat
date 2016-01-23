import _messages from '../../data/chat.json'

const TIMEOUT = 10

// simulates API call
export default {
  getMessages(cb, timeout) {
    setTimeout(() => cb(_messages), timeout || TIMEOUT)
  }
}
