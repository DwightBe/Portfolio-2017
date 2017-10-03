import { SELECT_GALLERY } from '../constants/actionTypes';
import {
  DEFAULT_GALLERY,
} from '../containers/App/constants'; // eslint-disable-line


export default (state = DEFAULT_GALLERY, action) => {
  switch (action.type) {
    case SELECT_GALLERY:
      console.log('SELECT GALLERY', DEFAULT_GALLERY);
      return {
        ...state
      };
    default:
      return state;
  }
};
