import React from 'react';
import { FormattedMessage } from 'react-intl';


import NavBar from './NavBar';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <NavBar style={{fontSize: '18px'}}>
            <div style={{height: '80px'}}>
              <div style={{fontSize: '28px', fontWeight: 900, height: '50px'}}>
                Dwight Benignus
              </div>
              <div style={{fontSize: '18px'}}>
                Multimedia Artist and Programmer
              </div>
            </div>
            <nav style={{height: '80px'}}>
              <ul style={{listStyleType: 'none', marginTop: 50}}>
                <li style={{display: 'inline', margin: '0 16px'}}>
                  <a href="/art">
                  Art
                  </a>
                </li>
                <li style={{display: 'inline', margin: '0 16px'}}>
                  <a href="/music">
                    Music
                  </a>
                </li>
                <li style={{display: 'inline', margin: '0 16px'}}>
                  <a href="/game">
                  Game
                  </a>
                </li>
                <li style={{display: 'inline', margin: '0 16px'}}>
                  <a href='https://github.com/DwightBe'>
                    Code
                  </a>
                </li>
                <li style={{display: 'inline', margin: '0 16px'}}>
                  Resume
                </li>
              </ul>
            </nav>
        </NavBar>
    );
  }
}

export default Header;
