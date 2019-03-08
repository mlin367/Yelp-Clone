import React from 'react';

const ListEntry = props => (
  <div className="ListEntry">
    <h2>{props.obj.name}</h2>
    <ul>
      <li>{props.obj.formatted_address}</li>
      <li>{props.obj.rating}</li>
    </ul>
  </div>
);

export default ListEntry;