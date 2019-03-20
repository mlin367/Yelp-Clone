import React from 'react';
import { Link } from 'react-router-dom';

const EntryDetail = props => (
  <div className="EntryDetail">
    <div className="d-flex justify-content-between">
      <h2>{props.currentPlace.name}</h2>
      {props.currentPlace.saved ? <span>Place Already Saved</span> : <button onClick={() => props.saveOrDelete(props)}>{`${props.request}`}</button>}
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
        <img key={Math.random()*i} className="img-fluid mx-2 img-thumbnail" src={obj.getUrl({'maxWidth': 125, 'maxHeight': 125})}></img>
      )) : null}
    </div>
    <ul className="list-group">
      <li className="list-group-item"><strong>Address:</strong> {props.currentPlace.formatted_address}</li>
      <li className="list-group-item"><strong>Rating:</strong> {props.currentPlace.rating}</li>
      <li className="list-group-item"><strong>Phone Number:</strong> {props.currentPlace.formatted_phone_number}</li>
      <li className="list-group-item"><strong>Hours:</strong> <ol>
                  {props.currentPlace.opening_hours ? props.currentPlace.opening_hours.weekday_text.map(string => (
                    <li>{string}</li>
                  )) : <span>Not available</span>}
                </ol>
      </li>
      <li className="list-group-item"><strong>Reviews:</strong> <ul className="list-group list-group-flush">
                    {props.currentPlace.reviews ? props.currentPlace.reviews.map((obj, i) => (
                      <li className="list-group-item" key={Math.random()*i}>
                        Author: {obj.author_name}
                        <br />
                        Rating: {obj.rating}
                        <br />
                        Review: <p>{obj.text}</p>
                        Submitted: <em>{obj.relative_time_description}</em>
                        <br /><br />
                      </li>
                    )) : null}
                  </ul>

      </li>
    </ul>
  </div>
);

export default EntryDetail;