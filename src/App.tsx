import React, { useState } from 'react';
import { light_mode, dark_mode } from './styles/colour';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { LandingPage, AboutPage } from './containers';
import { ThemeProvider } from 'styled-components';
import { Toggle } from './components/Toggle';
import { containers } from './styles';

const togglePosition = {
  right: '15%'
};

function App() {
  const [theme, setTheme] = useState(false);
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
            <Route path='/about' component={AboutPage} />
          </Switch>
        </Router>
        
        <Toggle {...themeProps} />
      </containers.SiteContainer>
    </ThemeProvider>
  );
}

export default App;
