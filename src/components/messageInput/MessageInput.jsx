import React, { PropTypes as pt } from 'react'
import Immutable from 'immutable'
import './messageInput.scss'

export class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage() {
    const
      {sendMessage} = this.props,
      textMessage = document.getElementById('textMessage');
    if (textMessage.value.length > 0) {
      sendMessage(textMessage.value)
      textMessage.value = ''
    }
  }

  componentDidMount() {
    document.getElementById('inputSubmit').addEventListener('click', this.sendMessage)
  }
  componentWillUnmount() {
    document.getElementById('inputSubmit').removeEventListener('click', this.sendMessage)
  }

  render() {

    return (
      <div className='messageInput'>
        <input id='textMessage' type="text" placeholder='Input some message'/>
        <button id="inputSubmit">Send</button>
      </div>
    )
  }
}
