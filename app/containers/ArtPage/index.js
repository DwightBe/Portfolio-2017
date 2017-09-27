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
const IMAGES =
[{
        src: require(`${'../../images/Guache-Watercolor-2017/Andrea.jpg'}`),
        thumbnail: require(`${'../../images/Guache-Watercolor-2017/Andrea.jpg'}`),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        caption: ""
},
{
        src: require(`${'../../images/Guache-Watercolor-2017/Dasha.jpg'}`),
        thumbnail: require(`${'../../images/Guache-Watercolor-2017/Dasha.jpg'}`),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        caption: ""
},
{
        src: require(`${'../../images/Guache-Watercolor-2017/Kyrany.jpg'}`),
        thumbnail: require(`${'../../images/Guache-Watercolor-2017/Kyrany.jpg'}`),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        caption: ""
},
{
        src: require(`${'../../images/Guache-Watercolor-2017/Laura.jpg'}`),
        thumbnail: require(`${'../../images/Guache-Watercolor-2017/Laura.jpg'}`),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        caption: ""
},
{
        src: require(`${'../../images/Guache-Watercolor-2017/Margaret.jpg'}`),
        thumbnail: require(`${'../../images/Guache-Watercolor-2017/Margaret.jpg'}`),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        caption: ""
},
{
        src: require(`${'../../images/Guache-Watercolor-2017/Monica.jpg'}`),
        thumbnail: require(`${'../../images/Guache-Watercolor-2017/Monica.jpg'}`),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        caption: ""
},
{
        src: require(`${'../../images/Guache-Watercolor-2017/Prom_Ellen.jpg'}`),
        thumbnail: require(`${'../../images/Guache-Watercolor-2017/Prom_Ellen.jpg'}`),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        caption: ""
},
{
        src: require(`${'../../images/Guache-Watercolor-2017/Prom_Taylor.jpg'}`),
        thumbnail: require(`${'../../images/Guache-Watercolor-2017/Prom_Taylor.jpg'}`),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        caption: ""
},
{
        src: require(`${'../../images/Guache-Watercolor-2017/Taylor.jpg'}`),
        thumbnail: require(`${'../../images/Guache-Watercolor-2017/Taylor.jpg'}`),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        caption: ""
}
];

export default class ArtPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <nav style={{ width: '192px',
                      padding: 0,
                      zIndex: 9000,
                      position: 'fixed',
                      top: '96px'}}>
          <ul>
            <li style={{height: '40px', fontSize: '18px'}}>
              Guache/Watercolor Portraits, 2016 - 2017
            </li>
            <li style={{height: '40px', fontSize: '18px'}}>
              Oil Portraits, 2016
            </li>
            <li style={{height: '40px', fontSize: '18px'}}>
              Various Works, 2011 - 2015
            </li>
          </ul>
        </nav>
        <div style={{maxWidth: '530px', margin: '0 auto'}}>
        <Gallery images={IMAGES}/>
        </div>
      </div>
    );
  }
}
