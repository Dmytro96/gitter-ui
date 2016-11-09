import React, { PropTypes as pt, Component } from 'react'
import './messagesBox.scss'
import IPropTypes from 'react-immutable-proptypes'


export class MessagesBox extends Component {

  constructor(props) {
    super(props);
    // this.userName = prompt('Input your e-mail', 'User');
  }

  render() {

    const
      {messagesBox} = this.props,
      userName = this.userName || 'User';

    return (
      <div className='allMessages'>
        {
          messagesBox.get('boxOfMessages').map((item, index) =>
          <div
            key={index}
            className='existingMessage' >

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
