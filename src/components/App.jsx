import React from 'react';
import { Provider } from 'react-redux';

import ConnectedPostList from '../containers/ConnectedPostList.jsx';
import ConnectedFilterList from '../containers/ConnectedFilterList.jsx';

const App = ({ store }) => (
   <Provider store={store}>
      <div>
         <h1>React/Redux blog app</h1>
         <div>
            <ConnectedFilterList />
         </div>
         <div>
            <ConnectedPostList />
         </div>
      </div>
   </Provider>
);

export default App;
