import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => (
  <div className="NavBar">
    <div className="Yelp">Yelp-Clone!</div>
    <div className="NavWrapper1">
      <Link to="/" className="NavHome">
        Home
      </Link>
      <Link to="/saved" className="NavSaved">
        Saved
      </Link>
      <Link to="/about" className="NavAbout">
        About
      </Link>
    </div>
  </div>
);

export default NavBar;
