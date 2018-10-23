import React, { Fragment } from 'react';
import ConnectedRegistration from '../containers/ConnectedRegistration.jsx';
import ConnectedCreatePost from '../containers/ConnectedCreatePost.jsx';
import ConnectedLogin from '../containers/ConnectedLogin.jsx';
import User from './User.jsx';

const Header = ({ session }) => (
   <div>
      {session ? (
         <Fragment>
            <div>
               <b>Logged in as:</b> <User {...session} />
            </div>
            <div>
               <ConnectedCreatePost />
            </div>
         </Fragment>
      ) : (
         <Fragment>
            <div>
               <ConnectedRegistration />
            </div>
            <div>
               <ConnectedLogin />
            </div>
         </Fragment>
      )}
   </div>
);

export default Header;
