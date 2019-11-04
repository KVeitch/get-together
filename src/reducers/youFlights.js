const youFlights = (state = [], action) => {
  switch (action.type) {
    case 'SET_YOU_FLIGHTS':
      return action.flights;
    default:
      return state;
  }
};

export default youFlights;
