import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import { createUser, createPost } from './actions';
import App from './components/App.jsx';

const store = configureStore();
const initialState = store.getState();

if (!initialState.users || initialState.users.length === 0) {
   // create users
   store.dispatch(createUser('dan', 'Daniel Bugl'));
   store.dispatch(createUser('des', 'Destiny'));
}

if (!initialState.posts || initialState.posts.length === 0) {
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
}

console.log('initial state:', store.getState());
store.subscribe(() => console.log('state changed:', store.getState()));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
