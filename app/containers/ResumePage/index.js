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


export default class ResumePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ margin: '20px auto', textAlign: 'left', maxWidth: '800px'}}>
        <p>
          <h2> Contact</h2>
          dwightbenignus@gmail.com
        </p>
        <p>
          <h3> Skills </h3>
          • Javascript, HTML, CSS, React, Redux, PHP, underscore.js, lodash, SQL <br/>
          • Photoshop, Illustrator, Visual/Conceptual/Graphic Arts, Pixel Art  <br/>
          • Illustration, Painting and Drawing  <br/>
        </p>
        <p>
          <h3> Professional Experience </h3>
          <b>July 2016 - Present</b> <br/>
          Created portrait paintings with traditional media shown at various galleries: <br/>
          • Black Lagoon, The Austin Series Vol. III, Part 2, Various Works, Guache on Paper Austin, Tx, July 2017 <br/>
          • Artbox.Project, Various Works, Digital, Oil on Canvas, Guache on Paper Basel, Switzerland, June 2017 <br/>
          • Georgetown Art Hop, “Ellen”, Oil on Canvas Georgetown, TX, September 2016 <br/>
        </p>
        <p>
          <b>January 2017 - Apr 2017</b> Frontend Developer, Macmillan Learning  <br/>
          • Worked on a React/Redux application with underscore.js creating a directory structure to create resources for teachers and students  <br/>
        </p>
        <p>
          <b>January 2015 - July 2016</b> Frontend Developer, Concierge Auctions  <br/>
          • Created applications and worked on the frontend of a website with React, Javascript, HTML and CSS  <br/>
        </p>
        <p>
          <b>May 2014 - September 2014</b> Contract Javascript Developer, Pearson North America, Inc  <br/>
          • Developed for a web application to allow teachers to create test modules for students using Backbone.js, Sass, and .ejs templates, created models, views and CSS  <br/>
        </p>
        <p>
          <b>Sept 2012 - May 2014</b> GUI Developer, Tributary Systems, Inc  <br/>
          • Created/maintained web-based so ware for data storage operations of disk arrays and tape libraries. <br/>
        </p>
        <p>
          <b>Feb 2012 - July 2012</b> Reader/Scribe, Lonestar College Tomball, Tomball, TX, Assistive Technology Lab <br/>
          • Scribed,  led and took notes & proctored for students with disabilities <br />
        <p>
        </p>
          <b>2009 - 2012</b> Freelance Artist and Illustrator, various other jobs
          • Created illustrations for publications and bands including Radiation City and Mackintosh Braun • Various work in food service and as a census taker at the United States Census Bureau
          Education
        </p>
        <p>
          <h3>Education</h3>
        </p>
        <p>
          Bachelor of Arts, Arts and Technology, University of Texas at Dallas, 2004-2008 Attended Oregon Institute of Technology, 2009-2011
          Awards
        </p>
      </div>
    );
  }
}
