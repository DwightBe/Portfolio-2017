/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
 /* eslint-disable */

import React from 'react';
import MediaQuery from 'react-responsive';
import SideNav from 'components/SideNav';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MediaQuery maxWidth={999}>
          <SideNav />
        </MediaQuery>
      </div>
    );
  }
}
