import React from 'react';
import { Provider } from 'react-redux';
import ConnectedHeader from '../containers/ConnectedHeader.jsx';
import ConnectedPostList from '../containers/ConnectedPostList.jsx';
import ConnectedFilterList from '../containers/ConnectedFilterList.jsx';
import ConnectedLoading from '../containers/ConnectedLoading.jsx';
import ConnectedErrorMessage from '../containers/ConnectedErrorMessage.jsx';
import ConnectedRouter from '../containers/ConnectedRouter.jsx';
import ConnectedNavigation from '../containers/ConnectedNavigation.jsx';

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
         <div>
            <ConnectedNavigation />
         </div>
         <hr />
         <ConnectedHeader />
         <hr />
         <ConnectedRouter />
         {process.env.NODE_ENV !== 'production' && <DevTools />}
      </div>
   </Provider>
);

export default App;
