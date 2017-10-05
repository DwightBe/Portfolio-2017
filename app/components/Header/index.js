import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import MediaQuery from 'react-responsive';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar style={{ fontSize: '18px' }}>
        <div style={{ height: '80px' }}>
          <div style={{ fontSize: '28px', fontWeight: 900, height: '50px' }}>
            Dwight Benignus
          </div>
          <div style={{ fontSize: '18px' }}>
            Multimedia Artist and Programmer
          </div>
        </div>

        <nav style={{ height: '80px' }}>
          <ul style={{ listStyleType: 'none', marginTop: 50 }}>
            <MediaQuery minWidth={1000}>
              <li style={{ display: 'inline', margin: '0 16px' }}>
                <Link to="/art">
                  Art
                </Link>
              </li>
              <li style={{ display: 'inline', margin: '0 16px' }}>
                <Link to="music">
                  Music
                </Link>
              </li>
              <li style={{ display: 'inline', margin: '0 16px' }}>
                <Link to="/game">
                  Game
                </Link>
              </li>
              <li style={{ display: 'inline', margin: '0 16px' }}>
                <a href="https://github.com/DwightBe">
                  Code
                </a>
              </li>
              <li style={{ display: 'inline', margin: '0 16px' }}>
                <Link to="/resume">
                  Contact
                </Link>
              </li>
            </MediaQuery>
            <MediaQuery maxWidth={1000}>
              <li style={{ display: 'inline', margin: '0 16px' }}>
                <Link to="/projects">
                  Projects
                </Link>
              </li>
              <li style={{ display: 'inline', margin: '0 16px' }}>
                <Link to="/resume">
                  ?
                </Link>
              </li>
            </MediaQuery>
          </ul>
        </nav>
      </NavBar>
    );
  }
}

export default Header;
