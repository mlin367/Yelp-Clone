const updateCurrentPlace = placeObject => {
  return {
    type: 'UPDATE_PLACE',
    payload: placeObject
  };
};

export default updateCurrentPlace;