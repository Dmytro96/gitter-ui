import React, { PropTypes as pt } from 'react'
import './messageInput.scss'

export class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendMessageThroughCtrlEnter = this.sendMessageThroughCtrlEnter.bind(this);
  }

  sendMessage(event) {
    event.preventDefault();
    const
      {sendMessage} = this.props,
      textMessage = document.getElementById('textMessage'),
      noSpaceMsg = textMessage.innerText.trim();
    if (noSpaceMsg.length > 0) {
      sendMessage(noSpaceMsg);
      textMessage.innerText= ''
    }
  }

  sendMessageThroughCtrlEnter(event) {
    if (event.keyCode == 10) this.sendMessage(event)
  }

  componentDidMount() {
    document.getElementById('inputSubmit').addEventListener('click', this.sendMessage);
    document.getElementById('textMessage').addEventListener('keypress', this.sendMessageThroughCtrlEnter);
 }

  componentWillUnmount() {
    document.getElementById('inputSubmit').removeEventListener('click', this.sendMessage);
    document.getElementById('textMessage').removeEventListener('keypress', this.sendMessageThroughCtrlEnter);
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
