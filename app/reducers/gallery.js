import {
  DEFAULT_GALLERY,
} from '../containers/App/constants'; // eslint-disable-line


export default (state = 'Images2018', action) => {
  switch (action.type) {
    case 'SELECT_GALLERY':
      return action.gallery;
    default:
      return state;
  }
};
