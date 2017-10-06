import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectGallery } from '../../actions';
import MediaQuery from 'react-responsive';
import { MenuItem } from './styles';
import './styles';
import {
  SELECT_GALLERY
} from '../../constants/actionTypes';

class SideNav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav
        style={{
          width: '180px',
          zIndex: 3,
          position: 'fixed',
          top: '100px',
          lineHeight: '20px',
        }}
      >
        <ul>
          <MediaQuery maxWidth={1000}>
            <MenuItem>
              <Link to="/art">
                Art
              </Link>
            </MenuItem>
          </MediaQuery>
          <MenuItem onClick={() => this.props.onGalleryClick('Images2017')}>
            <Link to="/art">
              Guache/Watercolor Portraits, 2016 - 2017
            </Link>
          </MenuItem>
          <MenuItem onClick={() => this.props.onGalleryClick('Images2016')}>
            <Link to="/art">
              Oil Portraits, 2016
            </Link>
          </MenuItem>
          <MenuItem onClick={() => this.props.onGalleryClick('Images2011')}>
            <Link to="/art">
              Various Works, 2011 - 2015
            </Link>
          </MenuItem>
          <MenuItem onClick={() => this.props.onGalleryClick('TheyReturn')}>
            <Link to="/art">
              They Return, comic, 2013
            </Link>
          </MenuItem>
          <MediaQuery maxWidth={1000}>
            <MenuItem>
              <Link to="/music">
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
