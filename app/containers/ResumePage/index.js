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


export default class ResumePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ margin: '20px auto', textAlign: 'left', maxWidth: '800px'}}>
        <p>
          <h2> Contact</h2>
          dwightbenignus@gmail.com
        </p>
        <p>
          <h3> Skills </h3>
          • Javascript, HTML, CSS, React, Redux, PHP, underscore.js, lodash, SQL <br/>
          • Photoshop, Illustrator, Visual/Conceptual/Graphic Arts, Pixel Art  <br/>
          • Illustration, Painting and Drawing  <br/>
        </p>

      </div>
    );
  }
}
