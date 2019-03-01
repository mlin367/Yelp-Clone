import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
import Saved from './components/Saved';
import About from './components/About';
import NavBar from './components/NavBar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const routing = (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/saved" component={Saved} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

render(routing, document.getElementById('app'));
