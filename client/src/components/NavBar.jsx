import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => (
  <nav className="navbar py-2 navbar-expand-lg navbar-light bg-light">
    <h1 className="Yelp navbar-brand">Yelp-Clone!</h1>
    <div className="navBarWrapper">

      <Link className="nav-link" onClick={() => {
        props.updateCurrentPlace({});
        window.HomeMap.setZoom(13);
        window.HomeMap.setCenter(props.currentCoords);
      }} to="/home/results" className="NavHome mx-3 nav-item">
        Home
      </Link>

      <Link className="nav-link" onClick={() => {
        props.updateCurrentPlace({});
        window.HomeMap.setZoom(13);
        window.HomeMap.setCenter(props.currentCoords);
      }} to="/saved/results" className="NavSaved mx-3 nav-item">
        Saved
      </Link>
      
      <Link className="nav-link" to="/about" className="NavAbout mx-3 nav-item">
        About
      </Link>
    </div>
  </nav>
);

export default NavBar;
