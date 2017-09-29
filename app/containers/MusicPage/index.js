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


export default class MusicPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{margin: '20px auto', textAlign: 'center'}}>
        <i>Untitled Album, 2015</i><br />
        <iframe
        style={{border: 0, width: '350px', height: '470px'}}
        src="https://bandcamp.com/EmbeddedPlayer/album=3692719315/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/transparent=true/" seamless>
          <a href="http://dwightbenignus.bandcamp.com/album/untitled-album">
          Untitled Album by Dwight Benignus
          </a>
        </iframe>
      </div>
    );
  }
}
