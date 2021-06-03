import React, { useState } from 'react';
import { light_mode, dark_mode } from './styles/colour';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { LandingPage, AboutPage, MusicPage, ProjectsPage } from './containers';
import { ThemeProvider } from 'styled-components';
import { Toggle } from './components/Toggle';
import { containers } from './styles';

function App() {
  const [theme, setTheme] = useState(true);
  const themeMode = theme ? light_mode : dark_mode; 
  const themeProps = {
    theme: theme,
    setTheme: setTheme,
  }

  return (
    <ThemeProvider theme={themeMode}>
      <containers.SiteContainer>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/kurzgesagt' component={AboutPage} />
            <Route path='/muusika' component={MusicPage} />
            <Route path='/projects' component={ProjectsPage} />
          </Switch>
        </Router>
        
        <Toggle {...themeProps} />
      </containers.SiteContainer>
    </ThemeProvider>
  );
}

export default App;
