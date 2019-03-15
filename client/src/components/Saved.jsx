import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PlacesList from './PlacesList';
import EntryDetailContainer from '../redux/containers/EntryDetailContainer';
import GoogleMapContainer from '../redux/containers/GoogleMapContainer';
import axios from 'axios';

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedData: []
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    axios.get('/api/places')
      .then(result => {
        let data = [];
        result.data.forEach(obj => {
          console.log(this.getDatafromID(obj.place_id))
        });
      })
      .catch(err => console.error(err));
  }

  getDatafromID(id) {
    // let request = {
    //   placeId: id,
    // };
    let service = new window.google.maps.places.PlacesService(window.HomeMap);
    service.getDetails({placeId: id}, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        return place;
      }
    })
  }

  render() {
    return (
      <div className="Saved container">
        <h1>Saved</h1>
        <div style={{minHeight: '80vh'}} className="row">
          <div className="savedWrapper1 col">
            <Redirect from='/saved' to='/saved/results' />
            <Route path='/saved/results' render={() => <PlacesList request='Delete' path='/saved/result' data={this.state.savedData} />} />
            <Route path='/saved/result=:id' render={ () => <EntryDetailContainer path='/saved/results'/>} />
          </div>
          <GoogleMapContainer markers={this.props.currentPlace.name ? [this.props.currentPlace] : this.state.savedData} id="savedMap"/>
        </div>
      </div>
    )
  }
}

export default Saved;