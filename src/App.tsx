import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { LandingPage, AboutPage, MusicPage, ProjectsPage } from './containers';
import { ThemeManager } from './functions/themeManager';
import { containers, light_mode, dark_mode } from './styles';
import { Toggle } from './components/Toggle';


function App() {
  const themeProp = ThemeManager();
  const themeMode = themeProp.theme ? dark_mode : light_mode; 

  return (
    <ThemeProvider theme={themeMode} >
      <containers.SiteContainer>
      <Toggle {...themeProp} />
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/kurzgesagt' component={AboutPage} />
          <Route path='/muusika' component={MusicPage} />
          <Route path='/projects' component={ProjectsPage} />
        </Switch>
      </Router>
      </containers.SiteContainer>
    </ThemeProvider>
    );
}

export default App;

