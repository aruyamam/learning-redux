import React from 'react';
import { Provider } from 'react-redux';

import ConnectedPostList from '../containers/ConnectedPostList.jsx';
import ConnectedFilterList from '../containers/ConnectedFilterList.jsx';
import ConnectedLoading from '../containers/ConnectedLoading.jsx';
import ConnectedErrorMessage from '../containers/ConnectedErrorMessage.jsx';
import ConnectedRegistration from '../containers/ConnectedRegistration.jsx';
import ConnectedCreatePost from '../containers/ConnectedCreatePost.jsx';
import ConnectedLogin from '../containers/ConnectedLogin.jsx';

import DevTools from '../containers/DevTools.jsx';

const App = ({ store }) => (
   <Provider store={store}>
      <div>
         <h1>React/Redux blog app</h1>
         <div>
            <ConnectedLoading />
         </div>
         <div>
            <ConnectedErrorMessage />
         </div>
         <hr />
         <div>
            <ConnectedRegistration />
         </div>
         <div>
            <ConnectedLogin />
         </div>
         <hr />
         <div>
            <ConnectedCreatePost />
         </div>
         <hr />
         <div>
            <ConnectedFilterList />
         </div>
         <div>
            <ConnectedPostList />
         </div>
         {process.env.NODE_ENV !== 'production' && <DevTools />}
      </div>
   </Provider>
);

export default App;
