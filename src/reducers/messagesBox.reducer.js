import Immutable from 'immutable'
import { handleActions } from 'redux-actions'

const initialState = Immutable.Map({
  boxOfMessages: Immutable.List([1,2,3])
});

export default handleActions({

}, initialState );
