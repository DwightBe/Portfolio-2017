import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/art">
                Art
              </Link>
            </li>
          </MediaQuery>
          <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
            <Link to="/art">
              Guache/Watercolor Portraits, 2016 - 2017
            </Link>
          </li>
          <li style={{ height: '60px', fontSize: '18px', cursor: 'pointer' }}>
            <Link to="/art">
              Oil Portraits, 2016
            </Link>
          </li>
          <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
            <Link to="/art">
              Various Works, 2011 - 2015
            </Link>
          </li>
          <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
            <Link to="/art">
              They Return, comic, 2013
            </Link>
          </li>
          <MediaQuery maxWidth={1000}>
            <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
              <Link to="/music">
                Music
              </Link>
            </li>
            <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
              <Link to="/game">
                Game
              </Link>
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
