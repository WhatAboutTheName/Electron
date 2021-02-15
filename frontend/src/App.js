import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Main } from './components/main-template';
import { Settings } from './components/settings/settings';
import './App.scss';

function App() {

  const templates = {
    main: <Main />,
    settings: <Settings />
  }

  const templatesFillter = (props) => {
    let name = props.location.search.substr(1);
    let template = templates[name];
    if (template === null) {
      throw new Error('Template ' + name + ' is undefined');
    }
    return template;
  }

  return (
    <Router>
      <div>
        <Route path='/' component={templatesFillter} />
      </div>
    </Router>
  );
}

export default App;
