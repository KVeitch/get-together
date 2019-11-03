const youReturnFlights = (state = [], action) => {
  switch (action.type) {
    case 'SET_YOU_RETURN_FLIGHTS':
      return action.flights;
    default:
      return state;
  }
};

export default youReturnFlights;