import React from 'react';
import ListEntryContainer from '../redux/containers/ListEntryContainer';
import EntryDetail from './EntryDetail';
import { Route } from 'react-router-dom';

const PlacesList = props => (
  <div className="PlacesList">
    {props.data.map((obj, i) => (
      <ListEntryContainer obj={obj} key={Math.random() * i}/>
    ))}
    <Route path='/searchResult:id' component={EntryDetail} />
  </div>
)

export default PlacesList;