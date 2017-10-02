/*
 *
 * Select gallery reducer
 *
 */

import { fromJS } from 'immutable';

import {
  SELECT_GALLERY,
} from './constants';
import {
  DEFAULT_GALLERY,
} from '../App/constants'; // eslint-disable-line

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

function selectGallery(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;
