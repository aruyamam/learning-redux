const { LOGIN_SUCCESS } = require('../actionTypes');

export default function sessionReducer(state = false, action) {
   const { type, result } = action;

   if (type === LOGIN_SUCCESS) {
      return result;
   }

   return state;
}
