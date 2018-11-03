import { NAVIGATE } from '../actionTypes';

export const navigate = pageName => ({
   type: NAVIGATE,
   page: pageName,
});
