import React from 'react';
import ListEntry from './ListEntry';

const PlacesList = props => (
  <div className="PlacesList">
    {props.data.map((obj, i) => (
      <ListEntry obj={obj} key={Math.random() * i}/>
    ))}
  </div>
)

export default PlacesList;