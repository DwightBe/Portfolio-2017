import { SELECT_GALLERY } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_GALLERY:
      return {
        ...state
      };
    default:
      return state;
  }
};
