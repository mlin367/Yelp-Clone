import React from 'react';
import HomeContainer from '../redux/containers/HomeContainer';
import Saved from './Saved';
import About from './About';
import NavBarContainer from '../redux/containers/NavBarContainer';
import NotFound from './NotFound';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import '../../scss/custom.scss'

const App = props => (
  <Router>
    <div className="App">
      <NavBarContainer />
      <Switch>
        <Route exact path="/" render={() => <Redirect to='/home'/>} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/saved" component={Saved} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
