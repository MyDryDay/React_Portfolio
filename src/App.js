import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/index';

import About from './pages/about';
import Projects from './pages/projects';

import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
