import { handleActions } from 'redux-actions'
import Immutable from 'immutable'

import {SEND_MESSAGE} from '../constants/messages'

const initialState = Immutable.Map({
  boxOfMessages: Immutable.List([1,2,3])
});

export default handleActions({
  [SEND_MESSAGE]: (state, action) =>
    state.update('boxOfMessages', boxOfMessages => boxOfMessages.push(action.payload))
}, initialState );
