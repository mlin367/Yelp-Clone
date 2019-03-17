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
    this.deletePlace = this.deletePlace.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  handleListEntryOnClick(props) {
    props.updateCurrentPlace(props.obj.place);
    window.HomeMap.setCenter(props.obj.place.geometry.location)
    window.HomeMap.setZoom(15);
  }

  fetch() {
    const getDetailsAsync = (id) => {
      return new Promise(resolve => {
        if (id) {
          let request = {
            placeId: id,
          };
          let service = new window.google.maps.places.PlacesService(window.HomeMap);
          service.getDetails(request, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                resolve(place);
            }
          })
        } else {
          resolve();
        }
      })
    }

    const asyncFetch = async () => {
      let data = [];
      let results = await axios.get('/api/places');
      for (let obj of results.data) {
        let placeDetail = await getDetailsAsync(obj.place_id);
        if (placeDetail) {
          data.push(placeDetail);
        }
      }
      return data;
    }

    asyncFetch()
      .then(data => {
        this.setState({
          savedData: data
        })
      })

  }

  deletePlace(id) {
    axios.delete(`/api/places/${id}`)
      .then(response => {
        console.log('place deleted');
        this.fetch();
      })
  }

  render() {
    return (
      <div className="Saved container">
        <h1>Saved</h1>
        <div style={{minHeight: '80vh'}} className="row">
          <div className="savedWrapper1 col">
            <Route path='/saved/results' render={() => <PlacesList request='Delete' path='/saved/result' saveOrDelete={this.deletePlace} handleOnClick={this.handleListEntryOnClick} data={this.state.savedData} />} />
            <Route path='/saved/result=:id' render={ () => <EntryDetailContainer request='Delete' saveOrDelete={this.deletePlace} path='/saved/results'/>} />
          </div>
          <GoogleMapContainer markers={this.props.currentPlace.name ? [this.props.currentPlace] : this.state.savedData} id="savedMap"/>
        </div>
      </div>
    )
  }
}

export default Saved;