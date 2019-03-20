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
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  handleOnInputChange(e) {
    this.setState({
      query: e.target.value
    })
  };

  savePlace(props) {
    let id;
    if (props.currentPlace) {
      let newObj = {...props.currentPlace, saved: true};
      props.updateCurrentPlace(newObj);
      id = props.currentPlace.place_id;
    } else {
      id = props.obj.place_id;
    }
    axios.post('/api/places', {
      place_id: id
    })
    .then(response => console.log('place id saved'))
    .catch(err => console.error(err));

    let newResults = [];

    props.data.forEach(obj => {
      if (obj.place_id === id) {
        newResults.push({...obj, saved: true});
      } else {
        newResults.push({...obj});
      }
    })
    props.updateResults(newResults);
  }

  handleEnterPress(e) {
    if (e.key === 'Enter') {
      this.handleOnClick();
    }
  }

  async handleOnClick() {

    const asyncTextSearch = () => {
      return new Promise(resolve => {
        let service;
        let request = {
          location: this.props.currentCoords,
          radius: '500',
          query: this.state.query
        };
        service = new window.google.maps.places.PlacesService(window.HomeMap);
        service.textSearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            resolve(results);
          }
        })
      })
    }

    let results = await asyncTextSearch();
    for (let obj of results) {
      let isSaved = await axios.get(`/api/places/${obj.place_id}`);
      if (isSaved.data !== '') {
        obj.saved = true;
      }
    }
    this.props.updateResults(results);
    this.props.updateCurrentPlace({});
    window.HomeMap.setZoom(13);
    window.HomeMap.setCenter(this.props.currentCoords);

  }

  handleListEntryClick(props) {
    let request = {
      placeId: props.obj.place_id,
    };
    let service = new window.google.maps.places.PlacesService(window.HomeMap);
    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        if (props.obj.saved) {
          place.saved = true;
        }
        console.log(place);
        props.updateCurrentPlace(place);
        window.HomeMap.setCenter(place.geometry.location)
        window.HomeMap.setZoom(15);
      }
    })
  }

  render() {
    return (
      <div className="Home container mt-4">
        <h1>Home</h1>
        <div className="row">
          <div className="homeWrapper1 col-sm">
            <div className="input-group">
              <input onKeyPress={this.handleEnterPress} onChange={this.handleOnInputChange}></input>
              <button className="btn btn-primary input-group-append" onClick={this.handleOnClick}>
                <Link style={{textDecoration: 'none', color: 'white'}} to='/home/results'>
                  Search
                </Link>
              </button>
            </div>
              <Route path='/home/results' render={() => <PlacesListContainer saveOrDelete={this.savePlace} path='/home/result' request='Save' handleOnClick={this.handleListEntryClick}/>} />
              <Route path='/home/result=:id' render={ () => <EntryDetailContainer saveOrDelete={this.savePlace} request='Save' path='/home/results' />} />
          </div>
          <GoogleMapContainer markers={this.props.currentPlace.name ? [this.props.currentPlace] : this.props.data} id="Test"/>
        </div>
      </div>
    )
  }
}

export default Home;