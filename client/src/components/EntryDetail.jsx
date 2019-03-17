import React from 'react';
import { Link } from 'react-router-dom';

const EntryDetail = props => (
  <div style={{overflowY: 'scroll', maxHeight: '80vh'}} className="EntryDetail">
    <div className="d-flex justify-content-between">
      <h2>{props.currentPlace.name}</h2>
      <button onClick={() => props.saveOrDelete(props.currentPlace.place_id)}>{`${props.request}`}</button>
    </div>
    <h3 onClick={() => {
      props.updateCurrentPlace({});
      window.HomeMap.setZoom(13);
      window.HomeMap.setCenter(props.currentCoords);
      }}>
      <Link to={`${props.path}`}>Back</Link>
    </h3>
    <div className="pictureContainer container-fluid">
      {props.currentPlace.photos ? props.currentPlace.photos.map((obj, i) => (
        <img key={Math.random()*i} className="img-fluid mx-2 img-thumbnail" src={obj.getUrl({'maxWidth': 100, 'maxHeight': 100})}></img>
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
                      <li key={Math.random()*i}>
                        Author: {obj.author_name}
                        <br />
                        Rating: {obj.rating}
                        <br />
                        Review: <p>{obj.text}</p>
                        Submitted: {obj.relative_time_description}
                        <br /><br />
                      </li>
                    )) : null}
                  </ul>

      </li>
    </ul>
  </div>
);

export default EntryDetail;