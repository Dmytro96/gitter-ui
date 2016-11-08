import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import MessagesBlock from './containers/MessagesBlock'
import './index.scss'


const store = configureStore();

render(
  <Provider store = {store}>
    <MessagesBlock />
  </Provider>,
  document.getElementById('app')
);
