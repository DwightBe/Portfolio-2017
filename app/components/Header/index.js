import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import MediaQuery from 'react-responsive';
import { Name, Title, MenuItem } from './styles';

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
            <MediaQuery minWidth={768}>
              <MenuItem>
                <Link to="/art">
                  Art
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="music">
                  Music
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/game">
                  Game
                </Link>
              </MenuItem>
              <MenuItem>
                <a href="https://github.com/DwightBe">
                  Code
                </a>
              </MenuItem>
              <MenuItem>
                <Link to="/resume">
                  About
                </Link>
              </MenuItem>
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <MenuItem>
                <Link to="/">
                  Projects
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/resume">
                  ?
                </Link>
              </MenuItem>
            </MediaQuery>
          </ul>
        </nav>
      </NavBar>
    );
  }
}

export default Header;
