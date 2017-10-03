import { SELECT_GALLERY } from '../constants/actionTypes';
import {
  DEFAULT_GALLERY,
} from '../containers/App/constants'; // eslint-disable-line


export default (state = DEFAULT_GALLERY, action) => {
  console.log('GALLERY', action);
  switch (action.type) {
    case SELECT_GALLERY:
      return {
        ...state,
        gallery: action.payload
      };
    default:
      return state;
  }
};
