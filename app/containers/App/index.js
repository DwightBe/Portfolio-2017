/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ArtPage from 'containers/ArtPage/Loadable';
import MusicPage from 'containers/MusicPage/Loadable';
import GamePage from 'containers/GamePage/Loadable';
import ResumePage from 'containers/ResumePage/Loadable';
import ProjectPage from 'containers/ProjectPage/Loadable';
import Header from 'components/Header';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div style={{ padding: '20px 32px 0px' }}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/art" component={ArtPage} />
        <Route exact path="/music" component={MusicPage} />
        <Route exact path="/game" component={GamePage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
