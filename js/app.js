import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ChatContainer from './containers/ChatContainer'
import { fetchAppState } from './actions/app'

// refactor into isolated components 
import '../css/base.scss'

const store = configureStore()
const appEl = document.getElementById('app')

store.dispatch(fetchAppState())

render(
  <Provider store={store}>
    <ChatContainer/>
  </Provider>,
  appEl  
)
