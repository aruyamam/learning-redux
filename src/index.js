import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import appReducer from './reducers';
import { createUser, createPost } from './actions';
import App from './components/App.jsx';

const store = createStore(appReducer);

// create users
store.dispatch(createUser('dan', 'Daniel Bugl'));
store.dispatch(createUser('des', 'Destiny'));

// create posts
store.dispatch(
   createPost('dan', {
      title: 'First post',
      text: 'Hello world! This is the first blog post.',
      category: 'welcome',
   }),
);

store.dispatch(
   createPost('des', {
      title: 'Another test',
      text: 'This is another test blog post.',
      category: 'test',
   }),
);

console.log('initial state:', store.getState());
store.subscribe(() => console.log('state changed:', store.getState()));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
