import React from 'react';
import Home from './Home';
import Saved from './Saved';
import About from './About';
import NavBar from './NavBar';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const App = props => (
  <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/saved" component={Saved} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default App;
