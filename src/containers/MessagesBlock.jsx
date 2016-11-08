import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {MessegesBox} from '../components/messagesBox/MessegesBox.jsx'
import {MessageInput} from '../components/messageInput/MessageInput.jsx'

import {sendMessage} from '../actions/messagesActions'

class MessagesBlock extends React.Component {

  render() {
    const {messagesBox, sendMessage} = this.props;
    return (
      <div>
        <MessegesBox messagesBox={messagesBox}/>
        <MessageInput sendMessage={sendMessage}/>
      </div>
    )
  }
}

const
  mapStateToProps = ({messagesBox}) =>  ({
    messagesBox
  }),
  mapDispatchToProps = dispatch => ({
    sendMessage: bindActionCreators(sendMessage, dispatch)
  });


export default connect(mapStateToProps, mapDispatchToProps)(MessagesBlock)
