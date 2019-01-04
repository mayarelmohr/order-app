import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import './index.css';
import App from './App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  currentFilter: '',
  currentRouter: '',
};

const createStoreWithMiddleware = () => {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxPromiseMiddleware()))
  );
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
