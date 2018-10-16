import {
   FETCH_POSTS_REQUEST,
   FETCH_POSTS_SUCCESS,
   FETCH_POSTS_FAILURE,
   CREATE_POST,
   EDIT_POST,
   DELETE_POST,
} from '../actionTypes';

export const fetchPosts = () => (dispatch) => {
   dispatch({ type: FETCH_POSTS_REQUEST });
   return fetch('http://localhost:8080/api/posts')
      .then((json) => {
         dispatch({
            type: FETCH_POSTS_SUCCESS,
            result: json,
         });
         return json;
      })
      .catch(err => dispatch({
         type: FETCH_POSTS_FAILURE,
         error: err,
      }));
};

export const createPost = (user, post) => {
   const { title, text, category = 'random' } = post;
   if (!title || !text) {
      throw new Error('invalid post, title and text required');
   }
   return {
      type: CREATE_POST,
      post: {
         user,
         title,
         text,
         category,
      },
   };
};

export const editPost = (id, post) => ({
   type: EDIT_POST,
   id,
   post,
});

export const deletePost = id => ({
   type: DELETE_POST,
   id,
});
