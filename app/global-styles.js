import { injectGlobal } from "styled-components";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #fafafa;
  }

  body {
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  a:link {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }

  p,
  label {
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
    font-size: 1em;
    @media (max-width: 767px) {
        font-size: 0.8em;
    }
  }
  h3{
    margin-top: 0px;
  }
  ul {
    padding-left: 0px
  }
`;
