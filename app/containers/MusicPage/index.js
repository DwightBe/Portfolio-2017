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
import { ContentContainer } from '../App/styles';


export default class MusicPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContentContainer>
        <h3><i>Untitled Album, 2015</i></h3>
        <iframe
        style={{border: 0, width: '80%', maxWidth: '350px', height: '470px'}}
        src="https://bandcamp.com/EmbeddedPlayer/album=3692719315/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/transparent=true/" seamless>
          <a href="http://dwightbenignus.bandcamp.com/album/untitled-album">
          Untitled Album by Dwight Benignus
          </a>
        </iframe>
        <h3><i>S<a href = "https://sudsclub.bandcamp.com/track/mexican-radio">o</a>un<a href="https://sudsclub.bandcamp.com/track/helpno">d</a>cl<a href="https://www.youtube.com/watch?v=wHvp4jgW0uc">o</a>ud</i></h3>
        <iframe width="400px" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23638682&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
      </ContentContainer>
    );
  }
}
