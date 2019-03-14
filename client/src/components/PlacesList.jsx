import React from 'react';
import ListEntryContainer from '../redux/containers/ListEntryContainer';

const PlacesList = props => (
  <div className="PlacesList">
    {props.data.map((obj, i) => (
      <ListEntryContainer obj={obj} key={Math.random() * i} id={i}/>
    ))}
  </div>
)

export default PlacesList;