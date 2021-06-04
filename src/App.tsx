import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { LandingPage, AboutPage, MusicPage, ProjectsPage } from './containers';


function App() {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/kurzgesagt' component={AboutPage} />
        <Route path='/muusika' component={MusicPage} />
        <Route path='/projects' component={ProjectsPage} />
      </Switch>
    </Router>
  );
}

export default App;

