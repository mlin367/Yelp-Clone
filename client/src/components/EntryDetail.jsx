import React from 'react';
import { Link } from 'react-router-dom';

const EntryDetail = props => (
  <div className="EntryDetail">
    <h2>{props.currentPlace.name}</h2>
    <div className="pictureContainer">
      {props.currentPlace.photos ? props.currentPlace.photos.map((obj, i) => (
        <img src={obj.getUrl({'maxWidth': 100, 'maxHeight': 100})}></img>
      )) : null}
    </div>
    <ul>
      <li>Address: {props.currentPlace.formatted_address}</li>
      <li>Rating: {props.currentPlace.rating}</li>
      <li>Phone Number: {props.currentPlace.formatted_phone_number}</li>
      <li>Hours: <ol>
                  {props.currentPlace.opening_hours ? props.currentPlace.opening_hours.weekday_text.map(string => (
                    <li>{string}</li>
                  )) : <span>Not available</span>}
                </ol>
      </li>

    </ul>
    <h3 onClick={() => props.updateCurrentPlace({})}>
      <Link to='/home/results'>Back</Link>
    </h3>
  </div>
);

export default EntryDetail;