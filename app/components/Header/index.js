import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import MediaQuery from 'react-responsive';
import { Name, Title } from './styles';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar style={{ fontSize: '1.2em' }}>
        <div style={{ height: '80px' }}>
          <Link to="/">
            <Name>
              Dwight Benignus
            </Name>
          </Link>
          <Title>
            Multimedia Artist and Programmer
          </Title>
        </div>

        <nav style={{ height: '80px' }}>
          <ul style={{ listStyleType: 'none', marginTop: 50 }}>
            <MediaQuery minWidth={800}>
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
            <MediaQuery maxWidth={799}>
              <li style={{ display: 'inline', margin: '0 16px' }}>
                <Link to="/">
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
