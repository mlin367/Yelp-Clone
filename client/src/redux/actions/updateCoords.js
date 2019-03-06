const updateCoords = (lat, lng) => {
  return {
    type: 'UPDATE_COORDS',
    payload: { lat, lng }
  };
};

export default updateCoords;