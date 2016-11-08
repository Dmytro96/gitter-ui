import React, { PropTypes as pt } from 'react'
import './messagesBox.scss'


export class MessegesBox extends React.Component {

  render() {
    const {boxOfMessages} = this.props;

    return (
      <div className='allMessages'>
        {
          boxOfMessages.get('boxOfMessages').map((item, index) =>
            <div className='existingMessage' key={index}>
              <p>{item}</p>
            </div>
          )
        }

      </div>
    )
  }
}

MessegesBox.propTypes = {
  box: pt.object
};
