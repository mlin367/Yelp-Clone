import React from 'react';
import { Link } from 'react-router-dom';

const ListEntry = props => (
  <div className="ListEntry">
    <div className="d-flex justify-content-between">
      <h2>
        <Link onClick={() => props.handleOnClick(props)} to={`${props.path}=${props.id}`}>{props.obj.name}</Link>
      </h2>
      {props.obj.saved ? <span>Place Already Saved</span> : <button onClick={() => props.saveOrDelete(props)}>{`${props.request}`}</button>}
      
    </div>
    <img className="img-fluid mx-auto img-thumbnail" src={props.obj.photos ? props.obj.photos[0].getUrl({'maxWidth': 200, 'maxHeight': 200}) : null}></img>
    <ul className="list-group">
      <li><strong>Address: </strong>{props.obj.formatted_address}</li>
      <li><strong>Rating:</strong> {props.obj.rating}</li>
    </ul>
  </div>
);

export default ListEntry;