import { createActions } from 'redux-actions'
import {SEND_MESSAGE} from '../constants/messages'

export
  const
    {sendMessage} =
      createActions({
        [SEND_MESSAGE]: textMessage => textMessage
      });
