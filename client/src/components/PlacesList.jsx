import React from 'react';
import ListEntryContainer from '../redux/containers/ListEntryContainer';
import EntryDetailContainer from '../redux/containers/EntryDetailContainer';
import { Route } from 'react-router-dom';

const PlacesList = props => (
  <div className="PlacesList">
    {props.data.map((obj, i) => (
      <ListEntryContainer obj={obj} key={Math.random() * i} id={i}/>
    ))}
    {/* <Route path='/home/result=:id' component={EntryDetailContainer} /> */}
  </div>
)

export default PlacesList;