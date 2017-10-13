/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Gallery from 'react-grid-gallery';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { Images2017, Images2016, Images2011, TheyReturn } from './images';
import SideNav from '../../components/SideNav';
import { selectGallery } from '../../actions';
import { ContentContainer } from '../App/styles';
import {
  SELECT_GALLERY
} from '../../constants/actionTypes';

class ArtPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    let galleryImages;
    switch(this.props.gallery) {
        case 'Images2017':
            galleryImages = Images2017;
            break;
        case 'Images2016':
            galleryImages = Images2016;
            break;
        case 'Images2011':
            galleryImages = Images2011;
            break;
        case 'TheyReturn':
            galleryImages = TheyReturn;
                break;
        default:
            galleryImages = Images2017;
    }
    return (
      <ContentContainer>
        <MediaQuery minWidth={1000}>
          <SideNav />
        </MediaQuery>
        <div style={{ maxWidth: '530px', margin: '0 auto' }}>
          <Gallery images={galleryImages}/>
        </div>
      </ContentContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtPage);
