import React, { Component, PropTypes } from 'react'

export default class MessageInput extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleSubmit(e) {
    e.preventDefault()
    const message = this.refs.text.value.trim()
    if (!message) { 
      return 
    }

    this.refs.text.value = ''
    this.props.handleMessageSubmit(message)
  }

  render() {
    return (
      <form className="messageForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref='text'/>
      </form>
    )
  }
}

MessageInput.propTypes = {
  handleMessageSubmit: PropTypes.func.isRequired
}