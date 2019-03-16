import React from 'react';
import ListEntryContainer from '../redux/containers/ListEntryContainer';

const PlacesList = props => (
  <div
    style={{ overflowY: 'scroll', maxHeight: '80vh' }}
    className="PlacesList"
  >
    {props.data.map((obj, i) => (
      <ListEntryContainer
        savePlace={props.saveOrDelete}
        path={props.path}
        request={props.request}
        handleOnClick={props.handleOnClick}
        obj={obj}
        key={Math.random() * i}
        id={i}
      />
    ))}
  </div>
);

export default PlacesList;
