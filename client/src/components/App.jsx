import React from 'react';
import HomeContainer from '../redux/containers/HomeContainer';
import Saved from './Saved';
import About from './About';
import NavBar from './NavBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const App = props => (
  <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/saved" component={Saved} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
);

export default App;
