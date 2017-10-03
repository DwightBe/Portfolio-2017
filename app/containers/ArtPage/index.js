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
import { Images2017, Images2016, Images2011, TheyReturn } from './images';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { configureStore } from '../../configureStore';
import {
  SELECT_GALLERY
} from '../../constants/actionTypes';

class ArtPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      images: Images2017,
    };
  }

  handleClick(images) {
    this.props.selectGallery();
    //console.log('STORE', store.getState());

    this.setState({
      images,
    });
  }

  render() {
    const { store } = this.context;
    return (
      <div style={{ padding: '40px 0px' }}>
        <MediaQuery minWidth={1000}>
          <nav style={{
            width: '192px',
            zIndex: 3,
            position: 'fixed',
            top: '120px',
            lineHeight: '20px' }}>
            <ul>
              <li onClick={this.handleClick.bind(this, Images2017)}
                  style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}>
                Guache/Watercolor Portraits, 2016 - 2017
              </li>
              <li style={{ height: '60px', fontSize: '18px', cursor: 'pointer' }}
                  onClick={this.handleClick.bind(this, Images2016)}>
                Oil Portraits, 2016
              </li>
              <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}
                  onClick={this.handleClick.bind(this, Images2011)}>
                Various Works, 2011 - 2015
              </li>
              <li style={{ height: '80px', fontSize: '18px', cursor: 'pointer' }}
                  onClick={this.handleClick.bind(this, TheyReturn)}>
                They Return, comic, 2013
              </li>
            </ul>
          </nav>
        </MediaQuery>
        <div style={{ maxWidth: '530px', margin: '0 auto' }}>
          <Gallery images={this.state.images}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gallery: ""
  }
}

const mapDispatchToProps = dispatch => ({
  selectGallery: () => {
    dispatch({ type: SELECT_GALLERY });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtPage);
