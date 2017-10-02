import { combineReducers } from 'redux';
import selectGallery from './selectGalleryReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  selectGallery,
  routing: routerReducer
});

export default rootReducer;
