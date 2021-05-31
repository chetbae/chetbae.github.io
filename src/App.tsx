import React from 'react';
import { ChangeDarkMode } from './functions/ChangeDarkMode';
import { light_mode, dark_mode } from './styles/colour';
import Toggler from './components/Toggler';


function App() {
  const [theme, themeToggler] = ChangeDarkMode();
  const themeMode = theme === 'light' ? light_mode : dark_mode;

  return (
    <div className="App">
      <h1>
        Hello,<br/>
        I'm Max.
      </h1>
      <Toggler /><br/>
    </div>
  );
}

export default App;
