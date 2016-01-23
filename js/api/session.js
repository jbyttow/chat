const TIMEOUT = 10

// simulates user API call
export default {
  signIn(cb, timeout) {
    setTimeout(() => cb({
      userId: 5,
      name: 'John'
    }), timeout || TIMEOUT)
  }
}
