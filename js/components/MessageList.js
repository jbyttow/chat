import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import Message from './Message'

export default class MessageList extends Component {
  componentDidUpdate() {
    this._scrollToBottom()
  }

  _scrollToBottom() {
    const node = ReactDom.findDOMNode(this)
    node.scrollTop = node.scrollHeight
  }

  _renderMessages() {
    const { messages } = this.props
    let currentName;
    return messages.map((m, i) => {
      if (m.user === currentName) {
        currentName = m.user
        return (
          <Message
            key={i}
            imageUrl={m.message.imageUrl}
            onImageLoaded={this._scrollToBottom.bind(this)}
            text={m.message.text} />
        )
      } else {
        currentName = m.user
        return (
          <Message
            key={i}
            name={currentName}
            imageUrl={m.message.imageUrl}
            onImageLoaded={this._scrollToBottom.bind(this)}
            text={m.message.text} />
          )
      }
    })
  }

  render() {
    return (
      <div className="messageList">
        {this._renderMessages()}
      </div>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}
