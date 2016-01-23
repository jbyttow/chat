import React, { Component, PropTypes } from 'react'
import ImageLoader from 'react-imageloader'

export default class Message extends Component {
  _renderAuthor() {
    if (this.props.name) {
      return (
        <p className="messageAuthor">{this.props.name}</p>
      )
    }
  }

  _imageLoaded() {
    this.props.onImageLoaded()
  }

  _renderImage() {
    if (this.props.imageUrl) {
      return (
        <p className="messageImage">
          <ImageLoader
            src={this.props.imageUrl}
            imgProps={
              {width: "245"}
            }
            onLoad={this._imageLoaded.bind(this)} />
        </p>
      )
    }
  }

  render() {
    return (
      <div className="message">
        {this._renderAuthor()}
        {this._renderImage()}
        <p className="messageText">{this.props.text}</p>
      </div>
    )
  }
}

Message.propTypes = {
  name: React.PropTypes.string,
  text: React.PropTypes.string,
  onImageLoaded: React.PropTypes.func
}