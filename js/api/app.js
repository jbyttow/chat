import _appState from '../../data/app.json'

const TIMEOUT = 10

// simulates API call
export default {
  getAppState(cb, timeout) {
    setTimeout(() => cb(_appState), timeout || TIMEOUT)
  }
}
