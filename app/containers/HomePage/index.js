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
import Checkout from '../../components/Checkout';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MediaQuery maxWidth={1000}>
          <SideNav />
        </MediaQuery>
        <MediaQuery minWidth={999}>
          <div style={{
                  textAlign: 'center',
                  padding: '40px',
                  maxWidth: '600px',
                  fontSize: '1.2em',
                  margin: '0 auto'}}>
            Hell<a href = "https://sudsclub.bandcamp.com/track/mexican-radio">o</a>! Welcome to my portfoli<a href="https://sudsclub.bandcamp.com/track/helpno">o</a>. I am an artist and software developer living and working in Austin, Tx. I have been showing
            portraits in galleries since 2016, and working on software projects since 2012. This portfoli<a href="https://www.youtube.com/watch?v=wHvp4jgW0uc">o</a> showcases all of my work in various media.
          </div>
        </MediaQuery>
      </div>
    );
  }
}
