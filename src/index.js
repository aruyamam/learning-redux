import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import { createUser, fetchPosts } from './actions';
import App from './components/App.jsx';

if (module.hot) {
   module.hot.accept();
}

const store = configureStore();
const initialState = store.getState();

store.dispatch(fetchPosts());

console.log('initial state:', JSON.stringify(store.getState(), null, 2));
store.subscribe(() => console.log('state changed:', store.getState()));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
