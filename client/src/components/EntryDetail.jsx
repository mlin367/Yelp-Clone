import React from 'react';
import { Link } from 'react-router-dom';

const EntryDetail = props => (
  <div className="EntryDetail">
    <h1>HELLO</h1>
    <h2>{props.currentPlace.name}</h2>
    <Link to='/home/results'>Back</Link>
  </div>
);

export default EntryDetail;