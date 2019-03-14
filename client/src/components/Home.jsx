import React from 'react';
import PlacesListContainer from '../redux/containers/PlacesListContainer';
import GoogleMapContainer from '../redux/containers/GoogleMapContainer';
import EntryDetailContainer from '../redux/containers/EntryDetailContainer';
import { Route, Link } from 'react-router-dom';
import '../../scss/custom.scss'
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.handleOnClick = this.handeOnClick.bind(this);
  }

  handleOnInputChange(e) {
    this.setState({
      query: e.target.value
    })
  };

  handeOnClick() {
    let service;
    let request = {
      location: this.props.currentCoords,
      radius: '500',
      query: this.state.query
    };
    service = new window.google.maps.places.PlacesService(window.HomeMap);
    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log(results)
        this.props.updateResults(results);
      }
    })
  }

  render() {
    return (
      <div className="Home container">
        <h1>Home</h1>
        <div className="row">
          <div className="homeWrapper1 col">
            <input onChange={this.handleOnInputChange}></input>
            <button onClick={this.handleOnClick}>
              <Link to='/home/results'>
                Search
              </Link>
            </button>
              <Route path='/home/results' component={PlacesListContainer} />
              <Route path='/home/result=:id' component={EntryDetailContainer} />
          </div>
          <GoogleMapContainer id="Test"/>
        </div>
      </div>
    )
  }
}

export default Home;