import React, { PropTypes as pt, Component } from 'react'
import styles from './messagesBox.scss'
import IPropTypes from 'react-immutable-proptypes'


export class MessagesBox extends Component {

  constructor(props) {
    super(props);
    // this.state.userName = prompt('Input your e-mail', 'User');
  }


  render() {

    const
      {messagesBox} = this.props,
      userName = 'User',
      currentMessages = messagesBox.get('boxOfMessages').takeLast(5);

    return (
      <div className={styles.allMessages}>
        {
          currentMessages.map((item, index) =>
          <div
            key={index}
            className={styles.existingMessage} >

            <div>
              {userName}
            </div>
            <div>
              {item}
            </div>
          </div>
          )
        }
      </div>
    )
  }
}

MessagesBox.propTypes = {
  messagesBox: IPropTypes.mapContains({
    boxOfMessages: IPropTypes.list.isRequired
  })
};
