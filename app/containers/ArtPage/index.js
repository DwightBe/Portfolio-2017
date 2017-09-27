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

import React from 'react';


export default class ArtPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li style={{height: '40px', fontSize: '18px'}}>
              Guache/Watercolor Portraits, 2016 - 2017
            </li>
            <li style={{height: '40px', fontSize: '18px'}}>
              Oil Portraits, 2016
            </li>
            <li style={{height: '40px', fontSize: '18px'}}>
              Various Works, 2011 - 2015
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}
