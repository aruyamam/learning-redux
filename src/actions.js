import { CREATE_POST } from './actionTypes';

export const createPost = (user, text) => ({
   type: CREATE_POST,
   user,
   text,
});
