import React from 'react';

import MediaQuery from 'react-responsive';

class SideNav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav
        style={{
          width: '192px',
          zIndex: 3,
          position: 'fixed',
          top: '120px',
          lineHeight: '20px',
        }}
      >
        <ul>
          <MediaQuery maxWidth={1000}>
            <li style={{ height: '60px', fontSize: '18px', cursor: 'pointer' }}>
              <a href="/art">
                Art
              </a>
            </li>
          </MediaQuery>
          <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
            <a href="/art">
              Guache/Watercolor Portraits, 2016 - 2017
            </a>
          </li>
          <li style={{ height: '60px', fontSize: '18px', cursor: 'pointer' }}>
            <a href="/art">
              Oil Portraits, 2016
            </a>
          </li>
          <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
            <a href="/art">
              Various Works, 2011 - 2015
            </a>
          </li>
          <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
            <a href="/art">
              They Return, comic, 2013
            </a>
          </li>
          <MediaQuery maxWidth={1000}>
            <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
              <a href="/music">
                Music
              </a>
            </li>
            <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
              <a href="/game">
                Game
              </a>
            </li>
            <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
              <a href="https://github.com/DwightBe">
                Code
              </a>
            </li>
          </MediaQuery>
        </ul>
      </nav>
    );
  }
}

export default SideNav;
