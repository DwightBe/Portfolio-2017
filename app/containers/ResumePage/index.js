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

 /*
   Dwight Benignus
   Visual Artist and So ware Developer dwightbenignus@gmail.com
   956-202-2428
   Portfolio: dwightbenignus.tumblr.com
   Summary of Skills
   Professional Experience (5 years): Freelance Illustration, Painting and Drawing,
   Front End Development with Javascript, HTML, CSS, React
   Advanced Skill (5+ years): Photoshop, Illustrator, Visual/Conceptual/Graphic Arts, Illustration, Pixel Art
   Professional Experience
   July 2016 - Present
   Created portrait paintings with traditional media shown at various galleries:
   Black Lagoon,  e Austin Series Vol. III, Part 2, Various Works, Guache on Paper Austin, Tx, July 2017
   Artbox.Project, Various Works, Digital, Oil on Canvas, Guache on Paper Basel, Switzerland, June 2017
   Georgetown Art Hop, “Ellen”, Oil on Canvas Georgetown, TX, September 2016
   January 2017 - Apr 2017 Frontend Developer, Macmillan Learning
   • Worked on a React/Redux application creating a directory structure to create resources for teachers and students
   January 2015 - July 2016 Frontend Developer, Concierge Auctions
   • Created applications and worked on the frontend of a website with React, Javascript, HTML and CSS
   May 2014 - September 2014 Contract Javascript Developer, Pearson North America, Inc
   • Developed for a web application to allow teachers to create test modules for students using Backbone.js, Sass, and .ejs templates, created models, views and CSS
   Sept 2012 - May 2014 GUI Developer, Tributary Systems, Inc
   • Created/maintained web-based so ware for data storage operations of disk arrays and tape libraries.
   Feb 2012 - July 2012 Reader/Scribe, Lonestar College Tomball, Tomball, TX, Assistive Technology Lab • Scribed,  led and took notes & proctored for students with disabilities
   2009 - 2012 Freelance Artist and Illustrator, various other jobs
   • Created illustrations for publications and bands including Radiation City and Mackintosh Braun • Various work in food service and as a census taker at the United States Census Bureau
   Education
   Bachelor of Arts, Arts and Technology, University of Texas at Dallas, GPA: 3.3, 2004-2008 Attended Oregon Institute of Technology, 2009-2011
   Awards
   Winner of the Mozilla & Goo Game Creator Challenge: Best Amateur Game Scene Javascript/WebGL/Goo Engine, January 2014
   */

import React from 'react';


export default class ResumePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{margin: '20px auto', textAlign: 'center'}}>
        <p>
        dwightbenignus@gmail.com
        </p>
      </div>
    );
  }
}
