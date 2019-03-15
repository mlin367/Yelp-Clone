import React from 'react';
import { Link } from 'react-router-dom';

const ListEntry = props => {

  return (
    <div className="ListEntry">
      <h2>
        <Link onClick={() => props.handleOnClick(props)} to={`/home/result=${props.id}`}>{props.obj.name}</Link>
      </h2>
      <img className="img-fluid mx-auto img-thumbnail" src={props.obj.photos ? props.obj.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) : null}></img>
      <ul>
        <li>Address: {props.obj.formatted_address}</li>
        <li>Rating: {props.obj.rating}</li>
      </ul>
    </div>
  )
};

export default ListEntry;