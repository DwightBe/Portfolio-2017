import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectGallery } from '../../actions';
import MediaQuery from 'react-responsive';
import {
  SELECT_GALLERY
} from '../../constants/actionTypes';

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
          <li onClick={() => this.props.onGalleryClick('Images2017')}
              style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
            <Link to="/art">
              Guache/Watercolor Portraits, 2016 - 2017
            </Link>
          </li>
          <li onClick={() => this.props.onGalleryClick('Images2016')}
              style={{ height: '60px', fontSize: '18px', cursor: 'pointer' }}>
            <Link to="/art">
              Oil Portraits, 2016
            </Link>
          </li>
          <li onClick={() => this.props.onGalleryClick('Images2011')}
              style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
            <Link to="/art">
              Various Works, 2011 - 2015
            </Link>
          </li>
          <li onClick={() => this.props.onGalleryClick('TheyReturn')}
              style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
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

const mapStateToProps = (state) => {
  return {
    gallery: state.gallery
  }
}

const mapDispatchToProps = dispatch => ({
  onGalleryClick: (gallery) => {
    dispatch(selectGallery(gallery));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
