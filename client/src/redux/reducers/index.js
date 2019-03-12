const initialState = {
  currentCoords: {
    lat: 0,
    lng: 0
  },
  data: [],
  currentPlace: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COORDS':
      return {...state, currentCoords: { lat: action.payload.lat, lng: action.payload.lng }};
    case 'UPDATE_RESULTS':
      return {...state, data: action.payload};
    case 'UPDATE_PLACE':
      return {...state, currentPlace: action.payload};
    default:
      return state;
  }
}

export default rootReducer;