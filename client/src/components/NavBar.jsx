import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="Yelp navbar-brand">Yelp-Clone!</div>
    <div className="navBarWrapper">

      <Link onClick={() => {
        props.updateCurrentPlace({});
        window.HomeMap.setZoom(13);
        window.HomeMap.setCenter(props.currentCoords);
      }} to="/home/results" className="NavHome mx-3 nav-item">
        Home
      </Link>

      <Link onClick={() => {
        props.updateCurrentPlace({});
        window.HomeMap.setZoom(13);
        window.HomeMap.setCenter(props.currentCoords);
      }} to="/saved/results" className="NavSaved mx-3 nav-item">
        Saved
      </Link>
      
      <Link to="/about" className="NavAbout mx-3 nav-item">
        About
      </Link>
    </div>
  </nav>
);

export default NavBar;
