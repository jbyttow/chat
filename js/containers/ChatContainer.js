import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ChatActions from '../actions/chat'
import * as SessionActions from '../actions/session'
import * as CommandActions from '../actions/command'
import MessageList from '../components/MessageList'
import MessageInput from '../components/MessageInput'
import { getMessages, getUser } from '../reducers'

function detectCommand(message) {
  return (message.charAt(0) === '/')
}

function parseCommand(message) {
  if (message.indexOf(' ') < 0) {
    const command = message.substr(1, message.length - 1)
    return {command}
  }

  const command = message.substr(1, message.indexOf(' ')).trim()
  const argument = message.substr(message.indexOf(' ') + 1).trim()
  return {command, argument}
}

class ChatContainer extends Component {
  constructor(props) {
    super(props)
    const { dispatch } = props;
    this._chatActions = bindActionCreators(ChatActions, dispatch);
    this._sessionActions = bindActionCreators(SessionActions, dispatch);
    this._commandActions = bindActionCreators(CommandActions, dispatch);
  }

  componentDidMount() {
    this._sessionActions.signIn()
    this._chatActions.fetchMessages()
  }

  handleMessageSubmit(message) {
    if (detectCommand(message)) {
      const {command, argument} = parseCommand(message)
      this._commandActions.sendCommand(
        command,
        argument,
        this.props.currentUser.userId
      )
    } else {
      this._chatActions.sendMessage(message, this.props.currentUser.userId)
    }
  }

  render() {
    const { messages, handleMessageSubmit } = this.props
    return (
      <div className="messageBox">
        <MessageList messages={messages}/>
        <MessageInput handleMessageSubmit={this.handleMessageSubmit.bind(this)} />
      </div>
    )
  }
}

ChatContainer.propTypes = {
  messages: PropTypes.array.isRequired,
  currentUser: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    messages: getMessages(state),
    currentUser: getUser(state)
  }
}

export default connect(
  mapStateToProps
)(ChatContainer)
