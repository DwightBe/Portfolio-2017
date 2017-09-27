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


export default class GamePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{margin: '20px auto', textAlign: 'center'}}>
        <i>Untitled Unity Game Project, 2014</i><br />
        A game project I made in Unity in 2014. Its just a walk cycle and a timed script. Music by Tyler Suder
          <iframe width="560" height="315"
          src="https://www.youtube.com/embed/yUskm1eCoog"
          frameborder="0" allowfullscreen>
        </iframe>

      </div>
    );
  }
}
