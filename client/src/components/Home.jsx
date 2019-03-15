import React from 'react';
import PlacesListContainer from '../redux/containers/PlacesListContainer';
import GoogleMapContainer from '../redux/containers/GoogleMapContainer';
import EntryDetailContainer from '../redux/containers/EntryDetailContainer';
import { Route, Link } from 'react-router-dom';
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

  savePlace(place_id) {
    axios.post('/api/places', {
      place_id
    })
    .then(response => console.log('id saved'))
    .catch(err => console.error(err));
  }

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
        this.props.updateCurrentPlace({});
        window.HomeMap.setZoom(13);
        window.HomeMap.setCenter(this.props.currentCoords);
      }
    })
  }

  handleListEntryClick(props) {
    let request = {
      placeId: props.obj.place_id,
    };
    let service = new window.google.maps.places.PlacesService(window.HomeMap);
    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
        props.updateCurrentPlace(place);
        window.HomeMap.setCenter(place.geometry.location)
        window.HomeMap.setZoom(15);
      }
    })
  }

  render() {
    return (
      <div className="Home container">
        <h1>Home</h1>
        <div style={{minHeight: '80vh'}} className="row">
          <div className="homeWrapper1 col">
            <input onChange={this.handleOnInputChange}></input>
            <button onClick={this.handleOnClick}>
              <Link to='/home/results'>
                Search
              </Link>
            </button>
              <Route path='/home/results' render={() => <PlacesListContainer savePlace={this.savePlace} path='/home/result' request='Save' handleOnClick={this.handleListEntryClick}/>} />
              <Route path='/home/result=:id' render={ () => <EntryDetailContainer savePlace={this.savePlace} request='Save' path='/home/results' />} />
          </div>
          <GoogleMapContainer markers={this.props.currentPlace.name ? [this.props.currentPlace] : this.props.data} id="Test"/>
        </div>
      </div>
    )
  }
}

export default Home;