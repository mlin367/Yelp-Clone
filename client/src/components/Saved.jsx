import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PlacesList from './PlacesList';
import EntryDetailContainer from '../redux/containers/EntryDetailContainer';
import GoogleMapContainer from '../redux/containers/GoogleMapContainer';

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedData: []
    };
  }

  render() {
    return (
      <div className="Saved container">
        <h1>Saved</h1>
        <div style={{minHeight: '80vh'}} className="row">
          <div className="savedWrapper1 col">
            <Redirect from='/saved' to='/saved/results' />
            <Route path='/saved/results' render={() => <PlacesList data={this.state.savedData} />} />
            <Route path='/saved/result=:id' component={EntryDetailContainer} />
          </div>
          <GoogleMapContainer markers={this.props.currentPlace.name ? [this.props.currentPlace] : this.state.savedData} id="savedMap"/>
        </div>
      </div>
    )
  }
}

export default Saved;