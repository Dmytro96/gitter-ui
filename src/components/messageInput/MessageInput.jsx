import React, {Component} from 'react'
import styles from './messageInput.scss'

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
      <div className={styles.messageInput}>
        <div
          contentEditable='true'
          data-text='Input message'
          ref='textMessage'
          id={styles.textMessage}
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
