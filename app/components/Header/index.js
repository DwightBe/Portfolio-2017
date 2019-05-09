import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import MediaQuery from 'react-responsive';
import { Name, Title, MenuItem } from './styles';
import InstaBadge from '../InstaBadge'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let currentPath = window.location.pathname;
    return (
      <NavBar style={{ fontSize: '1.2em' }}>
        <div style={{ height: '80px', marginLeft: '2px' }}>
          <Link to="/">
            <Name>
              Dwight Benignus
            </Name>
          </Link>
          <Title>
            Multimedia Artist and Programmer
          </Title>
        </div>
        <InstaBadge />
        <nav style={{ height: '80px' }}>
          <ul style={{ listStyleType: 'none', marginTop: 50 }}>
            <MediaQuery minWidth={1000}>
              <MenuItem>
                <Link to="/art">
                  Art
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
            <MediaQuery maxWidth={999}>
              {!(currentPath === '/') ?
              <MenuItem>
                <Link to="/">
                  Projects
                </Link>
              </MenuItem> : null}
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
