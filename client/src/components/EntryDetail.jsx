import React from 'react';
import { Link } from 'react-router-dom';

const EntryDetail = props => (
  <div style={{overflowY: 'scroll', maxHeight: '80vh'}} className="EntryDetail">
    <h2>{props.currentPlace.name}</h2>
    <h3 onClick={() => {
      props.updateCurrentPlace({});
      window.HomeMap.setZoom(13);
      window.HomeMap.setCenter(props.currentCoords);
      }}>
      <Link to='/home/results'>Back</Link>
    </h3>
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
      <li>Reviews: <ul>
                    {props.currentPlace.reviews ? props.currentPlace.reviews.map((obj, i) => (
                      <li>
                        Author: {obj.author_name}
                        <br />
                        Rating: {obj.rating}
                        <br />
                        Review: {obj.text}
                        <br />
                        Submitted: {obj.relative_time_description}
                      </li>
                    )) : null}
                  </ul>

      </li>
    </ul>
  </div>
);

export default EntryDetail;