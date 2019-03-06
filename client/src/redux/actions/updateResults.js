const updateResults = data => {
  return {
    type: 'UPDATE_RESULTS',
    payload: data
  };
};

export default updateResults;