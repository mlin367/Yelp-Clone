import React from 'react';
import GoogleMapSaved from './GoogleMapSaved';

const Saved = props => (
  <div>
    <h1>Saved</h1>
    <GoogleMapSaved saved={{lat: 41.0082, lng: 28.9784, title: 'Istanbul'}} id="savedMap" />
  </div>
)

export default Saved;