import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './redux/reducer'

const store = createStore(todos)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
  
serviceWorker.unregister();