import React from 'react';
import ConnectedPostList from '../../containers/ConnectedPostList.jsx';
import ConnectedFilterList from '../../containers/ConnectedFilterList.jsx';

const MainPage = () => (
   <div>
      <div>
         <ConnectedFilterList />
      </div>
      <div>
         <ConnectedPostList />
      </div>
   </div>
);

export default MainPage;
