import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/index';

import About from './pages/about';

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
      </Switch>
      </div>
    </Router>
  );
}

export default App;
