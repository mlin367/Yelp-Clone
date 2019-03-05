import React from 'react';
import PlacesList from './PlacesList';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  handleOnInputChange(e) {
    this.setState({
      query: e.target.value
    })
  };

  handeOnClick() {

  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <input onChange={this.handleOnInputChange}></input>
        <button>Search</button>
        <PlacesList />
      </div>
    )
  }
}

export default Home;