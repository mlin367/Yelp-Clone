import React from 'react';

const ListEntry = props => (
  <div className="ListEntry">
    <h2>{props.obj.name}</h2>
    <img src={props.obj.photos ? props.obj.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) : null}></img>
    <ul>
      <li>{props.obj.formatted_address}</li>
      <li>{props.obj.rating}</li>
    </ul>
  </div>
);

export default ListEntry;