import React from 'react'
import {connect} from 'react-redux'

import { MessegesBox } from '../components/messagesBox/MessegesBox.jsx'


class MessagesBlock extends React.Component {

  render() {
    const {messagesBox} = this.props;
    return (
      <div>
        <MessegesBox boxOfMessages={messagesBox}/>
      </div>
    )
  }
}

const
  mapStateToProps = ({messagesBox}) =>  ({
    messagesBox
  }),
  mapDispatchToProps = dispatch => ({
  });


export default connect(mapStateToProps, mapDispatchToProps)(MessagesBlock)
