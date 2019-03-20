import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarCollapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navBarCollapsed: !this.state.navBarCollapsed
    });
  }

  render() {
    return (
      <nav className="navbar py-2 navbar-expand-lg navbar-light bg-light">
        <h1 className="Yelp navbar-brand">Yelp-Clone!</h1>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={this.state.navBarCollapsed ? "navBarWrapper collapse navbar-collapse" : "naBarWrapper navbar-collapse"}
          id="navbarSupportedContent"
        >
          <div className="navbar-nav">
            <Link
              className="nav-link nav-item"
              onClick={() => {
                this.props.updateCurrentPlace({});
                window.HomeMap.setZoom(13);
                window.HomeMap.setCenter(this.props.currentCoords);
              }}
              to="/home/results"
              className="NavHome mx-3 nav-item"
            >
              Home
            </Link>

            <Link
              className="nav-link"
              onClick={() => {
                this.props.updateCurrentPlace({});
                window.HomeMap.setZoom(13);
                window.HomeMap.setCenter(this.props.currentCoords);
              }}
              to="/saved/results"
              className="NavSaved mx-3 nav-item"
            >
              Saved
            </Link>

            <Link
              className="nav-link"
              to="/about"
              className="NavAbout mx-3 nav-item"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
