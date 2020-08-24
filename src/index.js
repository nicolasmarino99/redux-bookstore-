import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { uuid } from 'uuidv4';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import booksReducer from './reducers/index';

const state = {
  books: [
    { id: uuid(), title: 'Lolita', category: 'Romance' },
    { id: uuid(), title: 'Lolita', category: 'Romance' },
    { id: uuid(), title: 'Lolita', category: 'Romance' },
    { id: uuid(), title: 'Lolita', category: 'Romance' },
    { id: uuid(), title: 'Lolita', category: 'Romance' },
  ],
};

const store = createStore(booksReducer, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
