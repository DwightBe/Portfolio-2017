/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import objectAssign from 'object-assign';
import gallery from './reducers/gallery';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

const reducer = combineReducers({
  gallery,
})
/**
 * Creates the main reducer with the dynamically injected ones
 */
export default reducer
