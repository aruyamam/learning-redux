import { CREATE_USER } from '../actionTypes';

export const createUser = (username, realname) => ({
   type: CREATE_USER,
   username,
   realname
});
