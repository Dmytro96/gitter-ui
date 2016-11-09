import React, {Component} from 'react'
import './messageInput.scss'

export class MessageInput extends Component {


  sendMessage = event => {
    event.preventDefault();

    const
      {sendMessage} = this.props,
      {textMessage} = this.refs,
      noSpaceMsg = textMessage.innerText.trim();

      if (noSpaceMsg.length > 0) {
        sendMessage(noSpaceMsg);
        textMessage.innerText= '';
      }
  };


  sendMessageThroughCtrlEnter = event => {
    if (event.ctrlKey && event.which == 13) {
      this.sendMessage(event);
    }
  };


  render() {
    return (
      <div className='messageInput'>
        <div
          ref='textMessage'
          id='textMessage'
          contentEditable='true'
          data-text='Input message'
          onKeyDown={this.sendMessageThroughCtrlEnter}
        />
        <button
          id="inputSubmit"
          onClick={this.sendMessage}
        >
          Send
        </button>
      </div>
    )
  }
}
