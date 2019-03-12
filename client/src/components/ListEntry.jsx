import React from 'react';

const ListEntry = props => {

  const handleOnClick = () => {
    let request = {
      placeId: props.obj.place_id,
    };
    let service = new window.google.maps.places.PlacesService(window.HomeMap);
    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
        props.updateCurrentPlace(place);
      }
    })
  }

  return (
    <div className="ListEntry">
      <h2 onClick={handleOnClick}>{props.obj.name}</h2>
      <img src={props.obj.photos ? props.obj.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) : null}></img>
      <ul>
        <li>Address: {props.obj.formatted_address}</li>
        <li>Rating: {props.obj.rating}</li>
      </ul>
    </div>
  )
};

export default ListEntry;