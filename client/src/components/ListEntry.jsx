import React from 'react';
import { Link } from 'react-router-dom';

const ListEntry = props => (
  <div className="ListEntry">
    <div className="d-flex justify-content-between">
      <h2>
        <Link onClick={() => props.handleOnClick(props)} to={`${props.path}=${props.id}`}>{props.obj.name}</Link>
      </h2>
      <button onClick={() => props.savePlace(props.obj.place_id)}>{`${props.request}`}</button>
    </div>
    <img className="img-fluid mx-auto img-thumbnail" src={props.obj.photos ? props.obj.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) : null}></img>
    <ul>
      <li>Address: {props.obj.formatted_address}</li>
      <li>Rating: {props.obj.rating}</li>
    </ul>
  </div>
);

export default ListEntry;