import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectGallery } from '../../actions';
import MediaQuery from 'react-responsive';
import { MenuItem, SubMenuItem, Container } from './styles';
import './styles';
import {
  SELECT_GALLERY
} from '../../constants/actionTypes';
import Checkout from '../Checkout'

class SideNav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <ul>
          <MediaQuery maxWidth={1000}>
            <MenuItem>
              <Link to="/art">
                Art
              </Link>
            </MenuItem>
          </MediaQuery>
          <SubMenuItem onClick={() => this.props.onGalleryClick('Images2017')}>
            <Link to="/art">
              Guache/Watercolor Portraits, 2016 - 2017
            </Link>
          </SubMenuItem>
          <SubMenuItem onClick={() => this.props.onGalleryClick('Images2016')}>
            <Link to="/art">
              Oil Portraits, 2016
            </Link>
          </SubMenuItem>
          <SubMenuItem onClick={() => this.props.onGalleryClick('Images2011')}>
            <Link to="/art">
              Various Works, 2011 - 2015
            </Link>
          </SubMenuItem>
          <SubMenuItem onClick={() => this.props.onGalleryClick('TheyReturn')}>
            <Link to="/art">
              They Return, comic, 2013
            </Link>
          </SubMenuItem>
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
            <MenuItem>
              <Checkout
                  name={'Become a Patron'}
                  description={'Help me make art by giving a tip'}
                  amount={1}
                />
            </MenuItem>
          </MediaQuery>
        </ul>
      </Container>
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
