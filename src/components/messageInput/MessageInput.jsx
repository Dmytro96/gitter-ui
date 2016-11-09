import React, { PropTypes as pt } from 'react'
import Immutable from 'immutable'
import './messageInput.scss'

export class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage(event) {
    event.preventDefault();
    const
      {sendMessage} = this.props,
      textMessage = document.getElementById('textMessage'),
      noSpaceMsg = textMessage.innerText.trim();
    if (noSpaceMsg.length > 0) {
      console.log(noSpaceMsg);
      sendMessage(noSpaceMsg);
      textMessage.innerText= ''
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
        <div id="textMessage" contentEditable='true' data-text='Input message'></div>
        <button id="inputSubmit">Send</button>
      </div>
    )
  }
}
